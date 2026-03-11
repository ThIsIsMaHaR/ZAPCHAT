import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Zap, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden font-sans">
      
      {/* 🚀 Background "Nebula" Effect */}
      <div className="absolute top-[-20%] left-[-10%] size-[1000px] bg-primary/30 rounded-full blur-[180px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] size-[800px] bg-accent/20 rounded-full blur-[150px] animate-pulse delay-700 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* 🚀 Left Side: Dynamic Text & Branding */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-primary tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System v2.0 Live
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.85] tracking-tighter">
            ZAP <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">CHAT.</span>
          </h1>
          
          <p className="text-white/40 text-lg lg:text-xl font-medium max-w-sm leading-relaxed mx-auto lg:mx-0">
            A new dimension of communication. Fast, encrypted, and designed for you.
          </p>
        </div>

        {/* 🚀 Right Side: The "Hyper-Glass" Form */}
        <div className="w-full max-w-[400px] relative group">
          {/* Decorative Glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
            <div className="space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-white tracking-tight">Login</h2>
                <div className="h-1 w-8 bg-primary rounded-full" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <div className="space-y-1">
                    <input
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-white/20"
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full h-14 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all duration-300 shadow-xl"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <span>ENTER</span>
                      <ArrowRight size={20} />
                    </>
                  )}
                </button>
              </form>

              <div className="text-center">
                <Link to="/signup" className="text-white/30 hover:text-white text-sm font-bold transition-all uppercase tracking-widest">
                  No ID? <span className="text-primary underline underline-offset-4">Create One</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Bottom Decoration */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/10 text-[10px] font-black tracking-[0.5em] uppercase pointer-events-none">
        Protocol_Secure_8630
      </div>
    </div>
  );
};

export default LoginPage;