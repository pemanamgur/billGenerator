import React, { useState } from 'react'
import "../Table.css"

const Table = ({
    location,
    contact,
    companyName,
    productName,
    price,
    discount,
}) => {
        //  let ind = 1;
        // const [infos , setInfos] = useState([]);
        // let newInfos = infos.push(ind++  , productName , price , discount);
                  

    let date = new Date();
     let exactDate = date.toLocaleDateString(); 
  return (
    <div className='bill-container'>
        <div className="innerBillContainer">
            <div className="top-container">
                <div className="top-first">
                    <p>location : {location}</p>
                    <h3 className='c-name'>Company Name {companyName}</h3>
                    <img src="" alt="logo" />
                </div>
                <div className="top-second">
                    <p>Contact : {contact}</p>
                    <p>Date : {exactDate} </p>
                </div>
            </div>
            <div className="bottom-container">
                <table >
                    <thead>
                    <tr>
                        <th>SN</th>
                        <th>ITEM</th>
                        <th>PRICE</th>
                        <th>Discount</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>

                        {/* //Array chayou  :  */}
                        {/* <tr>
                           {
                            infos.map((item)=>(
                                <td key={item}>{item}</td>
                            ))
                           }
                        </tr> */}
                       <tr>
                        <td>{1}</td>
                        <td>{productName}</td>
                        <td>{price}</td>
                        <td>{discount}</td>
                        <td>total</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Table
