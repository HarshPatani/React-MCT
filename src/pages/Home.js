import React from "react";
import Navbar from "../components/Navbar";
import TextArea from "../components/TextArea";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

const Home = ({ setDarkMode, darkMode }) => {
  const toastifySuccess = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "dark" : "light",
    });
  const toastifyError = (msg) =>
    toast.error(msg, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: darkMode ? "dark" : "light",
    });
  return (
    <div
      className="home"
      style={{
        backgroundColor: darkMode ? "#042743" : "white",
        width: "100vw",
        height: "100%",
      }}
    >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <ToastContainer />
      <TextArea
        toastifyError={toastifyError}
        toastifySuccess={toastifySuccess}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
    </div>
  );
};

export default Home;
