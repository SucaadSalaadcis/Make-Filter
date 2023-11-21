import React,{useState, useEffect} from 'react'
function TestComp() {
    const [value , setValue] = useState('')
    const [name , setName] = useState('suu')
    const handleChnage =() =>{
        setName("susu")
    }

    useEffect(()=>{
        console.log("This is useEffect")
    },[name,value])// Runs of the first render and any time any dependency value changes
  return (
    <>
    <input type="text" className='rounded-lg text-lg 
    border-4 border-solid border-fourth mt-3 ml-10' 
    onChange={(e) => setValue(e.target.value)} />
    {value}
    <button onClick={handleChnage} className='border-4 border-solid
     border-fourth rounded-lg text-lg font-semibold ml-5'>Change</button>
   <span className='ml-2'> {name}</span>
    </>
  )
}
export default TestComp;

