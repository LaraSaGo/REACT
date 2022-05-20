import React, { useEffect, useState } from "react";

const Appi = () => {
    const [count,setCount] = useState(0);
    useEffect(() => {
        document.title = `Has clicado ${count} times`
    });

    return (
        <div>
            <p>Cliclaste {count} veces</p> 
            <button onClick={() => setCount(count + 1) }>
                Click aqui
            </button>
        </div>
    )
}
export default Appi;