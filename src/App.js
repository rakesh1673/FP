import Recipe from "./components/Recipe";
import "./App.css";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import IngredientsSideNav from "./components/IngredientsSideNav/IngredientsSideNav";

function App() {
  return (
    <div className="App">
      <SideNavbar />
      <div className="content">
        <IngredientsSideNav />
        <Recipe />
      </div>
    </div>
  );
}

export default App;
