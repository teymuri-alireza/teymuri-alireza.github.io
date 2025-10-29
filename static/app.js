  // Animate fills on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.skill').forEach(skill => {
      const percent = skill.getAttribute('data-percent') || 0;
      const fill = skill.querySelector('.skill_fill');
      const track = skill.querySelector('.skill_track');

      // set accessible value
      track.setAttribute('aria-valuenow', percent);

      // animate (CSS transition handles smoothness)
      // small delay per row for a pleasing stagger
      setTimeout(() => fill.style.width = percent + '%', 80);
    });
  });