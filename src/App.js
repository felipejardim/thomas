import './App.css';
import Spot from './components/Spot'
import Yt from './components/Yt';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function App() {
  const srcTest = ['gjLptl3TEeM', 'OfR6_V91fG8', '4tppVMG7rHM']

  const [music, setMusic] = useState(srcTest[0])
  const [count,setCount] = useState(0);

  useEffect(()=>{
    setMusic(srcTest[count%srcTest.length]);
    console.log("teste")
  })


  return (
  <>
    <header>
      <p>Thomas</p>
    </header>

    <Spot />
    <Yt src={music} terminou={()=>{setCount(count+1)}}/>

    <button onClick={e => {setCount(count+1)}} >mudar</button>

    <footer>
      <a href='href://#'>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </a>      
      <a href='href://#'>
        <FontAwesomeIcon icon={faCirclePlay} />
      </a>      
      <a href='href://#'>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </a>
    </footer>
  </>
  );
}

export default App;
