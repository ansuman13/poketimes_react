import  React  from 'react'
import {Link} from 'react-router-dom';
import Pokeball from '../../src/pokeball.png'
import './home.css'
import { connect } from 'react-redux'

 class Home extends React.Component {

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            this.setState({posts:json})
            console.log('test', json)
        } )
    }

     render(){
        let response = this.props.posts.map(( post )=> 
        (<div key={'up-'+post.id} className='post card cardoverflow'>
            <img src={Pokeball} alt='pokeball'/>
                <div className="card-content">
                <Link to={ '/post/' + post.id }>
                    <h3 className='card-title'>{post.title}</h3>
                </Link>
                    <p>{post.body}</p>
                </div>
        </div>))

         return (
             <div className="container home">
                {response}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)
