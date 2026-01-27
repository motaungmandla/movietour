// ✅ YOUR YOUTUBE DEMO VIDEOS (with fallback thumbnails)
const projects = [
  {
    id: 1,
    title: "Sesotho AI Translator Demo",
    videoId: "DX6cgWZ8FJg",
    description: "Real-time Sesotho-to-English translation using a fine-tuned NLLB-200 model."
  },
  {
    id: 2,
    title: "Motaung.inc Portal Walkthrough",
    videoId: "RbgsU2eKRww",
    description: "AI-powered business dashboard for expense tracking and revenue optimization."
  },
  {
    id: 3,
    title: "WhatsApp Tutoring Bot",
    videoId: "cMrEp6zqllA",
    description: "Automated tutoring system delivering lessons and tests via WhatsApp."
  },
  {
    id: 4,
    title: "Operating Systems Solver",
    videoId: "OAIM7nU8uXE",
    description: "Step-by-step solutions for OS exam problems with LaTeX rendering."
  },
  {
    id: 5,
    title: "Personal Gallery & Vault",
    videoId: "rBkt4kQNRgY",
    description: "Secure photo gallery with private vault functionality."
  },
  {
    id: 6,
    title: "MovieTree Showcase",
    videoId: "CckLg-uObA0",
    description: "Entertainment hub built with JavaScript and TMDB API."
  },
  {
    id: 7,
    title: "Client Portal Demo",
    videoId: "Rk8kTzeQ3DM",
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

// Generate reliable YouTube thumbnail URL
function getThumbnail(videoId) {
  // Try multiple fallbacks in order of quality
  return [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    `https://via.placeholder.com/300x170/4a00e0/ffffff?text=${encodeURIComponent("Demo")}`
  ];
}

// Render projects with robust image loading
function renderProjects() {
  grid.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    // Create img with fallback logic
    const img = document.createElement('img');
    img.alt = project.title;
    img.className = 'project-thumb';
    
    const urls = getThumbnail(project.videoId);
    let index = 0;
    
    img.onerror = () => {
      index++;
      if (index < urls.length) {
        img.src = urls[index];
      }
    };
    
    img.src = urls[0]; // Start with highest quality
    
    const info = document.createElement('div');
    info.className = 'project-info';
    info.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `;
    
    card.appendChild(img);
    card.appendChild(info);
    card.addEventListener('click', () => openModal(project));
    grid.appendChild(card);
  });
}

function openModal(project) {
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.description;
  // ✅ Use full embed URL with privacy settings
  modalVideo.src = `https://www.youtube.com/embed/${project.videoId}?rel=0&modestbranding=1&autoplay=1`;
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
