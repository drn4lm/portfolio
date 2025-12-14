import React, { useState } from "react";

const images = [
  { src: "/carousel/bike.jpg", caption: "Two wheels, zero regrets" },
  { src: "/carousel/hike.jpg", caption: "Iceline summit at 6am.. don't worry about the watermelon" },
  { src: "/carousel/fish.jpg", caption: "Nothing beats the feeling of the first catch of the season" },
  { src: "/carousel/subie.jpg", caption: "My WRX STi in a closed-course rally event" },
];

export const FunSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <section id="fun" className="py-12 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Carousel */}
          <div className="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-xl shadow-lg">
            {/* Sliding container */}
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {images.map((img, i) => (
                <div key={i} className="w-full flex-shrink-0 relative h-full">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Caption at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-sm font-medium text-center">
                    {img.caption}
                  </div>
                </div>
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-lg p-2 cursor-pointer hover:bg-black/70 transition-colors"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-lg p-2 cursor-pointer hover:bg-black/70 transition-colors"
            >
              ›
            </button>

            {/* Dots ABOVE the caption */}
            <div className="absolute bottom-135 left-0 right-0 flex justify-center gap-2 z-10">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full ${
                    i === index ? "bg-white" : "bg-white/40"
                  } cursor-pointer`}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-muted-foreground">
              Contrary to popular belief, I do occasionally escape my screen and touch grass.
              When I'm not debugging code, I'm hiking trails at unhuman hours or fishing.
              I also really like motorcycles — if its even remotely warm outside, you'll catch me
              on my motorcycle instead of scrolling Marketplace for motorcycles. Motorcycles are
              so cool!
            </p>

            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-left">
              <li>Favorite anime: Demon Slayer</li>
              <li>Top 3 song genres: Pop Rap, R&B, Throw Backs</li>
              <li>Fun fact: I can name every F1 World Champion</li>
            </ul>

            <p className="text-muted-foreground">
              Want to swap project ideas or share a playlist? Hit me up — I'm super
              approachable and always down to chat about strange inventions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
