import React,{Component} from 'react';
import {CardList} from './component/cardlist/card-list.component'
import {SearchBox} from './component/search-box/search-box.component'
import './App.css';

class App extends Component {

  constructor(props)
  {
    super()
    this.state={
      monsters:[],
      serchfield:''
    }
  }

  handleChange=(e)=>
  {
    this.setState({serchfield:e.target.value})
  }

  componentDidMount()
  {
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(users=>this.setState({monsters:users}))
  }

  render()
  {

    const {monsters,serchfield}=this.state

    const filteredMonters=monsters.filter((monster)=>monster.name.toLowerCase().includes(serchfield.toLowerCase()))

    return (

      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchBox placeholder="Seacrh Name" handleChange={this.handleChange} />
        <CardList monsters={filteredMonters}/>
      </div>
    );
  }
}

export default App;
