import './App.css';
import { useState } from 'react';
import Welcome from './Component/Welcome';

function App() {
  const [tracks, setTracks] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [resultOffset, setResultOffset] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  const getTracks = async () => {
    try {
      let data = await fetch(
        `You fill this place with the Api from NoCodeApi by creating an account and purchasing Spotify Api`
      );
      let convertData = await data.json();
      console.log(convertData);
      setTracks(convertData.tracks.items);
      setShowWelcome(false);  // Hide welcome screen when tracks are fetched
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      {showWelcome ? (
        <Welcome onGetStarted={() => setShowWelcome(false)} />
      ) : (
        <>
          <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Search Music
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <input
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                  className="form-control me-2 w-75"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button onClick={getTracks} className="btn btn-outline-success">
                  Search
                </button>
              </div>
            </div>
          </nav>

          <div className="container">
            <div className="row">
              {tracks.map((element) => (
                <div key={element.id} className="col-lg-2 col-md-4 col-sm-6 col-6 py-2">
                  <div className="card" style={{ width: '100%' }}>
                    <img src={element.album.images[0].url} className="card-img-top" alt={element.name} />
                    <div className="card-body">
                      <h5 className="card-title">{element.name}</h5>
                      <p className="card-text">
                        {element.album.artists.map((artist) => artist.name).join(', ')}
                      </p>
                      <audio src={element.preview_url} controls className="w-100"></audio>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
