import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { Link } from "react-router-dom";
import classes from './NavBar.module.css'

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isNavLeaving, setIsNavLeaving] = useState(false)
  const closeNav = () => {
    setIsNavLeaving(false)
    setIsNavOpen(false)
  }
  useEffect(() => {
    if (!isNavOpen) setIsNavLeaving(false)
  }, [isNavOpen])

  return (
    <>
      <nav className={classes.NavBar}>
        <h2>
          NiHonGo DOJO
        </h2>
        <ul className={classes.NavBarMenu}>
          <li onClick={closeNav}>
            <Link to={'/NihonGo-DOJO'}>Home</Link>
          </li>
          <li onClick={closeNav}>
            <Link to={'/NihonGo-DOJO/hiragana'}>Hiragana</Link>
          </li>
          <li onClick={closeNav}>
            <Link to={'/NihonGo-DOJO/katakana'}>Katakana</Link>
          </li>
          <li>Kanji</li>
        </ul>
        <button onClick={() => {
          setIsNavOpen(true)
          setIsNavLeaving(false)
        }}>
          <GiHamburgerMenu size={30} />
        </button>
      </nav>
      {isNavOpen &&
        <div className={classes.blackdrop}>
          <div className={`${classes.menuBar} ${isNavLeaving ? classes.leaving : ''}`}>
            <div className={classes.xIcon}
              onClick={() => {
                setIsNavLeaving(true)
                setTimeout(() => { setIsNavOpen(false) }, 490)
              }}
            >
              <GrClose size={10} />
            </div>
            <h1 className={classes.Content}>Content</h1>
            <ul>
              <li onClick={closeNav}>
                <Link to={'/NihonGo-DOJO'}>Home</Link>
              </li>
              <li onClick={closeNav}>
                <Link to={'/NihonGo-DOJO/hiragana'}>Hiragana</Link>
              </li>
              <li onClick={closeNav}>
                <Link to={'/NihonGo-DOJO/katakana'}>Katakana</Link>
              </li>
              <li>Kanji</li>
            </ul>
          </div>
        </div >
      }
    </>
  )
}

export default NavBar