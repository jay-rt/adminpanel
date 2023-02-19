import "./app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import { productInputs, userInputs } from "./form-source";
import { useSelector } from "react-redux";
import { dark } from "./redux/themeSlice";

const App = () => {
  const darkMode = useSelector(dark);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New title="Add New User" inputs={userInputs} />}
                />
              </Route>
              <Route path="/products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={
                    <New title="Add New Product" inputs={productInputs} />
                  }
                />
              </Route>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
