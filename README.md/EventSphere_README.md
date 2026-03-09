# EventSphere – Event Management System

## Project Overview
EventSphere is a frontend Event Management Application built using HTML5, CSS3, and JavaScript (ES6+).  
It allows admins to manage events and users to view and register for events.  

The project follows a modular architecture with ES6 modules, classes, async/await, and form validations.  
It uses JSON Server as a fake REST API backend.

---

## Features

### Admin Module
- Add new events (Title, Description, Date, Location, Capacity)
- Edit existing events
- Delete events
- View all events
- Form validation:
  - Title required
  - Location required
  - Capacity must be positive
  - Date cannot be in the past

### User Module
- View available events on home page
- View event details
- Register for an event
- Form validation:
  - Name required
  - Valid email format
  - Phone must be 10 digits
  - Prevent registration if no seats available
- Seats automatically decrease after registration
- Confirmation message after successful registration

---

## Technical Implementation
- JavaScript Classes: Event & Registration
- ES6 Features: Arrow functions, template literals, destructuring, spread operator, default parameters, async/await, import/export modules
- Async/Await with Fetch API and try/catch error handling
- Modular Architecture: models, services, controllers, utils
- JSON Server backend with `events` and `registrations` collections
- CSS3 Styling: All pages use external CSS with modern card layout, shadows, and consistent button colors
- Responsive Design: Works on desktop and mobile devices
- Semantic HTML: Proper use of headings, labels, forms, and containers

---

## Folder Structure
event-management/
│
├── index.html
├── add-event.html
├── register.html
├── db.json
├── css/
│ └── style.css
├── js/
│ ├── main.js
│ ├── addEvent.js
│ ├── register.js
│ ├── models/
│ │ ├── Event.js
│ │ └── Registration.js
│ ├── services/
│ │ ├── eventService.js
│ │ └── registrationService.js
│ ├── controllers/
│ │ └── eventController.js
│ └── utils/
│ validation.js
└── EventSphere_README.md


---

## How to Run

1. Install JSON Server (if not already installed):

```bash
npm install -g json-server

2. Run JSON Server:

json-server --watch db.json --port 3000

3. Open HTML pages in your browser:

- Home page: index.html → View events

- Admin page: add-event.html → Add/Edit/Delete events

- User registration: register.html → Register for events

---

## Screenshots

### Home Page
![Home Page](screenshots\Screenshot_9-3-2026_01448_127.0.0.1.jpeg)

### Admin Page
![Admin Page](screenshots\Screenshot_9-3-2026_01543_127.0.0.1.jpeg)

### Registration Page
![Registration Page](screenshots\Screenshot_9-3-2026_01615_127.0.0.1.jpeg)