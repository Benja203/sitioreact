import logo from './logo.svg';
import './App.css';
import C01componete from './componentes/C01componete';
import C02contador from './componentes/C02contador';

function App() {
  return (
    <div>
      <h1> Componente 1 </h1>
      <C01componete />

      <h1> Componente 2 </h1>
      <C02contador />
    </div>
  );
}

export default App;
