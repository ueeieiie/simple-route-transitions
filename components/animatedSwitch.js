//FROM LIBRARIES
// React's
import React from 'react';

// React-router-dom
import { Route, Switch, Redirect } from 'react-router-dom';

// Styled-Components
import styled from 'styled-components';

// React-router-transition
import { AnimatedSwitch, spring } from 'react-router-transition';

// COMPONENTS
import { Red, Green, Blue } from './colors';

// HELPER FUNCTIONS
// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 130,
        damping: 22,
    });
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 3.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
};

const StyledAnimatedSwitch = styled(AnimatedSwitch)`
    position: relative;
    top: 100px;
    left: -50px;

    & > div {
        position: absolute;
    }
`;


export default () => (
    <StyledAnimatedSwitch
        // Must props
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        className="route-wrapper"
        // Optional props
        mapStyles={mapStyles}>
        
        <Route path="/" exact render={() => <Redirect to="/red" />} />
        <Route path="/red" component={Red} />
        <Route path="/green" component={Green} />
        <Route path="/blue" component={Blue} />

    </StyledAnimatedSwitch>
);