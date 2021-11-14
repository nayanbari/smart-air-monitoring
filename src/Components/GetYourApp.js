import qrCode from "../Assets/qr-code.png";
import "../Styles/qr_code.css";

const GetYourApp = () => {
    //     const getYourApp = document.querySelector('#get-your-app')
    //     console.log(getYourApp)
    //     console.log(spotlight)
    //     getYourApp.addEventListener('mousemove', (e)=> {
        //         console.log(e)
        //     })
    const showcase = (e) => {
        if (window.event) {
            e = window.event;
        }
        const spotlightSize = 400;
        console.log(e)
        const spotlight = document.querySelector('#spotlight')
        let mouseX = e.clientX - spotlightSize / 2 
        let mouseY = e.clientY - spotlightSize / 2
        console.log(mouseX, mouseY)
        console.log(spotlight)
        spotlight.classList.add('spotlight')
        spotlight.style.top = `${mouseY}px`
        spotlight.style.left = `${mouseX}px`
        if (mouseX < 0 || mouseY < 0){
            spotlight.style.width = 0
            spotlight.style.height = 0
        }
        else {
            spotlight.style.width = `${spotlightSize}px`
            spotlight.style.height = `${spotlightSize}px`
        }

    } 

  return (
    <div className="get-your-app" id="get-your-app" onMouseMove={showcase}>
        <div className="headline-container">
            <h3 className="headline-outline">get your app now</h3>
            <h3 className="headline">get your app now</h3>
        </div>
      <div className="qr-code">
        <img className="qr" src={qrCode} alt="get your app now" />
      </div>
      <div id="spotlight"></div>
    </div>
  );
};

export default GetYourApp;
