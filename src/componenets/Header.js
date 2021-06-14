import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../images/olx-logo-vector.png'
import '../StyleSheet/Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const Header = () => {
    const nav=[
        {ID: 1, label:"Mobile Phone"},
        {ID: 2, label:"Cars"},
        {ID: 3, label:"Motocycles"},
        {ID: 4, label:"Houses"},
        {ID: 5, label:"TV Video Audio"},
        {ID: 6, label:"Tablets"},
        {ID: 7, label:"Land & Plots"}
    ]

    return (
        <div>
            <div className="headerContainer">
                <div className="leftContainer">
                    <img className="leftContainerLogo" src={Logo} alt="olx-logo" />

                </div>
                <div className="locations">
                    <SearchIcon className="labelSearch" />
                    <input type="text" className="label" placeholder="Enter Your Location" value="Sindh" />
                    <ExpandMoreIcon />
                </div>
                <div className="centerContainer">
                    <input
                        type="text"
                        className="headerInput"
                        placeholder="Find cars, mobile and gaming console" />
                    <SearchIcon className="headerCenterIcon" />
                </div>
                <div className="rightContainer">
                    <h4 className="headerRightText">Login</h4>
                    <button className="headerBtn">+SELL</button>
                </div>
            </div>
            <div className="hnav">
                <button className="hnavBtn">
                    <h2 className="allCategories">ALL CATEGORIES</h2>
                    <ExpandMoreIcon/>
                </button>
                <div>
                    <ul className="itemsList">
                        <li>Mobile Phone</li>
                        <li>Cars</li>
                        <li>Motocycles</li>
                        <li>Houses</li>
                        <li>TV Video Audio</li>
                        <li>Tablets</li>
                        <li>Land & Plots</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header