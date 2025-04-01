import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import CounterPage from "./CounterPage.tsx";

const Home = ()=> {
  return (
    <BrowserRouter>
      <nav style={{ margin: '20px', textAlign: 'center' }}>
        <NavLink to="/" style={{ marginRight: '20px' }}>Home</NavLink>
        <NavLink to="/counter" style={{ marginRight: '20px' }}>Counter</NavLink>
        <NavLink to="/form">Form</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/counter" element={<CounterPage />} />
        {/*<Route path="/form" element={<Form />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

const Landing = () => {
  return (
    <main style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to the React App!</h1>
      <p style={{ fontSize: '1.5rem' }}>This is the home page.</p>
    </main>
  );
}

export default Home;