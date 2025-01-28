"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const CYCLES_PER_LETTER = 0.8;
const SHUFFLE_TIME = 60;
const CHARS = "!@#$%^&*():{};|,.<>/?";

type Props = {
  children: string;
};

const ScrambleText: React.FC<Props> = ({ children }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const TARGET_TEXT = children;

  const [text, setText] = useState(TARGET_TEXT);

  const stopScramble = useCallback(() => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setText(TARGET_TEXT);
  }, [TARGET_TEXT]);

  const scramble = useCallback(() => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  }, [TARGET_TEXT, stopScramble]);

  

  useEffect(() => {
    scramble();
  }, [TARGET_TEXT, scramble, stopScramble]);

  return (
    <motion.div
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      // onLoad={scramble}
      // onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="relative overflow-hidden"
    >
      <div className="relative z-10 flex items-center gap-2">
        <span>{text}</span>
      </div>
    </motion.div>
  );
};

export default ScrambleText;
