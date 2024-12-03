document.addEventListener("DOMContentLoaded", () => {
    const appointmentsKey = "appointments";

    // Add Appointment logic
    const form = document.getElementById("appointmentForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const description = document.getElementById("description").value;
            const appointments = JSON.parse(localStorage.getItem(appointmentsKey)) || [];
            appointments.push({ name, date, time, description });
            localStorage.setItem(appointmentsKey, JSON.stringify(appointments));
            alert("Appointment added!");
            form.reset();
        });
    }

    // View Appointments logic
    const appointmentsList = document.getElementById("appointmentsList");
    if (appointmentsList) {
        const appointments = JSON.parse(localStorage.getItem(appointmentsKey)) || [];
        appointments.forEach((appointment, index) => {
            const li = document.createElement("li");
            li.textContent = `${appointment.name} - ${appointment.date} ${appointment.time} (${appointment.description})`;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                appointments.splice(index, 1);
                localStorage.setItem(appointmentsKey, JSON.stringify(appointments));
                window.location.reload();
            });
            li.appendChild(deleteButton);
            appointmentsList.appendChild(li);
        });
    }
});