import { useState, useEffect } from 'react';

export const useTypewriter = (texts, speed = 100, pause = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentText = texts[textIndex];

            if (isDeleting) {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex(prev => prev - 1);
            } else {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(prev => prev + 1);
            }

            if (!isDeleting && charIndex === currentText.length) {
                setTimeout(() => setIsDeleting(true), pause);
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        };

        const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, texts, textIndex, speed, pause]);

    return displayText;
};
