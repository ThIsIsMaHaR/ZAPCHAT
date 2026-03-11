import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-xl bg-base-100/60 transition-all duration-300"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 group transition-all">
              <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center 
                group-hover:bg-primary/20 group-hover:rotate-12 transition-all duration-300 border border-primary/20">
                <MessageSquare className="w-6 h-6 text-primary shadow-sm" />
              </div>
              <span className="text-xl font-black tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ZAPCHAT
              </span>
            </Link>
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-3">
            <Link
              to={"/settings"}
              className="btn btn-sm btn-ghost gap-2 rounded-lg hover:bg-base-200 transition-colors"
            >
              <Settings className="w-4 h-4 opacity-70 group-hover:rotate-90 transition-transform" />
              <span className="hidden sm:inline font-medium">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link 
                  to={"/profile"} 
                  className="btn btn-sm btn-ghost gap-2 rounded-lg hover:bg-base-200"
                >
                  <div className="avatar">
                    <div className="size-6 rounded-full border border-primary/20">
                      <img src={authUser.profilePic || "/avatar.png"} alt="profile" />
                    </div>
                  </div>
                  <span className="hidden sm:inline font-medium">Profile</span>
                </Link>

                <div className="divider divider-horizontal mx-0 h-8 opacity-50"></div>

                <button 
                  className="btn btn-sm btn-ghost text-error gap-2 rounded-lg hover:bg-error/10" 
                  onClick={logout}
                >
                  <LogOut className="size-4" />
                  <span className="hidden sm:inline font-medium">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;