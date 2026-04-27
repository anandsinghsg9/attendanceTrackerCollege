# Smart Attendance Tracker

A modern, responsive, and highly modular web application designed to help students calculate, track, and visualize their academic attendance. The UI is inspired by the professional Galgotias University ActiLearn LMS ecosystem.

## 🚀 Features
- **Attendance Calculator**: Instantly calculates your current attendance percentage and tells you exactly how many more classes you need to attend to meet your target.
- **Semester Analytics**: Features a beautiful, interactive Bar Chart visualizing attendance across different subjects using color-coded performance indicators.
- **LMS-Style Interface**: A premium academic layout featuring a hero landing section with smooth-scrolling transition into a data-driven dashboard.
- **Modular Architecture**: Built with clean, separated Vanilla JavaScript logic (MVC-style) for easy maintenance and scaling.
- **No Build Steps**: Pure front-end application that works right out of the box in any modern browser without needing a local server.

## 💻 Technologies Used
- **HTML5**: Semantic structure.
- **CSS3**: Custom modern styling, CSS variables, and flexbox/grid layouts (no external CSS frameworks used).
- **Vanilla JavaScript (ES6)**: Clean, modular DOM manipulation and logic.
- **[Chart.js](https://www.chartjs.org/)**: Used for rendering the interactive Semester Analytics bar chart.

## 📋 Prerequisites
There are absolutely no prerequisites, build tools, or local servers required to run this project! 
You just need a modern web browser (Google Chrome, Firefox, Safari, Edge).

## 🛠️ Installation & Usage
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/attendance-tracker.git
   ```
2. Navigate to the project folder.
3. Simply double-click the `index.html` file to open it in your browser.

## 📂 File Structure

This project follows a strict separation of concerns, ensuring HTML, CSS, and JS logic are completely decoupled.

attendanceTracker/
├── index.html            # Main structure and UI layout
├── pica.png              # Background hero image asset
├── css/
│   └── style.css         # All styling, variables, and responsive media queries
└── js/
    ├── main.js           # Global entry point
    ├── attendance.js     # Pure business logic and mathematical calculations
    ├── ui.js             # Pure DOM manipulation and rendering
    ├── events.js         # Event listeners linking UI and logic
    └── analytics.js      # Chart.js initialization and data rendering
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
