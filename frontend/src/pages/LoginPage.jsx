import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, Zap } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-base-200 relative overflow-hidden">
      
      {/* 🚀 Dynamic Background Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="container max-w-5xl mx-auto px-4 z-10">
        <div className="bg-base-100/60 backdrop-blur-2xl border border-base-300 rounded-[2.5rem] shadow-2xl overflow-hidden grid lg:grid-cols-2">
          
          {/* Left Side: Branding & Welcome */}
          <div className="hidden lg:flex flex-col justify-between p-12 bg-primary/5 border-r border-base-300/50">
            <div className="flex items-center gap-2 group cursor-default">
              <div className="size-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Zap className="size-6 text-primary-content fill-current" />
              </div>
              <span className="text-xl font-black tracking-tighter">ZAPCHAT</span>
            </div>

            <div className="space-y-6">
              <h2 className="text-5xl font-black leading-tight tracking-tighter italic uppercase italic">
                Connect <br /> 
                <span className="text-primary">Instantly.</span> <br /> 
                Chat Privately.
              </h2>
              <p className="text-base-content/60 font-medium text-lg max-w-sm">
                Experience the next generation of messaging with real-time speed and sleek aesthetics.
              </p>
            </div>

            <div className="flex items-center gap-4 text-sm font-bold opacity-40">
              <span>SECURE</span>
              <div className="size-1 bg-base-content rounded-full" />
              <span>FAST</span>
              <div className="size-1 bg-base-content rounded-full" />
              <span>MODERN</span>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="p-8 sm:p-16 flex flex-col justify-center">
            <div className="w-full max-w-sm mx-auto space-y-8">
              <div className="space-y-2">
                <h1 className="text-4xl font-black tracking-tight">Login</h1>
                <p className="text-base-content/50 font-medium">Welcome back, champ!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <div className="relative group">
                    <input
                      type="email"
                      className="peer w-full bg-transparent border-b-2 border-base-300 py-3 pl-8 outline-none focus:border-primary transition-all font-medium"
                      placeholder=" "
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Mail className="absolute left-0 top-3 size-5 opacity-30 peer-focus:opacity-100 peer-focus:text-primary transition-all" />
                    <label className="absolute left-8 top-3 text-base-content/40 pointer-events-none transition-all peer-focus:-top-4 peer-focus:left-0 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-xs">
                      Email Address
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative group">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="peer w-full bg-transparent border-b-2 border-base-300 py-3 pl-8 pr-10 outline-none focus:border-primary transition-all font-medium"
                      placeholder=" "
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                    />
                    <Lock className="absolute left-0 top-3 size-5 opacity-30 peer-focus:opacity-100 peer-focus:text-primary transition-all" />
                    <label className="absolute left-8 top-3 text-base-content/40 pointer-events-none transition-all peer-focus:-top-4 peer-focus:left-0 peer-focus:text-xs peer-focus:font-bold peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:left-0 peer-[:not(:placeholder-shown)]:text-xs">
                      Password
                    </label>
                    <button
                      type="button"
                      className="absolute right-0 top-3 opacity-30 hover:opacity-100 transition-all"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary w-full h-14 rounded-2xl shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group overflow-hidden relative"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <Loader2 className="size-6 animate-spin" />
                  ) : (
                    <>
                      <span className="font-black uppercase tracking-widest">Sign In</span>
                      <Zap className="size-5 group-hover:fill-current transition-all" />
                    </>
                  )}
                </button>
              </form>

              <p className="text-center text-sm font-medium text-base-content/50">
                New here?{" "}
                <Link to="/signup" className="text-primary font-bold hover:underline">
                  Join the vibe
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