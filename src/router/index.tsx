import { createBrowserRouter } from "react-router-dom";
import {
  lazy,
  Suspense,
  ReactNode,
  LazyExoticComponent,
  ComponentType
} from "react";
import ErrorPage from "../components/templates/ErrorBoundary/ErrorPage";

const Cart = lazy(() => import("../pages/Cart"));
const CompleteOrder = lazy(() => import("../pages/CompleteOrder"));
const Confirmation= lazy(() => import("../pages/Confirmation"));

const SuspenseWrapper = ({ children }: { children: ReactNode }) => (
  <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
);

interface RouteConfig {
  path: string;
  Component: LazyExoticComponent<ComponentType<any>>;
}

const createRoute = ({ path, Component }: RouteConfig) => ({
  path,
  element: (
    <SuspenseWrapper>
      <Component />
    </SuspenseWrapper>
  ),
  errorElement: <ErrorPage />
});

const routes = [
  { path: "/", Component: Cart },
  { path: "/complete-order", Component: CompleteOrder }, 
  { path: "/confirmation", Component: Confirmation }
];

const router = createBrowserRouter(routes.map(createRoute));

export default router;
