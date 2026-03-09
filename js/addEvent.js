import Event from "./models/Event.js";
import { getEvents, addEvent, updateEvent, deleteEvent } from "./services/eventService.js";
import { renderEvents } from "./controllers/eventController.js";

const form = document.getElementById("eventForm");
const messageDiv = document.getElementById("message");
const eventListDiv = document.getElementById("eventList");

let editId = null;

renderEvents("eventList");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const eventData = {
    title: document.getElementById("title").value,
    description: document.getElementById("description").value,
    date: document.getElementById("date").value,
    location: document.getElementById("location").value,
    capacity: parseInt(document.getElementById("capacity").value),
  };

  const event = new Event(editId ? { id: editId, ...eventData } : eventData);
  const validation = event.validate();

  if (!validation.valid) {
    messageDiv.textContent = validation.message;
    messageDiv.style.color = "red";
    return;
  }

  if (editId) {
    await updateEvent(editId, event);
    messageDiv.textContent = "Event updated successfully!";
    editId = null;
  } else {
    await addEvent(event);
    messageDiv.textContent = "Event added successfully!";
  }

  form.reset();
  messageDiv.style.color = "green";
  renderEvents("eventList");
});

eventListDiv.addEventListener("click", async (e) => {
  if (e.target.classList.contains("editBtn")) {
    const id = e.target.dataset.id;
    const events = await getEvents();
    const evt = events.find(ev => ev.id == id);
    document.getElementById("title").value = evt.title;
    document.getElementById("description").value = evt.description;
    document.getElementById("date").value = evt.date;
    document.getElementById("location").value = evt.location;
    document.getElementById("capacity").value = evt.capacity;
    editId = id;
  }

  if (e.target.classList.contains("deleteBtn")) {
    const id = e.target.dataset.id;
    await deleteEvent(id);
    messageDiv.textContent = "Event deleted successfully!";
    messageDiv.style.color = "green";
    renderEvents("eventList");
  }
});