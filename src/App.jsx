import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Psychologists from "./pages/Psychologists/Psychologists";
import Favorites from "./pages/Favorites/Favorites";
import { useAuth } from "./context/AuthContext.jsx";
import Layout from "./components/Layout/Layout";

function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
}

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/psychologists" element={<Psychologists />} />

        <Route
          path="/favorites"
          element={
            <RequireAuth>
              <Favorites />
            </RequireAuth>
          }
        />
      </Routes>
    </Layout>
  );
}

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import Psychologists from "./pages/Psychologists/Psychologists";
// import Favorites from "./pages/Favorites/Favorites";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Navbar />
//         <Route path="/" element={<Home />} />
//         <Route path="/psychologists" element={<Psychologists />} />
//         <Route path="/favorites" element={<Favorites />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
