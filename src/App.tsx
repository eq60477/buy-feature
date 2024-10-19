import { FC } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { AppProvider } from "./contexts/AppContext.tsx";

const App: FC = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
