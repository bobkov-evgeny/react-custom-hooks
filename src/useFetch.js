import {useCallback, useEffect, useReducer} from "react";

const initialState = {
    data: null,
    error: null,
    isLoading: false
};

const ReducerActionTypes = {
    LOADING: 'loading',
    SET_FETCHED_DATA: 'setFetchedData',
    SET_ERROR: 'setError'
};

const fetchReducer = (state, action) => {
    switch (action.type) {
        case ReducerActionTypes.LOADING:
            return {...initialState, isLoading: action.payload};
        case ReducerActionTypes.SET_FETCHED_DATA:
            return {...initialState, data: action.payload};
        case ReducerActionTypes.SET_ERROR:
            return {...initialState, error: action.payload};
        default:
            return state;
    }
};

export function useFetch(urlString) {
    const [state, dispatch] = useReducer(fetchReducer, initialState);
    const {data, error, isLoading} = state;

    const fetchData = useCallback(async (config = null) => {
        dispatch({type: ReducerActionTypes.LOADING, payload: true});

        const url = new URL(urlString);

        if(config?.params) {
            for(let param in config.params) {
                url.searchParams.append(param, config.params[param]);
            }
        }

        try {
            const response = await fetch(url);

            if(response.ok) {
                const data = await response.json();
                dispatch({type: ReducerActionTypes.SET_FETCHED_DATA, payload: data});
            }
        } catch (e) {
            dispatch({type: ReducerActionTypes.SET_ERROR, payload: e});
        }
    }, [urlString]);

    const refetch = useCallback((config) => {
        fetchData(config);
    }, [fetchData]);

    useEffect(() => {
        if(urlString) {
            fetchData();
        }
    }, [urlString]);

    return {
        data,
        error,
        isLoading,
        refetch
    };
}