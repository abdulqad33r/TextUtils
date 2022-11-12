import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
    }, 1300);
  };
  
  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add("bg-" + cls);
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "info");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#17202A";
      showAlert("Dark mode enabled", "dark");
    }
  };
  return (
    <>
      <Router>
        {/* <Navbar title="TextUtils" aboutText="About us"/>  */}
        {/* <Navbar/> Here defaultProps will be used */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route
              exact
              path="/TextUtils/about"
              element={<About mode={mode} />}
            ></Route>
            <Route
              exact
              path="/TextUtils"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text"
                  mode={mode}
                />
              }
            ></Route>
            <Route
              path="*"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the text"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
