"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import Search from "../../components/search";
import NavItems from "../../components/navItems";
import { HiOutlineMenu } from "react-icons/hi";
import "./header.css";

export default function Header() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const toggleNav = () => setIsNavExpanded(!isNavExpanded);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-with-hamburger-container">
          <button className="menu-toggle-btn" type="button" onClick={toggleNav}>
            <HiOutlineMenu />
          </button>
          <Link href="/">
            <Image
              className="logo"
              width={30}
              height={30}
              src="/Logo.png"
              alt="website logo"
            />
          </Link>
        </div>
        <h1 className="logo-title">
          <Link href="/">LOGO</Link>
        </h1>
        <div className="menu-items">
          <Search />

          <Link href="/favourites">
            <IoHeartOutline />
          </Link>
          <Link href="/cart">
            <PiShoppingCartSimpleLight />
          </Link>
          <Link href="/profile" className="profile-lg">
            <BsPerson />
          </Link>
          <select value="English" className="select-lg">
            <option value="English">ENG</option>
            <option value="Hindi">HINDI</option>
          </select>
        </div>
      </div>
      <NavItems />
      <SmallScreenNavItems isNavExpanded={isNavExpanded} />
    </header>
  );
}

function SmallScreenNavItems({ isNavExpanded }: { isNavExpanded: boolean }) {
  const expandClass = isNavExpanded && "expand";

  return (
    <nav className={`small-screen-nav-container ${expandClass}`}>
      <Link href="/profile" className="profile-sm">
        Profile
      </Link>
      <Link href="/">Shop</Link>
      <Link href="/page-in-progress">Skills</Link>
      <Link href="/page-in-progress">Stories</Link>
      <Link href="/page-in-progress">About</Link>
      <Link href="/page-in-progress">Contact Us</Link>
      <select value="English" className="select-sm">
        <option value="English">ENG</option>
        <option value="Hindi">HINDI</option>
      </select>
    </nav>
  );
}
