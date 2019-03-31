import React from 'react';
import './header.scss';

export default function Header ({title,children,styleClass}) {
    return (
      <div className="Header">
        <div className={`wallPaper ${styleClass}`}>
         <div className="container HeadTxt">
          <h1 className="title">
              {title}
            </h1>
            <div className="childComp">{children}</div>
          </div>
        </div>        
      </div>
    )
}

Header.defaultProps = {
  title:'defalut Title',
  styleClass: 'header-hero'
}