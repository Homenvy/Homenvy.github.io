import React, { Component } from "react";
import './animations.css';

class Banner extends Component {

    render() {
        console.log("Banner Rendered");
        const timeOfDay = this.lightOfDay();
        const lightSource = this.findLightSource(timeOfDay);
        console.log(lightSource);

        return (
            <div className="relCanvas" style={{backgroundColor: 'blue'}}>
                <div className={timeOfDay}>
                    {
                    /*TODO: Check why onClick for planelaunch isn't working
                    */}
                    <div id={lightSource}></div>   
                </div>
                <div className="contentContainer">
                    <div id="logo">
                        {/*TODO: add in logo text and format it*/}
                    </div>
                </div>
                
                <div className="contentContainer">
                    <div className="island">
                        <img src="./img/banner/sunShrineZeal.png" id="sunShrine" alt="Sun Shrine"/>
                        <div id="blackBird">
                            {/*onClick()="planeLaunch()" */}
                        </div>
                        <img src="./img/banner/PalaceZeal.png" id="zealPalace" alt="Zeal Palace"/>
                        <img src="./img/banner/NuuStructureZeal.png" id="nuuStruct" alt="Sealed Structure" />
                        <img src="./img/banner/EnhasaZeal.png" id="enhasa" alt="Enhasa"/>
                    </div>    
                
                    <div id="clouds">

                    </div>
                </div>
            </div>
        );
    }

    lightOfDay() {
        const curTime = new Date();
        const curHour = curTime.getHours();

        if (curHour > 3 && curHour <= 6)
        {
            return "dawn";
        }
        else if (curHour > 6 && curHour <= 17)
        {
            return "day";
        }
        else if (curHour > 17 && curHour <= 19)
        {
            return "dusk";
        }
        else
        {
            return "night";
        } 
    }

    findLightSource(dayState) {
        let source = "sun";
        if (dayState === "night" || dayState === "dawn") {
            source = "moon";
        }
        console.log(dayState);
        return source;
    }

    planeLaunch() {
        return console.log("this happened");
        
    }
}

export default Banner;