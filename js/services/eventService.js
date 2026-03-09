const API_URL = "http://localhost:3000/events";

export const getEvents = async () => {
  try {
    const res = await fetch(API_URL);
    return await res.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};

export const addEvent = async (event) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    return await res.json();
  } catch (error) {
    console.error("Error adding event:", error);
  }
};

export const updateEvent = async (id, event) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    return await res.json();
  } catch (error) {
    console.error("Error updating event:", error);
  }
};

export const deleteEvent = async (id) => {
  try {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    return res.ok;
  } catch (error) {
    console.error("Error deleting event:", error);
  }
};