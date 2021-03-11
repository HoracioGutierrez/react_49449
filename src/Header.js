import Nav from "./Nav"

const Header = ({titulo}) => {
    return (
        <header>
            <h1>{titulo}</h1>
            <Nav/>            
        </header>
    ) 
}

export default Header