import React from 'react'
import c1 from './c1.png';
import c3 from './c3.jpg';
import c2 from './c2.png.jpg';
import contact from './contact_form2_pad_icon.png';
import './home.css';
import Navbar from '../../components/Navbar';

function Home() {
  return (
    <>
    <Navbar/>
    <div className='Home hbody'>
        <div className="row container-fluid">
        <div className="col-lg-8 carousel-div">
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={c1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={c2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={c3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-4 calender">
          <h4><i className="bi bi-calendar"></i> Upcoming Events</h4>
          <hr />
          <h4>
            <span><i className="bi bi-caret-right-square-fill"></i>17-09-2022</span>
            <span><marquee behavior="scroll" direction="left">One-Week FDP on Academic Writing Venue: FS10
              <a href="#">click here</a>
            </marquee>
            </span>
          </h4>
          <h4>
            <span><i className="bi bi-caret-right-square-fill"></i>01-12-2022</span>
            <span><marquee behavior="scroll" direction="left"> First Year Orientation day Venue: Auditorium<a href="#">click here</a></marquee>
            </span>

          </h4>
          <h4>
            <span><i className="bi bi-caret-right-square-fill"></i>28-12-2022</span>
            <span><marquee behavior="scroll" direction="left">Webinar on Minor degree Venue:Near Block C<a href="#">click here</a></marquee>
            </span>

          </h4>
        </div>
      </div>


      <div className="about">
        <section id="About">
          <h3>About Us:</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, deleniti ducimus incidunt veniam aut, in voluptates temporibus, expedita tenetur ipsum ut provident dolorum facere pariatur repellendus voluptatem! Porro, veritatis deserunt nisi laborum numquam quidem nesciunt voluptatem doloremque quisquam error expedita quam veniam officiis, voluptatibus corporis sapiente reprehenderit, odio fuga saepe adipisci deleniti eos quis animi dolor! A maiores dignissimos nisi expedita cum sit iste soluta! Itaque, ipsa id. Cum sapiente voluptas ipsam, quaerat vel accusamus, sunt, adipisci nam nostrum unde assumenda est quas consequuntur perferendis voluptatum obcaecati. Itaque ea dolore cupiditate illum harum quia similique sint accusamus nihil. Nemo, esse?</p>
        </section>
      </div>
      <div className="contact">
        <div className="row">
          <div className="col-lg-4 sm-2">
            <img class="size" src={contact} alt="" />
          </div>
          <div className="col-lg-8 cont">
            <h4>Contact Us</h4>
            <br />
            <h5>
              <i className="bi bi-envelope-at-fill"></i>   xyz@gmail.com
            </h5>
            <br />
            <h5><i className="bi bi-telephone-inbound-fill"></i>   0000-0000-00</h5>
          </div>
        </div>
      </div>
    </div>
    </>
    
  )
}
export default Home;