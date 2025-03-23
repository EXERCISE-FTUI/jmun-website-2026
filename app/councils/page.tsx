import Image from "next/image";
import React from "react";
import bundaranHIPhoto from "@/assets/bundaranHI.webp";

function CouncilsPage() {
  return (
    <section className="w-full h-screen pt-40 relative">
      <div className="absolute inset-0">
        <Image
          width={bundaranHIPhoto.width}
          height={bundaranHIPhoto.height}
          alt="Photo of Bundaran HI"
          src={bundaranHIPhoto.src}
        />
      </div>
      <h1 className="text-white  font-extrabold text-4xl md:text-7xl text-center font-plus-jakarta">
        Councils
      </h1>{" "}
    </section>
  );
}

export default CouncilsPage;
