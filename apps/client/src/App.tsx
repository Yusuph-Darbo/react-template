import "./styles/global.css";

import Home from "./pages/Home.tsx";
import Header from "./components/Header/header.tsx";
import Footer from "./components/Footer/footer.tsx";

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
