import React from "react";
import "./Subscribe.css";

export default function Subscribe() {
  return (
    <div className="subscribe">
      <div className="content">
        <h2>Join Our DeFi Community</h2>
        <form action="https://getform.io/f/f26d2c47-894f-47cd-80f1-b8fd2a5a1e0b" method="POST">
          <div className="form-container display-col">
            <input type="email" name="email" placeholder="Enter your email" />
            <button className="btn">Sign Up</button>
          </div>
          <div className="form-container">
              <input type='checkbox'/> <p>Yes, I agree to recive email communications from DeFi.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
