import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { Link } from "react-router-dom";
import classes from './NavBar.module.css'

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isNavLeaving, setIsNavLeaving] = useState(false)
  useEffect(() => {
    if (!isNavOpen) setIsNavLeaving(false)
  }, [isNavOpen])

  return (
    <>
      <nav className={classes.NavBar}>
        <h2>
          NiHonGo DOJO
        </h2>
        <div onClick={() => {
          setIsNavOpen(true)
          setIsNavLeaving(false)
        }}>
          <GiHamburgerMenu size={30} />
        </div>
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
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/hiragana'}>Hiragana</Link>
              </li>
              <li>
                <Link to={'/katakana'}>Katakana</Link>
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