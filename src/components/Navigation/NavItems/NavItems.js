import React from 'react';
import './NavItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navItems = () => (
    <ul className="NavItems">
        <NavigationItem link="/progress" >Dashboard</NavigationItem>
        <NavigationItem link="/patients">Patients</NavigationItem>
        <NavigationItem link="/progress">Adminstration</NavigationItem>
        <NavigationItem link="/progress">Tasks</NavigationItem>
        <NavigationItem link="/progress">Forms</NavigationItem>
        <NavigationItem link="/progress">Report</NavigationItem>
            <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>

);


export default navItems;
