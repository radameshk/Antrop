import Antropotec from'./components/Antropotec.js';
import './App.css';
import Boton from './components/Boton';
import Contador from'./components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics( numClics + 1 );
  }

  const reiniciarContador = () => {
    setNumClics('0');
  }

  return (
    <div className="App">
      <div className= 'contenedor principal'>
        <Contador numClics= {numClics}/>
        <Boton
        texto='Clic'
        esBotondeClic={true} 
        manejarClic={manejarClic} />
        <Boton
        texto='Reiniciar'
        esBotondeClic={false}
        manejarClic={reiniciarContador}/>


      <h1>Antropologia de la tecnologia y Antropologia Ambiental</h1>
      <Antropotec
      nombre='Antropologia'
      imagen='antropologia'
      texto='La antropologia social y cultural abordan recientemente temas relativos a la degradacion planetaria, la era denominada Antropoceno, a partir de dos vectores analiticos importantes para su estudio, la nocion relacional de ambiente y una vision critica sobre la tecnologia'/>
      <Antropotec
      nombre='Tecnologia'
      imagen='tecnologia'
      texto='Una vision critica de la tecnologia reconoce en principio la primacia cognitiva y cultural de la tecnica; por otro lado, tal caracter relacional permite situar los insumos de la tecnologia mas alla del ambito de la tecnociencia'/>
      <Antropotec
      nombre='Ambiente'
      imagen='ambiente'
      texto='En la medida que la vision relacional de la tecnologia involucra la dinamica del cuerpo con el medio favorable, la nocion de ambiente resulta atinente. Lejos de establecerse como una postura monolitica como entorno objetivo con propiedades fisicas, o como una simple construccion social, una nocion dinamica de ambiente posibilita una vision dialectica que conecta directamente con los aportes antropologicos'
      />
      </div>
    </div>
  );
}

export default App;
