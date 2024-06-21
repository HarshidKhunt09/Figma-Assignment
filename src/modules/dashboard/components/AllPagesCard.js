import { Card, Checkbox, message } from 'antd';
import React from 'react';

const AllPagesCard = () => {
  const onChange = (e) => {
    message.destroy();
    message.info(e.target.checked ? "Checkbox Checked" : "Checkbox Unchecked");
  };

  return (
    <div className='cards-wrapper common-wrapper'>
      <div className='component-wrapper'>
        <Card bordered={false} className='card-component'>
          <div className='d-flex justify-between align-center'>
            <span>All pages</span>
            <span><Checkbox onChange={onChange} /></span>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AllPagesCard;