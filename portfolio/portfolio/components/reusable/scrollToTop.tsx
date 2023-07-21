import React, {useState, useEffect} from 'react';
import {ChevronDoubleUpIcon} from "@heroicons/react/20/solid";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scroll event and show/hide the button
    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        setIsVisible(scrollY > windowHeight / 2);
    };

    // Attach the scroll event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle the click event and scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            className={`${
                isVisible ? 'block' : 'hidden'
            } z-50 fixed bottom-4 right-4 p-2 rounded-full bg-white shadow-lg`}
            onClick={scrollToTop}
        >
            <ChevronDoubleUpIcon className={"fill-green-600 w-6 h-6"}/>
        </button>
    );
};

export default ScrollToTopButton;
