import React, { useState } from 'react';
import Search from '../../assets/images/icon-search.svg';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
export const HeaderSearch = () => {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="header-search">
      {isClick ? (
        <Input size="large" placeholder="Search by campaign name" prefix={<SearchOutlined />} />
      ) : (
        <span className="icon-wrap">
          <img src={Search} onClick={() => setIsClick(true)}></img>
        </span>
      )}
    </div>
  );
};
