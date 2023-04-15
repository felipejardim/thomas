import { useState, useEffect } from "react";
//import axios from "axios";

export default function Spot() {
    const [logado, setLogado] = useState(false)
    const [apikeyclient, setapikeyclient] = useState('')


    const autenticar = () => {
        // const clientID = "0ee51d792f624d1bb35bdf9cec584c07";
        // const state = "streaming user-modify-playback-state"

        // const frame = (<iframe title="isso?" name="Login Spotfy" src="https?//felipejardim.dev"/>)
        // axios.get("https://sdk.scdn.co/spotify-player.js")
        // .then(e=>{eval(e.data)}) 
        //   "host": "https://api.spotify.com/v1/melody/v1/check_scope",


        // exemplo de retorno = http://localhost:3000/thomas?code=AQBq1U1NucrWYFsi7gBNrqQ7_bdegLkl7xePVjWUw7bHGadA3DJz0I6c-2Ot4sLdwRGL8B34FP7-aJth76KilkaqTVb1y_QH-u6apCbot7mLBdoil7i-Lw0KMBKJ4FEzOq7JT61AJjjc_ATuHPKWm7_zEw077io5EWcoYe1xueih_PByi_NUg7qROg
        if(apikeyclient){
            window.onSpotifyWebPlaybackSDKReady = () => {
                window.prayer = new window.Spotify.Player({
                    name: 'SPOITYFAI',
                    getOAuthToken: cb => { cb(apikeyclient); },
                    volume: 0.5
                });
    
    
            }
            window.prayer = new window.Spotify.Player({
                name: 'SPOITYFAI',
                getOAuthToken: cb => { cb(apikeyclient); },
                volume: 0.5
            });
            window.prayer.connect()
            setLogado(true)
        }
        else{
            window.link = window.open(
                "https://accounts.spotify.com/authorize?response_type=code&scope=streaming&client_id=0ee51d792f624d1bb35bdf9cec584c07&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fthomas",
                "Logue nesta bagaça"
            )
        }
        
        // while(1){
        //     console.log("ue")
        //     if(window.link.document.url && window.link.document.url.includes('localhost:3000')){
        //         console.log(window.link.document.url)
        //         break;
        //     }
        // }

        console.log("Olá mundo")
        
    }

    return (
        <>
            {logado
                ? ''
                : (<>
                    <input type={"text"} onChange={e => setapikeyclient(e.target.value)} placeholder="vazio para obter token :)" />
                    <button onClick={e => { e.preventDefault(); return autenticar() }}>logar no Spotfy</button>
                </>)
            }
        </>
    )


}
