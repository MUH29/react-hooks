import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar(props) {

    return <nav>
        <div class="nav-wrapper">
            <Link to="/" class="brand-logo left">Gamica</Link>

            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/dashboard">dashboard</Link>
                </li>
                <li><a href="collapsible.html">
                    {
                        props.useSection.loggedUser.name
                    }
                </a></li>
            </ul>
        </div>
    </nav>

}

export default connect((store) => {
    return store;
})(Navbar)