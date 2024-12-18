import React, { useState, useRef } from "react";
import "../Froms.css";
// import { Link } from "react-router";
import Table from "./Table";

const Froms = () => {
  const nextId = useRef(0); 
  const [companyName, setCompanyName] = useState("Google");
  const [location, setLocation] = useState("USA");
  const [contact, setContact] = useState(98764511);
  const [productName, setProductName] = useState("iphone");
  const [price, setPrice] = useState("12");
  const [discount, setDiscount] = useState("5");
  const [productInfo, setProductInfo] = useState([]);
  // console.log(productInfo)

  const handleAddProduct = () => {
    if (productName && price && discount) {
      setProductInfo([
        ...productInfo,
        {
          id: nextId.current++,
          productName,
          price,
          discount,
         
        },
      ]);
      
      setProductName("");
      setPrice("");
      setDiscount("");
    } else {
      alert("Please fill in all product details before adding!");
    }
  };
   

     
    function handleAllDataAtlocal(){
         localStorage.setItem("productName" , productName);
         localStorage.setItem("price" , price);
    }

  return (
    <div className="container">
      <div className="toggle-btn">
        <button>Theme Toggle Button</button>
      </div>

      <div className="form">
        <div className="formFirstBox">
          <input
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            type="text"
            placeholder="Company Name"
          />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            placeholder="Location"
          />
        </div>
        <div className="formSecondBox">
          <input
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            type="number"
            placeholder="Contact"
          />
          <input type="file" placeholder="Logo File Upload" />
        </div>
        <div className="formThirdBox">
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text"
            placeholder="Product Name"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            placeholder="Price"
          />
          <input
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            type="number"
            placeholder="Discount"
          />
          <button onClick={handleAddProduct}>+</button>
        </div>
        {productInfo.map((elem) => (
          <div className="formFourthBox" key={elem.id}>
            <input
              type="text"
              placeholder="Product Name"
              value={elem.productName}
              readOnly
            />
            <input
              type="number"
              placeholder="Price"
              value={elem.price}
              readOnly
            />
            <input
              type="number"
              placeholder="Discount"
              value={elem.discount}
              readOnly
            />
          </div>
        ))}
        <div className="message">
          <button className="btn">Add more</button>
        </div>

        <div className="lastContainer">
          <div className="preview">
            
            <button className="btn" onClick={handleAllDataAtlocal}>Preview</button>
            <Table  productName={productName} price={price} discount={discount} location={location}
             contact={contact} companyName={companyName}
            />
          </div>
           
          <div className="download">
            <button className="btn">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Froms;
