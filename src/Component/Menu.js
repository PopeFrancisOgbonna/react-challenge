import React, { useState } from 'react';
import styled from 'styled-components';


const Menu = (props) =>{
    
    const {mode} = props;
    const [activeNav, setActiveNav] = useState('');
    const handleActiveNav = (navItem) =>{
        setActiveNav(navItem)
    }
    
    return(
        <Container>
            <div className={mode ==="" ? 'hide': null}>
                {/* app Menu */}
                <ul className={mode ==='app'? 'app': 'app hide'} >
                    <li 
                        className={activeNav === 'entry1' ? 'active' :null}
                        onClick={(a) =>handleActiveNav("entry1")}
                    >
                        Entry1
                    </li>
                    <li
                        className={activeNav === 'entry2' ? 'active' :null}
                        onClick={() =>handleActiveNav("entry2")}
                    >
                        Entry2
                    </li>
                    <li 
                        className={activeNav === 'entry3' ? 'active' :null}
                        onClick={() =>handleActiveNav("entry3")}
                    >
                        Entry3
                    </li>
                    <li
                        className={activeNav === 'entry4' ? 'active' :null}
                        onClick={() =>handleActiveNav("entry4")}
                    >
                        Entry4
                    </li>
                    <li
                        className={activeNav === 'entry5' ? 'active' :null}
                        onClick={() =>handleActiveNav("entry5")}
                    >
                        Entry5
                    </li>
                </ul>
                {/* Admin Menu Start */}
                <ul className={mode ==='admin'? 'admin': 'admin hide'}  >
                    <li
                         className={activeNav === 'admin1' ? 'active' :null}
                         onClick={() =>handleActiveNav("admin1")}
                    >
                        AdminEntry1
                    </li>
                    <li
                         className={activeNav === 'admin2' ? 'active' :null}
                         onClick={() =>handleActiveNav("admin2")}
                    >
                        AdminEntry2
                    </li>
                    <li
                         className={activeNav === 'admin3' ? 'active' :null}
                         onClick={() =>handleActiveNav("admin3")}
                    >
                        AdminEntry3
                    </li>
                </ul>
            </div>
        </Container>
    )
}
export default Menu;

const Container = styled.div `
    padding: 5px;
    width: 70%;
    margin: 2% auto;
    display:flex;
    background: #eee;
    padding: 15px;
    height: 50vh;
    div{
        border: 3px solid ##686767;
        padding: 15px;
        background: #686767;
        border-radius: 5px;

    }
    .admin,
     .app{
        list-style: none;
        padding:5px;
    }
    li{
        padding: 5px;
        border: 1px solid #fff;
        border-radius: 5px;
        margin: 10px 4px;
        color: #fff;
        text-align: center;
        font-size:1.1em;
        font-weight: 600;
        cursor: pointer;
        max-width: 11rem;
    }
    .hide{
        display:none;
    }
    .active{
        background:#97bcf3b9;
    }
`