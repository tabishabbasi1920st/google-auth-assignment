import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import SidebarContextProvider from "./Components/Context/SidebarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="123824388086-sf1f9prs6m28hn660aeqd7rflrv5vnf4.apps.googleusercontent.com">
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
