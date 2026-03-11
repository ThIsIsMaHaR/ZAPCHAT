import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X, Smile } from "lucide-react"; // Added Smile for look
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send message");
    }
  };

  return (
    <div className="p-4 w-full bg-base-100/50 backdrop-blur-lg">
      {/* 🚀 Image Preview Bubble */}
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2 animate-in slide-in-from-bottom-2">
          <div className="relative group">
            <img
              src={imagePreview}
              alt="Preview"
              className="size-20 object-cover rounded-2xl border-2 border-primary/20 shadow-lg"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 size-6 rounded-full bg-base-300 shadow-md
              flex items-center justify-center hover:bg-error hover:text-white transition-colors"
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2 max-w-full">
        <div className="flex-1 flex items-center gap-2 bg-base-200/50 rounded-full px-4 py-1 border border-base-300 focus-within:border-primary/50 transition-all shadow-sm">
          {/* Emoji Button (Visual only) */}
          <button type="button" className="text-zinc-400 hover:text-primary transition-colors hidden sm:block">
            <Smile size={22} />
          </button>

          <input
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-sm md:text-base py-3 px-1 placeholder:text-zinc-500"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`flex btn btn-ghost btn-circle btn-sm
                     ${imagePreview ? "text-primary" : "text-zinc-400"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={22} />
          </button>
        </div>

        {/* 🚀 Dynamic Send Button */}
        <button
          type="submit"
          className={`btn btn-circle shadow-lg transition-all duration-300 
            ${(text.trim() || imagePreview) 
              ? "btn-primary scale-100 rotate-0" 
              : "btn-ghost opacity-50 scale-90 -rotate-12 pointer-events-none"}`}
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={20} className={text.trim() || imagePreview ? "translate-x-0.5" : ""} />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;