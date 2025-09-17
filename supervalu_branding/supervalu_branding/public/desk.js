
// Optional: keep things stable after route changes (only affects /hr/ pages).
(function () {
  const NEW_LABEL = "SuperValu HR";
  function tweak() {
    if (!location.pathname.startsWith("/hr/")) return;
    const ico = document.querySelector('.page-head .page-title .avatar, .page-head .page-title .icon');
    if (ico) ico.style.display = 'none';
    // If you enabled the 'replace' block in CSS, this enforces the text:
    const a = document.querySelector('.breadcrumb .breadcrumb-item:first-child > a');
    if (a && a.textContent.trim() !== NEW_LABEL) a.textContent = NEW_LABEL;
  }
  document.addEventListener("DOMContentLoaded", tweak);
  if (window.frappe && frappe.router) frappe.router.on("change", tweak);
})();
