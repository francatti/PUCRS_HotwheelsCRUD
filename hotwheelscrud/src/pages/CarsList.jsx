import React, { useEffect, useState } from 'react';
import useCars from '../hooks/useCarsApi';
import {Link} from 'react-router-dom';

export default function CarsList({children}) {
    const {getAllCars, deleteCar} = useCars();
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await getAllCars();
          setCars(data);
          setLoading(false);
          console.log(data);
        } catch (error) {
          console.log("Erro ao carregar os dados dos carros", error, loading);
          setLoading(false);
        }
      };
      fetchData();
    }, [getAllCars, loading]);
    
  

    const handleDelete = async (id) => {
      try {
        await deleteCar(id);
        setCars(cars.filter((car) => car.id === id)
        );
      } catch (error) {
        console.log("Erro ao deletar o carro", error);
      }
    };

    if(loading) {
      return <h1>Carregando...</h1>
    }


    return (
        <div className='flex flex-initial flex-col gap-4 p-8 pt-20'>
        <h1 className='rounded-lg px-3 py-2 text-2xl font-bold'>Lista de carros</h1>
        <p className='rounded-lg px-3 py-2'>Aqui você consegue ver toda a sua coleção de carros</p>
        <>
        <div className="overflow-x-auto flex flex-row items-center justify-between flex-wrap gap-4">

   

            {cars && cars.map((car) => {
                return (
                            <div className="card w-96 bg-[#d21601] text-white shadow-xl" key={car.id}>
                            <div className="card-body">
                              <h2 className="card-title text-bold">Modelo:{car.name}</h2> 
                              <p>Marca: {car.brand}</p>
                              <p>Cor: {car.color}</p>
                              <div className="badge">{car.year}</div>
                              <div className="card-actions justify-end">
                                <button className="btn" onClick={() => handleDelete(car.id)}>Excluir <i class="fa-solid fa-trash text-[#d21601]"></i></button>
                                <Link to={`/cars/${car.id}`}><button className='btn'><i class="fa-solid fa-edit text-white"></i>Editar</button> </Link> 
                              </div>
                            </div>
                          </div>
    
              
                );
            })}
          

   
        </div>
        </>
        
        </div>
    
    );
    }