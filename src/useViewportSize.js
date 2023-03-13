import {useState} from "react";
import {useWindowEvent} from "./useWindowEvent";

export function useViewportSize() {
    const [viewportSize, setViewportSize] = useState({height: 0, width: 0});
    const {height, width} = viewportSize;

    const handleResize = ({target}) => {
        setViewportSize({
            height: target.innerHeight,
            width: target.innerWidth
        })
    };

    useWindowEvent('resize', handleResize);

    return {
        height,
        width
    };
}