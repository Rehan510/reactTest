import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { HeaderSearch } from './HeaderSearch';
import HeaderNotification from './HeaderNotification';
import { Image } from 'react-bootstrap';

const { Header } = Layout;

const AppHeader = () => {
  const [onScroll, setOnScroll] = useState(false);
  const name = 'Saif Rehman';
  const designation = 'Director';

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setOnScroll(window.scrollY > 16);
    });
  }, []);
  return (
    <Header className={`app-header ${onScroll ? 'sticky' : ''}`}>
      <h1 className="page-title">Campaign Management</h1>
      <div className="header-action">
        <HeaderSearch />
        <HeaderNotification />
        <div className="user-action">
          <div className="avatar-wrap">
            <Image
              src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
              roundedCircle={true}
              className="notificationImg"
            />
          </div>
          <div className="user-info">
            <h3>{name}</h3>
            <p>{designation}</p>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
