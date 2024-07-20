import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/pages/index.scss";
import reportWebVitals from "./reportWebVitals";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "@styles/pages/index.scss";
import Hub from "./pages/Hub/Hub";
import Settings from "pages/Settings/Settings";
import NotFound from "pages/Error/NotFound";
// import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Hub />} />
        <Route path="/hub" element={<Hub />} />
        <Route path="/dofus-quest" element={<NotFound />} />
        <Route path="/better-naio" element={<NotFound />} />
        <Route path="/settings" element={<Settings />} />
        {/* Ajoutez d'autres routes ici */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
