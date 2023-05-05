import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/ActorFetch.css";

function ActorFetch() {
  const [text, setText] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/people?q=${text}`)
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
          placeholder="Enter a Actor Name"
        />
      </div>
      <div id="display-area">
        {posts &&
          posts.map((post) => {
            try {
              return (
                <div className="box-area" key={post.person.id}>
                  <a href={post.person.url} target="_blank">
                    {(post.person.image && (
                      <img
                        src={post.person.image.medium}
                        className="actor-img"
                      />
                    )) || (
                      <img
                        src="https://us.123rf.com/450wm/pavelstasevich/pavelstasevich1811/pavelstasevich181101028/112815904-no-image-available-icon-flat-vector-illustration.jpg?ver=6"
                        className="actor-img"
                      />
                    )}
                  </a>
                  <h2 id="actor-name">{post.person.name}</h2>
                  <h3 id="actor-country">
                    {(post.person.country && post.person.country.name) || "N/A"}
                  </h3>
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

export default ActorFetch;