import React, { useState } from 'react';
import Bus from './sidebar_components/bus';
import Flights from './sidebar_components/Flights';
import Train from './sidebar_components/Train';
import Movies from './sidebar_components/Movies';
import Car from './sidebar_components/Car';
import Hotels from './sidebar_components/Hotels';
import Tours from './sidebar_components/Tours';
import Events from './sidebar_components/Events';

const Sidebar = () => {
  const [selectedLink, setSelectedLink] = useState(0);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  const links = [
    { component: <Bus /> },
    { component: <Flights /> },
    { component: <Train /> },
    { component: <Movies /> },
    { component: <Car /> },
    { component: <Hotels /> },
    { component: <Events /> },
    { component: <Tours /> },
  ];

  return (
    <aside className='pt-7 pl-3 w-[225px] '>
      {links.map((link, index) => (
        <LinkItem
          key={index}
          index={index}
          component={link.component}
          selected={selectedLink === index}
          onClick={() => handleLinkClick(index)}
        />
      ))}
    </aside>
  );
};

const LinkItem = ({ component, selected, onClick }) => {
  return (
    <div
      className={`${selected ? 'bg-gray-100 w-[200px] rounded-md ' : ''}`}
      onClick={onClick}
    >
      <ul className=''>
        <li
          className='cursor-pointer flex items-center pl-4 my-1 h-[45px] w-[200px]
        hover:bg-gray-100  rounded-md'
        >
          {component}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
