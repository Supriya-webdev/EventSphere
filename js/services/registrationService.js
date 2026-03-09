const REG_URL = "http://localhost:3000/registrations";

export const getRegistrations = async () => {
  try {
    const res = await fetch(REG_URL);
    return await res.json();
  } catch (error) {
    console.error("Error fetching registrations:", error);
    return [];
  }
};

export const addRegistration = async (registration) => {
  try {
    const res = await fetch(REG_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registration),
    });
    return await res.json();
  } catch (error) {
    console.error("Error adding registration:", error);
  }
};