import logo from '../Assets/logo.png'
import '../Styles/navigationbar.css'

const NavigationBar = () => {
    return (
        <nav>
            <div className="image-container">
                <img src={logo} alt="PNT Smart Air" />
            </div>
            <div className="links-container">
                <ul className="links">
                    <li className="link">Home</li>
                    <li className="link">About</li>
                    <li className="link">Actions</li>
                    <li className="link">Analysis</li>
                    <li className="link sign-up">Sign Up</li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="mobile-navigation-container">
                <ul className="links">
                    <li className="link">Home</li>
                    <li className="link">About</li>
                    <li className="link">Actions</li>
                    <li className="link">Analysis</li>
                    <li className="link sign-up">Sign Up</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar
