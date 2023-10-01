import {MutableRefObject, useCallback, useRef} from "react";

export function useDebounce(callback: (...args: unknown[]) => void, delay: number) {
    const timer = useRef() as MutableRefObject<unknown>;

    return useCallback(
        (...args: unknown[]) => {
            if (timer.current) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                clearTimeout(timer.current);
            }
            timer.current = setTimeout(() => {
                callback(...args);
            }, delay);
        },
        [callback, delay],
    );
}
