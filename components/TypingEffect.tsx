'use client'

import React, { useState, useEffect } from 'react';
const Typewriter = ({ text, speed = 100, delay = 500, loop = true }: any) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleType = () => {
            if (isDeleting) {
                if (index > 0) {
                    setDisplayedText(text.substring(0, index - 1));
                    setIndex(index - 1);
                } else {
                    setIsDeleting(false);
                    if (!loop) return;
                    setTimeout(() => setIsDeleting(false), delay);
                }
            } else {
                if (index < text.length) {
                    setDisplayedText(text.substring(0, index + 1));
                    setIndex(index + 1);
                } else {
                    if (loop) {
                        setTimeout(() => setIsDeleting(true), delay);
                    }
                }
            }
        };

        const timeoutId = setTimeout(handleType, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timeoutId);
    }, [index, isDeleting, text, speed, delay, loop]);

    return (
        <span>{displayedText}<span className="cursor">|</span></span>
    );
};

export default Typewriter;