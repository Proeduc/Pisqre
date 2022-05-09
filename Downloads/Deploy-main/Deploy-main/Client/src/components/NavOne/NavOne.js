 

import React, { useContext } from 'react'
import './NavOne.css'
import { NavLink } from 'react-router-dom'
import logo from './logo.jpg'
import { Menu } from '@material-ui/icons'
import { UserContext } from '../../App'
export default function NavOne() {
    const { state } = useContext(UserContext)
    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <li data-toggle="collapse" data-target="#myNavbar">
                        <NavLink to="/profile">PROFILE</NavLink>
                    </li>

                    <li data-toggle="collapse" data-target="#myNavbar">
                        <NavLink to="/logout">LOGOUT</NavLink>
                    </li>
                    <li>

                    </li>

                </>
            )
        } else {
            return (
                <>
                    <li data-toggle="collapse" data-target="#myNavbar">
                        <NavLink className='btn btn-primary bn' to="/login">LOGIN</NavLink>
                    </li>
                    <li data-toggle="collapse" data-target="#myNavbar">
                        <NavLink className='btn btn-info bn1' to="/signup">REGISTER</NavLink>
                    </li> 
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <Menu style={{ fontSize: "large" }} />
                        </button>
                       <NavLink className="navbar-brand" to="/" style={{ padding: "5px 50px 50px 10px" }}>
                            <img
                                style={{
                                    height: '50px',
                                    width: '60px',
                                }}
                                src={logo}
                                alt="logo"
                            />
                        </NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li data-toggle="collapse" data-target="#myNavbar"><NavLink to="/">HOME</NavLink></li>
                            <li data-toggle="collapse" data-target="#myNavbar"><NavLink to="/blog">BLOGS</NavLink></li>
                            <li data-toggle="collapse" data-target="#myNavbar"><NavLink to="/discussion">DISCUSSION BOARD</NavLink></li>
                            <li data-toggle="collapse" data-target="#myNavbar"><NavLink to="/reviews">REVIEWS</NavLink></li>
                           
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li data-toggle="collapse" data-target="#myNavbar">
                                <NavLink to="#" className="dropdown-toggle" type="button" data-toggle="dropdown">SERVICES <span className="caret"></span></NavLink>
                                <ul className="dropdown-menu services__dropdown">
                                    <li data-toggle="collapse" data-target="#myNavbar"><NavLink to="/assignment-help">Assignment Help</NavLink></li>
                                    <li data-toggle="collapse" data-target="#myNavbar"><NavLink to="/live-sessions">One-on-One Live sessions</NavLink></li>
                                    <li data-toggle="collapse" data-target="#myNavbar"><NavLink to="/course-help">Course Help</NavLink></li>
                                    <li data-toggle="collapse" data-target="#myNavbar"><NavLink to="/practice-exam">Practice Exam</NavLink></li>
                                </ul>
                            </li>
                            {/* show profile link only when user is logged in */}
                            <li data-toggle="collapse" data-target="#myNavbar">
                                <NavLink to="/ask-tutor">ASK A TUTOR</NavLink>
                            </li>
                            <li data-toggle="collapse" data-target="#myNavbar">
                                <NavLink to="/support">SUPPORT</NavLink>
                            </li>
                            <RenderMenu />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    ) 
}
