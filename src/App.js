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
  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-primary");
  // }
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
              path="/textutils/about"
              element={<About mode={mode} />}
            ></Route>
            <Route
              exact
              path="/textutils"
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
