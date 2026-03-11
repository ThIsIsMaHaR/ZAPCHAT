import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Zap } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#080808] relative overflow-hidden font-sans">
      
      {/* 🚀 The "Aurora" Background - Pure Visual Flex */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[80%] bg-primary/20 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-accent/10 rounded-full blur-[160px] animate-pulse delay-1000" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Floating Content */}
      <div className="relative z-10 w-full max-w-lg px-8 py-12 flex flex-col items-center">
        
        {/* Minimal Logo */}
        <div className="mb-12 flex flex-col items-center group">
          <div className="size-16 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/40 transition-all" />
            <Zap className="size-10 text-white relative z-10 fill-white/10" />
          </div>
          <h1 className="text-sm font-black tracking-[0.5em] text-white/40 mt-6 uppercase">ZapChat Live</h1>
        </div>

        {/* 🚀 The "Invisible" Form - Only Focus Matters */}
        <div className="w-full space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-black text-white tracking-tighter leading-none">
              Welcome <span className="text-primary italic">Home.</span>
            </h2>
            <p className="text-white/30 font-medium text-lg">Enter the frequency.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              {/* Ultra-Minimal Input */}
              <div className="group relative">
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-white/10 py-4 text-2xl text-white outline-none focus:border-primary transition-all placeholder:text-white/10 font-light"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500" />
              </div>

              <div className="group relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full bg-transparent border-b border-white/10 py-4 text-2xl text-white outline-none focus:border-primary transition-all placeholder:text-white/10 font-light"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-focus-within:w-full transition-all duration-500" />
                <button
                  type="button"
                  className="absolute right-0 top-6 text-white/20 hover:text-primary transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* 🚀 Liquid Button Effect */}
            <button 
              type="submit" 
              className="relative w-full h-20 flex items-center justify-center group overflow-hidden rounded-full"
              disabled={isLoggingIn}
            >
              <div className="absolute inset-0 bg-white group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <span className="relative z-10 text-black group-hover:text-white font-black text-xl uppercase tracking-widest transition-colors duration-500">
                {isLoggingIn ? <Loader2 className="animate-spin" /> : "Authorize"}
              </span>
            </button>
          </form>

          <div className="text-center pt-8">
            <Link to="/signup" className="text-white/20 hover:text-white font-bold text-sm tracking-widest uppercase transition-all">
              New identity? <span className="text-primary">Register</span>
            </Link>
          </div>
        </div>

        {/* Minimalist Tech Footer */}
        <div className="absolute bottom-10 flex flex-col items-center gap-4 opacity-10">
           <div className="w-px h-12 bg-white" />
           <span className="text-[10px] font-black tracking-[1em] text-white uppercase">Secured by AES-256</span>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;