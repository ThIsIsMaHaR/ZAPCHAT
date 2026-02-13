const AuthImagePattern = ({ title, subtitle }) => {
  return (
    /* Increased pt to 28 to clear that last bit of the Navbar */
    /* Kept h-screen and justify-center to lock the content in the middle */
    <div className="hidden lg:flex flex-col items-center justify-center bg-base-200 px-12 pt-28 pb-10 h-screen overflow-hidden">
      <div className="max-w-md text-center">
        
        {/* The Grid - Reduced gap and margin to save vertical space */}
        <div className="grid grid-cols-3 gap-2.5 mb-5">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>

        {/* Text Section - Pulled up closer to the squares */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-base-content/60 text-sm leading-tight">
          {subtitle}
        </p>

      </div>
    </div>
  );
};

export default AuthImagePattern;