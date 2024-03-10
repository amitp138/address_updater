import React, { useContext, useState } from "react";
import { AddressContext } from "../../context/AddressContext";
import "./AddressList.css";
import { FaEdit, FaSave, FaTrash, FaTimes } from "react-icons/fa";

const AddressList = () => {
  const { addresses, deleteAddress, updateAddress } =
    useContext(AddressContext);
  const [editedAddress, setEditedAddress] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleEdit = (address) => {
    setEditedAddress({ ...address });
    setShowPopup(true);
  };

  const handleSave = () => {
    const invalidField = validateAddress(editedAddress);
    if (!invalidField) {
      updateAddress(editedAddress._id, editedAddress);
      setEditedAddress({});
      setShowPopup(false);
    } else {
      alert(`Please enter a valid value for the ${invalidField} field.`);
    }
  };

  const validateAddress = (address) => {
    if (address.street.trim() === "") {
      return "Street";
    } else if (address.city.trim() === "") {
      return "City";
    } else if (address.state.trim() === "") {
      return "State";
    } else if (address.zip.trim() === "" || !/^\d{6}$/.test(address.zip.trim())) {
      return "ZIP Code";
    }
    return null; // No invalid fields
  };

  const handleChange = (e, field) => {
    setEditedAddress({ ...editedAddress, [field]: e.target.value });
  };

  const handleDelete = (_id) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this address?"
    );
    if (shouldDelete) {
      deleteAddress(_id);
    }
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>ZIP Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {addresses.map((address) => (
            <tr key={address._id}>
              <td>{address.street}</td>
              <td>{address.city}</td>
              <td>{address.state}</td>
              <td>{address.zip}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(address)}>
                  <FaEdit />
                </button>
                <button className="delete-button" onClick={() => handleDelete(address._id)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div className="close-icon" onClick={handleClose}>
              <FaTimes />
            </div>
            <h3>Edit Address</h3>
            <label>Street</label>
            <input
              type="text"
              value={editedAddress.street}
              onChange={(e) => handleChange(e, "street")}
            />
            <label>City</label>
            <input
              type="text"
              value={editedAddress.city}
              onChange={(e) => handleChange(e, "city")}
            />
            <label>State</label>
            <input
              type="text"
              value={editedAddress.state}
              onChange={(e) => handleChange(e, "state")}
            />
            <label>ZIP Code</label>
            <input
              type="text"
              value={editedAddress.zip}
              onChange={(e) => handleChange(e, "zip")}
            />
            <button className="save-button" onClick={handleSave}>
              <FaSave /> Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddressList;
