import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jakarta International Model United Nations 2025",
  description: "Jakarta International Model United Nations 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var DESKTOP_WIDTH = 1280;
                var MOBILE_THRESHOLD = 768;
                var hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
                var deviceWidth = hasTouch ? Math.min(window.screen.width, window.screen.height) : window.innerWidth;
                if (deviceWidth < MOBILE_THRESHOLD) {
                  var viewportMeta = document.querySelector('meta[name="viewport"]');
                  if (!viewportMeta) {
                    viewportMeta = document.createElement("meta");
                    viewportMeta.setAttribute("name", "viewport");
                    document.head.appendChild(viewportMeta);
                  }
                  viewportMeta.setAttribute("content", "width=" + DESKTOP_WIDTH + ", initial-scale=" + (deviceWidth / DESKTOP_WIDTH) + ", maximum-scale=5, user-scalable=yes");
                  document.documentElement.setAttribute("data-is-mobile", "true");
                }
              })()
            `,
          }}
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
