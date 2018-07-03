const squad = ["Roberto Firminho", "Mohamed Salah", "Jordan Henderson", "Sadio Mane", "Andy Robertson", "Dejan Lovren", "Oxlade Chamberlain"];



const Player = (props) =>{
    return(
        <li>{props.name}</li>
    )
}

const SquadList = (props) => {
    return (
        <ul>

            {squad.map((player, i) => {
                return <Player name={player} number={i} /> 
            })}
        </ul>
    )
}

const Header = (props) =>{
    return(
        <h1>{props.title}</h1>
    )
}



const App = (props) =>{
    return(
        <div>
        <Header title= "Liverpool Most Efficient Players" />
        <SquadList />
        </div>
    )
}

const root = document.querySelector(".root");
ReactDOM.render(<App />, root)