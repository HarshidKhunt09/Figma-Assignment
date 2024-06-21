import { Badge, Checkbox, message } from 'antd';
import React from 'react';

const CommonCheckbox = () => {
  const onChange = (e) => {
    message.destroy();
    message.info(e.target.checked ? "Checkbox Checked" : "Checkbox Unchecked");
  };

  return (
    <Badge.Ribbon text="Checkbox" placement="start" color="grey">
      <div className='checkboxes-wrapper common-wrapper'>
        <div className='component-wrapper'>
          <Checkbox onChange={onChange} />
        </div>
      </div>
    </Badge.Ribbon>
  )
}

export default CommonCheckbox;