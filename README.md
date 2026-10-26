# Ken Gerard M. Aguilar | Portfolio

Personal portfolio website showcasing my work as a data analyst, frontend developer, and machine learning developer. Built with React and Vite, with scroll animations, a typewriter hero, an interactive particle background, and tilt-on-hover cards.

## About Me

I hold a BS in Computer Science from the University of Santo Tomas (2022 – 2026) with a specialization in Data Science.

- **Data Analyst Intern, DHL Express Philippines (Feb – Jun 2026):** Designed and optimized interactive Power BI dashboards with advanced DAX measures, and automated manual Excel extraction and transformation workflows with Power Automate for the First Choice Team.
- **Frontend Developer, Quantum Review Center (May – Aug 2024):** Developed the official Quantum Review Center website with HTML, React, and Tailwind CSS, working with the Project Manager, UI/UX Designer, and Backend Developer to deliver a smooth, responsive experience.
- **Research:** *Hybrid ELM-SVM Model for Predicting Diabetes Subtypes Using Genetic Markers and Lifestyle Data* (Jan – Dec 2025). Hybridized and trained two machine learning models to improve classification accuracy and reduce training time, with data preprocessing and optimization techniques to enhance performance.

## Skills

| Category | Stack |
| --- | --- |
| Programming Languages | Java, Python, HTML, CSS, SQL, JavaScript |
| Technologies | React, PostgreSQL / MySQL, Power Apps, Node.js, Flutter |
| Tools & Libraries | Git, GitHub, NPM, Scikit-Learn, PyTorch, NumPy, Pandas, Matplotlib |

## Website Features

- Animated hero with a letter-by-letter name reveal and rotating typewriter roles
- Interactive particle network background that reacts to the cursor
- Scroll-triggered reveal animations and animated stat counters
- Tilt-on-hover cards with a cursor spotlight
- Auto-scrolling skills marquee
- Experience timeline, research card, and education section
- Active section highlighting in the navbar and a scroll progress bar
- Responsive layout with a mobile menu
- Respects the `prefers-reduced-motion` setting

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- Plain CSS (no UI libraries)

## Getting Started

Prerequisites: [Node.js](https://nodejs.org/) (LTS) and npm.

```bash
# clone the repository
git clone https://github.com/kgmaguilar/website-portfolio.git
cd website-portfolio

# install dependencies
npm install

# start the development server
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build    # create a production build in /dist
npm run preview  # preview the production build locally
npm run lint     # check the code with the linter
```

## Project Structure

```
website-portfolio/
├── index.html           # entry page and font links
└── src/
    ├── main.jsx         # mounts React
    ├── App.jsx          # page sections and components
    ├── App.css          # layout, theme, and animations
    ├── index.css        # global styles and color variables
    ├── ParticleField.jsx# interactive canvas background
    ├── hooks.js         # scroll, typewriter, and counter hooks
    └── data.js          # all portfolio content (edit this to update the site)
```

To update the text on the site, edit `src/data.js`.

## Contact

- Email: [kengm.aguilar@gmail.com](mailto:kengm.aguilar@gmail.com)
- LinkedIn: [linkedin.com/in/ken-aguilar-906ba7337](https://linkedin.com/in/ken-aguilar-906ba7337)
- GitHub: [github.com/kgmaguilar](https://github.com/kgmaguilar)
