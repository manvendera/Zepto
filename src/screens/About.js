import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
    <div> <Navbar></Navbar> </div>
    <div classNameName='container'> 
    <div className="containermain1 mx-5 my-5">
        <div className="containermain mx-5 my-5">
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">it all started with <i>T</i>ech <span className="text-muted">It’ll
                  blow your mind.</span></h2>
              <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose
                here.</p>
            </div>
            <div className="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                height="500" src="https://source.unsplash.com/random/900x700/?panner" alt="img"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="containermain1 mx-5 my-5">
        <div className="containermain mx-5 my-5">
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">We started <i>T</i>ech in 2023. <span className="text-muted">See for
                  yourself.</span></h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this
                layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                height="500" src="https://source.unsplash.com/random/900x700/?soup" alt="img"></img>
            </div>
          </div>
    
        </div>
      </div>
      <div className="containermain1 mx-5 my-5">
        <div className="containermain mx-5 my-5">
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow
                  your mind.</span></h2>
              <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose
                here.</p>
            </div>
            <div className="col-md-5">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                height="500" src="https://source.unsplash.com/random/900x700/?pizza" alt="img"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="containermain1 mx-5 my-5">
        <div className="containermain mx-5 my-5">
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-muted">See for
                  yourself.</span></h2>
              <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this
                layout would work with some actual real-world content in place.</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                height="500" src="https://source.unsplash.com/random/900x700/?burger" alt="img"></img>
            </div>
          </div>
    
        </div>
      </div>
      </div>
      <div> <Footer></Footer> </div>
    </>
    
  );
}
