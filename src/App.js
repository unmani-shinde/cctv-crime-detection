import "./App.css";
import "./home.css";

function App() {
  return (
    <div className="App">
      <div className="d-flex text-center text-white">
        <div
          id="Home"
          className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
        >
          <div id="navbar" className="navbar">
            <nav>
              <div id="grp">
                <ul>
                  <li>
                    <a className="bar" href="#">
                      Name: Mohar
                    </a>
                  </li>
                  <li>
                    <a className="bar" href="#">
                      Staff ID: 123
                    </a>
                  </li>
                  <li>
                    <a className="bar" href="#">
                      Crime Branch: Mumbai
                    </a>
                  </li>
                  <li>
                    <a className="bar" href="#">
                      Location: Mulund
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <hr id="hr"></hr>
          <div id="px-3">
            <h1 id="heading">Weapon Detection</h1>
            <p className="lead">
              {" "}
              Welcome to our weapon detection system. Our advanced technology
              uses a combination of AI algorithms and image processing to detect
              weapons in real-time. Our system is designed to accurately
              identify various types of weapons, including firearms, knives, and
              explosives, with high accuracy and speed. With our system in
              place, you can rest assured that your premises are safe and
              secure. In the event that a weapon is detected, our system will
              immediately notify the appropriate authorities, allowing them to
              take swift action and prevent potential harm.
            </p>
            <a href="/" id="btn" className="btn">
              View Live Feed
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
