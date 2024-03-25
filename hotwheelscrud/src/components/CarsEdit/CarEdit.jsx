import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useCars from '../../hooks/useCarsApi';

const CarEdit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);
    const { getCar, updateCar } = useCars();
    const [car, setCar] = useState(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if(!isDataLoaded) {
                    const carData = await getCar(String(id));
                    console.log('----------->', carData);
                    setCar(carData);
                    setIsDataLoaded(true);
                }
            } catch (error) {
                console.log("Erro ao carregar os dados do carro", error);
            }
        };

        fetchData();
        }, [isDataLoaded, getCar, id]);

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

    const handleSaveClick = async () => {

        if (!validateCar(car)) {
            return (
                alert('Preencha todos os campos corretamente!'),
                setIsSaved(false)
            )
          }

        try {
            await updateCar(car);
            setIsSaved(true);
            navigate("/CarsList");

        } catch (error) {
            console.log("Erro ao salvar o carro", error, isSaved);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSaveClick();
    };


    if (!car) {
        return <h1>Carro não encontrado!</h1>
    }

    return (
            <div className="flex flex-1 flex-col gap-4 p-8 pt-20">
              <div >
                  <h1 className="rounded-lg px-3 py-2 text-2xl font-bold">Editar um carro</h1>
                  <p className="rounded-lg px-3 py-2">Aqui você pode editar o carro da sua coleção</p>
              </div>
              <form className="relative flex flex-col items-center space-y-5" onSubmit={handleFormSubmit}>
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
                
                      <button className="btn bg-[#d21601] text-white">Salvar</button>
                      
               
                  </form>
                  </div>



    )
}

export default CarEdit;