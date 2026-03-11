import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, Zap, ChevronRight } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] relative overflow-hidden font-sans">
      
      {/* 🚀 Animated Background Elements (Eye-Catching Blobs) */}
      <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[150px] animate-pulse delay-1000" />
      <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-blue-500/10 rounded-full blur-[120px] animate-bounce [animation-duration:10s]" />

      <div className="z-10 w-full max-w-[440px] px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10 group">
          <div className="size-16 rounded-3xl bg-gradient-to-br from-primary to-accent p-[2px] shadow-2xl shadow-primary/20 rotate-3 group-hover:rotate-12 transition-all duration-500">
            <div className="w-full h-full bg-black rounded-[22px] flex items-center justify-center">
               <Zap className="size-8 text-primary fill-primary/20" />
            </div>
          </div>
          <h1 className="text-3xl font-black mt-6 tracking-tighter text-white">ZAPCHAT</h1>
          <div className="h-1 w-12 bg-primary rounded-full mt-2" />
        </div>

        {/* 🚀 Glassmorphism Card */}
        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Login</h2>
              <p className="text-zinc-500 text-sm font-medium">Welcome back! Please enter your details.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Input Group */}
              <div className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-zinc-600"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-zinc-500 group-focus-within:text-primary transition-colors" />
                </div>

                <div className="relative group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-12 outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-white placeholder:text-zinc-600"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-zinc-500 group-focus-within:text-primary transition-colors" />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <Link to="#" className="text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest">
                  Forgot Password?
                </Link>
              </div>

              {/* 🚀 Submit Button with Glow */}
              <button 
                type="submit" 
                className="group w-full h-14 bg-primary text-primary-content rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95 disabled:opacity-50"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <Loader2 className="size-6 animate-spin" />
                ) : (
                  <>
                    <span>SIGN IN</span>
                    <ChevronRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-zinc-500 text-sm">
                New to the platform?{" "}
                <Link to="/signup" className="text-white font-bold hover:text-primary transition-colors">
                  Create account
                </Link>
              </p>
            </div>
          </div>

          {/* Abstract Decoration inside card */}
          <div className="absolute top-[-20px] right-[-20px] size-20 bg-primary/20 rounded-full blur-2xl" />
        </div>

        {/* Footer badges */}
        <div className="mt-8 flex justify-center items-center gap-6 opacity-20">
           <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white" />
           <span className="text-[10px] font-black tracking-[0.2em] text-white uppercase whitespace-nowrap">End-to-End Encrypted</span>
           <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;