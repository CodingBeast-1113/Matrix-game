import React, { useState } from 'react'

const Matrix = () => {

  const [state,setState]=useState([])

    const ChangeColor=(e)=>{
      const btn=document.querySelector(`#${e.target.id}`)
      btn.style.backgroundColor="green"
      if (!state.includes(btn)){
        setState([...state,btn])
      }
    }
    if (state.length===9){
      console.log(state)
    state.map((item,index)=>{
      setTimeout(()=>{
        item.style.backgroundColor="orange"
      },2000*index)
    })
    }
  return (
    <>
          <div className="martix-container">
      <div className="matrix-board">
        <div className="matrix-box"  id='b1' onClick={ChangeColor}></div>
        <div className="matrix-box " id='b2' onClick={ChangeColor}></div>
        <div className="matrix-box"  id='b3' onClick={ChangeColor}></div>
        <div className="matrix-box "  id='b4' onClick={ChangeColor}></div>
        <div className="matrix-box "  id='b5' onClick={ChangeColor}></div>
        <div className="matrix-box "  id='b6' onClick={ChangeColor}></div>
        <div className="matrix-box "  id='b7' onClick={ChangeColor}></div>
        <div className="matrix-box"  id='b8' onClick={ChangeColor}></div>
        <div className="matrix-box"  id='b9' onClick={ChangeColor}></div>
      </div>
    </div>
    </>
  )
}

export default Matrix
