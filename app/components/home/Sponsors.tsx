import React from "react";

function Sponsors() {
    return (
        <section className="w-full hidden flex-col items-center justify-start pt-5 md:pt-10 px-4 md:px-10">
            {/* hidden dulu, nanti jadiin flex */}
            <section className="w-full flex flex-col items-center justify-start pt-16 md:pt-20 px-4 md:px-10">
                <h2 className="font-bodoni font-bold text-4xl md:text-7xl text-biru-3 mb-8 md:mb-12 text-center">
                    Our Sponsors
                </h2>
                <div className="w-full flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-15 pb-10">
                    {[...Array(6)].map((_, index) => (
                        <div
                            key={index}
                            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-white rounded-full drop-shadow-md"
                        />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Sponsors;
