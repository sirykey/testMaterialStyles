import React from 'react'
import { logger } from 'redux-logger/src'

function Images ({data}) {
  return (
    <div>
      {data.map(item => {
        return <img src={item}/>

      })}
    </div>
  )
}

export default Images