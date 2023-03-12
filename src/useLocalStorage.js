import {useCallback, useState} from "react";

export function useLocalStorage(key) {
    const [value, setValue] = useState(() => localStorage.getItem(key));

    const setItem = useCallback((newValue) => {
        localStorage.setItem(key, newValue);
        setValue(newValue);
    }, [key]);

    const removeItem = useCallback(() => {
        localStorage.removeItem(key);
        setValue(null);
    }, [key]);

    return [value, {setItem, removeItem}];
}