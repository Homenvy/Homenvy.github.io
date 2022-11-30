import Banner from "../components/banner/banner";
import CurrentEvents from "../CurrentEvents.json";
import { Link } from "react-router-dom";

const Home = (props) => {
    let theme = props.theme;
    console.log(props.theme);
    return (
      <>
        <Banner />
        <div>
          {/* <iframe 
            src={("https://discord.com/widget?id=362750172385509377&theme="+theme)}
            width="350" 
            height="500" 
            allowtransparency="true" 
            className="disWidget"
            frameBorder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
          </iframe> */}
          <h1>Project Zeal</h1>
          <p>Welcome to Project Zeal! What is this place you ask? Well it's very simple! This is a centralized
            place to advertise myself. Since this site is hosted through Github Pages, it can only handle 
            <b> static</b> content. This means I cannot load information from say... a database. To route some of
            these features I will be using json files. I do have experience with databasing.
          </p>
          <p>This site will show off development I am capable of (front-end) and also have a page
            that will show the services I offer. This Page will turn out to be an "overview" of the site, 
            giving you a little taste before you get to see the pages. I will give a brief explanation of each page
            here.
          </p>
          <table>
            <thead>
              <tr>
                <th>Priority</th>
                <th>Page</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {CurrentEvents.currentEvents.map((item, i) => (
                (item.isEnabled === "1")
                  ? 
                    <tr key={item.name}>
                      <td>{i+1}</td>
                      <td><Link to={item.route}>{item.name}</Link></td>
                      <td>{item.desc}</td>
                    </tr> 
                  : 
                    <tr key={i}></tr>
              ))}
            </tbody>
          </table>
            
        </div>
      </>
    );
  };
  
  export default Home;