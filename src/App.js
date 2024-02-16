
import './App.css';
import Perfil from './componentes/Perfil';


function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Mis programadores son</h1>

        <Perfil
        nombre='BRAIS MOURE'
        pais='ESPAÑA'
        imagen='brais'
        cargo='Ingeniero de software'
        empresa='Fundador de Moure Dev'
        resena='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the leap into electronic typesetting remaining essentially'
        />

        <Perfil
        nombre='BRAIS MOURE'
        pais='ESPAÑA'
        imagen='facundo'
        cargo='Ingeniero de software'
        empresa='Fundador de Moure Dev'
        resena=' It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
        />




      </div>

      
    </div>
  );
}

export default App;
