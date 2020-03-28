import React from 'react';
import { connect } from 'react-redux';

class Post extends React.Component
{   
    deletePost = (id) => {
        this.props.deletePost(id)
        this.props.history.push('/')
    }

    render(){
        console.log(this.props)
        let response = null;
        response = <div className='container'>
               <h1>{this.props.post.title}</h1>
               <p>{this.props.post.body}</p>
               <div className="center">
                   <button className="btn red" onClick={ ()=> this.deletePost(this.props.match.params.post_id) }>Delete</button>
               </div>
            </div>
        
        
        return (
            <div>
                { this.props.post ? response:
                <div className='container'>Loading...</div>}
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
       post : state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => dispatch({type:'DELETE_POST', id:id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)