import React from "react";
import "./Challenge1.css";

function challenge1() {
  return (
    <main>
      <div className="container">
        <section className="upper">
          <div className="box-content">
            <h1>Join our community</h1>
            <h2>30 day, hassle-free money back guarantee</h2>
            <p>
              Gain access to our full library of shit-hot tutorials, right now!
              Only 300$ per second
            </p>
          </div>
        </section>
        <div className="flex-container lower">
          <section className="box left">
            <div className="box-content">
              <h2>Monthly subscription</h2>
              <div style={{ fontSize: "35px", display: "inline" }}>29€ </div>
              <div style={{ display: "inline" }}>per month</div>
              <p>Full access for less than 110€</p>
              <button className="signUpButton">Sign up</button>
            </div>
          </section>
          <section className="box right">
            <div className="box-content">
              <h2>Why us</h2>
              <p>Tutorials by industry experts</p>
              <p>Tutorials by industry experts</p>
              <p>Tutorials by industry experts</p>
              <p>Tutorials by industry experts</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default challenge1;
