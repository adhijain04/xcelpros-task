import React from 'react'

export default function WorkSpaces() {
  return (
    <div className="workspace-container">
      <div className="workspace-top-container">
        <div className="workspace-header">
          <h2>Workspaces</h2>
          <div className="search-input-container">
            <i className="fas fa-search" />
            <input placeholder="Filter boards" />
          </div>
        </div>
        <div className="workspaces">
          <div className="main-container">
            <div className="main">
              <i className="fas fa-sort-down workspace-toggler" />  
              <i className="fas fa-home workspace-icon" />
              <h3>Main</h3>
            </div>
            <i className="fas fa-plus-circle add-workspace" />
          </div>
          <p>Web Design</p>
          <p>bhsbakjns</p>
        </div>
      </div>
      <div className="workspace-bottom-container">
        <div className="dashboards-container">
          <h2>Dashboards</h2>
        </div>
        <div className="download-button-container">
          <button>
            Get the mobile app 
            <i className="fab fa-google-play playstore" />
            <i className="fab fa-apple" />
          </button>
        </div>
      </div>
    </div>
  )
}
