import React from 'react';
import CurrentInfo from './newCampaign/CurrentInfo';
import RedIcon from '../../assets/images/notificationRedIcon.svg';
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

const Notification = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('clicked');
    dispatch(setCampaignView('campaignTable'));
  };

  return (
    <div>
      <CurrentInfo
        handleBack={handleClick}
        label={'Notifications'}
        handlePrev={handleClick}
        previous={'Home'}
        next={'Notifications'}
      />
      <section className="notification-wrapper">
        <h1>Notifications</h1>
        {NOTI_DATA.map((item, index) => {
          return (
            <div key={`noti${index}`} className="notication-jar">
              <div className="notification-bar">
                <span className="img-wrap">
                  <img src={item.image} alt="image here" />
                </span>

                <div className="notification-description">
                  <div className="notification-desc">
                    <span>{item.desc}</span>
                    <p>{item.time}</p>
                  </div>
                  <span>
                    {item.date} <img src={RedIcon} />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Notification;
