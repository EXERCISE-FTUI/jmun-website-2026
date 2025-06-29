import React from "react";

interface HeaderPhotoProps {
  photoUrl: string;
  alt?: string;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

function HeaderPhoto({
  photoUrl,
  alt = "Header background",
  overlayOpacity = 0,
  children,
}: HeaderPhotoProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
        style={{ backgroundImage: `url(${photoUrl})` }}
        role="img"
        aria-label={alt}
      />

      {/* Optional Overlay */}
      {overlayOpacity > 0 && (
        <div
          className="absolute inset-0 bg-pink-light w-full h-full"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Content Container */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </section>
  );
}

export default HeaderPhoto;
