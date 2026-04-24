"use client";
import { useEffect } from "react";
/**
 * MobileViewportOverride
 *
 * On mobile screens, overrides the viewport meta tag to set width=1280,
 * which forces the browser to render the page at desktop width and
 * scale it down to fit the screen.
 *
 * This means all Tailwind `md:` and `lg:` breakpoints will trigger on mobile,
 * giving users the full desktop layout, just scaled smaller.
 *
 * On desktop (>= 768px), it restores the default responsive viewport.
 */
const DESKTOP_WIDTH = 1280;
const MOBILE_THRESHOLD = 768;
export default function MobileViewportOverride() {
  useEffect(() => {
    function getDeviceWidth(): number {
      // On real mobile devices, screen.width gives the physical device width.
      // On desktop browsers, we compare window.outerWidth as a fallback
      // (screen.width is the full monitor on desktop).
      // We also check for touch support as a hint.
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      if (hasTouch) {
        // On touch devices, screen.width is reliable
        return Math.min(window.screen.width, window.screen.height);
      }
      // On desktop, use the actual window width
      return window.innerWidth;
    }
    function updateViewport() {
      const deviceWidth = getDeviceWidth();
      let viewportMeta = document.querySelector('meta[name="viewport"]');
      if (!viewportMeta) {
        viewportMeta = document.createElement("meta");
        viewportMeta.setAttribute("name", "viewport");
        document.head.appendChild(viewportMeta);
      }
      if (deviceWidth < MOBILE_THRESHOLD) {
        viewportMeta.setAttribute(
          "content",
          `width=${DESKTOP_WIDTH}, initial-scale=${deviceWidth / DESKTOP_WIDTH}, maximum-scale=5, user-scalable=yes`
        );
        document.documentElement.setAttribute("data-is-mobile", "true");
      } else {
        viewportMeta.setAttribute(
          "content",
          "width=device-width, initial-scale=1"
        );
        document.documentElement.removeAttribute("data-is-mobile");
      }
    }
    updateViewport();
    // Only listen for orientation changes on mobile — resize on desktop
    window.addEventListener("resize", updateViewport);
    window.addEventListener("orientationchange", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("orientationchange", updateViewport);
    };
  }, []);
  return null;
}