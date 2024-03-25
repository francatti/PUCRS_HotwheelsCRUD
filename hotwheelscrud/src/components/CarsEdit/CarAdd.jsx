
  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from 'axios';
  import useCars from "../../hooks/useCarsApi";
 
  
  
  function CarAdd() {
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);
    const { data } = useCars(
      `http://localhost:5000/cars/`
    );
  
  
      const [car, setCar] = useState(data || {
          id: new Date().valueOf(),
          name: '',
          brand: '',
          color: '',
          year: ''
        });

  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCar((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const validateCar = (car) => {
        // Verifica se todos os campos estão preenchidos
        for (let key in car) {
          if (car[key] === '') {
            return false;
          }
        }
      
        // Verifica se o ano é um número
        if (isNaN(car.year)) {
          return false;
        }
      
        // Verifica se o ano está dentro de um intervalo aceitável
        const year = parseInt(car.year);
        const currentYear = new Date().getFullYear();
        if (year < 1886 || year > currentYear) {
          return false;
        }
      
        return true;
      };
  
    const handleSaveClick = () => {
      // Aqui você pode fazer uma chamada para a API usando o axios para salvar o postcard
      // Exemplo de como fazer a chamada de API
      if (!validateCar(car)) {
        return (
            alert('Preencha todos os campos corretamente!'),
            setIsSaved(false)
        )
      }

      axios.post("http://localhost:5000/cars", car)
        .then(() => {
          setIsSaved(true);
          navigate("/CarsList");
        })
        .catch((error) => {
          console.log(isSaved);
        });
  
      // Como exemplo, estou apenas definindo a variável isSaved como true e navegando para a lista
      setIsSaved(true);
      navigate("/CarsList");
    };
  
    const handleCancelForm = (e) => {
      e.preventDefault();
      setCar({ id: '', name: '', brand: '', color: '', year: '' });
  }
  
    return (
          
          <div className="flex flex-1 flex-col gap-4 p-8 pt-20">
              <div >
                  <h1 className="rounded-lg px-3 py-2 text-2xl font-bold">Adicionar um carro</h1>
                  <p className="rounded-lg px-3 py-2">Aqui você pode adicionar um novo carro à sua coleção</p>
              </div>
              <form className="relative flex flex-col items-center space-y-5">
                  <div>
                      <label> Nome:
                          <input type="text" className="input input-bordered w-full max-w-xs" name="name" value={car.name}  onChange={handleInputChange}></input>
                      </label>
                  </div>
                  <div>
                      <label> Marca:
                          <input type="text" className="input input-bordered w-full max-w-xs" name="brand" value={car.brand}  onChange={handleInputChange} ></input>
                      </label>
                  </div>
                  <div>
                      <label> Cor:
                          <input type="text" className="input input-bordered w-full max-w-xs" name="color" value={car.color}  onChange={handleInputChange} ></input>
                      </label>
                  </div>
                  <div>
                      <label> Ano:
                          <input type="text" className="input input-bordered w-full max-w-xs" name="year" value={car.year} onChange={handleInputChange} ></input>
                      </label>
                  </div>
                
                      <button className="btn bg-[#d21601] text-white" onClick={handleSaveClick}>Salvar</button>
                      <button className="btn" onClick={handleCancelForm}>Cancelar</button>
               
                  </form>
                  </div>
  
  
        
      );
  };
  

           
  
      
  
  
  
  export default CarAdd;