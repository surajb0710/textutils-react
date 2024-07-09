import { useState } from "react";
import "./App.css";
import About from "./Components/About.js";
import Navbar from "./Components/Navbar.js";
import TextForm from "./Components/TextForm.js";
import Alert from "./Components/Alert.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  //

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Theme has changed to Black", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Theme has changed to White", "Success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        element1="Home"
        // element2="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />;<div className="container mb-3"></div>
      <TextForm
        showAlert={showAlert}
        heading="Enter the text to analyze below"
        mode={mode}
      />
      {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
