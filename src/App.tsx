import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>music player</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="top">
        <nav>
          <div>
            <h3>App</h3>
            <ul className="nav-app">
              <li>
                <span className="material-symbols-outlined">explore</span>
                Explore
              </li>
              <li>
                <span className="material-symbols-outlined">campaign</span>
                Suggest
              </li>
              <li>
                <span className="material-symbols-outlined">show_chart</span>Top
                Charts
              </li>
              <li>
                <span className="material-symbols-outlined">music_note</span>New
                stuff
              </li>
            </ul>
          </div>
          <div>
            <h3>Personal</h3>
            <ul className="nav-personal">
              <li>
                <span className="material-symbols-outlined">favorite</span>
                Favorite
              </li>
              <li>
                <span className="material-symbols-outlined">album</span>Albums
              </li>
              <li>
                <span className="material-symbols-outlined">
                  format_list_bulleted
                </span>
                Playlists
              </li>
              <li>
                <span className="material-symbols-outlined">web_stories</span>
                Gendres
              </li>
            </ul>
          </div>
          <button className="button-create-playlist">
            <span className="material-symbols-outlined">variables</span>Create
            playlist
          </button>
        </nav>
        <main>
          <header>
            <button>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="button-move-nextpage">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <span className="icon-search material-symbols-outlined">
              search
            </span>
            <input
              className="search"
              type="text"
              placeholder="Search music..."
            />
            <button className="button-login">Login</button>
            <button className="button-more">
              <span className="material-symbols-outlined">more_vert</span>
            </button>
          </header>
          <div className="sections">
            <section className="section-explore-new">
              <h2>Explore new</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </section>
            <section className="section-popular">
              <h2>Popular</h2>
            </section>
            <section className="section-mood">
              <h2>Mood</h2>
            </section>
          </div>
        </main>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
