import React, { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import {Search} from '../src/components/search/search.component'
import './App.css';

class App extends Component{
    constructor() {
        super();
        this.state = {
            monsters:[],
            searchText: ''
        }


    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => response.json())
            .then (users => this.setState({monsters: users}));
        console.log(this.state)
    }
    //const {monsters, searchText }= this.state;
  filteredMonsters = () => {
    return this.state.monsters.filter(monster => {return monster.name.includes(this.state.searchText)})
};

    render() {


        return (
            <div className="App">
                <h1>What monster are you?</h1>
            <header className="App-header">
                <Search
                    placeholderValue='Search for monster...'
                    changeAction={(e) => {this.setState({searchText: e.target.value})}}
                    />
                <CardList monsters={this.filteredMonsters()} />
        </header>

        </div>)
      }
}




export default App;
