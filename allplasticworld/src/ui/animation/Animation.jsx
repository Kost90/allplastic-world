import React from 'react'
import Bounce from '../../components/animations/bounce/Bounce'
import Canvascomponent from '../../components/animations/bounce/Canvas'
import Plastiitems from '../../components/animations/plasticsitems/Plastiitems'

function Animation() {
  return (
    <div className="relative h-44 md:h-60 lg:h-72 flex items-baseline">
        {/* <Plastiitems/>  */}
        <Canvascomponent/>
        <div className="p-2 md:p-4 border-2 rounded-lg h-5 md:w-96 flex justify-between items-center relative w-40 border-double lg:w-1/3 outline-dashed outline-sky-400 outline-2">
          <div className="w-4 rounded-full bg-slate-200 border-1 outline-dashed outline-sky-400 outline-2" style={{height:"inherit"}}></div>
          <div className="w-4 rounded-full bg-slate-200 border-1 outline-dashed outline-sky-400 outline-2" style={{height:"inherit"}}></div>
        </div>
    </div>
  )
}

export default Animation