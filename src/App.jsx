import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  async function fetchData() {
    try {
      const res = await fetch(
        "https://car-rental-server-kohl.vercel.app/cars/limit"
      )
      const data = res.json();
      return(data)
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    console.log(fetchData());
  })

  const [car,setCar]=useState([]);
  useEffect(()=>{
    const fetchCar=async()=>{
      try{
        const res= await axios.get('https://car-rental-server-kohl.vercel.app/cars/limit')
        setCar(res.data)
        console.log(res);
      }catch(err){
        console.log(err);
      }
    }
    fetchCar()
  },[])
  console.log(car);
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
