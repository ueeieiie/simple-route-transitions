// React's
import React from 'react';

// Recat-router-dom
import {HashRouter as Router } from 'react-router-dom';

// Styled-components
import styled from 'styled-components';

// Components
import Menu from './menu';
import {Red, Green, Blue} from './colors';
import AnimatedSwitchComponent from './animatedSwitch';

// styles
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

// App Component
const App = () => {
    return(
        <Router basename="/">
            <Wrapper>
                <Menu />
                <AnimatedSwitchComponent />
            </Wrapper>
        </Router>
    );
}

export default App;