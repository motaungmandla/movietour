// Your project data — replace with your actual videos!
const projects = [
  {
    id: 1,
    title: "Sesotho AI Translator",
    video: "https://example.com/demo1.mp4", // ← Replace with your .mp4 or .webm URL
    thumbnail: "https://via.placeholder.com/300x170/4a00e0/ffffff?text=Sesotho+AI",
    description: "Real-time Sesotho-to-English translation using fine-tuned NLLB-200."
  },
  {
    id: 2,
    title: "Motaung.inc Portal",
    video: "https://example.com/demo2.mp4",
    thumbnail: "https://via.placeholder.com/300x170/8e2de2/ffffff?text=Motaung.inc",
    description: "AI-powered business dashboard for expense tracking and revenue optimization."
  },
  {
    id: 3,
    title: "WhatsApp Automation Bot",
    video: "https://example.com/demo3.mp4",
    thumbnail: "https://via.placeholder.com/300x170/1d2b64/ffffff?text=WhatsApp+Bot",
    description: "Automated tutoring and file sharing via WhatsApp using Python and Twilio."
  },
  {
    id: 4,
    title: "Operating Systems Solver",
    video: "https://example.com/demo4.mp4",
    thumbnail: "https://via.placeholder.com/300x170/f857a6/ffffff?text=OS+Solver",
    description: "Step-by-step solutions for OS exam problems with LaTeX rendering."
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
      <img src="${project.thumbnail}" alt="${project.title}" class="project-thumb">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;
    card.addEventListener('click', () => openModal(project));
    grid.appendChild(card);
  });
}

// Open modal
function openModal(project) {
  modalTitle.textContent = project.title;
  modalVideo.src = project.video;
  modalDesc.textContent = project.description;
  modal.style.display = 'block';
  modalVideo.play();
}

// Close modal
closeBtn.onclick = () => {
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modal.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
    modal.style.display = 'none';
  }
};

// Theme toggle
themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark-theme');
  document.body.classList.toggle('dark-theme', !isDark);
  document.body.classList.toggle('light-theme', isDark);
  themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// Init
renderProjects();
