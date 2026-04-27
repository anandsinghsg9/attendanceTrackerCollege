// js/analytics.js

function initAnalytics() {
    const ctx = document.getElementById('analyticsChart');
    if (!ctx) return;

    // Hardcoded data based on the Subject List
    const data = {
        labels: ['DSA', 'Operating Systems', 'Computer Networks', 'Software Engineering'],
        datasets: [{
            label: 'Attendance %',
            data: [82, 71, 90, 65],
            backgroundColor: [
                'rgba(16, 185, 129, 0.6)', // Green for high attendance
                'rgba(245, 158, 11, 0.6)', // Yellow/Orange for medium
                'rgba(16, 185, 129, 0.6)', 
                'rgba(239, 68, 68, 0.6)'    // Red for low attendance
            ],
            borderColor: [
                'rgb(16, 185, 129)',
                'rgb(245, 158, 11)',
                'rgb(16, 185, 129)',
                'rgb(239, 68, 68)'
            ],
            borderWidth: 1,
            borderRadius: 4
        }]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Percentage (%)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Hide legend since there's only one dataset
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + '%';
                        }
                    }
                }
            }
        }
    };

    // Initialize the chart
    new Chart(ctx, config);
}
