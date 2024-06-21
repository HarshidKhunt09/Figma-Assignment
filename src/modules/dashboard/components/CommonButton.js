import { Badge, Button, message } from 'antd';
import React from 'react';

const CommonButton = () => {
  const handleClick = () => {
    message.destroy();
    message.info('Button Clicked');
  };

  return (
    <Badge.Ribbon text="Button" placement="start" color="grey">
      <div className='buttons-wrapper common-wrapper'>
        <div className='component-wrapper'>
          <Button type="primary" onClick={handleClick}>Done</Button>
        </div>

      </div>
    </Badge.Ribbon>

  )
}

export default CommonButton;