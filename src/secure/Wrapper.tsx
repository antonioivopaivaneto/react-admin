import React, { Component, ReactNode } from 'react';
import Nav from './components/Nav';
import Menu from './components/Menu';

interface WrapperProps {
  children: ReactNode;
}

export default class Wrapper extends Component<WrapperProps> {
  render() {
    return (
      <div className="App">
        <Nav />

        <div className="container-fluid">
          <div className="row">
            <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
              <div
                className="offcanvas-md offcanvas-end bg-body-tertiary"
                id="sidebarMenu"
                aria-labelledby="sidebarMenuLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="sidebarMenuLabel">
                    Company name
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    data-bs-target="#sidebarMenu"
                    aria-label="Close"
                  ></button>
                </div>
                <Menu />
              </div>
            </div>

            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {this.props.children}
            </main>
          </div>
        </div>
      </div>
    );
  }
}
