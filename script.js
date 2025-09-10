// Countdown Timer for Tech Fest (15 Oct 2025)
const eventDate = new Date("Oct 15, 2025 10:00:00").getTime();
const timer = document.getElementById("timer");

setInterval(() => {
  let now = new Date().getTime();
  let distance = eventDate - now;

  if (distance < 0) {
    timer.innerText = "🎉 Event Started!";
    return;
  }

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Registration Form
document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let event = document.getElementById("event").value;

  document.getElementById("confirmation").innerText =
    `✅ Thank you ${name}! You have successfully registered for ${event}.`;
  alert(`🎉 Registration Successful!\n\nName: ${name}\nEvent: ${event}`);
});
