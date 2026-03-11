import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare, User, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import AuthImagePattern from "../components/AuthImagePattern";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = validateForm();
    if (success === true) signup(formData);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-base-100">
      {/* LEFT SIDE - Form */}
      <div className="flex flex-col justify-center items-center p-8 sm:p-12 lg:p-20 relative overflow-hidden">
        
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -left-24 size-96 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="w-full max-w-md space-y-8 z-10">
          {/* Logo & Header */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-4 group">
              <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center 
                group-hover:rotate-12 group-hover:bg-primary/20 transition-all duration-500 shadow-inner border border-primary/10">
                <MessageSquare className="size-7 text-primary" />
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl font-black tracking-tight">Create Account</h1>
                <p className="text-base-content/50 font-medium">Join ZAPCHAT today – it's free!</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold opacity-70">Full Name</span>
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary">
                  <User className="size-5 opacity-40 group-focus-within:opacity-100" />
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full pl-12 bg-base-200/50 border-base-300 focus:border-primary/50 transition-all h-12 rounded-xl"
                  placeholder="Abhishek Mahar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Email Input */}
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
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold opacity-70">Password</span>
              </label>
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
              <label className="label">
                <span className="label-text-alt text-zinc-500 font-medium">Min. 6 characters</span>
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className={`btn btn-primary w-full h-12 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group mt-2
                ${isSigningUp ? "opacity-70" : "hover:scale-[1.02] active:scale-95"}`} 
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  <span className="font-bold">Creating Account...</span>
                </>
              ) : (
                <>
                  <span className="font-bold">Create Account</span>
                  <UserPlus className="size-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="text-center pt-2">
            <p className="text-base-content/60 font-medium">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-bold transition-all">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Pattern Component */}
      <AuthImagePattern
        title="Join the Community"
        subtitle="Connect with people, share moments, and keep the conversation going with your favorite squad."
      />
    </div>
  );
};

export default SignUpPage;