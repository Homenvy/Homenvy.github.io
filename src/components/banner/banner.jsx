import React, { Component } from "react";
import './animations.css';
import './scenery.css';

function initialMotion() {
    try {
        const saved = window.localStorage.getItem('zeal-scenery-motion');
        if (saved !== null) return saved === 'on';
    } catch (_) {}
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

class Banner extends Component {
    state = { timeOfDay: this.lightOfDay(), motion: initialMotion() };

    toggleMotion = () => {
        this.setState(state => ({ motion: !state.motion }), () => {
            try { window.localStorage.setItem('zeal-scenery-motion', this.state.motion ? 'on' : 'off'); } catch (_) {}
        });
    };

    componentDidUpdate() {
        document.body.dataset.sceneryMotion = this.state.motion ? 'on' : 'off';
    }

    updateTimeOfDay = () => {
        const timeOfDay = this.lightOfDay();
        if (timeOfDay !== this.state.timeOfDay) this.setState({ timeOfDay });
    };

    componentDidMount() {
        document.body.dataset.sceneryMotion = this.state.motion ? 'on' : 'off';
        this.clock = window.setInterval(this.updateTimeOfDay, 60000);
        window.addEventListener('focus', this.updateTimeOfDay);
    }

    componentWillUnmount() {
        delete document.body.dataset.sceneryMotion;
        window.clearInterval(this.clock);
        window.removeEventListener('focus', this.updateTimeOfDay);
    }


    render() {
        console.log("Banner Rendered");
        const timeOfDay = this.state.timeOfDay;
        const lightSource = this.findLightSource(timeOfDay);
        return (
            <div className="relCanvas zeal-banner" data-time-of-day={timeOfDay} style={{backgroundColor: 'blue'}}>
                <button className="scenery-motion-toggle" type="button" onClick={this.toggleMotion}
                    aria-pressed={this.state.motion} aria-label="Animate scenery">
                    {this.state.motion ? 'Pause scenery' : 'Play scenery'}
                </button>
                <div className={timeOfDay}>
                    <div id={lightSource}></div>   
                </div>
                <div className="contentContainer">
                    <div id="bannerLogo">
                        
                    </div>
                </div>
                
                <div className="contentContainer">
                    <div className="island">
                        <img src="./img/banner/SunShrineZeal.png" id="sunShrine" alt="Sun Shrine"/>
                        <div
                            id="blackBird"
                            onClick={() => this.planeLaunch()}
                            >
                            
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
        return source;
    }

    planeLaunch() {
        return console.log("this happened");
        
    }
}

export default Banner;