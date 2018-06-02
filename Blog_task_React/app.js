const Header = (props) => {
    return (
        <h1 className="title">{props.name}</h1>
    )
}


const PostTitle = (props) => {
    return (
        <h3 className="postTitle">{props.title}</h3>
    )
}

const PostText = (props) => {
    return (
        <p className="postText">{props.text}</p>
    )
}
const Post = (props) => {
    return (
        <div className="post">
            <PostTitle title="This is my first React task" />
            <PostText text="And im feeling good" />
        </div>
    )
}
const ListOfPosts = (props) => {
    return (
        <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
    )
}


const Main = (props) => {
    return (
        <ListOfPosts />
    )
}

const App = (props) => {
    return (
        <div>
            <Header name="My First React Blog" />
            <Main />
        </div>
    )
}




const root = document.querySelector(".root");
ReactDOM.render(<App />, root)