import React from 'react'
import Link from 'next/link'


const Header2 = (props) => {

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand logo" href='/home4'><small>Ivaan</small><span><i
                    className="fi flaticon-dove"></i></span></Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">

              </div>
              <div className="col-lg-2 d-none d-lg-block">
                <div className="header-right ">
                  <Link className="theme-btn" href="/rsvp"><span className="text">Attend Now</span> </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header2;