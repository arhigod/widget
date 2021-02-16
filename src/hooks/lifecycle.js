import { useEffect, useRef } from 'react';

const useComponentDidMount = (callback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { callback(); }, []);
};

const useComponentDidUpdate = (callback, memo) => {
    const mounted = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            callback();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, memo);
};

const useComponentDidUnmount = (callback, memo) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => callback, memo);
};

export { useComponentDidMount, useComponentDidUpdate, useComponentDidUnmount };
