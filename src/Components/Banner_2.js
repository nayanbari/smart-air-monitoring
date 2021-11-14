import smartHome from '../Assets/smart_home.png'
import '../Styles/banner_2.css'

const Banner_2 = () => {
    return (
        <div className="banner-2">
            <div className="text-content">
                <h3 className="headline">keeping your home <br /> <span>connected</span> and clean</h3>
                <h5 className="sub-headline">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sed natus perspiciatis odit ex doloribus itaque nihil consequuntur error totam.</h5>
            </div>
            <div className="image-container">
                <img src={smartHome} alt="Smart Home" />
            </div>
        </div>
    )
}

export default Banner_2
