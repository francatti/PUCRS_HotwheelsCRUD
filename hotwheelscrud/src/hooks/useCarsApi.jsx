
import axios from 'axios';

const useCars = () => {

  const getAllCars = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cars/`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getCar = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/cars/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateCar = async (car) => {
    console.log(car)
    try {
      await axios.put(`http://localhost:5000/cars/${car.id}`, car);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { getAllCars, getCar, updateCar, deleteCar };

};

export default useCars;