import Registration from "./models/Registration.js";
import { getEvents, updateEvent } from "./services/eventService.js";
import { addRegistration } from "./services/registrationService.js";

const form = document.getElementById("registrationForm");
const eventSelect = document.getElementById("eventSelect");
const messageDiv = document.getElementById("message");

const loadEvents = async () => {
  const events = await getEvents();
  eventSelect.innerHTML = "";
  events.forEach(ev => {
    if (ev.availableSeats > 0) {
      const option = document.createElement("option");
      option.value = ev.id;
      option.textContent = `${ev.title} (${ev.availableSeats} seats available)`;
      eventSelect.appendChild(option);
    }
  });
};

document.addEventListener("DOMContentLoaded", loadEvents);

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const selectedEventId = parseInt(eventSelect.value);
  const events = await getEvents();
  const selectedEvent = events.find(ev => ev.id === selectedEventId);

  if (!selectedEvent || selectedEvent.availableSeats <= 0) {
    messageDiv.textContent = "No seats available for this event";
    messageDiv.style.color = "red";
    return;
  }

  const registrationData = {
    eventId: selectedEventId,
    participantName: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
  };

  const registration = new Registration(registrationData);
  const validation = registration.validate();
  if (!validation.valid) {
    messageDiv.textContent = validation.message;
    messageDiv.style.color = "red";
    return;
  }

  await addRegistration(registration);

  selectedEvent.availableSeats--;
  await updateEvent(selectedEvent.id, selectedEvent);

  messageDiv.textContent = "Registration successful!";
  messageDiv.style.color = "green";
  form.reset();
  loadEvents();
});