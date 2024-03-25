import React from 'react';
import { useParams } from 'react-router-dom';
import CarAdd from '../components/CarsEdit/CarAdd';

const AddCar = ({cars}) => {
    const { id } = useParams();

    return (
        <CarAdd/>
    )
}

export default AddCar;