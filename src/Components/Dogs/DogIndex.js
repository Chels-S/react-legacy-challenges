import React, {Component} from 'react';
import {Button} from 'reactstrap';


export default class DogPhoto extends Component {
    state = {photo: []};

    componentDidMount() {
        this.fetchDog();
    }
    
    fetchDog = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => {
            // const {url} = response;
            // this.setState({photo: url});
            // console.log(response.json());
            return response.json();
        })
        .then((json) => {

            const {message} = json;
            this.setState({photo: message});
            console.log(message);
        })
            .catch((error) => {
                console.log(error);
            })
    }

    changeHandler(event){
        // this.fetchDog();
    }

    render() {
        return(
            <div className="main">
                <div className="mainDiv">
                    <h1>Doggo:</h1>
                    <img src={this.state.photo} alt="dog"/>
                {/* <button onClick={this.fetchDog()}></button> */}
                    <br /><br />
                    <Button type="submit" onClick={() => this.fetchDog()} >Next Doggo!</Button>
                </div>
            </div>
        )

    }

}