import React from  'react';


const Menu = () => (
    <div className="">
         <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                <svg className="bi"><use href="#house-fill"/></svg>
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use href="#file-earmark"/></svg>
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use href="#cart"/></svg>
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use href="#people"/></svg>
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use href="#graph-up"/></svg>
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use href="#puzzle"/></svg>
                Integrations
              </a>
            </li>
          </ul>

        
          <hr className="my-3" />

          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use href="#gear-wide-connected"/></svg>
                Settings
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-flex align-items-center gap-2" href="#">
                <svg className="bi"><use href="#door-closed"/></svg>
                Sign out
              </a>
            </li>
          </ul>
        </div>
        
    </div>
)


export default Menu;