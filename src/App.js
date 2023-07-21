import logo from './logo.svg';
import './App.css';
import C01componete from './componentes/C01componete';
import C02contador from './componentes/C02contador';
import C03dobleestado from './componentes/C03dobleestado';
import C04variable from './componentes/C04variable';
import C05operador from './componentes/C05operador';
import C06matriz from './componentes/C06matriz';

function App() {
  return (
    <div>
      <h1> Componente 1 </h1>
      <C01componete />

      <h1> Componente 2 </h1>
      <C02contador />

      <h1> Componente 3 </h1>
      <C03dobleestado />

      <h1> Componente 4 </h1>
      <C04variable />

      <h1> Componente 5 </h1>
      <C05operador />

      <h1> Componente 5 </h1>
      <C06matriz />
    </div>
  );
}

export default App;
