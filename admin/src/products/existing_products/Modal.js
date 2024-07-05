import React, { useEffect, useState } from 'react';
import './Modal.css'; // Ensure you have your own CSS for styling the modal

const Modal = ({ show, onClose, product, onSave }) => {
  const [formData, setFormData] = useState({ ...product });

  useEffect(() => {
    setFormData({ ...product });
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!show) {
    return null; // Render nothing if show prop is false
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input type="text" name="title" value={formData.title || ''} onChange={handleChange} />
          </div>
          <div>
            <label>Description:</label>
            <input name="description" value={formData.description || ''} onChange={handleChange} />
          </div>
          <div>
            <label>Image:</label>
            <input type="file" name="image" onChange={handleImageChange} />
            {imagePreview && (
              <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
            )}
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
