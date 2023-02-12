import React from 'react';
import Verticalnav from '../../../components/verticalnav/Verticalnav';

function List() {
  return (
    <div>
      <Verticalnav li={[
      ["Admin","fa-thin fa-bars","www.youtube.com"],
      ["Request","fas fa-band-aid","https://www.google.com/maps"],
      ["Approved"],
      
    ]}/>
        <div className="input-group rounded">
            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            <span className="input-group-text border-0" id="search-addon">
                <i className="bi bi-search"></i>
            </span>
        </div>
        <div className="card">
            <div className="card-header">
              Event 1
            </div>
            <div className="card-body">
            
              <p className="card-text">Date:</p>
              <p className="card-text">Venue:</p>
              <a href="#" className="btn btn-success">Accepted</a>
            </div>
        </div>    
        <div className="card">
            <div className="card-header">
              Event 2
            </div>
            <div className="card-body">
            
              <p className="card-text">Date:</p>
              <p className="card-text">Venue:</p>
              <a href="#" className="btn btn-success">Accepted</a>
            </div>
        </div> 
        <div className="card">
            <div className="card-header">
              Event 3
            </div>
            <div className="card-body">
            
              <p className="card-text">Date:</p>
              <p className="card-text">Venue:</p>
              <a href="#" className="btn btn-danger">Declined</a>
            </div>
        </div> 
        <div className="card">
            <div className="card-header">
              Event 4
            </div>
            <div className="card-body">
            
              <p className="card-text">Date:</p>
              <p className="card-text">Venue:</p>
              <a href="#" className="btn btn-info">Pending</a>
            </div>
        </div> 
        <div className="card">
            <div className="card-header">
              Event 5
            </div>
            <div className="card-body">
            
              <p className="card-text">Date:</p>
              <p className="card-text">Venue:</p>
              <a href="#" className="btn btn-success">Accepted</a>
            </div>
        </div> 
        <div className="card">
            <div className="card-header">
              Event 6
            </div>
            <div className="card-body">
            
              <p className="card-text">Date:</p>
              <p className="card-text">Venue:</p>
              <a href="#" className="btn btn-danger">Declined</a>
            </div>
        </div> 
           
    </div>
  )
}
export default List;
