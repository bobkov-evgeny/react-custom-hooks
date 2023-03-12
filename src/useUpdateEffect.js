import {useEffect, useRef} from "react";

export function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(true);
    
    useEffect(() => {
        if(firstRenderRef.current === true) {
            firstRenderRef.current = false;
            return;
        }


       return callback();
    }, dependencies);
}