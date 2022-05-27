import React, { useEffect, useState } from "react";

const Input = ({changetext}) => {
    return <input type="text" name="" id="" onChange={(e) => {changetext(e.target.value)}}/> 
}
const Escribe = ({text}) => {
    return <p>{text}</p>
}
const Appi = () => {
    const [count,setCount] = useState(0);
    const [texto, setTexto] = useState("")

    useEffect(() => {
        document.title = `Has clicado ${count} times`
    }, [count] );

    const setText = (value) => {
        setTexto(value)
    }

    return (
        <div>
            <p>Cliclaste {count} veces</p> 
            <button onClick={() => setCount(count + 1) }>
                suma 1
            </button>
            <button onClick={() => setCount(count - 1) }>
                resta 1
            </button>
            <Input changetext={setText}/>
            <Escribe text={texto}/>
        </div>
    )
}
export default Appi;