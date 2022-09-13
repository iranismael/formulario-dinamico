import React, {useState} from 'react';

import './App.css';

function App() {

  const [inputFields, setInputFields] = useState([
    {name: ''}
  ]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }


  //Funcion valores de Input
  const handleChangeInput = (index, event) => {
    const  values  = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);
  }

  //Funcion Agregar elementos
  const handleAddFields = () =>{
    setInputFields([...inputFields, {name:''}])
  }
  
   //Funcion Eliminar Elementos
  const handleDeleteFields = (index) =>{
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  return (
    <div className="WrapContainer">
      <header className='header-app'>
      </header>

      <section className='section-title'>
        <h2>Formulario Dinámico</h2>
      </section>

      <div className='content-elements'>
        <div className='box box-inputs'>
          <h2>Agrega elementos a tu formulario</h2>
          <div className='box-elements'>
            <p className='label-input'>Campo de texto <button className='btn-add' onClick={() => handleAddFields()}>Agregar </button></p>
          </div>
        </div>
        <div className='box box-form'>
          <h2>Formulario</h2>
          <div className='box-elements'>
            <form onSubmit={handleSubmit}>
                {inputFields.map((inputField, index) => {
                  return(
                    <div key={index}>
                      <input 
                        type="text"
                        name="name"
                        placeholder='Nombre'  
                        value={inputField.name}
                        onChange={event =>handleChangeInput(index, event)}
                      />
                      <button onClick={() => handleDeleteFields(index)}>Eliminar</button>
                  </div>
                  )
                  })}
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
