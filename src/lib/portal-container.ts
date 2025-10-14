/**
 * Portal container for workspace menu widget
 * Ensures isolation from parent application (including Ant Design)
 */

let portalContainer: HTMLElement | null = null;

/**
 * Get or create isolated portal container for workspace menu
 */
export function getPortalContainer(): HTMLElement {
  if (portalContainer && document.body.contains(portalContainer)) {
    return portalContainer;
  }

  // Create container
  portalContainer = document.createElement("div");
  portalContainer.id = "workspace-menu-portal-root";
  portalContainer.setAttribute("data-workspace-menu-portal-root", "");

  // Add styles for isolation
  portalContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    z-index: 2000;
    pointer-events: none;
  `;

  // Append to body
  document.body.appendChild(portalContainer);

  return portalContainer;
}

/**
 * Clean up portal container (useful for unmounting)
 */
export function cleanupPortalContainer(): void {
  if (portalContainer && document.body.contains(portalContainer)) {
    document.body.removeChild(portalContainer);
    portalContainer = null;
  }
}
