import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, Zap, Terminal } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#020202] relative overflow-hidden font-sans p-4">
      
      {/* 🚀 Extreme Background Visuals */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] size-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] size-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse delay-700" />
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-12 gap-0 border border-white/5 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-3xl shadow-2xl overflow-hidden">
        
        {/* 🚀 LEFT SECTION: The "Eye-Candy" Branding */}
        <div className="lg:col-span-7 p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden border-r border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent">
          <div className="flex items-center gap-3">
             <div className="size-12 rounded-2xl bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(var(--p),0.5)]">
                <Zap className="size-7 text-primary-content fill-current" />
             </div>
             <span className="text-2xl font-black tracking-tighter text-white">ZAPCHAT <span className="text-primary italic">PRO</span></span>
          </div>

          <div className="relative z-10 space-y-6 py-20">
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              BEYOND <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary animate-gradient">LIMITS.</span>
            </h1>
            <p className="text-xl text-zinc-400 font-medium max-w-md leading-relaxed">
              The world's fastest real-time messaging engine, re-engineered for elite performance.
            </p>
            <div className="flex items-center gap-6 pt-4">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="size-10 rounded-full border-2 border-[#020202] bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                    </div>
                  ))}
               </div>
               <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">+12K ACTIVE USERS</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-black tracking-[0.3em] text-zinc-600 uppercase">
             <Terminal className="size-4" /> <span>v2.0.4-STABLE_RELEASE</span>
          </div>
          
          {/* Abstract 3D-like Shape */}
          <div className="absolute -bottom-20 -right-20 size-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* 🚀 RIGHT SECTION: The High-End Form */}
        <div className="lg:col-span-5 p-8 lg:p-16 flex flex-col justify-center bg-white/[0.01]">
          <div className="w-full max-w-sm mx-auto space-y-10">
            <div>
              <h2 className="text-4xl font-black text-white tracking-tight mb-2">AUTH_PORTAL</h2>
              <div className="h-1 w-12 bg-primary rounded-full mb-6" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block group-focus-within:text-primary transition-colors">Credential_ID</label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-white font-medium"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-zinc-600 group-focus-within:text-primary transition-colors" />
                  </div>
                </div>

                <div className="group">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500 ml-4 mb-2 block group-focus-within:text-primary transition-colors">Access_Key</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all text-white font-medium"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-zinc-600 group-focus-within:text-primary transition-colors" />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-white transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full h-16 rounded-2xl font-black text-lg tracking-widest uppercase shadow-[0_20px_40px_-10px_rgba(var(--p),0.3)] hover:scale-[1.02] active:scale-95 transition-all"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <Loader2 className="size-6 animate-spin" />
                ) : (
                  "Initiate Session"
                )}
              </button>
            </form>

            <div className="text-center">
              <p className="text-zinc-500 font-medium">
                Identity not found?{" "}
                <Link to="/signup" className="text-white font-bold hover:text-primary transition-colors underline decoration-primary/30 underline-offset-4">
                  Create ID
                </Link>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;