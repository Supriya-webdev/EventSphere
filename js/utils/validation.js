export const isFutureDate = (dateStr) => {
  const today = new Date();
  const inputDate = new Date(dateStr);
  return inputDate >= today;
};

export const isPositiveNumber = (num) => {
  return num > 0;
};

export const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
};

export const isValidPhone = (phone) => {
  const pattern = /^\d{10}$/;
  return pattern.test(phone);
};