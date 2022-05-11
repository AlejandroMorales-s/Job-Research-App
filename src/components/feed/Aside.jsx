import React from 'react'
import FavsCard from './FavCard'
import {Link} from 'react-router-dom';

export default function Aside() {
    return (
        <aside>
            <h2>Favorites</h2>
            <div className="fav-container">
                <FavsCard/>
                <Link className='fav-btn-container' to="/favorites">
                    <button className="fav-btn">View All</button>
                </Link>
            </div>
        </aside>
    )
}
