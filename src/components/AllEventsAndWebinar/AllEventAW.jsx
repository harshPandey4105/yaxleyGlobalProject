import React from "react";
import './AllEventAW.css';
import UpcomingEAW from '../images/UpcomingEAW.png';
import AllEventsImg from '../images/AllEventsImg.png'
const AllEventAW = () => {
    return (
        <div className="upcoming-webinar-for-event">
            <div className="upcoming-section-headings">
                <img src={UpcomingEAW} alt="Heading" />
            </div>
            <div className="upcoming-webinar-section-context">
                <div className="btns-block">
                    <button>Events</button>
                    <button>Webinar</button>
                </div>
                <div className="upcoming-search-bar">
                    <input type="text" placeholder="Explore events" />
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
            <div className="upcoming-events-blocks-section">
                <div className="upcoming-events-block">
                    <img src={AllEventsImg} alt="Events-img" />
                    <button>See Full Events</button>
                    <button>Register Now</button>
                </div>
                <div className="upcoming-events-block">
                    <img src={AllEventsImg} alt="Events-img" />
                    <button>See Full Events</button>
                    <button>Register Now</button>
                </div>
                <div className="upcoming-events-block">
                    <img src={AllEventsImg} alt="Events-img" />
                    <div className="btns">
                        <button>See Full Events</button>
                        <button>Register Now</button>
                    </div>
                </div>
                <div className="upcoming-events-block">
                    <img src={AllEventsImg} alt="Events-img" />
                    <button>See Full Events</button>
                    <button>Register Now</button>
                </div>
            </div>
        </div>
    )
}

export default AllEventAW;