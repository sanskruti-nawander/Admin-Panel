import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import './Products.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Modal from './Modal'; 
import Popup from './Popup';

function Products() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'AIR STERILIZER CONTROLLER',
      description: 'It is controller for Air sterilizer an filter designed for our client, It operates is filtering process also count filter life in hour and reminds to filter replacement time',
      
      image: 'https://techasiamechatronics.com/wp-content/uploads/2019/08/AIR-STERILZER-CONTROLLER.jpg',
    },
    {
      id: 2,
      title: 'Digital Timer (tA-01T)',
      description: 'Automatic Condenser motor speed Control.Increment & decrements in 16 Voltage level steps for smooth operation of Motor.Settable Initial Voltage Level using preset.Settable increment & decrement time interval using preset with Led indication.Over Voltage and over current protection',
      
      image: 'https://techasiamechatronics.com/wp-content/uploads/2019/08/TIMER.jpg',
    },
    {
      id: 3,
      title: 'Condenser Motor Speed',
      description: 'Automatic Condenser motor speed Control',
      
      image: 'https://techasiamechatronics.com/wp-content/uploads/2019/08/DVCB.jpg',
    },
    {
      id: 4,
      title: 'Metal Halide Lamp Ballast',
      description: 'Automatic Condenser motor speed Control',
      
      image: 'https://techasiamechatronics.com/wp-content/uploads/2019/08/MHL.jpg',
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    console.log('Opening modal for product:', product); // Debugging log
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const saveProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
    closeModal();
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
    },
    {
      name: 'IMAGES',
      selector: (row) => (
        <div className="images-container">
          <img src={row.image} alt={row.title} />
          <button onClick={()=>Popup()}>View image</button>
        </div>
      ),
    },
    {
      name: 'TITLE',
      selector: (row) => (
        row.title
      ),
    },
    {
      name: 'DESCRIPTION',
      selector: (row) => (
        <div className='description-container'>
        {row.description}
        </div>
      ),
      
    },
    
   
    {
      name: 'ACTION',
      cell: (row) => (
        <div>
          <span onClick={() => openModal(row)} style={{ marginRight: '10px', cursor: 'pointer' }}>
            <FaEdit />
          </span>
          <span onClick={() => deleteProduct(row.id)} style={{ cursor: 'pointer' }}>
            <FaTrash />
          </span>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="products-main-container">
        <DataTable columns={columns} data={products} />
      </div>
      <Modal
        show={showModal}
        onClose={closeModal}
        product={selectedProduct}
        onSave={saveProduct}
      />
    </>
  );
}

export default Products;
