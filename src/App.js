import "./App.css";
import NavigationMenu from "./components/navigation/NavigationMenu";
import Recipe from "./components/Recipe";

function App(props) {
  console.log(props.recipeList);
  const recipes = props.recipeList;
  const recipeList = recipes.map((recipe) => (
    <Recipe
      name={recipe.name}
      description={recipe.description}
      cookingTime={recipe.cookingTime}
    />
  ));

  console.log(recipeList);

  return (
    <div className="App">
      <NavigationMenu />
      <h1>Cook This!</h1>
      {recipeList}
    </div>
  );
}

export default App;
