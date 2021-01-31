import React from 'react';
import { Link } from "@reach/router";

const Header = () => {

    return (
        <div className="header">
            <div className="headerLeft">
                <h2><Link to="/players/list">Manage Players</Link></h2>
                <div className="divider"></div>
                <h2><Link to="/status/game/1">Manage Player Status</Link></h2>
            </div>
            
            <Link to="/players/list">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/1200px-Manchester_United_FC_crest.svg.png" alt="emblem">
                </img>
            </Link>
        </div>
    )
}

export default Header;