import React from "react";
import "./Challenge1.css";

function challenge1() {
  return (
    <main>
      <section className="upper">
        <h1>Join our community</h1>
        <h2>30 day, hassle-free money back guarantee</h2>
        <p>
          Gain access to our full library of shit-hot tutorials, right now! Only
          300$ per second
        </p>
      </section>
      <div className="flex-container">
        <section className="box left-box">
          <h2>Monthly subscription</h2>
          <div style={{ "font-size": "large", display: "inline" }}>29€ </div>
          <div style={{ display: "inline" }}>per month</div>
          <p>Full access for less than 110€</p>
          <button
            style={{
              display: "inline",
              padding: 0,
              width: "100%",
              height: "40px",
              border: "none",
            }}
          >
            Sign up
          </button>
        </section>
        <section className="box right-box">
          <h2>Why us</h2>
          <p>Tutorials by industry experts</p>
          <p>Tutorials by industry experts</p>
          <p>Tutorials by industry experts</p>
          <p>Tutorials by industry experts</p>
        </section>
      </div>
    </main>
  );
}

export default challenge1;
