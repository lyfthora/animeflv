import "./App.css";
import "./fontawesome.css";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes as RouterRoutes,
} from "react-router-dom"; //avoid conflicts. :D
import Routes from "./routing/configRouting";
const Home = lazy(() => import("./pages/home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Cargando...</div>}>
        <RouterRoutes>
          <Route path={Routes.home} element={<Home />} exact />
          <Route path={Routes.directorio} element={<Home />} exact />
        </RouterRoutes>
      </Suspense>
    </Router>
  );
};

export default App;
