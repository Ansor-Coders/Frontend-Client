import React, { useState } from "react";
import axios from "axios";
import Particles from "react-tsparticles";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadFull } from "tsparticles";
import { useNavigate } from "react-router-dom";
import "./log.scss";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();
  const handleToggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegistering) {
        const response = await axios.post(
          "https://userservers.onrender.com/api/auth/register",
          {
            name,
            email,
            password,
          }
        );
        console.log(response.data);
        toast("Successfully Registered");
      } else {
        const response = await axios.post(
          "https://userservers.onrender.com/api/auth/login",
          {
            email,
            password,
          }
        );
        console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/usermanagement");
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="auth-page">
      <Particles
        id="particles-here"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "polygon",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 10,
              random: true,
              anim: {
                enable: true,
                speed: 50,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 300,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 8,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 800,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 800,
                size: 80,
                duration: 2,
                opacity: 0.8,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />

      <div className="auth-container">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isRegistering && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>
        <p>
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}
          <span onClick={handleToggleMode}>
            {isRegistering ? "Login" : "Register"}
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AuthPage;
