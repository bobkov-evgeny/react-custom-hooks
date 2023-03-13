import {useState} from "react";
import {useWindowEvent} from "./useWindowEvent";

export function useWindowScroll() {
    const [scroll, setScroll] = useState({x: 0, y: 0});

    const scrollTo = (newPosition = {x: scroll.x, y: scroll.y}) => {
        const {x, y} = newPosition;

        window.scrollTo(x, y);
    };

    const handleScroll = ({target}) => {
        setScroll({
            x: target.defaultView.scrollX,
            y: target.defaultView.scrollY
        })
    };

    useWindowEvent('scroll', handleScroll);

    return [
        scroll,
        scrollTo
    ]
}