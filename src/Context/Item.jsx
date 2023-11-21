import React, { useContext } from 'react'
import UserContext from '../Components/NewComp'
function Item() {
    const value = useContext(UserContext)
  return (
    <>
     <div>Item Component
     <br/>
     {value}
     </div>
    </>
   
  )
}

export default Item

