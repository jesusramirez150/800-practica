import { useState } from 'react'
import './App.css'
import data from '../db/data.json'

const App = () => {
  const [index, setIndex] = useState(0);
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
    setTextAreaValue(''); // Resetear el contenido del textarea
  };

  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Backspace') {
      // Evitar que la tecla "Retroceso" borre texto
      event.preventDefault();
    }
    // Permitir que la tecla "Suprimir" borre texto
  };

  return (
    <>
      <div className="menu-account-info">
        <label>
          Numero de cuenta:
          <input type="text" value={ data[index].cuenta } readOnly/>
        </label>
        <label>
          Titular:
          <input type="text" value={`${data[index].nombre} ${data[index].apellido_paterno} ${data[index].apellido_materno}`} readOnly />
          {/* <p>{ data[index].nombre } { data[index].apellido_paterno} {data[index].apellido_materno}</p> */}
        </label>
        <label>
          Tarjeta:
          <input type="text" value={ data[index].tarjeta } />
        </label>
      </div>
      <div className="controls">
        <button onClick={handleNext}>Load New Account</button>
      </div>
      <div className="observaciones">
        <label>Observaciones</label>
        <textarea cols="25" rows="3" value={textAreaValue} onChange={handleTextAreaChange} onKeyDown={handleKeyDown}></textarea>
      </div>
      <div className='account-info'>
        <label>
          Meses atraso:
          <input type="text" value={data[index].meses_atraso} readOnly />
        </label>
        <label>
          Fecha corte:
          <input type="text" value={ data[index].fecha_corte } readOnly/>
        </label>
      </div>
      <div className='amount-info'>
        <label>
          Saldo Total:
          <input type="text" value={ data[index].saldo_total} readOnly />
        </label>
        <label>
          Saldo Capital:
          <input type="text" value={ data[index].saldo_capital} readOnly />
        </label>
        <label>
          Minimo a pagar:
          <input type="text" value={ data[index].saldo_minimo} readOnly />
        </label>
        <label>
          Saldo vencido:
          <input type="text" value={ data[index].saldo_vencido} readOnly />
        </label>
        <label>
          X-Day:
          <input type="text" value={ data[index].xday} readOnly />
        </label>
      </div>
      <div className='telephone-info'>
        <span>No sé que poner aqui</span>
        <textarea cols="30" value={`LLamada al ${data[index].telefono}. Tu solo practica no seas como yo xd.`} readOnly></textarea>
      </div>
    </>
  )
}

export default App
