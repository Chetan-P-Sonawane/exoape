import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

const LocomotiveScrollComponent = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            const scroll = new LocomotiveScroll({
                el: scrollRef.current,
                smooth: true,
                mobile: {
                    smooth: true,
                },
                tablet: {
                    smooth: true,
                },
            });

            // Cleanup on unmount
            return () => {
                if (scroll) scroll.destroy();
            };
        }
    }, []);

    return (
        <div ref={scrollRef} className="smooth-scroll">
            {children}
        </div>
    );
};

export default LocomotiveScrollComponent;

