import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import basilIcon from '../../assets/basilIcon.png';
import cherryTomatoesIcon from '../../assets/cherryTomatoesIcon.png';
import cilantroIcon from '../../assets/cilantroIcon.png';
import collardGreensIcon from '../../assets/collardGreensIcon.png';
import hungarianHotWaxPeppersIcon from '../../assets/hungarianHotWaxPeppersIcon.png';
import kaleIcon from '../../assets/kaleIcon.png';
// import marigoldsIcon from '../../assets/marigoldsIcon.png';

import './VerticalNavbar.css';

const VerticalNavbar = () => {
    const plants = [
        { icon: basilIcon },
        { icon: cherryTomatoesIcon },
        { icon: cilantroIcon },
        { icon: collardGreensIcon },
        { icon: hungarianHotWaxPeppersIcon },
        { icon: kaleIcon },
        // { name: 'Marigolds', icon: marigoldsIcon },
    ];

    return (
        <div className="vertical-navbar">
            <List>
                {plants.map((plant, index) => (
                    <ListItem key={index} button>
                        <ListItemIcon>
                            <img src={plant.icon} alt={plant.name} className="plant-icon" />
                        </ListItemIcon>
                        <ListItemText primary={plant.name} />
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default VerticalNavbar;
