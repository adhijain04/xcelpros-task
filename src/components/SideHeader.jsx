import React from 'react'

import logo from '../assets/images/logo.png';

export default function SideHeader() {
  return (
    <div className="sideheader-container">
      <div className="sideheader-logo-container">
        <img src={logo} alt="logo"/>
        <div className="icon-container">
          <i className="far fa-bell" />
          <i className="fas fa-download" />
        </div>
      </div>
      <div className="sideheader-avatar-container">
        <div className="icon-container">
          <i className="far fa-calendar-check" />
          <i className="fas fa-user-plus" />
          <i className="fas fa-search" />
          <i className="fas fa-question" />
        </div>
        <p className="avatar-name">AJ</p>
      </div>
    </div>
  )
}
