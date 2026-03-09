export default class Registration {
  constructor({ id = null, eventId, participantName, email, phone }) {
    this.id = id;
    this.eventId = eventId;
    this.participantName = participantName;
    this.email = email;
    this.phone = phone;
  }

  validate() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10}$/;

    if (!this.participantName) return { valid: false, message: "Name is required" };
    if (!emailPattern.test(this.email)) return { valid: false, message: "Invalid email" };
    if (!phonePattern.test(this.phone)) return { valid: false, message: "Phone must be 10 digits" };
    return { valid: true };
  }
}