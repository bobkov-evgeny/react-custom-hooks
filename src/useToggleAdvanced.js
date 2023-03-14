import {useReducer} from 'react';

const ReducerActionTypes = {
    TOGGLE: 'toggle',
    SET: 'set',
};

const toggleReducer = (state, action) => {
    switch (action.type) {
        case ReducerActionTypes.TOGGLE:
            return [...state.slice(1, state.length), state[0]];
        case ReducerActionTypes.SET:
            return [action.payload, ...state.filter(val => val !== action.payload)];
        default:
            return state;
    }
};

export function useToggleAdvanced(values) {
    const [state, dispatch] = useReducer(toggleReducer, values);

    const toggleValue = (newValue = null) => {
        if(newValue) {
            dispatch({type: ReducerActionTypes.SET, payload: newValue});
        } else {
            dispatch({type: ReducerActionTypes.TOGGLE});
        }
    };

    return [state[0], toggleValue]
}