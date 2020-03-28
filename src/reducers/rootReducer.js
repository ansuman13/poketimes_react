
const initState = {
    posts :[
        {id:1, title:'Hello World with react and redux', body:'this is a test of my patience and edurance, say whatever you may but i will learn react and redux since they would complete me as a web developer'},
        {id:2, title:'Data Science Party', body:'I will do this in honour of all the teacher and past gurus and plus i like statistics'},
        {id:3, title:'Machine Learning Projects', body:'Frankly because it is the future of human evolution, should we evolve from this mentality and go on be the brightest ideal society we need unbiased machines'}

    ]
}

const rootReducer = (state=initState, action) => {
    if(action.type==='DELETE_POST'){
        console.log('action delete_post called')
        let newPosts = state.posts.filter(post => { return post.id != action.id })
        console.log(newPosts)
        return {
            ...state,
            posts: newPosts
        }
    }
    return state;
}

export default rootReducer