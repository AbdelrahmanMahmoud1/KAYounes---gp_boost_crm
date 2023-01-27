import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  // const dispatch = useDispatch();

  // async function fetchBaseURL() {
  //   try {
  //     const response = await fetch("http://backendelzoboon.hopto.org/");
  //     const data = await response.json();
  //     console.log(data);
  //     dispatch({ type: "setBaseURL", baseURL: `${data.ip}:8000/api/` });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchBaseURL();
  // });

  return (
    <div>
      <SideBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate replace to="/Home" />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
