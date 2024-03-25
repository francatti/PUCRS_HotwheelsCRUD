import React from 'react';
import { useParams } from 'react-router-dom';
import CarEdit from '../components/CarsEdit/CarEdit';

const Car = ({ cars }) => {
  const { id } = useParams();

  return (
    <div>
      <CarEdit car={cars}/>
    </div>
  );
};

export default Car;