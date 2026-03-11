import React from "react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex flex-col items-center justify-center bg-base-200/50 px-12 pt-28 pb-10 h-screen overflow-hidden relative">
      {/* 🚀 Background Glows for Depth */}
      <div className="absolute top-1/4 left-1/4 size-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 size-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-md text-center z-10">
        {/* 🚀 Animated Grid with Mixed Shapes */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`
                aspect-square rounded-2xl transition-all duration-700
                ${i % 2 === 0 
                  ? "bg-primary/20 animate-bounce [animation-duration:3s] scale-110 shadow-lg shadow-primary/5" 
                  : "bg-primary/5 animate-pulse scale-90 rounded-3xl"
                }
                ${i === 4 ? "bg-gradient-to-br from-primary to-accent opacity-80" : ""}
              `}
            />
          ))}
        </div>

        {/* 🚀 Text Section with Better Typography */}
        <div className="space-y-3">
          <h2 className="text-3xl font-black tracking-tight text-base-content">
            {title}
          </h2>
          <p className="text-base-content/60 text-base font-medium leading-relaxed px-4">
            {subtitle}
          </p>
        </div>

        {/* 🚀 Subtle Decorative Element */}
        <div className="mt-8 flex justify-center gap-1.5">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`h-1 rounded-full bg-primary/20 ${i === 0 ? "w-8 bg-primary/40" : "w-2"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;