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
      <NavLink exact to="/" activeClassName="active">
        {({ isActive }) =>
          isActive ? <AiFillHome size={iconSize} /> : <AiOutlineHome size={iconSize} />
        }
      </NavLink>
      <NavLink exact to="/search" activeClassName="active">
        {({ isActive }) =>
          isActive ? <RiSearchFill size={iconSize} /> : <AiOutlineSearch size={iconSize} />
        }
      </NavLink>
      <NavLink exact to="/cart" activeClassName="active">
        {({ isActive }) =>
          isActive ? <FaShoppingCart size={iconSize} /> : <AiOutlineShoppingCart size={iconSize} />
        }
      </NavLink>
      <NavLink exact to="/profile" activeClassName="active">
        {({ isActive }) =>
          isActive ? <MdPerson size={iconSize} /> : <MdPersonOutline size={iconSize} />
        }
      </NavLink>
    </div>
  );
};