import './App.css';

import Conversor from './components/Conversor';

function App() {
  return (
    <div className="App">
      <div className="linha">
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      </div>
    </div>
  );
}

export default App;
