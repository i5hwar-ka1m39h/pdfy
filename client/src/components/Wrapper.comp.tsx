import React from 'react'
import Toolbarcomp from './Toolbar.comp'
import ReactflowComp from './Reactflow.comp'

const Wrappercomp = () => {
  return (
    <div>
        {/* toolbar */}
        <div>
            <Toolbarcomp/>
        </div>

        {/* flowComp and the selector  */}
        <div>
            <ReactflowComp/>
        </div>
    </div>
  )
}

export default Wrappercomp