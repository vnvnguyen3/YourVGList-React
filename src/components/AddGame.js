import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createGame } from '../actions/gameActions';

class AddGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            platform: '', 
            developer: '',
            publisher: '',
            releaseDate: '',
            genre: '',
            esrb: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const game = {
            title: this.state.title,
            description: this.state.description,
            platform: this.state.platform, 
            developer: this.state.developer,
            publisher: this.state.publisher,
            releaseDate: this.state.releaseDate,
            genre: this.state.genre,
            esrb: this.state.esrb
        }
        this.props.createGame(game);
        alert("Game successfully added");
        this.props.history.push('/games');
    }
    render() {
        return (
            <div>
                <h1>Add a new game</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="title">Title: </label> <br />
                        <input type="text" name="title" onChange={this.onChange} 
                            value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label for="description">Description: </label> <br />
                        <input type="text" name="description" onChange={this.onChange} 
                            value={this.state.description} />
                    </div>
                    <br />
                    <div>
                        <label for="platform">Platform: </label> <br />
                        <input type="text" name="platform" onChange={this.onChange} 
                            value={this.state.platform} />
                    </div>
                    <br />
                    <div>
                        <label for="developer">Developer: </label> <br />
                        <input type="text" name="developer" onChange={this.onChange} 
                            value={this.state.developer} />
                    </div>
                    <br />
                    <div>
                        <label for="publisher">Publisher: </label> <br />
                        <input type="text" name="publisher" onChange={this.onChange} 
                            value={this.state.publisher} />
                    </div>
                    <br />
                    <div>
                        <label for="genre">Genre: </label> <br />
                        <input type="text" name="genre" onChange={this.onChange} 
                            value={this.state.genre} />
                    </div>
                    <br />
                    <div>
                        <label for="releaseDate">Release Date: </label> <br />
                        <input type="date" name="releaseDate" onChange={this.onChange} 
                            value={this.state.releaseDate} />
                    </div>
                    <br />
                    <div>
                        <label for="esrb">ESRB: </label> <br />
                        <select name="esrb" onChange={this.onChange} 
                            value={this.state.releaseDate}>
                            <option value="E">E</option>
                            <option value="E10">E10+</option>
                            <option value="T">T</option>
                            <option value="M">M</option>
                            <option value="Ao">Ao</option>
                        </select>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

AddGame.propTypes = {
    createGame: PropTypes.func.isRequired
}

export default connect(null, { createGame })(AddGame);
