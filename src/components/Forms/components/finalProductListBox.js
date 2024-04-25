import axios from 'axios';
import React , {useState, useEffect} from 'react';


const FinalProductListBox = ({nameOfListBox}) => {
  const [productData, setProductData] = useState([]);
  
  // Fetch data when the component mounts.
  useEffect(()=>{
    axios.get('https://th-light-store-system.onrender.com/finalProducts')
    .then((response) => {
      setProductData(response.data.allFinalProducts)
    })
      .catch((error)=> {console.log("Error: " + error)});
  } , [nameOfListBox]);

  const selectionData = ()=>{
    return productData.map((item)=>(
      <>
        <option value={item.name} key={item._id}>{item.name}</option>
      </>
    ))
  }

  return (
    <>
    <select name={nameOfListBox} style={{marginRight:"2%"}}>
      <option disabled selected>-- select the priduct --</option>
      {selectionData()}
    </select>
    </>
  )
}

export default FinalProductListBox;
