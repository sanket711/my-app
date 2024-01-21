import React, { useState } from "react";
import "./App.css";
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import { Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled!", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() =>{
      //   document.title = 'TextUtils is Amaging.'
      // }, 2000)
      // setInterval(() =>{
      //   document.title = 'Install TextUtils Now!'
      // }, 1500)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled!", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        {/* <Routes>
          <Route exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes> */}
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
      <Alert alert={alert} />
    </>
  );
}

export default App;
