import React from 'react'
import DragNodecomp from './DragNode.comp'

const toolbarItems = [
    {type:"this"},
    {type:"that"},
    {type:"your"}
]
const Toolbarcomp = () => {
  return (
    <div className='flex gap-5'>
        {toolbarItems.map((each, i)=>(
            <div key={i}>
                <DragNodecomp type={each.type}/>
            </div>
        ))}
    </div>
  )
}

export default Toolbarcomp