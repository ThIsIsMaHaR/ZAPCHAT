import { useChatStore } from "../store/useChatStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    getMessages(selectedUser._id);
    subscribeToMessages();
    return () => unsubscribeFromMessages();
  }, [selectedUser._id, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto bg-base-100/50">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-auto bg-base-100 transition-all">
      <ChatHeader />

      {/* 🚀 Chat Area with Subtle Pattern/Gradient */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 custom-scrollbar bg-[url('/bg-pattern.png')] bg-repeat">
        {messages.map((message) => {
          const isMe = message.senderId === authUser._id;
          
          return (
            <div
              key={message._id}
              className={`chat ${isMe ? "chat-end" : "chat-start"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              ref={messageEndRef}
            >
              <div className="chat-image avatar">
                <div className="size-9 rounded-full border border-base-300 shadow-sm transition-transform hover:scale-110">
                  <img
                    src={isMe ? authUser.profilePic || "/avatar.png" : selectedUser.profilePic || "/avatar.png"}
                    alt="profile pic"
                  />
                </div>
              </div>
              
              <div className="chat-header mb-1 flex items-center gap-1">
                <time className="text-[10px] font-medium opacity-40 uppercase tracking-wider">
                  {formatMessageTime(message.createdAt)}
                </time>
              </div>

              {/* 🚀 Sleek Bubble Design */}
              <div 
                className={`chat-bubble max-w-[85%] md:max-w-[70%] shadow-md p-3 px-4 rounded-2xl flex flex-col gap-2 transition-all
                  ${isMe 
                    ? "bg-primary text-primary-content rounded-tr-none" 
                    : "bg-base-200 text-base-content rounded-tl-none border border-base-300/50"
                  }`}
              >
                {message.image && (
                  <div className="relative group overflow-hidden rounded-xl">
                    <img
                      src={message.image}
                      alt="Attachment"
                      className="max-h-[300px] w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                )}
                {message.text && (
                  <p className="text-sm md:text-base leading-relaxed break-words">
                    {message.text}
                  </p>
                )}
              </div>
              
              {/* Delivery Status Indicator (Optional Visual) */}
              <div className="chat-footer opacity-50 text-[10px] mt-1">
                {isMe ? "Delivered" : ""}
              </div>
            </div>
          );
        })}
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;