import React from "react";
import ReactDOM from "react-dom/client";
import "@/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="dark bg-background text-foreground">
      Tailwind V4 Upgrade test
    </div>
  </React.StrictMode>
);
