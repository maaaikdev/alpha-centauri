import { useState, useEffect } from 'react'

const useScreenSize = () => {
    const [ width, setWidth ] = useState(window.innerWidth); 
    const [ height, setHeigth ] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeigth(window.innerHeight);
    }

    return { width, height };
}

export default useScreenSize
