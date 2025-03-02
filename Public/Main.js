document.addEventListener("DOMContentLoaded", function () {
  const yearSelect = document.getElementById("year");
  const monthSelect = document.getElementById("month");
  const dateSelect = document.getElementById("date");

  // Populate years from 1900 to the current year
  for (let year = 1900; year <= new Date().getFullYear(); year++) {
    let option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }

  // Populate months (1-12)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  monthNames.forEach((month, index) => {
    let option = document.createElement("option");
    option.value = index + 1; // Months are 1-based
    option.textContent = month;
    monthSelect.appendChild(option);
  });

  // Function to populate dates dynamically
  function updateDays() {
    dateSelect.innerHTML = ""; // Clear previous dates
    let selectedYear = parseInt(yearSelect.value);
    let selectedMonth = parseInt(monthSelect.value);
    let daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate(); // Get days in month

    for (let day = 1; day <= daysInMonth; day++) {
      let option = document.createElement("option");
      option.value = day;
      option.textContent = day;
      dateSelect.appendChild(option);
    }
  }

  // Initialize dates based on default values
  updateDays();

  // Update days when year or month changes
  yearSelect.addEventListener("change", updateDays);
  monthSelect.addEventListener("change", updateDays);
});
