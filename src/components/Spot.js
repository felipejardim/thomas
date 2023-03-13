import { useState } from "react";

export default function Spot(){
    const [logado, setLogado] = useState(false)


    const autenticar = ()=>{
        // const clientID = "0ee51d792f624d1bb35bdf9cec584c07";
        // const state = "streaming user-modify-playback-state"

        // const frame = (<iframe title="isso?" name="Login Spotfy" src="https?//felipejardim.dev"/>)


        console.log("Olá mundo")
        setLogado(true)
    }

    return (
        <>
            { logado 
            ? '' 
            : <button onClick={e=>{e.preventDefault(); return autenticar()}}>logar no Spotfy</button>
            }

{/* <iframe title="isso?" name="Login Spotfy" width={"50%"} height={"500vh"}  src="https://felipejardim.dev"/> */}

        </>
    )


}
