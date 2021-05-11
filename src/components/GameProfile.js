import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchGame } from '../actions/gameActions';
import { createListItem } from '../actions/listItemActions';

class GameProfile extends Component {
    constructor(props){
        super(props);
        this.state = {
            rating: '',
            priority: '',
            status: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        const gameId = this.props.match.params.gameId;
        this.props.fetchGame(gameId);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const listItem = {
            rating: this.state.rating,
            game: {game_id: this.props.game.game_id},
            user: {user_id: this.props.profile.user_id},
            priority: this.state.priority,
            status: this.state.status
        }
        this.props.createListItem(listItem);
        alert("Successfully added game to list");
    }

    render() {
        const game = this.props.game;
        return (
            <div>
                <h2>{game.title}</h2>
                <p>{game.description}</p>
                <p>Platform: {game.platform}</p>
                <p>Developer: {game.developer}</p>
                <p>Publisher: {game.publisher}</p>
                <p>Release Date: {game.releaseDate}</p>
                <p>Genre: {game.genre}</p>
                <p>ESRB: {game.esrb}</p>
                {this.props.profile.userName !== "" ? 
                <div>
                    <h3>Add to list</h3>
                    <form onSubmit={this.onSubmit}>
                    <div>
                        <label for="rating">Rating: </label> <br />
                        <select name="rating" onChange={this.onChange} 
                            value={this.state.rating}>
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                            <option value="7">7</option>
                            <option value="6">6</option>
                            <option value="5">5</option>
                            <option value="4">4</option>
                            <option value="3">3</option>
                            <option value="2">2</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label for="priority">Priority: </label> <br />
                        <select name="priority" onChange={this.onChange} 
                            value={this.state.priority}>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label for="status">Status: </label> <br />
                        <select name="status" onChange={this.onChange} 
                            value={this.state.status}>
                            <option value="Current">Currently Playing</option>
                            <option value="Continuously">Continuously Playing</option>
                            <option value="Completed">Completed</option>
                            <option value="OnHold">On Hold</option>
                            <option value="Dropped">Dropped</option>
                            <option value="Plan">Plan to play</option>
                        </select>
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
                </div> : ""}
            </div>
        )
    }
}

GameProfile.propTypes = {
    fetchGame: PropTypes.func.isRequired,
    createListItem: PropTypes.func.isRequired,
    game: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    game: state.games.game,
    profile: state.users.profile
})

export default withRouter(connect(mapStateToProps, {fetchGame, createListItem})(GameProfile));