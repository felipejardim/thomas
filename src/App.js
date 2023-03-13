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
    <div style={{float: "right", width: '400px'}}>
    <p>
        Thomas é a fase exploratória do meu tcc, um sistema onde vários usuários conseguiriam enviar músicas de seus serviços preferidos (spotfy, yt, Apple music, etc) para tocar em uma única playlist
      </p>
      <p>
        Este projeto consite em uma serie de testes para entender o comportamento das apis que o sistema final usará. Não terá um layout bem feito ou código bem organizado, é apenas um teste do que funciona e entender o que precisa pra funcionar cada api usada.
      </p>
      <p>
        O comportamento esperado atualmente é:
      </p>
      <ul>
        <li>botão "logar no spotfy" não funcionar</li>
        <li>ao clicar no botão "mudar" deve trocar o vídeo e tocar automáticamente</li>
        <li>ao terminar o vídeo o prox deve ser carregado e tocar automáticamente</li>
        <li>talvez no seu navegador (Firefox provavelmente terá esse comportamento) carregará o primeiro vídeo pausado, porém basta dar play ou clicar em "mudar" que o comportamento descrito acima deve se manter</li>    
        <li>obviamente os botões em baixo não funcionam :)</li>
      </ul>
    </div>

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
