import React from 'react'
import { Play } from "lucide-react";

import "../make/loading.css"

function Loading() {
  return (
    <div className='loading'>
      <h1>please wait for a minute </h1>
      <div className='load'>
        <div className='lod'></div>

      </div>
      <div className='ani'>
        <div className='play'><Play fill="skyblue" size={45} className='myplay' /></div>
        <div className='filler'> <div className='filler2'></div></div>
      </div>
      <p>Loading...</p>

    </div>
  )
}

export default Loading
