import "./App.css";
import { ThemeModeProvider } from "./contexts/mode";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "./pages/orders/Orders";
import Default from "./pages/default/Default";
function App() {
  return (
    <BrowserRouter>
      <ThemeModeProvider>
        <Routes>
          <Route path="" element={<Home />}>
            <Route path="" element={<Default />}></Route>
            <Route path="orders" element={<Orders />}></Route>
          </Route>
        </Routes>
      </ThemeModeProvider>
    </BrowserRouter>
  );
}

export default App;
