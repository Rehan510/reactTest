import React, { useState } from 'react';
import { BsBell } from 'react-icons/bs';
import { Dropdown, Space } from 'antd';

const NOTI_DATA = [
  {
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=100',
    desc: 'You have received delete request of campaign 112',
    time: 'Friday 2.20pm',
    date: 'Sep 20, 2024'
  },
  {
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=100',
    desc: 'You have received change request of campaign 112',
    time: 'Friday 2.20pm',
    date: 'Sep 20, 2024'
  },
  {
    image:
      'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=100',
    desc: 'You have received change request of campaign 112',
    time: 'Friday 2.20pm',
    date: 'Sep 20, 2024'
  }
];

const items = NOTI_DATA.map((item, index) => {
  return {
    label: (
      <>
        {/* {index === 0 && <h1>Notifications</h1>} */}
        <div className="noti-item">
          <span className="img-wrap">
            <img src={item.image} alt="image here" />
          </span>
          <div className="noti-detail">
            <p>{item.desc}</p>
            <div className="noti-datetime">
              <span className="noti-time">{item.time}</span>
              <span className="noti-date">{item.date}</span>
            </div>
          </div>
        </div>
      </>
    ),
    key: `noti-${index + 1}`
  };
});

const Notification = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="noti-wrapper">
      <div className="headerNotification">
        <Dropdown
          menu={{
            items
          }}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <BsBell onClick={handleClick} size={25} />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default Notification;
