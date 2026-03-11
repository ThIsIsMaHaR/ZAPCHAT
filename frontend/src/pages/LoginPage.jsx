import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-base-100">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-center items-center p-8 sm:p-16 lg:p-24 relative overflow-hidden">
        
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="w-full max-w-md space-y-10">
          {/* Logo & Header */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-4 group">
              <div
                className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center 
                group-hover:rotate-12 group-hover:bg-primary/20 transition-all duration-500 shadow-inner"
              >
                <MessageSquare className="size-7 text-primary" />
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl font-black tracking-tight">Welcome Back</h1>
                <p className="text-base-content/50 font-medium">Glad to see you again!</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold opacity-70">Email Address</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                  <Mail className="size-5 opacity-40 group-focus-within:opacity-100" />
                </div>
                <input
                  type="email"
                  className="input input-bordered w-full pl-12 bg-base-200/50 border-base-300 focus:border-primary/50 transition-all h-12 rounded-xl"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <div className="flex justify-between items-center mb-1">
                <label className="label p-0">
                  <span className="label-text font-semibold opacity-70">Password</span>
                </label>
                <Link to="#" className="text-xs link link-primary no-underline hover:underline font-medium">
                  Forgot password?
                </Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                  <Lock className="size-5 opacity-40 group-focus-within:opacity-100" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="input input-bordered w-full pl-12 pr-12 bg-base-200/50 border-base-300 focus:border-primary/50 transition-all h-12 rounded-xl"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-4 flex items-center hover:text-primary transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 opacity-40" />
                  ) : (
                    <Eye className="size-5 opacity-40" />
                  )}
                </button>
              </div>
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary w-full h-12 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group
                ${isLoggingIn ? "opacity-70" : "hover:scale-[1.02]"}`} 
              disabled={isLoggingIn}
            >
              {isLoggingIn ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  <span>Signing in...</span>
                </>
              ) : (
                <>
                  <span className="font-bold">Sign In</span>
                  <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center pt-2">
            <p className="text-base-content/60 font-medium">
              New to ZapChat?{" "}
              <Link to="/signup" className="text-primary hover:underline font-bold transition-all">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Custom Pattern */}
      <AuthImagePattern
        title={"Connect Securely"}
        subtitle={"Sign in to pick up exactly where you left off. Your conversations are waiting for you."}
      />
    </div>
  );
};

export default LoginPage;