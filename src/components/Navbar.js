import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar" >
            <img 
                src='https://i.imgur.com/tLdkxvn.png?1' 
                alt='lego list logo' 
                className="logo"
            />
                <ul className="nav-links">
                    <div className="menu">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink exact to="/collectors">Collections</NavLink>
                        <NavLink to="/resources">Vinyl Grading</NavLink>
                    </div>
                </ul>
        </nav>
    )
}

export default Navbar