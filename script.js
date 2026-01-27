// ✅ YOUR YOUTUBE DEMO VIDEOS
const projects = [
  {
    id: 1,
    title: "Sesotho AI Translator Demo",
    video: "https://www.youtube.com/embed/DX6cgWZ8FJg?rel=0&modestbranding=1",
    thumbnail: "https://img.youtube.com/vi/DX6cgWZ8FJg/maxresdefault.jpg",
    description: "Real-time Sesotho-to-English translation using a fine-tuned NLLB-200 model."
  },
  {
    id: 2,
    title: "Motaung.inc Portal Walkthrough",
    video: "https://www.youtube.com/embed/RbgsU2eKRww?rel=0&modestbranding=1",
    thumbnail: "https://img.youtube.com/vi/RbgsU2eKRww/maxresdefault.jpg",
    description: "AI-powered business dashboard for expense tracking and revenue optimization."
  },
  {
    id: 3,
    title: "WhatsApp Tutoring Bot",
    video: "https://www.youtube.com/embed/cMrEp6zqllA?rel=0&modestbranding=1",
    thumbnail: "https://img.youtube.com/vi/cMrEp6zqllA/maxresdefault.jpg",
    description: "Automated tutoring system delivering lessons and tests via WhatsApp."
  },
  {
    id: 4,
    title: "Operating Systems Solver",
    video: "https://www.youtube.com/embed/OAIM7nU8uXE?rel=0&modestbranding=1",
    thumbnail: "https://img.youtube.com/vi/OAIM7nU8uXE/maxresdefault.jpg",
    description: "Step-by-step solutions for OS exam problems with LaTeX rendering."
  },
  {
    id: 5,
    title: "Personal Gallery & Vault",
    video: "https://www.youtube.com/embed/rBkt4kQNRgY?rel=0&modestbranding=1",
    thumbnail: "https://img.youtube.com/vi/rBkt4kQNRgY/maxresdefault.jpg",
    description: "Secure photo gallery with private vault functionality."
  },
  {
    id: 6,
    title: "MovieTree Showcase",
    video: "https://www.youtube.com/embed/CckLg-uObA0?rel=0&modestbranding=1",
    thumbnail: "https://img.youtube.com/vi/CckLg-uObA0/maxresdefault.jpg",
    description: "Entertainment hub built with JavaScript and TMDB API."
  },
  {
    id: 7,
    title: "Client Portal Demo",
    video: "https://www.youtube.com/embed/Rk8kTzeQ3DM?rel=0&modestbranding=1",
    thumbnail: "https://img.youtube.com/vi/Rk8kTzeQ3DM/maxresdefault.jpg",
    description: "End-to-end demo of Motaung.inc client-facing tools."
  }
];

// DOM Elements
const grid = document.getElementById('projects-grid');
const modal = document.getElementById('video-modal');
const modalTitle = document.getElementById('modal-title');
const modalVideo = document.getElementById('modal-video');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close-btn');
const themeToggle = document.getElementById('theme-toggle');

// Render projects
function renderProjects() {
  grid.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}" class="project-thumb" onerror="this.src='https://via.placeholder.com/300x170/4a00e0/ffffff?text=No+Preview'">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(project));
    grid.appendChild(card);
  });
}

function openModal(project) {
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.description;
  modalVideo.src = project.video;
  modal.style.display = 'block';
}

closeBtn.onclick = () => {
  modalVideo.src = '';
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modalVideo.src = '';
    modal.style.display = 'none';
  }
};

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-theme');
  document.body.classList.toggle('dark-theme', !isDark);
  document.body.classList.toggle('light-theme', isDark);
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

renderProjects();
