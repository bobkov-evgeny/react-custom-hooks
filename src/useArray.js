import {useState} from "react";

export function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    const push = (element) => {
        setArray(prevState => [...prevState, element]);
    };

    const filter = (callback) => {
        setArray(a => a.filter(callback))
    }

    const update = (index, newElement) => {
        setArray(a => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length)
        ]);
    };

    const clear = () => {
        setArray([]);
    };

    const remove = (index) => {
        setArray(a => [
            ...a.slice(0, index),
            ...a.slice(index + 1, a.length)
        ])
    }

    return [array, {
        push,
        update,
        filter,
        remove,
        clear
    }]
}