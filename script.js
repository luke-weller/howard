// Placeholder data for easy updates
const dogInfo = {
  name: "Howard",
  breed: "JackRussel",
  age: "5 years",
  feedingSchedule: "Three times a day: 8am, 1pm, 8pm",
  medicalInfo: "Dosn't do great with white fish",
  emergencyContact: "John Doe - (123) 456-7890",
};

// Populate the HTML with data
window.onload = () => {
  document.getElementById("dog-name").textContent = dogInfo.name;
  document.getElementById(
    "dog-breed"
  ).innerHTML = `<strong>Breed:</strong> ${dogInfo.breed}`;
  document.getElementById(
    "dog-age"
  ).innerHTML = `<strong>Age:</strong> ${dogInfo.age}`;
  document.getElementById(
    "feeding-schedule"
  ).innerHTML = `<strong>Feeding Schedule:</strong> ${dogInfo.feedingSchedule}`;
  document.getElementById(
    "medical-info"
  ).innerHTML = `<strong>Medical Info:</strong> ${dogInfo.medicalInfo}`;
  document.getElementById(
    "emergency-contact"
  ).innerHTML = `<strong>Emergency Contact:</strong> ${dogInfo.emergencyContact}`;
};
