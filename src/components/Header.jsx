import { NavLink } from "react-router-dom"
import { router } from "../router/index"

function Header() {
    return (
        <header className="header">
            <NavLink to='/' className="logo">Store</NavLink>
            <ul className="list">
                {
                    router.map((route) => (
                        route.name ? <li key={route.path}><NavLink className="header__link" to={route.path}>{route.name}</NavLink></li> : ""
                    ))
                }
            </ul>
        </header>
    )
}

export default Header