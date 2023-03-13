// import axios from "axios"
import YouTube from "react-youtube"


export default function Yt(props){

    // window.a = axios.get("https://www.youtube.com/iframe_api", {mode: "cors"})

    return(
        <>
            <div id="algo">
                <YouTube videoId={props.src}  opts={{playerVars:{autoplay: 1}}} onStateChange={e=>{if(0 === e.target.getPlayerState()){props.terminou()}}} />
            </div>
        </>
    )
}