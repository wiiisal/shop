import React from 'react'
import Cardd from './Cardd'

const Listcardd = ({searchResults}) => {
  const result=searchResults.map(cardd=><Cardd  Cardd={Cardd}/>)
  const content=result?.length? result : <h1>no Match</h1> 
  return (
    <div>
      {content}
    </div>
  )
}

export default Listcardd
