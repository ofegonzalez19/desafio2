import { useState } from 'react'
import './App.css'
import Registro from './componentes/registro'

function App() {
  const [alert, setAlert] = useState({ msg: "", color: "" });

  return (
    <Registro alert={alert} setAlert={setAlert} />
  );
}

export default App;
