import React, { FC, useState, useEffect } from "react";

const Page1: FC = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch(`/`);
            const res = await response.json()
            setState(res)
        })();
    }, []);

    return (
        <>
            {state.map(() => (
                <>hello world</>
            ))}
        </>
    );
};
export default Page1;
