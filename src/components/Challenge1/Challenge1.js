import React from "react";
import "./Challenge1.css";

function Challenge1() {
  return (
    <main>
      <div className="container">
        <section className="upper">
          <div className="box-content">
            <h1 style={{ fontFamily: "Karla-Bold" }}>Join our community</h1>
            <h2>30 day, hassle-free money back guarantee</h2>
            <p>
              Gain access to our full library of shit-hot tutorials, right now!
              Only 300$ per second. Perfect for any developers who are serious
              about shizniz
            </p>
          </div>
        </section>
        <section className="lower flex-container">
          <div className="box left">
            <div className="box-content">
              <h2>Monthly subscription</h2>
              <div style={{ fontSize: "35px", display: "inline" }}>29€ </div>
              <div style={{ display: "inline" }}>per month</div>
              <p>Full access for less than 110€</p>
              <button className="signUpButton">Sign up</button>
            </div>
          </div>
          <div className="box right">
            <div className="box-content">
              <h2>Why us</h2>
              <p>Tutorials by industry experts</p>
              <p>Tutorials by industry experts</p>
              <p>Tutorials by industry experts</p>
              <p>Tutorials by industry experts</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Challenge1;
