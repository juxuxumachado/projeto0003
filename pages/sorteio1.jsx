import { useState } from "react"

export default function init(){

    const [count,setCount] = useState(0)
    
    const container = {
        height:"100vh",
        display:"flex",
        alignItems: "center",
        flexDirection:"column",
        justifyContent:"center"
        }

    const contador = {
        width:"70px",
        height:"70px",
        display:"flex",
        fontWeight:"bolder",
        color:"pink",
        backgroundColor:"purple",
        fontSize:"45px",
        flexDirection:"column",
        justifyContent:"center",
        borderRadius:"50%",
        alignItems: "center"
    }
    function aumentar(){
        setCount(count+1)
    }

    function diminuir(){
        setCount(count-1)
    }
    return (
        <div style={container}>
            <span style={contador}>{count}</span>
            <div>
                <button onClick={diminuir}>-</button>
                <button onClick={aumentar}>+</button>
            </div>
        </div>
    )
}