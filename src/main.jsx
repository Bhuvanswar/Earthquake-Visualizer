import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

console.log('Main.jsx is loading...');

const rootElement = document.getElementById("root");
console.log('Root element found:', !!rootElement);

if (rootElement) {
  console.log('Creating React root...');
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('React app rendered');
} else {
  console.error('Root element not found!');
}