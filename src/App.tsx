import { FC } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
