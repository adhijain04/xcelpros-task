import React from 'react'

import DashboardHeader from './components/DashboardHeader';
import Table from './components/table/Table';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <Table />
    </div>
  )
}
