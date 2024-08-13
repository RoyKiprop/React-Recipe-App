import HeaderSection from "./Components/HeaderSection";
// import Search from "./Components/Search";
import AppNav from "./Pages/AppNav";
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <main className="pt-5">
      <BrowserRouter>
        <HeaderSection/>
        <AppNav/>
      </BrowserRouter>
    
    </main>
      

  );
}
export default App;
