import {useEffect, useRef, useState} from "react";

export function useThrottle(value, interval = 500) {
    const [throttledValue, setThrottledValue] = useState(value);
    const lastExecution = useRef(Date.now());

    useEffect(() => {
         if (Date.now() >= lastExecution.current + interval) {
             lastExecution.current = Date.now();
             setThrottledValue(value);
         } else {
             const timerId = setTimeout(() => {
                 lastExecution.current = Date.now();
                 setThrottledValue(value);
             }, interval);

             return () => clearInterval(timerId);
         }
    }, [value, interval]);

    return throttledValue;
}