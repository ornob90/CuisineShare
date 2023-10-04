import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import DbProviders from "./provider/DbProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DbProviders>
        <RouterProvider router={router}></RouterProvider>
      </DbProviders>
    </AuthProvider>
  </React.StrictMode>
);
