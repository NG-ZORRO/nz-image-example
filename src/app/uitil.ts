export interface DisplayInfo {
  viewportWidth: number;
  availableWidth: number;
  dpr: number;
}
export function getDisplayInfo(): DisplayInfo {
  return {
    viewportWidth: document.documentElement.clientWidth,
    availableWidth: window.screen.availWidth,
    dpr: window.devicePixelRatio
  };
}
