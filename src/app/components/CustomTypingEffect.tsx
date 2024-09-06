import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';

interface CustomTypingEffectProps {
  texts: string[];
  className?: string;
}

const CustomTypingEffect: React.FC<CustomTypingEffectProps> = ({
  texts,
  className,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentTextIndex < texts.length - 1) {
      const timer = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
        setIsTypingComplete(false);
      }, 1000); // Wait 1 second before starting to type the next text
      return () => clearTimeout(timer);
    }
  }, [currentTextIndex, texts]);

  return (
    <div className={className}>
      {isTypingComplete ? (
        <h2>{texts[currentTextIndex]}</h2>
      ) : (
        <ReactTypingEffect
          text={[texts[currentTextIndex]]}
          speed={100} // Increase typing speed (lower number = faster)
          eraseSpeed={100} // This won't matter as we're not erasing
          typingDelay={0} // Start typing immediately
          eraseDelay={1000000} // Set a very long delay to prevent erasing
          displayTextRenderer={(text) => {
            return <h2>{text}</h2>;
          }}
        />
      )}
    </div>
  );
};

export default CustomTypingEffect;
