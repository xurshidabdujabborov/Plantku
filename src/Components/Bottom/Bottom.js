import React from 'react'
import bot from "../../assets/bottom.png"
import "./Bottom.css"

function Bottom() {
  return (
    <div className='Bottom'>
        <div className="box">
            <div className="card">
                <h2 className="title">Get your favourites plant on <br /> our shop now</h2>
                <button>Visit Shop</button>
            </div>
            <div className="img">
                <img src={bot} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Bottom