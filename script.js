function getDob() {

    let DOB = document.querySelector(".inputDob").value;
    let currentDate = document.querySelector(".currentDateInput").value;

    let dobDate = new Date(DOB);
    let currDate = new Date(currentDate)

    let age = currDate.getFullYear() - dobDate.getFullYear();

    let monthDifference = currDate.getMonth() - dobDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && dobDate.getDate() < currDate.getDate())) {
        age--;
    }

    let display = document.querySelector(".displayAge");
    display.textContent = `Your age is ${age} years.`;


}
