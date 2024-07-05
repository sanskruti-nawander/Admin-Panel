import React from 'react'
import { useState } from 'react';
import {MdCloudUpload, MdDelete} from 'react-icons/md';
import {AiFillFileImage} from 'react-icons/ai';
import "./Image.css";
function Image() {
  const [image, setImage]=useState(null)
  const[fileName, setFileName]=useState("No selected file")
  return (
    <div className="form-container" >
        <form  action="/upload" method="POST" enctype="multipart/form-data  " onClick={()=>document.querySelector(".input-field").click()}>
        <input type="file" accept="image/*" className='input-field' hidden
        onChange={({target:{files}})=>{files[0] && setFileName(files[0].name)
          if(files){
            setImage(URL.createObjectURL(files[0])) 
          }
        }}
        />
        {
          image ? 
          <img src={image} width={150} height={150} alt={fileName}/>
          : 
          <div className='d-flex align-items-center'>
          <MdCloudUpload color="#1475cf" size={60} />
          <p>Browse Files to Upload</p>
          </div>
        }
      </form>
      <section className='uploaded-row'>
        <AiFillFileImage color='#1475cf'/>
        <span className='upload-content'>
          {fileName}
          <MdDelete onClick={()=>{
            setFileName("No selected File")
            setImage(null)
          }}/>
        </span>
      </section>
    </div>
  )
}

export default Image
