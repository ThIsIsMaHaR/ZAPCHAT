import { X, Phone, Video, MoreVertical } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="p-3 px-4 border-b border-base-300 bg-base-100/50 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* 🚀 Avatar with Online Ring */}
          <div className="avatar">
            <div className={`size-11 rounded-full relative p-0.5 ${isOnline ? 'bg-gradient-to-tr from-green-500 to-emerald-400' : 'bg-base-300'}`}>
              <img 
                className="rounded-full border-2 border-base-100 object-cover"
                src={selectedUser.profilePic || "/avatar.png"} 
                alt={selectedUser.fullName} 
              />
            </div>
          </div>

          {/* User info */}
          <div className="flex flex-col">
            <h3 className="font-bold text-base tracking-tight leading-none mb-1">
              {selectedUser.fullName}
            </h3>
            <div className="flex items-center gap-1.5">
              <span className={`size-2 rounded-full ${isOnline ? "bg-green-500 animate-pulse" : "bg-zinc-500"}`} />
              <p className={`text-xs font-medium ${isOnline ? "text-green-500" : "text-base-content/50"}`}>
                {isOnline ? "Active Now" : "Offline"}
              </p>
            </div>
          </div>
        </div>

        {/* 🚀 Action Buttons (Makes it look like a real Pro app) */}
        <div className="flex items-center gap-1 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1">
            <button className="btn btn-ghost btn-circle btn-sm opacity-60 hover:opacity-100 transition-opacity">
              <Phone className="size-5" />
            </button>
            <button className="btn btn-ghost btn-circle btn-sm opacity-60 hover:opacity-100 transition-opacity">
              <Video className="size-5" />
            </button>
          </div>
          
          <div className="divider divider-horizontal mx-0 h-6 opacity-20 hidden sm:flex"></div>

          {/* Close button - Styled for better reach */}
          <button 
            onClick={() => setSelectedUser(null)}
            className="btn btn-ghost btn-circle btn-sm hover:bg-error/10 hover:text-error transition-all"
          >
            <X className="size-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;