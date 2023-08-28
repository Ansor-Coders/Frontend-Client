import React, { useState } from "react";
import axios from "axios";
import Particles from "react-tsparticles";
import API from '../../api/api'
import { loadFull } from "tsparticles";
import { connect } from "react-redux";
import { setAdminStatus } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import "./log.scss";

const AuthPage = ({ isAdmin, setAdminStatus }) => {
  const [usernameOrPhone, setUsernameOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        password,
      };

      if (isAdmin) {
        payload.username = usernameOrPhone;
      } else {
        payload.phone = usernameOrPhone;
      }

      const response = await axios.post(
        isAdmin
          ? `${API}/admin/signin`
          : `${API}teacher/signin`,
        payload
      );
      setLoginStatus("success");
      const token = response.data.token;
      const userRole = response.data.teacher ? "teacher" : "admin";

      localStorage.setItem("token", token);

      if (userRole === "admin") {
        navigate("/home");
      } else if (userRole === "teacher") {
        navigate("/home");
      } else {
        console.error("Unknown role or error occurred.");
      }
    } catch (error) {
      setLoginStatus("error");
    }
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <div className="auth-page">
      <h2 className="reg_title"> Welcome to Ansor CRM</h2>
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
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={isAdmin ? "Username" : "Phone Number"}
            value={usernameOrPhone}
            onChange={(e) => setUsernameOrPhone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="check_label">
            <input
              className="check_input"
              type="checkbox"
              checked={isAdmin}
              onChange={() => setAdminStatus(!isAdmin)}
            />
            Login as Admin
          </label>
          <button type="submit">Login</button>
        </form>

        {loginStatus === "success" && (
          <p className="success-message">Login successful!</p>
        )}
        {loginStatus === "error" && (
          <p className="error-message">Login failed. Please try again.</p>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAdminStatus: (isAdmin) => dispatch(setAdminStatus(isAdmin)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
