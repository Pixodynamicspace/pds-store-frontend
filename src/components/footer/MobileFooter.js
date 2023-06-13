import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineHome, AiFillHome, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { MdPersonOutline, MdPerson } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { RiSearchFill } from 'react-icons/ri';

export const MobileFooter = () => {
  const iconSize = 20;

  return (
    <div className="bg-primary-base px-20 py-2 text-white flex justify-between">
      <NavLink exact="true" to="/">
        {({ isActive }) =>
          isActive ? <AiFillHome size={iconSize} /> : <AiOutlineHome size={iconSize} />
        }
      </NavLink>
      <NavLink exact="true" to="/search">
        {({ isActive }) =>
          isActive ? <RiSearchFill size={iconSize} /> : <AiOutlineSearch size={iconSize} />
        }
      </NavLink>
      <NavLink exact="true" to="/cart">
        {({ isActive }) =>
          isActive ? <FaShoppingCart size={iconSize} /> : <AiOutlineShoppingCart size={iconSize} />
        }
      </NavLink>
      <NavLink exact="true" to="/profile">
        {({ isActive }) =>
          isActive ? <MdPerson size={iconSize} /> : <MdPersonOutline size={iconSize} />
        }
      </NavLink>
    </div>
  );
};