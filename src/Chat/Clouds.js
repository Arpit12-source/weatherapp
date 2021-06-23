import React from 'react'
import "./Cloud.css"
const Clouds = (props) => {
    let cloud = null
    switch (props.cloudtype) {
        case "sunshower": return cloud = <div className="icon sun-shower">
            <div className="cloud"></div>
            <div className="sun">
                <div className="rays"></div>
            </div>
            <div className="rain"></div>
        </div>
        case "thunderstorm":return cloud = <div className="icon thunder-storm">
            <div className="cloud"></div>
            <div className="lightning">
                <div className="bolt"></div>
                <div className="bolt"></div>
            </div>
        </div>
        case "cloudy":  return cloud = <div className="icon cloudy">
            <div className="cloud"></div>
            <div className="cloud"></div>
        </div>
        case "flurries": return cloud = <div className="icon flurries">
            <div className="cloud"></div>
            <div className="snow">
                <div className="flake"></div>
                <div className="flake"></div>
            </div>
        </div>
        case "sunny": return cloud = <div className="icon sunny">
                                     <div className="sun">
                                      <div className="rays"></div>
                                     </div>
        </div>
        case "rainy": return cloud = <div className="icon rainy">
            <div className="cloud"></div>
            <div className="rain"></div>
        </div>
        default:
            return cloud = <div className="icon sunny">
                <div class="sun"></div>
             <div class="rays"></div>
            </div>
    }
   return(
       <div>
       {cloud}
       </div>
   )
   }
export default Clouds;
