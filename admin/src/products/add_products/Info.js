import React, { useState } from 'react';
import axios from 'axios';

export default function Info() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price:"",

  });
  const onChange = e => {
    setForm((previous) => {
      let initial = { ...previous };
      initial[`${e.target.name}`] = e.target.value;
      return initial;

    });
    console.log(form)
  };

  const handleSubmit= (e) => {
 e.preventDefault()
 axios.post('http://localhost:3000/products',{
  title:form.title,
    description:form.description ,
    price:form.price,
 })
 .then(response=> console.log(response))
 .catch(err=>console.error(err))

  }

  return (
    <form >
       <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
        <input type="title" className="form-control" id="exampleFormControlInput1" placeholder="Eg:Condenser"  name="title" onChange={onChange} value={form.title} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description of the product</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="description" onChange={onChange} value={form.description}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Price of the Product</label>
        <input type="price" className="form-control" id="exampleFormControlInput1" placeholder="Eg:₹2000" name="price" onChange={onChange} value={form.price}/>
      </div>
      <button type="button" class="btn btn-primary" onSubmit={(e)=>handleSubmit(e)}>Add This Product</button>

      
    </form>
  )
}

