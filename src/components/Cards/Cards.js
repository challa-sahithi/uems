import React from 'react';
import './cards.css';
import e1 from './e1.jpg';
function Cards (props) {
  return (
    <div>
        <div className="card">
                <img src={props.img} className="card-img-top" alt="..."/>
                <div classNam="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet similique eum vitae perspiciatis quidem labore quas facilis aspernatur temporibus.</p>
                </div>
            </div>
    </div>
  )
}
export default Cards;