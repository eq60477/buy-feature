import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import ErrorPage from "../components/ErrorBoundary/ErrorPage";

const Cart = lazy(() => import("../pages/Cart"));
const CompleteOrder = lazy(() => import("../pages/CompleteOrder"));

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

const createRoute = (
  path: string,
  Component: React.LazyExoticComponent<React.ComponentType<any>>
) => ({
  path,
  element: (
    <SuspenseWrapper>
      <Component />
    </SuspenseWrapper>
  ),
  errorElement: <ErrorPage />
});

const router = createBrowserRouter([
  createRoute("/", Cart),
  createRoute("/complete-order", CompleteOrder)
]);

export default router;
