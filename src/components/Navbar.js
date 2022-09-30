import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar" >
            <img 
                src='https://i.imgur.com/t' 
                alt='fox vinyl logo' 
                className="logo"
            />
                <ul className="nav-links">
                    <div className="menu">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink to="/collectors">Collections</NavLink>
                        <NavLink to="/vinylgrade">Vinyl Grading</NavLink>
                    </div>
                </ul>
        </nav>
    )
}

export default Navbar