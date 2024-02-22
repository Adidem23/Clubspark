import React from 'react'
import '../css/ClubData.css'
import Mlsc from '../assests/mlsc.png'
import Star from '../assests/Star'
import Domain from '../components/Domain'
import { useState } from 'react'
import Events from '../components/Events'


const ClubData = ({ clubname }) => {

    // const selectedClub = clubDisplay.clubs.find((club) =>{if(club.clubName.match('MLSC')){
    //     console.log('Matched')
    // }
    // });
    // console.log(selectedClub)

    const [selectedComponent, setSelectedComponent] = useState("");

    const clickDomain = () => {
        setSelectedComponent('Domain');
    }

    const clickEvents = () => {
        setSelectedComponent('Events');
    }

    const clickAch = () =>{
        setSelectedComponent('Achievement');
    }

    return (
        <div className='clubdata-container'>
            <div className="left-data">
                <div className="left-logo">
                    <img src={Mlsc} alt="" />
                </div>
                <div className="left-rating">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>

                <div className="left-description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quas maxime eum totam eius vel aliquam aliquid placeat debitis? Quidem in quasi rerum recusandae veritatis illum expedita eum animi, quia accusantium reiciendis, voluptates nesciunt eveniet quas eos excepturi velit? Delectus quia non beatae ut? Voluptatum enim laudantium nulla et? Quam!
                </div>
            </div>

            <div className="right-data">
                <div className="right-top">
                    <button id='bento-nav-button' type="" onClick={clickDomain}>Domain</button>
                    <button id='bento-nav-button' type="" onClick={clickEvents}>Events</button>
                    <button id='bento-nav-button' type="" onClick={clickAch}>Achievement</button>
                </div>

                <div className="right-bottom">
                    {selectedComponent === 'Domain' && <Domain />}
                    {selectedComponent==='Events' && <Events/>}
                    {selectedComponent=='Achievement'}
                </div>
            </div>
        </div>
    )
}

export default ClubData