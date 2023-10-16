import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="full-height px-md-5 spacing">
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-8">
              <h6 className="text-brand">ABOUT</h6>
              <h1 className="heading">My Education And Experience.</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <p>
                  I'm Anushka Pandey, a third-year Computer Science Engineering student at VIT, Bhopal.
                  As a passionate geek and an advocate for open-source technology, 
                  my journey in the world of technology began in my hometown, Hazaribag, Jharkhand
                  where I completed my intermediate studies at St. Xavier's.
                  Throughout my academic career, I've been actively involved in both learning and application. 
                  My enthusiasm for technology extends beyond the classroom. 
                  I've participated in various coding sessions which helped me develop a knack for problem-solving
                  and coding, particularly in app development.
                  I pride myself on my strong work ethic and optimistic outlook. 
                  My insatiable curiosity drives me to explore and learn new concepts, 
                  making me an ideal fit for the ever-evolving field of app development. 
                  I'm a firm believer in the power of teamwork, fostering collaboration, and facilitating healthy competition among peers.
                  As a CSE student, my goal is to apply my knowledge and skills to develop cutting-edge applications 
                  that can make a real impact on healthcare and well-being. I'm excited about the challenges and 
                  opportunities that lie ahead in the world of app development, and I'm committed to making a positive contribution 
                  to this dynamic field.
                  
                  Let's code and innovate together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="full-height px-md-5 spacing">
        <div className="container">
          <div className="row pb-4">
            <div className="col-md-8">
              <h6 className="text-brand">SERVICES</h6>
              <h1 className="heading">Services That I Provide.</h1>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-4">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <div className="iconbox rounded-4">
                  <i className="las la-thumbtack"></i>
                </div>
                <h4>App developement</h4>
                <p>
                  A learning app developer aiming to create app with the emerging
                  and dynamic programming language Python.
                </p>
                <a href="#" className="link-custom">
                  Read more
                </a>
              </div>
            </div>
           
            <div className="col-md-4">
              <div className="service p-4 bg-base rounded-6 shadow-effect">
                <div className="iconbox rounded-4">
                  <i className="las la-thumbtack"></i>
                </div>
                <h4>Machine Learning</h4>
                <p>
                  I, design and create the AI algorithms capable of learning and
                  making predictions that define machine learning (ML).
                </p>
                <a href="#" className="link-custom">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
