import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing, Analytics, Home, Dashboard } from "./pages";
import { PageNotFound } from "./pages/404";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({
      id: 1,
      name: "juan",
    });
  };
  const logout = () => setUser(null);

  return (
    <BrowserRouter>
      <Navigation />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>LogIn</button>
      )}

      <Routes>
        <Route index element={<Landing />} />

        <Route path="/landing" element={<Landing />} />
        <Route path="/Analytics" element={<Analytics />} />
       <Route element={<ProtectedRoute user={user}/>}>

        <Route path="/Home" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
       
       </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/Analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
