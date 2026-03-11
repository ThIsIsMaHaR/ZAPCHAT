import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200/50 transition-colors duration-500">
      <div className="flex items-center justify-center pt-20 pb-6 px-4 h-full">
        {/* Main Container with Glass Effect */}
        <div className="bg-base-100/80 backdrop-blur-md border border-base-300 rounded-2xl shadow-2xl w-full max-w-7xl h-full lg:h-[calc(100vh-7rem)] overflow-hidden">
          <div className="flex h-full relative">
            
            {/* Sidebar Section */}
            <div className={`
              ${selectedUser ? "hidden md:flex" : "flex"} 
              w-full md:w-80 lg:w-96 border-r border-base-300 h-full transition-all duration-300
            `}>
              <Sidebar />
            </div>

            {/* Chat Content Area */}
            <div className={`
              flex-1 h-full flex flex-col transition-all duration-300
              ${!selectedUser ? "bg-base-200/30" : "bg-base-100"}
            `}>
              {!selectedUser ? (
                <div className="hidden md:flex flex-1">
                  <NoChatSelected />
                </div>
              ) : (
                <ChatContainer />
              )}
              
              {/* Mobile View Placeholder for NoChatSelected */}
              {!selectedUser && (
                <div className="md:hidden flex flex-1">
                   <NoChatSelected />
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;