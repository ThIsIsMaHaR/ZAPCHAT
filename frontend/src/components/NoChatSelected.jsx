import { MessageSquare, Sparkles } from "lucide-react";

const NoChatSelected = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center justify-center p-16 bg-base-100/50 backdrop-blur-sm">
      <div className="max-w-md text-center space-y-8">
        
        {/* 🚀 Animated Icon Composition */}
        <div className="flex justify-center gap-4 mb-4">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-pulse" />
            
            <div
              className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 
              flex items-center justify-center animate-bounce shadow-2xl border border-primary/10"
              style={{ animationDuration: '3s' }}
            >
              <MessageSquare className="w-10 h-10 text-primary drop-shadow-md" />
              
              {/* Floating Sparkle Icon */}
              <div className="absolute -top-2 -right-2 animate-pulse">
                <Sparkles className="size-6 text-primary/60" />
              </div>
            </div>
          </div>
        </div>

        {/* 🚀 Text Section with Premium Feel */}
        <div className="space-y-2">
          <h2 className="text-3xl font-black tracking-tight bg-gradient-to-b from-base-content to-base-content/70 bg-clip-text text-transparent">
            Ready to Zap?
          </h2>
          <p className="text-base-content/50 text-base font-medium max-w-[280px] mx-auto leading-relaxed">
            Pick a friend from the sidebar and start a conversation. Your messages are end-to-end encrypted.
          </p>
        </div>

        {/* 🚀 Visual Hint (Optional) */}
        <div className="pt-4 flex justify-center">
          <div className="px-4 py-2 rounded-full bg-base-200/50 border border-base-300 text-[10px] uppercase tracking-widest font-bold opacity-50">
             ⚡ Secure & Fast
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NoChatSelected;