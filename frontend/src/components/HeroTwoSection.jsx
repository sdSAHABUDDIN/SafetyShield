import React from "react";

/**
 * Hero (no-SVG) version — uses CSS / Tailwind shapes instead of SVG.
 * Usage:
 *  <Hero imageSrc="/your-band.png" />
 *
 * Make sure your image is PNG with transparent background.
 */
export default function Hero({ imageSrc = "img1.png" }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#f6fbff] to-[#eaf1ff] px-6 py-16 md:py-10">
      {/* RIGHT: big cloud/blob built from overlapping rounded divs */}
      {/* <div
        className="absolute -right-40 top-4 md:top-10 -z-10 pointer-events-none"
        aria-hidden="true"
      > */}
        {/* <div className="relative"> */}
          {/* main blob */}
          {/* <div
            className="w-[640px] h-[460px] md:w-[760px] md:h-[540px] rounded-[40%] bg-gradient-to-br from-[#d6ecff] to-[#cbefff] blur-3xl opacity-95 transform -rotate-12"
            aria-hidden="true"
          /> */}
          {/* soft highlight */}
          {/* <div className="absolute right-16 top-10 w-56 h-28 rounded-full bg-white opacity-8 blur-md" /> */}
        {/* </div> */}
      {/* </div> */}

      {/* LEFT: droplets / bubbles (hidden on small screens) */}
      {/* <div className="hidden md:block absolute left-2 top-16 -z-10 pointer-events-none" aria-hidden="true"> */}
        {/* circular bubble */}
        {/* <div className="w-36 h-36 rounded-full bg-white/30 blur-2xl opacity-70" /> */}
        {/* teardrop-like shape (using custom borderRadius) */}
        {/* <div
          style={{ borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%" }}
          className="mt-6 w-[110px] h-[160px] bg-white/18 blur-lg opacity-80 -rotate-12"
        /> */}
        {/* tiny bubble */}
        {/* <div className="mt-8 w-8 h-8 rounded-full bg-white/14 blur-md" /> */}
      {/* </div> */}

      {/* subtle lower accents */}
      {/* <div className="absolute left-6 bottom-6 -z-10">
        <div className="w-28 h-28 rounded-full bg-white/30 blur-2xl opacity-40" />
      </div>
      <div className="absolute right-20 bottom-14 -z-10">
        <div className="w-44 h-44 rounded-full bg-[#dff3ff] blur-3xl opacity-60" />
      </div> */}

      {/* MAIN CONTENT */}
      <div className="container mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-10">
        {/* TEXT */}
        <div className="max-w-xl text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Eklint Trig Safety
            <br />
            Safety Hand Bands
          </h1>

          <p className="mt-4 text-gray-600">
            The perfect companion for everyday safety — comfortable, reliable and
            packed with features to keep you connected.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-black text-white rounded-full font-medium shadow-md hover:opacity-95 transition"
            >
              Shop Now
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-200 rounded-full font-medium shadow-sm hover:bg-gray-50 transition"
            >
              View Details
            </a>
          </div>
        </div>

        {/* IMAGE / PRODUCT */}
        <div className="relative z-10 w-[320px] md:w-[480px] lg:w-[560px] flex justify-center">
          {/* subtle circular behind the product to lift it */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-[#cfe9ff] to-[#e6f8ff] blur-3xl opacity-80 -z-10" />
          <img
            src={imageSrc}
            alt="Safety hand band"
            className="w-full max-w-[560px] object-contain transform rotate-6 -translate-y-2"
            style={{ filter: "drop-shadow(0 30px 50px rgba(10,20,40,0.16))", transition: "transform 400ms ease" }}
          />
        </div>
      </div>
    </section>
  );
}
