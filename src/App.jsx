// import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
//import { Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cryptocurrencies from "./pages/Cryptocurrencies";
import News from "./pages/News";
import CryptoDetails from "./pages/CryptoDetails";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);
const year = new Date().getFullYear();

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route
                  exact
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />

                <Route
                  exact
                  path="/crypto/:coinId"
                  element={<CryptoDetails />}
                />
                <Route exact path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">cryptocurrencies</Link>
              <Link to="/news">News</Link>
            </Space>
            <p
              className="all-rights"
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              All rights reserved © {year}. By Mohssin Aoulad
            </p>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="app">
//       <div className="container">
//         <RouterProvider router={router} />
//       </div>
//     </div>
//   );
// }

export default App;

{
  /* <>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
</> */
}
