import React, { useState } from 'react';
import styled from 'styled-components';


const Menu = ( props ) => {
    
  const { mode } = props;
  const [ activeNav, setActiveNav ] = useState('');
  const handleActiveNav = ( navItem ) =>{
    setActiveNav(navItem)
  }
  
  const appMenu = [
    {
      id: 1,
      name: 'Entry1',
      description: '',
      url: ''
    },
    {
      id: 2,
      name: 'Entry2',
      description: '',
      url: ''
    },
    {
      id: 3,
      name: 'Entry3',
      description: '',
      url: ''
    },
    {
      id: 4,
      name: 'Entry4',
      description: '',
      url: ''
    },
    {
      id: 5,
      name: 'Entry5',
      description: '',
      url: ''
    },
  ];

  const adminMenu = [
    {
      id: 'admin1',
      name: 'adminEntry1',
      description: '',
      url: ''
    },
    {
      id: 'admin2',
      name: 'adminEntry2',
      description: '',
      url: ''
    },
    {
      id: 'admin3',
      name: 'adminEntry3',
      description: '',
      url: ''
    },
  ];

  const menu = mode === 'app' ? appMenu : adminMenu;
  
  return(
    <Container>
      <div className={ mode === "" ? 'hide': mode === 'app' ? 'app' : 'admin'}>
        {/* app Menu display */}
        {
          menu.map((menuItem) => {

            return(
              <ul className={mode === 'app' ? 'app' : 'admin'} key={menuItem.id}>
              <li 
                className={activeNav === menuItem.id ? 'active' : null}
                onClick={(e) =>handleActiveNav(menuItem.id)}
              >
                {menuItem.name}
              </li>
            </ul>
            )
          })
        }
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
  min-height: 59vh;
  div{
    border: 3px solid ##686767;
    padding: 15px;
    background: #686767;
    border-radius: 5px;
  }
  div.admin{
    background: #686 !important;
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
    margin: 5px 4px;
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