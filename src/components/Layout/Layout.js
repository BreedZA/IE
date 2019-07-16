import React from 'react';
import './Layout.css';
import Auxil from '../../hoc/Auxil';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = (props) => (
    <Auxil>
        <Toolbar/>
        <main className="Content">
        {props.children}
        </main>
    </Auxil>
);

export default layout;
