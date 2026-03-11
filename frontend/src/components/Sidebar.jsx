import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users, Search } from "lucide-react";

const Sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  const { onlineUsers } = useAuthStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((user) => onlineUsers.includes(user._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <aside className="h-full w-20 lg:w-80 border-r border-base-300 flex flex-col transition-all duration-300 bg-base-100/50">
      {/* Header Section */}
      <div className="border-b border-base-300 w-full p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Users className="size-5 text-primary" />
            </div>
            <span className="font-bold text-lg hidden lg:block tracking-tight">Contacts</span>
          </div>
          <span className="hidden lg:block text-xs font-semibold px-2 py-1 bg-base-200 rounded-full text-zinc-500">
            {onlineUsers.length - 1} Online
          </span>
        </div>

        {/* Online Filter Toggle - Improved UI */}
        <div className="hidden lg:flex items-center justify-between p-2 bg-base-200/50 rounded-xl border border-base-300/50">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={showOnlineOnly}
              onChange={(e) => setShowOnlineOnly(e.target.checked)}
              className="checkbox checkbox-primary checkbox-xs rounded-md"
            />
            <span className="text-xs font-medium cursor-pointer" onClick={() => setShowOnlineOnly(!showOnlineOnly)}>
              Online Only
            </span>
          </div>
          <div className={`size-2 rounded-full ${showOnlineOnly ? 'bg-primary animate-pulse' : 'bg-zinc-400'}`} />
        </div>
      </div>

      {/* Users List Section */}
      <div className="overflow-y-auto w-full py-2 custom-scrollbar">
        {filteredUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`
              w-full p-4 flex items-center gap-4 transition-all duration-200 relative group
              ${selectedUser?._id === user._id 
                ? "bg-primary/10 border-r-4 border-primary shadow-sm" 
                : "hover:bg-base-200/80"}
            `}
          >
            {/* Avatar with Glow for Online Users */}
            <div className="relative mx-auto lg:mx-0">
              <div className={`rounded-full p-0.5 transition-all duration-300 ${onlineUsers.includes(user._id) ? 'bg-gradient-to-tr from-green-500 to-emerald-400' : 'bg-base-300'}`}>
                <img
                  src={user.profilePic || "/avatar.png"}
                  alt={user.fullName}
                  className="size-12 object-cover rounded-full border-2 border-base-100"
                />
              </div>
              
              {onlineUsers.includes(user._id) && (
                <span className="absolute bottom-0 right-0 size-3.5 bg-green-500 rounded-full ring-2 ring-base-100 shadow-lg animate-in fade-in zoom-in" />
              )}
            </div>

            {/* User Info - Sleek Typography */}
            <div className="hidden lg:block text-left min-w-0 flex-1">
              <div className="font-bold truncate text-sm lg:text-base group-hover:text-primary transition-colors">
                {user.fullName}
              </div>
              <div className={`text-xs font-medium transition-colors ${onlineUsers.includes(user._id) ? "text-green-500" : "text-zinc-500"}`}>
                {onlineUsers.includes(user._id) ? (
                  <span className="flex items-center gap-1">
                    <span className="size-1.5 bg-green-500 rounded-full" />
                    Active Now
                  </span>
                ) : (
                  "Offline"
                )}
              </div>
            </div>
          </button>
        ))}

        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
            <div className="size-12 bg-base-200 rounded-full flex items-center justify-center mb-2">
               <Users className="size-6 text-zinc-500 opacity-20" />
            </div>
            <p className="text-zinc-500 text-sm font-medium italic">No friends online</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;