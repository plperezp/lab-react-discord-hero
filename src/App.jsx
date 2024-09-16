import "./App.css";
import discordBackground from "./assets/discord-background.png";
import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";

function App() {
  return (
    <div id="app">
      <div id = "top-logo">
      <img src={discordLogo} id="discordLogo" alt="discord logo" />
      <img src={menuIcon} id= "menuIcon"alt="menuIcon" />
      
      </div>
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often
      </p>
      <div id = "buttons">

      <button id = "white-btn">Download for Mac</button>
      <button id = "black-btn">Open discord in your browser</button>
      </div>
      
      <img src={discordBackground} id ="background" alt="discord-background" />
    </div>
  );
}

export default App;
