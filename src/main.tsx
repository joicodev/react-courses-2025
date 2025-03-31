import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Exercises2 from "./exercises_2/Exercises2.tsx";
// import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Exercises2 />
  </StrictMode>
);
