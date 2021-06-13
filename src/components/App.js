import React, { useState } from 'react'
import Qwe from './qwe'
import HomePage from './HomePage'
import Login from './Login'
import Swipableshit from './swipableshit'
import StaticMenu from './staticMenu'
import Menu from './menu'
import StaticWithPopUp from './staticWithPopUp'
import Images from './Images'

function App (props) {
  const [img, setImg] = useState([])

  const onUpload = image => {
    setImg(img.concat(image))
  }
  return (
    <div>
      {/*<StaticWithPopUp/>*/}
      <Login onUpload={onUpload}/>
      <Images data={img}/>
      {/*<Menu/>*/}
      {/*<StaticMenu/>*/}
      {/*<Swipableshit/>*/}
      {/*<Qwe/>*/}
     {/*<HomePage/>*/}
     {/*<Login/>*/}
    </div>
  )
}

export default App