import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We pioneered the discount broking model in India,
          <br />
          Now, we are breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 border-top text-muted"
        style={{ lineHeight: "1.5" }}
      >
        <div className="col-6">
          <p>
            We kick-started operation on tne 15th of August, 2026 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            TradeNova, a combination of "Trade" and "Nova".
          </p>
          <br />
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <br />
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment plateforms, contributing over 15%
            of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retial traders and inverstors.
          </p>
          <br />
          <p>
            <a href="" style={{ textDecoration: "None" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the India capital markets.
          </p>
          <br />
          <p>
            And yet, we are always up to something new every day Catch up on the
            latest updates on our blog or see what the media is saying about us.
          </p>
        </div>
      </div>
      <div className="row p-5  border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div className="row p-5 text-muted" style={{ lineHeight: "1.5" }}>
        <div className="col-6  text-center">
          <img
            src="media/images/raushanProfile.png"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-4">Raushan Kumar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6">
          <p>Raushan Kumar founded TradeNova in 2010 to overcome the
          hurdles he faced during his decade long stint as a trader. Today,
          TradeNova has changed the landscape of the Indian broking industry.</p>
          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and
          the Market Data Advisory Committee (MDAC).</p>
           <p>Playing basketball is his zen.</p>
           <p> Connect on <a href="" style={{ textDecoration: "None" }}>Homepage</a>  / <a href="" style={{ textDecoration: "None" }}>TradingQnA</a> / <a href="" style={{ textDecoration: "None" }}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
