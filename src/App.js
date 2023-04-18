import './App.css';
import Spot from './components/Spot'
import Yt from './components/Yt';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay, faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

function App() {
  // eslint-disable-next-line
  const srcTest = ['gjLptl3TEeM', 'OfR6_V91fG8', '4tppVMG7rHM']

  const [music, setMusic] = useState(srcTest[0])
  const [count,setCount] = useState(0);

  useEffect(()=>{
    setMusic(srcTest[count%srcTest.length]);
    console.log("teste")
  }, [srcTest, count] )


  return (!document.location.search ?
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
      <h4>privacidade</h4>
      <p>Ao usar esse site você concorda com os termos das ferramentas externas utilizadas aqui (como os termos de uso do YouTube e Spotify). O site não armazena nenhum dado e sequer tentará coletar dados por si prórpio, o mesmo não poderá ser dito pelas APIs usadas e deve ser consultadas para entender o que é armazenado e compartilhado para terceiros.</p>
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
  </> : <>
    <h1>copie o texto e feche a aba</h1>
    <p>{document.location.search.slice(document.location.search.search('=')+1)}</p>
    <button onClick={()=>{window.close()}}>fechar aba chata</button>
  </>
  );
}

export default App;
