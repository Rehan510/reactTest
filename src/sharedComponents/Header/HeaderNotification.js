import React from 'react';
import { Button, Popover } from 'antd';
import { Divider } from 'antd';
import IconBell from '../../assets/images/icon-bell.svg';
import { useDispatch } from 'react-redux';
import { setCampaignView } from '../../reducers/communication';
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

const HeaderNotification = () => {
  const dispatch = useDispatch();
  const handleNotification = () => {
    dispatch(setCampaignView('notification'));
  };
  const content = (
    <div className="main-noti">
      <h1>Notifications</h1>
      {NOTI_DATA.map((item, index) => {
        return (
          <>
            <div key={`noti${index}`} className="noti-item">
              <span className="img-wrap">
                <img src={item.image} alt="image here" />
              </span>
              <div className="noti-detail">
                <p>{item.desc}</p>
                <div className="noti-datetime">
                  <span>{item.time}</span>
                  <span>{item.date}</span>
                </div>
                <Divider />
              </div>
            </div>
          </>
        );
      })}
      <div className="noti-actions">
        <a className="mark-read" href>
          Mark all as read
        </a>
        <Button className="noti-btn" onClick={() => handleNotification()}>
          View all notifications
        </Button>
      </div>
    </div>
  );
  return (
    <>
      <Popover content={content} placement="bottomRight">
        <span className="icon-wrap new-noti">
          <img src={IconBell} />
        </span>
      </Popover>
    </>
  );
};
export default HeaderNotification;
