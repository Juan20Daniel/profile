import { useState, useEffect } from 'react';

export const useGetSizeWindow = () => {
    const [ size, setSize ] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

     useEffect(() => {
        let animationFrameId;

        const handleResize = () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            animationFrameId = requestAnimationFrame(() => {
                setSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            });
        };

        window.addEventListener("resize", handleResize);
        
        return () => {
            window.removeEventListener("resize", handleResize);
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        };
    }, []);
  
    return {
        width:size.width,
        height:size.height
    };
}