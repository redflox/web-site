import { useEffect, type RefObject } from "react";

function useFocusOnKeyPress(inputRef: RefObject<HTMLInputElement>) {
    useEffect(() =>{
        const handlerGlobalKeyDown = (e: KeyboardEvent) => {
            if (e.ctrlKey || e.metaKey) {
                return;
            }
            if(inputRef.current) {
                inputRef.current.focus();
            }

        };
        document.addEventListener("keydown", handlerGlobalKeyDown);
        return () => {
            document.removeEventListener("keydown", handlerGlobalKeyDown);
        };
    }, [inputRef]);
}

export default useFocusOnKeyPress;