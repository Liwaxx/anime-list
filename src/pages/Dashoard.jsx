import React, { Component } from 'react';
import Card from '../components/Card/Component'
import Axios from 'axios'

class Dashoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataTop : [],
        pages: 0,
        totalPages : 8
    }
  }
  
  componentDidMount(){
    const url = 'https://api.jikan.moe/v3/top/anime'
    Axios.get(url)
    .then((res) => {
        this.setState({
            dataTop : res.data.top
          }
        )
    })
    .catch((errors) => {
      alert(errors)
    })
  }

  getPerPages = (pages) =>{
    const url = 'https://api.jikan.moe/v3/top/anime/'+pages+'/upcoming'
    const config = {
      headers : {
        'Access-Control-Allow-Origin' : '*',
      }
    }
    Axios.get(url)
    .then((res) => {
        this.setState({
            pages : pages,
            dataTop : res.data.top
          }
        )
    })
    .catch((errors) => {
      alert(errors)
    })
  }

  renderView = () =>{
    if(this.state.dataTop.length > 0){
      return(
      this.state.dataTop.map((val,key) => {
        return(
          <Card status={1} data={val} key={key}/>  
        )
      })
      
      )
    } 
    else{
      return(
        <Card status={0} />
      )
    } 
      
  }

  render() {
    const items = []
    const pages = this.state.pages
    for (let i = 1; i <= this.state.totalPages; i++) {
      items.push(<li class="page-item"><a class="page-link" href="#" onClick={() => this.getPerPages(i)}>{i}</a></li>)
    }

    return (
      <div>
        <h2 style={{color : 'white'}}>Top Anime</h2>
        {this.renderView()}
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <a class="page-link" href="#" onClick={() => this.getPerPages(pages - 1)}>Previous</a>
            </li>
              {items}
            <li class="page-item">
              <a class="page-link" href="#" onClick={() => this.getPerPages(pages + 1)}>Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Dashoard;