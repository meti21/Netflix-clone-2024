import React, { useState } from "react";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  const buttonStyle = {
    backgroundColor: "red",
    border: "none",
    color: "white",
    width: "100%",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  return (
    <div
      style={{
        maxWidth: 350,
        margin: "2rem auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
    >
      <h2 style={{ textAlign: "center" }}>
        {isSignIn ? "Sign In" : "Sign Up"}
      </h2>

      {isSignIn ? (
        <form>
          <input
            type="email"
            placeholder="Email"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <button type="submit" style={buttonStyle}>
            Sign In
          </button>
          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Don't have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignIn(false)}
              style={{
                color: "red",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Register
            </button>
          </p>
        </form>
      ) : (
        <form>
          <input
            type="text"
            placeholder="Full Name"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <input
            type="password"
            placeholder="Password"
            required
            style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
          />
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
          <p style={{ textAlign: "center", marginTop: "15px" }}>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setIsSignIn(true)}
              style={{
                color: "red",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </p>
        </form>
      )}
    </div>
  );
}

export default Auth;
