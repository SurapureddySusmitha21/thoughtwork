import { Component, ReactNode } from "react";
import "./styles.css";

class App extends Component {
  state = { searchInput: "" };

  componentDidMount() {
    this.mealsDetails();
  }

  mealsDetails = async () => {
    const { searchInput } = this.state;
    const api = `www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
    const meal = await fetch(api);
    const data = await meal.json();
    console.log(data);
  };

  getSearch = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { searchInput } = this.state;
    console.log(searchInput);
    return (
      <div className="">
        <h1 className="">welcome to TheMealDB</h1>
        <input typeof="search" onChange={this.getSearch} />
      </div>
    );
  }
}

/*export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p className="s">radha krishna</p>
    </div>
     <search typeof="text" onChange={this.textOF} className="searchOf" />
  );
}*/

export default App;
