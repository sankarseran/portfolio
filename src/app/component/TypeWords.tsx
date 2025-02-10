"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingEffectProps {
  prefix: string; // Main string before dynamic words (e.g., "I am a front-end")
  words: string[]; // Array of words that change dynamically
  typingSpeed?: number; // Optional custom typing speed
  delay?: number; // Optional delay after full word is typed
}

const TypeWords: React.FC<TypingEffectProps> = ({
  prefix,
  words,
  typingSpeed = 100,
  delay = 3000,
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index % words.length];

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, index, words, typingSpeed, delay]);

  return (
    <div className="front-end">
      {prefix}{" "}
      <motion.span className="txt-type">
        <span className="txt">{text}</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        >
          _
        </motion.span>
      </motion.span>
    </div>
  );
};

export default TypeWords;
