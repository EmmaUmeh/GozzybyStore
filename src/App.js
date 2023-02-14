import React,{useState,useEffect} from 'react';
import './App.css';
import FlashSales from './Component/FlashSales';
import NavbarComponent from './Component/NavbarComponent';
import { Navbardata } from './Component/NavbarComponent';
import { Spinner } from '@chakra-ui/react';
import products from "../src/products.json"


function App() {
  const [dataproducts,setDataProducts] = useState([]);
  const [loading,setLoading] = useState(false);


  const FetchFakeApi = async () => {
      const FakeStoreUrl = products;
      const Fetchurl = await fetch(FakeStoreUrl);
  
      const Fetchwait = await Fetchurl.json();

      if(Fetchwait){
        setDataProducts(Fetchwait)
      }
  
  }
  setTimeout(() =>{
    setLoading(true)
  },1000)
  
  useEffect(() => {
  
  FetchFakeApi()
  },[])
  
  return (
    <div className="App">
      <NavbarComponent Navholders={Navbardata}/>
      {loading
        ?
        <FlashSales products={products}/>
        :
        <div style={{ display:"flex",justifyContent:"center",alignItems:"center",marginTop:"150px"}}>
            <Spinner size='xl'/>
        </div>
      }
    
    </div>
  );
}

export default App;
