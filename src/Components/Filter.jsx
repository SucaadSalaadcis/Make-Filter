import React, {useState} from "react";
import { images ,btns } from "../Data";

function Filter() {
    // const {active,setActive} =useState(false);
    // const {filterImages,setFilterImages} =useState(null)
    const handleClick = (e)=> {
        // //    console.log(e.target.value)
        // let btnType = e.target.value;
        // setActive(btnType);
        // const newFilterImage = images.filter((item)=> item.category === btnType);
        // btnType === "all" ? setFilterImages(images) : setFilterImages(newFilterImage)
    }
  return (
    <section>
        <div className="wrapper">
            {/* heading */}
            <h1 className="text-center font-bold text-primary text-5xl mb-10">
            Filter Images
            </h1>
            {/* Buttons */}
            <div className="mb-10 grid grid-cols-4 md:grid:-cols-6 gap-4">
                {btns.map((item,index)=>{
                    // distruct data
                    const {name,value} = item;
                    return( <button 
                    value={value}
                    className= "py-3 px-6 border-4 hover:bg-fourth text-sm md:text-lg font-semibold transition-all duration-300 border-solid  border-fourth rounded-full  hover:text-white  gap-5"
                    key={index} 
                    >
                      {name}
                    </button>
                    );
                })}
            </div>

            {/* images */}
            <div className="grid md:grid-cols-3 gap-5">
                {images.map((item,index)=>{
                    // distruct data
                    const {img} = item;
                    return (
                    <div className="border-4 border-solid border-secondary rounded-md overflow-hidden group" key={index}>
                        <img className="group-hover:scale-110 transition-all duration-500 w-full h-full object-cover rounded-md" src={img} alt="demo" />
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Filter