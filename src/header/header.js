import {NavLink} from "react-router-dom"

function Header() {

    return (
        <div>
            <nav id="nav">
                    <NavLink exact to="/slider" activeClassName="active">Slider</NavLink>
                    <NavLink exact to="/dragdrop">DragDrop</NavLink>
                    <NavLink to="/uploadfile">Uploadfile</NavLink>
            </nav>
        </div>
    )
}
export default Header