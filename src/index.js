import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import AppContextProvider from "./AppContext/AppContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContextProvider>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </AppContextProvider>
);
