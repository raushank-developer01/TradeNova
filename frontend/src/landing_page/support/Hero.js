import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row" style={{ padding: "40px 120px" }}>
        <div className="col-6">
            <h1 className="fs-4 mb-3">Search for an answer or browser help topics to create a ticket</h1>
            <input className="form-control mb-2 fs-6" placeholder="Eg. how do I activate F&O, why is my order getting rejected.."/><br/>
            <div className="d-flex flex-wrap gap-2">
                <a href="">Track account opening</a>
                <a href="">Track segment activation</a>
                <a href="">Intraday margins</a>
                <a href="">Kite user manual</a>
            </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
            <h1 className="fs-3 mb-4">Featured</h1>
            <ol className="d-flex flex-wrap gap-3">
                <li><a href="">Current Takeovers and Delisting - January 2024</a></li>
                <li><a href="">Latest Intraday leverages- MIS & CO</a></li>
            </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
