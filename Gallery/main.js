// Jesse's site helper JS (beginner style)

// show the current year in the footer
document.getElementById('year').textContent = new Date().getFullYear();

// tabs: show the right panel when I click a tab
const tabs   = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // unselect all tabs and hide all panels
    tabs.forEach(t => t.setAttribute('aria-selected', false));
    panels.forEach(p => p.hidden = true);

    // select the tab I clicked
    tab.setAttribute('aria-selected', true);

    // show the panel this tab controls
    const target = tab.getAttribute('aria-controls');
    document.getElementById(target).hidden = false;
  });
});

// highlight the current nav link
const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('nav a').forEach(link => {
  if ((link.getAttribute('href') || '').toLowerCase() === page) {
    link.classList.add('active');
  }
});
