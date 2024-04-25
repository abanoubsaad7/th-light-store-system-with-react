import React , {useState, useEffect} from 'react';
import axios from 'axios';
const MaterialsListBox = ({nameOflistBox}) => {
  const [materialsData, setMaterialsData] = useState([]);
  
  // Fetch data from the server when component mounts.
  useEffect(()=>{
    axios.get('https://th-light-store-system.onrender.com/matrials')
      .then((response)=>{
        console.log('response :>> ', response.data.allMatrials);
        setMaterialsData(response.data.allMatrials)
      })
  },[nameOflistBox])
  const selectionData = ()=>{
    return materialsData.map((item)=>(
      <>
        <option value={item.name} key={item._id}>{item.name}</option>
      </>
    ))
  }
  
  return (
    <>
    <select name={nameOflistBox}>
      <option disabled selected>--select the material--</option>
      {selectionData()}
    </select>
    </>
  )

}

export default MaterialsListBox;
