import React from 'react'

export default function DashboardHeader() {
  return (
    <div className="dashboard-header-container">
      <div className="dashboard-header">
        <div className="header-top">
          <div className="dashboard-name-container">
            <div className="dashboard-name">
              <h1>Web Design</h1>
              <i className="fas fa-star" />
            </div>
            <p className="description-text">Add board description</p>
          </div>
          <div className="dashboard-actions-container">
            <div className="users-container">
              <i className="fas fa-user" />
            </div>
            <div className="plugin-container">
              <div className='plugin'>
                <p>
                  <i className="fas fa-plug" /> / 0
                </p>
              </div>
              <div className="bot">
                <p>
                  <i className="fas fa-robot" /> / 0
                </p>
              </div>
            </div>
            <button>
              <i className="fas fa-video" />
              Start Zoom call
            </button>
            <div className="activities-container">
              <div className='user-activity'>
                <p>
                  <i className="fas fa-user-friends" /> / 0
                </p>
              </div>
              <div className='activities'>
                <p>Activities / 0</p>
              </div>
            </div>
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
        <div className="header-bottom">
          <div className="table-name-container">
            <div className="table-name">
              <i className="fas fa-table" />
              <h3>Main Table</h3>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
          <div className="table-actions-container">
            <div className="new-item">
              <p>New item</p>
              <i className="fas fa-chevron-down" />
            </div>
            <input className="search-container" placeholder="Search / Filter Board" />
            <i className="fas fa-user" />
            <i className="fas fa-eye-slash" />
            <i className="fas fa-filter" />
          </div>
        </div>
      </div>
    </div>
  )
}
