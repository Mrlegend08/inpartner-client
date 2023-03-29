import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root/Root";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { RegisterProvider } from "./context/registerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <RegisterProvider>
            <Root />
        </RegisterProvider>
    </BrowserRouter>
);
