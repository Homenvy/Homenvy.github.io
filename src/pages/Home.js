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
          <div className="contentCanvas">
            <p>Welcome to my site! Throughout my life I always have themed my projects. These themes usually
              come from other games. This particular theme is from Chrono Trigger, one of my favorite games. 
              I always try to design and engineer interesting software. I try to expand upon both old and new 
              ideas to improve efficiency, but to also expand my understanding of what I can do with code. This
              site is currently a work in progress. I hope you are as excited as I am to see how this turns out!
            </p>
            <p>There was once a site I worked on. Developed and engineered it in .net C# using the MVC4 framework.
              I was implementing all I could to help this person out. The site was fabulous. I worked on it until
              it was around 85% complete, then a tragedy occurred. This resulted in the project not seeing the light
              of day. Although the project itself did not get to fully launch, the features and functionality are 
              not lost. I have decided to convert the site into a template that I can use. This site is one of the
              processes towards that goal. 
            </p>
            <p>This site will show off development I am capable of... a sort of portfolio. The goal here is to have 
              this site serve as a reference to possible job opportunities and market my abilities to various 
              communities. I have done various types of technical work, ranging from hardware IT related issues to 
              network implementation, troubleshooting, resolving and designing and engineering software. I have 
              always come back and forth between the three, but software design and engineering seem to be my
              specialty.
            </p>
          </div>
          {/* <table>
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
          </table> */}
            
        </div>
      </>
    );
  };
  
  export default Home;