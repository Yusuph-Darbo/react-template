import "./styles/global.css";

import Home from "./pages/Home/Home.jsx";
import Header from "./components/Header/header.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </>
  );
}

export default App;
