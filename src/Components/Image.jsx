import React, { useState } from 'react'
import menu from '../../src/Data'

function Image() {
    const [items, setItems] = useState(menu);

    const fiterItems = (cateItem) =>{
        console.log(cateItem)
    const upadatedItems = menu.filter((cutElem)=>{
        return cutElem.category === cateItem;
    });
       setItems(upadatedItems);
    }
  return (
    <>
 <div className="wrapper">

    {/* heading */}
    <h1 className="text-center font-bold text-primary text-5xl mb-10">Filter Images</h1>

      {/* Buttons */}
      <div className="grid grid-cols-4 md:grid:-cols-6 gap-4">
        <input className= "py-3 px-6 border-4 text-sm md:text-lg font-semibold transition-all duration-300 border-solid  border-fourth rounded-full  hover:text-white  gap-5"
        onClick={()=> fiterItems('Laptop')}
        />Laptop
        <button className= "py-3 px-6 border-4 hover:bg-fourth text-sm md:text-lg font-semibold transition-all duration-300 border-solid  border-fourth rounded-full  hover:text-white  gap-5"
        onClick={()=> fiterItems('Nature')}   
        >Nature</button>
        <button className= "py-3 px-6 border-4 hover:bg-fourth text-sm md:text-lg font-semibold transition-all duration-300 border-solid  border-fourth rounded-full  hover:text-white  gap-5"
        onClick={()=> fiterItems('Cat')} 
        >Cat</button>
        <button className= "py-3 px-6 border-4 hover:bg-fourth text-sm md:text-lg font-semibold transition-all duration-300 border-solid  border-fourth rounded-full  hover:text-white  gap-5"
         onClick={()=> setItems(menu)} 
        >All</button>
      </div>

       {/* images */}
       <div className="grid md:grid-cols-3 gap-5" >
           {/* <div className="border-4 border-solid border-secondary rounded-md overflow-hidden group"> */}
       {items.map((elem,index)=>{
           const {img,category,price} = elem;
           return(
            <>
          <div key={index} >
            <div className='border-4 border-solid border-secondary rounded-md overflow-hidden group'>

            <img src={img} alt="demo" 
            className='ml-0 mt-0 rounded-md group-hover:scale-110 transition-all duration-500 w-full h-full object-cover  '/>
            </div>

            <p>{category}</p>
            <h1>{price}</h1>
        </div>
            </>
           )
       })}
        </div>
       
       {/* </div> */}
 </div>
    </>
  )
}

export default Image;