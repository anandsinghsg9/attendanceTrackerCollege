// js/events.js

function initializeEvents() {
    // Inputs
    const inputTotal = document.getElementById('input-total');
    const inputAttended = document.getElementById('input-attended');
    const inputNeeded = document.getElementById('input-needed');

    // Button
    const btnViewDashboard = document.getElementById('btn-view-dashboard');

    const handleInputChange = () => {
        const total = parseFloat(inputTotal.value);
        const attended = parseFloat(inputAttended.value);
        const needed = parseFloat(inputNeeded.value);

        const result = calculateAttendance(total, attended, needed);
        renderResult(result);
    };

    // Attach listeners
    if (inputTotal) inputTotal.addEventListener('input', handleInputChange);
    if (inputAttended) inputAttended.addEventListener('input', handleInputChange);
    if (inputNeeded) inputNeeded.addEventListener('input', handleInputChange);

    if (btnViewDashboard) {
        btnViewDashboard.addEventListener('click', scrollToDashboard);
    }

    // Trigger initial calculation
    handleInputChange();
}
