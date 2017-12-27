// React's
import React from 'react';

// Styled-components
import styled from 'styled-components';

// React-router-dom
import {NavLink} from 'react-router-dom';

// Menu's link data
const links = [
    {path: '/red', title: 'Red'},
    {path: '/green', title: 'Green'},
    {path: '/blue', title: 'Blue'}
]

// styles
const StyledMenu = styled.ul`
    list-style-type: none;
    display: flex;

    li {
        padding: 0 20px;
    }
    a {
        text-decoration: none;
        padding: 5px;
        color: black;
    }
    .active {
        display: inline-block;
        background-color: lightgray;
        font-weight: bold;
    }
`;

// Menu Component
export default class Menu extends React.Component {
    render(){
        return(
            <StyledMenu>
                {
                    links.map((l, index) => (
                        <NavLink key={index} activeClassName="active" to={l.path}> 
                            <li> {l.title} </li> 
                        </NavLink>
                    ))
                }
                
            </StyledMenu>
        );
    }
}