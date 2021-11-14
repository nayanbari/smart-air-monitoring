import '../Styles/banner.css'
import circularText from '../Assets/circular-text.png'

const Banner = () => {
    return (
        <div className="banner">
            <div className="text-content">
                <h2 className="headline">breath pure <span>air</span></h2>
                <h4 className="sub-headline">Fresh air grants you the most<br />satisfying of feelings.</h4>
                <button className="sign-up">Sign Up</button>
            </div>
            <div className="image-container">
                <img src={circularText} alt="GET YOUR OWN PURIFIER NOW" />
            </div>
        </div>
    )
}

export default Banner



