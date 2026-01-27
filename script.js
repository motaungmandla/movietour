// ✅ YOUR PROJECT DEMO VIDEOS (9 total)
const projects = [
  {
    id: 1,
    title: "Sesotho AI Translator Demo",
    videoId: "OZ_XQF6au3E",
    description: "Real-time Sesotho-to-English translation using fine-tuned NLLB-200."
  },
  {
    id: 2,
    title: "WhatsApp Tutoring System",
    videoId: "gthZDipSizE",
    description: "Automated tutoring for Math, Physics & Python via WhatsApp."
  },
  {
    id: 3,
    title: "Operating Systems Solver",
    videoId: "IS91Ok9WQJY",
    description: "Step-by-step OS exam solutions with LaTeX rendering."
  },
  {
    id: 4,
    title: "Motaung.inc Client Portal",
    videoId: "Rk8kTzeQ3DM",
    description: "AI-powered business dashboard for revenue and expenses."
  },
  {
    id: 5,
    title: "MovieTree Showcase",
    videoId: "CckLg-uObA0",
    description: "Entertainment hub built with JavaScript and TMDB API."
  },
  {
    id: 6,
    title: "Personal Gallery & Vault",
    videoId: "-7ltQL13BRk",
    description: "Secure photo gallery with private access control."
  },
  {
    id: 7,
    title: "SeSoDa Dataset Overview",
    videoId: "n6Yh9bJsIkY",
    description: "Introduction to the Sesotho-English parallel dataset (SeSoDa)."
  },
  {
    id: 8,
    title: "AI Voice Assistant (Sesotho)",
    videoId: "rptxkkV71PE",
    description: "Prototype voice interface for uneducated Basotho users."
  },
  {
    id: 9,
    title: "Flutter App Walkthrough",
    videoId: "vvU8pBuEf-o",
    description: "Demo of the Motaung Hub mobile app with theme toggle and stats."
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

// Generate reliable YouTube thumbnail with fallbacks
function getThumbnail(videoId) {
  return [
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    `https://via.placeholder.com/300x170/6a11cb/ffffff?text=${encodeURIComponent("Demo")}`
  ];
}

// Render project cards with robust image loading
function renderProjects() {
  grid.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
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

// Initialize
renderProjects();
