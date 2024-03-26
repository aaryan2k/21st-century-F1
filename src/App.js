import './App.css';
import Navigation from './nav-bar/Navigation';
import Home from './home/Home';
import BasicSpinner from './home/Basic-Spinner.js';
import Standings from './standings/Standings';
import StandingsLoader from './standings/StandingsLoader.js';
import Results from './results/Results';
import ResultSearch from './results/Results-Search';
import {
  createHashRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  useNavigation
} from "react-router-dom";
import SeasonEndStandings from './standings/SeasonEndStandings';
import ErrorPage from './Error-Page';

const RoutesJSX = (
  <Route element={<Layout />}  >
    <Route exact path="/" element={<Home />} index />
    <Route path="standings">
      <Route path=":year" loader={StandingsLoader} element={<SeasonEndStandings/>} errorElement={<ErrorPage />}/>
      <Route index element={<Standings />} />
    </Route>
    <Route path="/results/:year" element={<ResultSearch />}/>
    <Route path="/results" element={<Results />} /> 

  </Route>
);


const routes = createRoutesFromElements(RoutesJSX);

const router = createHashRouter(routes);


function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} >
      </RouterProvider>
    </div>
  );
}


function Layout() {
  const {state} = useNavigation();
  console.log(state);
  return (
    <>
      <Navigation/>
      
      <main>
        {/* 2️⃣ Render the app routes via the Layout Outlet */}
        {
        (state === "loading") ? <BasicSpinner/> :
        <Outlet />}
      </main>
    </>
  );
}

export default App;
