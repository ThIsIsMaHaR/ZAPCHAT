import { THEMES } from "../constants";
import { useThemeStore } from "../store/useThemeStore";
import { Send, Palette, Layout } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's the new ZapChat UI looking?", isSent: false },
  { id: 2, content: "It's looking absolutely fire! The themes are so smooth. 🔥", isSent: true },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div className="min-h-screen bg-base-200/50 pt-24 pb-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 🚀 Left Column: Theme Selection */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Palette className="size-5 text-primary" />
                <h2 className="text-2xl font-black tracking-tight">Appearance</h2>
              </div>
              <p className="text-base-content/60 font-medium">Customize your experience with 30+ handcrafted themes</p>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {THEMES.map((t) => (
                <button
                  key={t}
                  className={`
                    group flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-300 border-2
                    ${theme === t 
                      ? "bg-base-100 border-primary shadow-lg shadow-primary/10 scale-105" 
                      : "bg-base-100/40 border-transparent hover:bg-base-100 hover:border-base-300"}
                  `}
                  onClick={() => setTheme(t)}
                >
                  <div className="relative h-12 w-full rounded-xl overflow-hidden shadow-inner" data-theme={t}>
                    <div className="absolute inset-0 grid grid-cols-4 gap-0">
                      <div className="bg-primary"></div>
                      <div className="bg-secondary"></div>
                      <div className="bg-accent"></div>
                      <div className="bg-neutral"></div>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold truncate w-full text-center uppercase tracking-tighter
                    ${theme === t ? "text-primary" : "opacity-60"}`}>
                    {t}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 🚀 Right Column: Live Preview */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Layout className="size-5 text-primary" />
              <h2 className="text-2xl font-black tracking-tight">Live Preview</h2>
            </div>

            <div className="rounded-3xl border border-base-300 overflow-hidden bg-base-100 shadow-2xl sticky top-24">
              <div className="p-4 bg-base-200/50 backdrop-blur-md">
                {/* Mock Chat UI */}
                <div className="bg-base-100 rounded-2xl shadow-sm overflow-hidden border border-base-300">
                  {/* Chat Header */}
                  <div className="px-4 py-3 border-b border-base-300 bg-base-100/50">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-gradient-to-tr from-primary to-primary/60 flex items-center justify-center text-primary-content font-black text-sm shadow-lg">
                        AM
                      </div>
                      <div>
                        <h3 className="font-bold text-sm">Abhishek Mahar</h3>
                        <div className="flex items-center gap-1">
                          <span className="size-1.5 rounded-full bg-green-500 animate-pulse" />
                          <p className="text-[10px] text-base-content/50 font-bold uppercase">Online</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages */}
                  <div className="p-4 space-y-4 min-h-[220px] max-h-[220px] overflow-y-auto bg-base-100 custom-scrollbar">
                    {PREVIEW_MESSAGES.map((message) => (
                      <div key={message.id} className={`flex ${message.isSent ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`
                            max-w-[85%] rounded-2xl p-3 shadow-sm text-sm font-medium
                            ${message.isSent 
                              ? "bg-primary text-primary-content rounded-tr-none" 
                              : "bg-base-200 text-base-content rounded-tl-none border border-base-300/50"}
                          `}
                        >
                          <p>{message.content}</p>
                          <p className={`text-[9px] mt-1.5 font-bold uppercase opacity-50
                            ${message.isSent ? "text-primary-content" : "text-base-content"}`}>
                            12:00 PM
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <div className="p-4 border-t border-base-300 bg-base-100">
                    <div className="flex gap-2">
                      <div className="flex-1 bg-base-200 rounded-full px-4 flex items-center border border-base-300">
                         <span className="text-xs text-base-content/40 font-medium">Type a message...</span>
                      </div>
                      <button className="btn btn-primary btn-circle btn-sm shadow-md">
                        <Send size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-base-100 border-t border-base-300">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold uppercase opacity-40">Active Theme</span>
                    <span className="badge badge-primary font-black uppercase tracking-tighter">{theme}</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;