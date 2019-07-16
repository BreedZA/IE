import React from 'react';
import './NavItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navItems = () => (
    <ul className="NavItems">
        <NavigationItem link="/" active>Dashboard</NavigationItem>
        <NavigationItem link="/">Patients</NavigationItem>
        <NavigationItem link="/">Adminstration</NavigationItem>
        <NavigationItem link="/">Tasks</NavigationItem>
        <NavigationItem link="/">Forms</NavigationItem>
        <NavigationItem link="/">Report</NavigationItem>
    </ul>

);


export default navItems;
