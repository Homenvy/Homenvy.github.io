import Banner from "../components/banner/banner";

const Home = (props) => {
    const theme = props.theme;
    console.log(props.theme);
    return (
      <>
        <Banner />
        <div className={"bg-"+theme}>
          <iframe 
            src={("https://discord.com/widget?id=362750172385509377&theme="+theme)}
            width="350" 
            height="500" 
            allowtransparency="true" 
            className="disWidget"
            frameBorder="0" 
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
          </iframe>
          <h1>Project Zeal</h1>
          <p></p>
            
        </div>
      </>
    );
  };
  
  export default Home;