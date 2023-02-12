import React from 'react'
import e1 from './e1.jpg';
import e2 from './e2.jpeg';
import e3 from './e3.jpeg';
import p1 from './past1.jpeg';
import p2 from './past2.jpg';
import p4 from './past4.jpg';
import p5 from './past5.jpg';
import p6 from './past6.jpg';
import './events.css';


import Cards from '../../components/Cards/Cards';
import Verticalnav from '../../components/verticalnav/Verticalnav';
function Events() {
    const car={
        
    }
  return (
    <div>
<div className="events" style={{marginLeft:"3%"}}>
        <h2 className="center">Upcoming Events</h2>
        <br/>
        <div className="row">
        <div className="col-lg-3">
            <Cards img={e1} title="Event-1"/>
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={e2} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Event-2</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati eveniet deleniti inventore temporibus non vitae ducimus iure! Adipisci, velit.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={e3} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Event-3</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime harum itaque accusantium deserunt cumque. Laboriosam vel labore natus voluptatibus magnam?</p>
                    
                </div>
            </div>
        </div>        
    </div>
    <hr/>
    <h2 className="center">Past events</h2>
    <br/>
    <div className="row">
        <div className="col-lg-3">
            <div className="card">
                <img src={p1} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Event-1</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet similique eum vitae perspiciatis quidem labore quas facilis aspernatur temporibus.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={p2} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Event-2</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati eveniet deleniti inventore temporibus non vitae ducimus iure! Adipisci, velit.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={e1} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Event-3</h5>
                    <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime harum itaque accusantium deserunt cumque. Laboriosam vel labore natus voluptatibus magnam?</p>
                    
                </div>
            </div>
        </div> 
        <div className="col-lg-3">
            <div className="card">
                <img src={p4} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Event-1</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet similique eum vitae perspiciatis quidem labore quas facilis aspernatur temporibus.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={p5} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Event-1</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet similique eum vitae perspiciatis quidem labore quas facilis aspernatur temporibus.</p>
                </div>
            </div>
        </div>
        <div className="col-lg-3">
            <div className="card">
                <img src={p6} className="card-img-top" alt="..."/>

                <div className="card-body">
                    <h5 className="card-title">Event-1</h5>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet similique eum vitae perspiciatis quidem labore quas facilis aspernatur temporibus.</p>
                </div>
            </div>
        </div>       
    </div>
    </div>
    </div>
  )
}
export default Events;
