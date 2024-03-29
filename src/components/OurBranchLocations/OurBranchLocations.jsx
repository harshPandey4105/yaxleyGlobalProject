import React from "react";
import './OurBranchLocation.css';
import branchLocationHeading from '../images/branchLocationHeading.png';
import MapForBranchLocation from '../images/MapForBranchLocation.png';
import arroworange from '../images/arroworange.png';
const OurBranchLocations = () => {
    return (
        <div className="branch-location">
            <div className="branch-location-heading">
                <img src={branchLocationHeading} alt="heading-img" />
            </div>

            <div className="branch-location-inputs">

                <div className='branch-search-bar'>
                    <input type="text" placeholder="India" className="input-for-country" />
                    <input className="input-for-city"
                        type="text"
                        placeholder="Coimbatore"
                    />
                    <button type="submit">Search Now</button>
                </div>
            </div>

            <div className="branch-location-map">
                <div className="branch-location-map-left">
                    <img src={MapForBranchLocation} alt="Map-img" />
                </div>
                <div className="branch-location-map-right">
                    <h2>YaxelYGlobal Coimbatore</h2>
                    <p className="address-text">ADDRESS</p>
                    <h3>Mayura Complex, Mettupalayam Rd, Gounder Mills, Coimbatore,Tamil Nadu, India - 641029</h3>
                    <h4>Email - conatct.coimbatore@yaxelglobal</h4>
                    <h4>Tel +91 89565 95945</h4>
                    <button>Locate on Map <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default OurBranchLocations;

