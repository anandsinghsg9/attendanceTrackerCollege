// js/ui.js

function renderResult(result) {
    const resultCard = document.getElementById('result-card');
    const statValue = document.getElementById('stat-value');
    const progressFill = document.getElementById('progress-fill');
    const statMessage = document.getElementById('stat-message');

    if (!result) {
        resultCard.classList.remove('active');
        return;
    }

    const { currentPercentage, requiredToAttend, neededPercentage } = result;
    const currentNum = parseFloat(currentPercentage);
    const neededNum = parseFloat(neededPercentage);

    let statusClass = 'success';
    let message = '';
    let progressColor = 'var(--success-color)';

    if (requiredToAttend <= 0) {
        statusClass = 'success';
        message = "You meet the target attendance.";
    } else {
        statusClass = currentNum < neededNum - 10 ? 'error' : 'warning';
        message = `Attend ${requiredToAttend} more consecutive class${requiredToAttend > 1 ? 'es' : ''} to reach ${neededPercentage}%.`;
        progressColor = statusClass === 'error' ? 'var(--error-color)' : 'var(--warning-color)';
    }

    const progressWidth = Math.min(Math.max(currentNum, 0), 100);

    // Update DOM
    resultCard.className = `result-card active ${statusClass}`;
    statValue.textContent = `${currentPercentage}%`;
    statValue.style.color = progressColor;
    progressFill.style.width = `${progressWidth}%`;
    progressFill.style.backgroundColor = progressColor;
    statMessage.textContent = message;
}

function scrollToDashboard() {
    const dashboard = document.getElementById('dashboard-section');
    if (dashboard) {
        dashboard.scrollIntoView({ behavior: 'smooth' });
    }
}
