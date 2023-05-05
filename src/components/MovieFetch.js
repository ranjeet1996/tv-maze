import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MovieFetch.css";

function Fetch() {
  const [posts, setPosts] = useState([]);

  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${text}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [text]);

  return (
    <div>
      <div id="search">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          id="search-bar-1"
          placeholder="Enter a Movie Name"
        />
      </div>
      <div id="display">
        {posts &&
          posts.map((post) => {
            try {
              return (
                <div className="box" key={post.show.id}>
                  <a href={post.show.url} target="_blank">
                    {(post.show.image != null && (
                      <img src={post.show.image.medium} className="movie-img" />
                    )) || (
                      <img
                        src="https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg"
                        className="movie-img"
                      />
                    )}
                  </a>
                  <h2 className="post-name">{post.show.name}</h2>

                  <p className="imdb">
                    Rating : ⭐{" "}
                    <span className="rating">
                      {post.show.rating.average || "N/A"}
                    </span>{" "}
                  </p>
                  <p id="runtime">Runtime(Min): {post.show.runtime || "N/A"}</p>
                  <p className="post-lang">
                    Language : {post.show.language || "N/A"}
                  </p>
                </div>
              );
            } catch (err) {
              console.log(err);
            }
          })}
      </div>
    </div>
  );
}

export default Fetch;