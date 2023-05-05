import "../styles/App.css";
import MovieFetch from "./MovieFetch";
import { useState } from "react";
import ActorFetch from "./ActorFetch";

function App() {
  const [searchop, setSearchOp] = useState("");
  return (
    <div id="body">
      <header id="header">
        <img
          src="https://static.tvmaze.com/images/tvm-header-logo.png"
          id="logo"
        />
      </header>
      <nav>
        <div id="search-option" onChange={(e) => setSearchOp(e.target.value)}>
          <div>
            <input type="radio" value="actor" name="serachPref" /> Actor
          </div>
          <div>
            <input type="radio" value="movie" name="serachPref" /> Movie
          </div>
        </div>
        {searchop == "" && (
          <div id="option-caption">
            <h1>Select Actor or Movie</h1>
          </div>
        )}
      </nav>

      {searchop == "movie" && <MovieFetch />}
      {searchop == "actor" && <ActorFetch />}
    </div>
  );
}

export default App;