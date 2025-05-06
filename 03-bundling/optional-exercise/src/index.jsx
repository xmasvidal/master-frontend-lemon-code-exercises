import React from "react";
import { createRoot } from "react-dom/client";
import { MyComponent } from "./reactComponent";
import "./my-styles.scss";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <MyComponent />
  </div>
);