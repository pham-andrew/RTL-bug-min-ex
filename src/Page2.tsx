import React, { FC, useEffect, useState, useContext } from "react";

const Page2: FC = () => {
    const [state, setState] = useState("");

    useEffect(() => {
        (async () => {
            const response = await fetch(`/`);
            const res = await response.json();
            setState(res);
        })();
    }, []);

    return <>{state}</>;
};
export default Page2;
