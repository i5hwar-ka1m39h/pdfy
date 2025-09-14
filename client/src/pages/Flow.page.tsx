import React from 'react'
import { useParams } from 'react-router-dom'
import ReactflowComp from '../components/Reactflow.comp'

const Flowpage = () => {
    const {id} = useParams()
  return (
    <div>
        <h1>Id is  {id}</h1>
        <ReactflowComp/>
    </div>
  )
}

export default Flowpage