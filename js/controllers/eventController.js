import { getEvents } from "../services/eventService.js";

export const renderEvents = async (containerId) => {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; 

  const events = await getEvents();

  events.forEach(event => {
    const div = document.createElement("div");
    div.classList.add("event-card");

    div.innerHTML = `
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <p>Date: ${event.date}</p>
      <p>Location: ${event.location}</p>
      <p>Seats Available: ${event.availableSeats}</p>
      ${containerId === "eventList" ? `
        <button class="editBtn" data-id="${event.id}">Edit</button>
        <button class="deleteBtn" data-id="${event.id}">Delete</button>
      ` : ""}
    `;

    container.appendChild(div);
  });
};