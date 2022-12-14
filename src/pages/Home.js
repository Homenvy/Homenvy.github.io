import Banner from "../components/banner/banner";
import ChangeLog from "../components/changelog";

const Home = (props) => {
    let theme = props.theme;

    return (
      <>
        <Banner />
        <div className={"contentContainer"}>
          <div id="cloud" />
            <div style={{height: "0px"}}>
              <div className={"contentCanvas indexCanvas " + theme}>
                <p>You must be wondering, "What is this site?". I have started setting up this site in REACT for multiple
                  reasons. I originally was using MVC4 asp .net framework but as I looked at multiple job positions I 
                  became aware that React was a more popular framework. Since I had some experience in React I figured 
                  the next website I created should be in React. My third option was Vue.js. One of the recent projects I 
                  have worked on was based upon Vue.js. I have not decided which framework I enjoy the most, but I do not 
                  mind learning them all as it will enhance my understanding of the concepts behind each. This
                  site is currently a work in progress. I hope you are as excited as I am to see how this turns out!
                </p>
                <p>I plan to have multiple pages that focus on each aspect I want this site to have. So far I have 4 major 
                  pages, outside of the homepage. This is not the final draft. I may merge or make more pages as I go 
                  through and provide content to each page. I do have major topics to cover: one to showcase my
                  portfolio, a page to list out all the services I offer remotely and locally, and an about me page that
                  I wish to redesign as a resume page, but make it reactive. These will be the first 3 pages I focus on,
                  but not in a specific order. Since Github Pages only allows static websites, I will be using json files 
                  in place of the databases I would usually have connected. This will allow for a smoother transition 
                  when the time comes to expand the site beyond Github. 
                </p>

              </div>
              <div className={"contentCanvas indexCanvas " + theme}>
                <p>Everything on this site will be designed by me. There are a few exceptions, like the floating islands.
                  These were created by another company (Square-Enix). I did get the spritesheet for these pixel graphics
                  and edit out the unwanted parts of the image. I do plan on making interactable elements on this banner, 
                  but the priority on this particular TODO will be low. I will mainly want to try to create interactive
                  CSS elements to look cool and save space. With a mobile-first approach, I would want the site to adapt
                  to any resolution and flow smoothly for the end-user. 
                </p>
              </div>
              <div className={"contentCanvas indexCanvas " + theme}>
                <ChangeLog />
              </div>
            </div>
          {/* TODO: Date sifting based on current date. Check date formats
                    Create arrows that can be clicked on and see through the logs
                    */}
            
        </div>
      </>
    );
  };
  
  export default Home;