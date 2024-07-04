import React from 'react';
import Header from "./Header";

function Layout(props) {
  return (
    <div className="dashboard-layout">
            <div className="inner-dash-bpx">
              <Header/>
              {props.children}
            </div>
        </div>
  )
}

export default Layout