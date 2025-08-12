import React from "react";

export default function Feature({
  imageSrc = "img2.png", // replace with your transparent PNG
}) {
  return (
    <section className="bg-white py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        {/* Title + description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Pirato safety hand band
          </h2>
          <p className="mt-4 text-gray-600">
            Gives you comfort with portability, display heart rate, and lift
            your style with smart features.
          </p>
        </div>

        {/* Features layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left side - 1 feature */}
          <div className="flex items-center md:items-end justify-center md:justify-end relative">
            <div className="max-w-xs text-center md:text-right">
              <div className="flex md:flex-row-reverse flex-col items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Cameca Ward Camea
                  </h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Capture clear moments with a wide lens and smooth
                    performance.
                  </p>
                </div>
              </div>
              {/* dotted line */}
              <div className="hidden md:block absolute top-6 right-[-60px] w-[60px] border-t border-dotted border-orange-400"></div>
            </div>
          </div>

          {/* Center image */}
          <div className="flex justify-center relative">
            <img
              src={imageSrc}
              alt="Smart Band"
              className="w-60 md:w-72 object-contain"
            />
          </div>

          {/* Right side - 3 features */}
          <div className="flex flex-col gap-12 relative">
            {[
              {
                icon: "7",
                title: "Coronidution 1000",
                text: "The water jet at multiple strengths for daily use and cleaning.",
              },
              {
                icon: "O",
                title: "Taps is formed",
                text: "Built for instant communication and tracking.",
              },
              {
                icon: ">",
                title: "Vialce rigan Camera",
                text: "Capture important moments clearly and quickly.",
              },
            ].map((f, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white font-bold">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{f.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{f.text}</p>
                </div>
                {/* dotted line */}
                <div
                  className="hidden md:block absolute left-[-60px] top-[18px] w-[60px] border-t border-dotted border-orange-400"
                  style={{ top: `${i * 96 + 8}px` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
