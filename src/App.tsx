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
                <li>
                  <div className="shadow"></div>
                  <img
                    src="./images/explore1.jpg"
                    alt=""
                    width={150}
                    height={150}
                  />
                  <span className="singer">Zak Abel</span>
                  <span className="title">Love Song</span>
                </li>
                <li>
                  <div className="shadow"></div>
                  <img
                    src="./images/explore2.jpg"
                    alt=""
                    width={150}
                    height={150}
                  />
                  <span className="singer">Kendrik Lamar</span>
                  <span className="title">kombucha Burps</span>
                </li>
                <li>
                  <div className="shadow"></div>
                  <img
                    src="./images/explore3.jpg"
                    alt=""
                    width={150}
                    height={150}
                  />
                  <span className="singer">Avicli ft.Derulo</span>
                  <span className="title">On The Regular</span>
                </li>
                <li>
                  <div className="shadow"></div>
                  <img
                    src="./images/explore4.jpg"
                    alt=""
                    width={150}
                    height={150}
                  />
                  <span className="singer">Kaytranada</span>
                  <span className="title">El Sanbroso</span>
                </li>
                <li>
                  <div className="shadow"></div>
                  <img
                    src="./images/explore5.jpg"
                    alt=""
                    width={150}
                    height={150}
                  />
                  <span className="singer">ESTA</span>
                  <span className="title">Mark Off Soul Flip</span>
                </li>
              </ul>
            </section>
            <section className="section-popular">
              <h2>Popular</h2>
              <ul>
                <li>
                  <div>
                    <img
                      src="./images/explore1.jpg"
                      alt=""
                      width={35}
                      height={35}
                    ></img>
                    <div>1</div>
                    <div className="title">Love Song</div>
                  </div>
                  <div>
                    <div>3:23</div>
                    <button className="button-more">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./images/explore2.jpg"
                      alt=""
                      width={35}
                      height={35}
                    ></img>
                    <div>2</div>
                    <div className="title">Kambucha Burps</div>
                  </div>
                  <div>
                    <div>5:36</div>
                    <button className="button-more">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./images/explore3.jpg"
                      alt=""
                      width={35}
                      height={35}
                    ></img>
                    <div>3</div>
                    <div className="title">On The Regular</div>
                  </div>
                  <div>
                    <div>2:39</div>
                    <button className="button-more">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./images/explore4.jpg"
                      alt=""
                      width={35}
                      height={35}
                    ></img>
                    <div>4</div>
                    <div className="title">EI Sambroso</div>
                  </div>
                  <div>
                    <div>3:26</div>
                    <button className="button-more">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="./images/explore5.jpg"
                      alt=""
                      width={35}
                      height={35}
                    ></img>
                    <div>5</div>
                    <div className="title">Mark Off Soul Flip</div>
                  </div>
                  <div>
                    <div>6:29</div>
                    <button className="button-more">
                      <span className="material-symbols-outlined">
                        more_horiz
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
            </section>
            <section className="section-mood">
              <h2>Mood</h2>
              <ul>
                <li>Ghetto Rap</li>
                <li>Twerk Baby</li>
                <li>Party Breaker</li>
                <li>Valentine Vibe</li>
              </ul>
            </section>
          </div>
        </main>
      </div>
      <footer>
        <div className="play-controller">
          <button>
            <span className="material-symbols-outlined md-36">
              skip_previous
            </span>
          </button>
          <button>
            <span className="material-symbols-outlined md-36">play_arrow</span>
          </button>
          <button>
            <span className="material-symbols-outlined md-36">skip_next</span>
          </button>
        </div>
        <div className="current-music">
          <button>
            <span className="material-symbols-outlined md-36">volume_down</span>
          </button>
          <div className="music-info">
            <img src="./images/explore3.jpg" alt="" width={40} height={40} />
            <div>
              <span className="title">On The Regular</span>
              <span className="singer">Avicli ft. Derulo</span>
            </div>
          </div>
          <div className="progress-bar">
            <span className="progress-value">1:59</span>
            <progress max={100} value={80}></progress>
            <span className="total-value">2:39</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
