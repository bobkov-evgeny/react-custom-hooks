import {useTimeout} from "./useTimeout";
import {useEffect} from "react";

export function useDebounce(callback, delay, dependencies) {
    const { reset, clear } = useTimeout(callback, delay);

    useEffect(reset, [...dependencies, reset]);
    useEffect(clear, []);
}