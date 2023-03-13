import {useRef, useState, useEffect} from "react";

export function useHover() {
    const [hovered, setIsHovered] = useState(false);
    const ref = useRef();

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };

    useEffect(() => {
        const element = ref.current;

        if(element) {
            element.addEventListener('mouseover', handleMouseOver);
            element.addEventListener('mouseout', handleMouseOut);

            return () => {
                element.removeEventListener('mouseover', handleMouseOver);
                element.removeEventListener('mouseout', handleMouseOut);
            }
        }
    }, [ref.current]);

    return {
        hovered,
        ref
    }
}