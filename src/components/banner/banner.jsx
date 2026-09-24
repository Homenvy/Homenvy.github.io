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
    state = { timeOfDay: this.lightOfDay(), motion: initialMotion(), flying: false };
    scene = React.createRef();
    floatTime = 0;

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
        this.measureSprites();
        this.layoutObserver = new ResizeObserver(this.measureSprites);
        this.layoutObserver.observe(this.scene.current);
        this.layoutObserver.observe(this.scene.current.querySelector('.island'));
        this.scene.current.querySelectorAll('.island > img').forEach(el => el.addEventListener('load', this.measureSprites));
        window.addEventListener('resize', this.measureSprites);
        this.frame = requestAnimationFrame(this.animateSprites);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frame);
        this.layoutObserver.disconnect();
        this.scene.current.querySelectorAll('.island > img').forEach(el => el.removeEventListener('load', this.measureSprites));
        window.removeEventListener('resize', this.measureSprites);
        this.flight?.cancel();
        this.flightSprite?.remove();
        delete document.body.dataset.sceneryMotion;
        window.clearInterval(this.clock);
        window.removeEventListener('focus', this.updateTimeOfDay);
    }


    render() {
        const timeOfDay = this.state.timeOfDay;
        const lightSource = this.findLightSource(timeOfDay);
        return (
            <div ref={this.scene} className="relCanvas zeal-banner" data-time-of-day={timeOfDay} style={{backgroundColor: 'blue'}}>
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
                        <button id="blackBird" type="button" aria-label="Fly the Blackbird"
                            disabled={this.state.flying} onClick={() => this.planeLaunch()} />
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

    measureSprites = () => {
        const scene = this.scene.current;
        if (this.flight) this.finishFlight();
        const scale = scene.querySelector('.island').getBoundingClientRect().width /
            scene.querySelector('.island').offsetWidth || 1;
        this.sprites = [...scene.querySelectorAll('.island > img, #blackBird')].map(el => {
            el.style.transform = 'none';
            const rect = el.getBoundingClientRect(), style = getComputedStyle(el);
            return { el, x: rect.x, y: rect.y, scale, elapsed: this.floatTime,
                dx: parseFloat(style.getPropertyValue('--float-x')),
                dy: parseFloat(style.getPropertyValue('--float-y')),
                duration: parseFloat(style.getPropertyValue('--float-duration')) * 1000,
                delay: parseFloat(style.getPropertyValue('--float-delay')) * 1000 };
        });
    };

    animateSprites = now => {
        const delta = this.state.motion && this.lastFrame ? Math.min(now - this.lastFrame, 64) : 0;
        this.floatTime += delta;
        this.lastFrame = now;
        const dpr = window.devicePixelRatio || 1;
        this.sprites.forEach(sprite => {
            const {el, x, y, scale, dx, dy, duration, delay} = sprite;
            if (el.id === 'blackBird' && this.flight) return;
            sprite.elapsed += delta;
            const wave = (1 - Math.cos((sprite.elapsed - delay) / duration * Math.PI * 2)) / 2;
            // Snap the final screen position, including the mobile scene scale.
            const tx = (Math.round((x + dx * wave * scale) * dpr) / dpr - x) / scale;
            const ty = (Math.round((y + dy * wave * scale) * dpr) / dpr - y) / scale;
            el.style.transform = `translate(${tx}px, ${ty}px)`;
        });
        this.frame = requestAnimationFrame(this.animateSprites);
    };

    finishFlight = () => {
        this.flight?.cancel();
        this.flightSprite?.remove();
        this.scene.current.querySelector('#blackBird').style.visibility = '';
        this.flight = null;
        this.flightSprite = null;
        this.setState({ flying: false });
    };

    planeLaunch() {
        if (this.flight || this.state.flying) return;
        const plane = this.scene.current.querySelector('#blackBird');
        const stage = this.scene.current.getBoundingClientRect();
        const origin = plane.getBoundingClientRect();
        const x = origin.left - stage.left, y = origin.top - stage.top;
        const sprite = document.createElement('img');
        sprite.src = './img/banner/BlackBirdLeft.png';
        sprite.alt = '';
        sprite.className = 'blackbird-flight';
        sprite.style.width = `${origin.width}px`;
        this.scene.current.appendChild(sprite);
        this.flightSprite = sprite;
        plane.style.visibility = 'hidden';
        this.setState({ flying: true });
        const high = Math.max(60, y - 85), loopX = Math.max(85, x - 100);
        const at = (offset, px, py, angle = 0) => ({offset, transform: `translate(${px}px, ${py}px) rotate(${angle}deg)`});
        const frames = [at(0,x,y), at(.1,x-35,y-10,12), at(.22,loopX,high,0)];
        // A full backward loop, nose following the circular flight path.
        const radius = Math.min(45, (high - 10) / 2);
        for(let i=1;i<=24;i++) {
            const t=i/24*Math.PI*2;
            frames.push(at(.22+i/24*.30,loopX-radius*Math.sin(t),high-radius*(1-Math.cos(t)),i/24*360));
        }
        frames.push(at(.64,-60,high,360), at(.64001,stage.width+60,high,360),
            at(.80,x+100,high,360),at(.93,x+20,y-8,350),at(1,x,y,360));
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches && !this.state.motion;
        this.flight = sprite.animate(reduced ? [at(0,x,y),at(1,x,y)] : frames,
            {duration: reduced ? 250 : 7600, easing:'linear',fill:'forwards'});
        this.flight.onfinish = this.finishFlight;
    }
}

export default Banner;
