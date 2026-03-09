export default class Event {
  constructor({ id = null, title, description, date, location, capacity, availableSeats = null }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.location = location;
    this.capacity = capacity;
    this.availableSeats = availableSeats ?? capacity; 
  }

  validate() {
    const today = new Date().toISOString().split('T')[0];
    if (!this.title) return { valid: false, message: "Title is required" };
    if (!this.location) return { valid: false, message: "Location is required" };
    if (this.capacity <= 0) return { valid: false, message: "Capacity must be positive" };
    if (this.date < today) return { valid: false, message: "Date cannot be in the past" };
    return { valid: true };
  }

  reduceSeat() {
    if (this.availableSeats > 0) {
      this.availableSeats--;
      return true;
    }
    return false;
  }
}