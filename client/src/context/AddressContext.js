import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/addresses');
        setAddresses(response.data);
      } catch (error) {
        console.error('Error loading addresses:', error);
      }
    };

    fetchAddresses();
  }, []);

  const deleteAddress = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete/${id}`);
      const updatedAddresses = addresses.filter(address => address._id !== id);
      setAddresses(updatedAddresses);
    } catch (error) {
      console.error('Error deleting address:', error);
    }
  };

  const addAddress = async (newAddress) => {
    try {
      const response = await axios.post('http://localhost:5000/api/add', newAddress);
      setAddresses([...addresses, response.data.address]);
    } catch (error) {
      console.error('Error adding address:', error);
    }
  };

  const updateAddress = async (id, updatedAddress) => {
    try {
      await axios.put(`http://localhost:5000/api/update/${id}`, updatedAddress);
      const updatedAddresses = addresses.map(address =>
        address._id === id ? { ...address, ...updatedAddress } : address
      );
      setAddresses(updatedAddresses);
    } catch (error) {
      console.error('Error updating address:', error);
    }
  };

  return (
    <AddressContext.Provider value={{ addresses, addAddress, deleteAddress, updateAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
