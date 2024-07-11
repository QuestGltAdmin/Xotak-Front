import React from 'react';
import AdminHeader from './AdminHeader';

function AdminLayout(props) {
  return (
    <div className="dashboard-layout">
            <div className="inner-dash-bpx">
              <AdminHeader/>
              {props.children}
            </div>
        </div>
  )
}

export default AdminLayout