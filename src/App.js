import React, {Component} from 'react';
import './App.css';
import Slides from './components/Slides';
import SlidesWithoutHooks from './components/SlidesWithoutHooks';
const title = "Slideshow App";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            slides: [],
            current: 0
        }
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrev = this.gotoPrev.bind(this);
        this.restart = this.restart.bind(this);
    }
    
    componentDidMount () {
        this.setState({ slides: this.props.slides });
    }

    gotoNext (data) {
        const length = this.state.slides.length
        this.setState({...this.state, current: data === length -1 ? 0 : data + 1 });
    }

    gotoPrev (data) {
        const length = this.state.slides.length
        this.setState({...this.state, current: data === 0 ? length -1 : data - 1 });
    }

    restart () {
        this.setState({...this.state, current: 0 });
    }
   

    render () {
        return (
            <div>
                <div className="App">
                    <SlidesWithoutHooks 
                        slides={this.state.slides} 
                        current={this.state.current} 
                        gotoNext={this.gotoNext}
                        restart={this.restart}
                        gotoPrev={this.gotoPrev}/>

                    <Slides
                        slides={this.state.slides} 
                    />
                </div>
            </div>
        );
     }
}

export default App;
