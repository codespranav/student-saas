import { useState, useEffect } from "react";

export const useHasBrowseer = ()=>{
    const [hasBrowser, setHasBrowser] = useState(false);
    useEffect(() => {
        setHasBrowser(typeof window !== "undefined");
    }, []);

    return hasBrowser;
}
