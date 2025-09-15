import React from 'react'
import { useParams } from 'react-router-dom'

import Wrappercomp from '@/components/Wrapper.comp'

const Flowpage = () => {
    const {id} = useParams()
  return (
    <div>
        <Wrappercomp/>
    </div>
  )
}

export default Flowpage