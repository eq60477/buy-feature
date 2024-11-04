import { FC, useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.tsx";
import { AppProvider } from "./contexts/AppContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: FC = () => {
  useEffect(() => {
    localStorage.setItem("newCustomer", "true");
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
