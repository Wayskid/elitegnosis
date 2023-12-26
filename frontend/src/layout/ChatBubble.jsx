import React from "react";
import { BsChat } from "react-icons/bs";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ChatBubble({ showChat, setShowChat }) {
  return (
    <motion.div
      initial={{ translateY: 100 }}
      animate={{ translateY: 0 }}
      transition={{ delay: 2.5 }}
      className="h-[3.5rem] w-[3.5rem] rounded-full bg-[#2e9cd7] z-50 grid place-content-center text-2xl text-white cursor-pointer"
      onClick={() => setShowChat(!showChat)}
    >
      {showChat ? <FaXmark className="spin" /> : <BsChat />}
    </motion.div>
  );
}
