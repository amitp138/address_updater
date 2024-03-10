import React, { useContext, useState } from 'react';
import { AddressContext } from '../../context/AddressContext';
import { useNavigate } from 'react-router-dom';
import './AddressForm.css';

const AddressForm = () => {
  const { addresses, addAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  const [newAddress, setNewAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: ''
  });

  const handleChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  // Function to check for duplicate address
  const checkForDuplicate = (address) => {
    for (let i = 0; i < addresses.length; i++) {
      const existingAddress = addresses[i];
      if (
        existingAddress.street === address.street &&
        existingAddress.city === address.city &&
        existingAddress.state === address.state &&
        existingAddress.zip === address.zip
      ) {
        return true; // Duplicate address found
      }
    }
    return false; // No duplicate address found
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!newAddress.street || !newAddress.city || !newAddress.state || !newAddress.zip) {
      alert('Please fill in all fields');
      return;
    }

    // Check for duplicate address
    if (checkForDuplicate(newAddress)) {
      alert('This address already exists');
      return;
    }

    // More validation logic can be added here, such as checking ZIP code format

    addAddress(newAddress);
    setNewAddress({ street: '', city: '', state: '', zip: '' });
    navigate('/');
  };

  return (
    <div className="address-form-container">
      <h2>Add New Address</h2>
      <form onSubmit={handleSubmit} className="address-form">
        <input
          type="text"
          name="street"
          value={newAddress.street}
          placeholder="Street"
          onChange={handleChange}
          className="address-input"
          required // HTML5 form validation: Field is required
        />
        <input
          type="text"
          name="city"
          value={newAddress.city}
          placeholder="City"
          onChange={handleChange}
          className="address-input"
          required
        />
        <input
          type="text"
          name="state"
          value={newAddress.state}
          placeholder="State"
          onChange={handleChange}
          className="address-input"
          required
        />
        <input
          type="text"
          name="zip"
          value={newAddress.zip}
          placeholder="ZIP Code"
          onChange={handleChange}
          className="address-input"
          required
          pattern="\d{6}" // HTML5 form validation: ZIP Code must be 5 digits
          title="ZIP Code must be 6 digits" // Error message
        />
        <button type="submit" className="submit-button">Add Address</button>
      </form>
    </div>
  );
};

export default AddressForm;
