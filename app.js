/**
 * YPSILON SHOWCASE — INTERACTION CONTROLLER
 * Handles tab navigation, image lightboxes, and tool deep links.
 */

document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupKeyboardShortcuts();
});

// Setup sidebar and intra-page navigation
function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetId = item.getAttribute('data-target');
      navigateTo(targetId);
    });
  });
}

// Switch active view panel
function navigateTo(targetId) {
  // Update sidebar active state
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (item.getAttribute('data-target') === targetId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Update panels visibility
  const panels = document.querySelectorAll('.view-panel');
  panels.forEach(panel => {
    panel.classList.remove('active');
  });

  const activePanel = document.getElementById(`section-${targetId}`);
  if (activePanel) {
    activePanel.classList.add('active');
    // Scroll canvas to top smoothly
    const canvas = document.querySelector('.main-canvas');
    if (canvas) {
      canvas.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

// Lightbox Zoom Modal
function openZoomModal(imageSrc, captionText) {
  const modal = document.getElementById('zoomModal');
  const modalImg = document.getElementById('modalImg');
  const modalCaption = document.getElementById('modalCaption');

  if (modal && modalImg && modalCaption) {
    modalImg.src = imageSrc;
    modalCaption.textContent = captionText || 'Captura de Ecrã';
    modal.classList.add('active');
  }
}

function closeZoomModal() {
  const modal = document.getElementById('zoomModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Executive Summary Modal
function showSummaryModal() {
  const modal = document.getElementById('summaryModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeSummaryModal() {
  const modal = document.getElementById('summaryModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Keyboard shortcuts (Escape key closes open modals)
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeZoomModal();
      closeSummaryModal();
    }
  });
}
