import React from 'react'

const DragNodecomp = ({type}:{type:string}) => {
    const onDragStart = (e:React.DragEvent<HTMLDivElement>, nodeType:string) =>{
        const appData = {nodeType};
        e.currentTarget.style.cursor = "grabbing";
        e.dataTransfer.setData("application/reactflow", JSON.stringify(appData));
        e.dataTransfer.effectAllowed= "move";
    }
  return (
    <div 
    draggable 
    onDragStart={e=>onDragStart(e, type)}
    onDragEnd={e=>e.currentTarget.style.cursor= 'grab'}
    className='border border-red-500 p-5 text-3xl '>
        {type}
    </div>
  )
}

export default DragNodecomp