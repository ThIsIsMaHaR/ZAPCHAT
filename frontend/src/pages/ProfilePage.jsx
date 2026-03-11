import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User, ShieldCheck, Calendar } from "lucide-react";

const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-base-200/50">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-base-100 rounded-2xl shadow-xl border border-base-300 overflow-hidden">
          
          {/* 🚀 Header Section with Gradient Backdrop */}
          <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent relative" />

          <div className="px-8 pb-8 -mt-16">
            <div className="flex flex-col items-center gap-6">
              
              {/* 🚀 Avatar Section with Ring & Glow */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative group">
                  <div className={`
                    absolute -inset-1 bg-gradient-to-tr from-primary to-accent rounded-full blur opacity-25 
                    group-hover:opacity-50 transition duration-500
                    ${isUpdatingProfile ? "animate-pulse" : ""}
                  `} />
                  
                  <div className="relative">
                    <img
                      src={selectedImg || authUser.profilePic || "/avatar.png"}
                      alt="Profile"
                      className="size-36 rounded-full object-cover border-4 border-base-100 shadow-2xl"
                    />
                    <label
                      htmlFor="avatar-upload"
                      className={`
                        absolute bottom-1 right-1 
                        bg-primary hover:bg-primary-focus
                        p-2.5 rounded-full cursor-pointer 
                        shadow-lg transition-all duration-300
                        ${isUpdatingProfile ? "animate-pulse pointer-events-none" : "hover:scale-110"}
                      `}
                    >
                      <Camera className="size-5 text-primary-content" />
                      <input
                        type="file"
                        id="avatar-upload"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUpdatingProfile}
                      />
                    </label>
                  </div>
                </div>
                
                <div className="text-center space-y-1">
                  <h1 className="text-3xl font-black tracking-tight">{authUser?.fullName}</h1>
                  <p className="text-base-content/60 font-medium">
                    {isUpdatingProfile ? "Updating your vibe..." : "Manage your ZapChat profile"}
                  </p>
                </div>
              </div>

              {/* 🚀 User Details Grid */}
              <div className="w-full grid gap-4 mt-4">
                <div className="bg-base-200/50 p-4 rounded-xl border border-base-300 transition-all hover:border-primary/30">
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                    <User className="size-3" /> Full Name
                  </div>
                  <p className="text-lg font-semibold">{authUser?.fullName}</p>
                </div>

                <div className="bg-base-200/50 p-4 rounded-xl border border-base-300 transition-all hover:border-primary/30">
                  <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 flex items-center gap-2">
                    <Mail className="size-3" /> Email Address
                  </div>
                  <p className="text-lg font-semibold">{authUser?.email}</p>
                </div>
              </div>

              {/* 🚀 Account Info Section (Clean Card Style) */}
              <div className="w-full bg-base-200/30 rounded-2xl p-6 border border-base-300 mt-2">
                <h2 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" /> Security & Stats
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm py-1">
                    <div className="flex items-center gap-2 text-zinc-500 font-medium">
                      <Calendar className="size-4" /> Member Since
                    </div>
                    <span className="font-bold">{authUser.createdAt?.split("T")[0]}</span>
                  </div>
                  
                  <div className="h-px bg-base-300 w-full" />
                  
                  <div className="flex items-center justify-between text-sm py-1">
                    <div className="flex items-center gap-2 text-zinc-500 font-medium">
                      <div className="size-2 rounded-full bg-green-500 animate-pulse" /> Status
                    </div>
                    <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-xs font-black uppercase tracking-tighter border border-green-500/20">
                      Verified User
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;