import { Button, Card, Checkbox, message } from 'antd';
import React, { useState } from 'react';

export const pages = [
  {
    id: 1,
    label: "Page 1",
  },
  {
    id: 2,
    label: "Page 2",
  },
  {
    id: 3,
    label: "Page 3",
  },
  {
    id: 4,
    label: "Page 4",
  },
  {
    id: 5,
    label: "Page 5",
  },
  {
    id: 6,
    label: "Page 6",
  },
]

const PageSelectCard = () => {
  const [checkedPages, setCheckedPages] = useState([]);

  const toggleCheckbox = (pageId) => {
    if (checkedPages.includes(pageId)) {
      setCheckedPages(checkedPages.filter(id => id !== pageId));
    } else {
      setCheckedPages([...checkedPages, pageId]);
    }
  };

  const handleDone = () => {
    message.destroy();
    if (checkedPages.length === 0) {
      message.error('Please select at least one page.');
    } else {
      message.success(`Selected pages: ${checkedPages.join(', ')}`);
    }
  };

  return (
    <div className='pages-card-wrapper'>
      <div className='pages-select-card-content-wrapper'>
        <Card bordered={false}>
          <div className='pl-22 pr-22'>
            <div className='d-flex justify-between align-center all-pages'>
              <span>All pages</span>
              <span>
                <Checkbox onChange={(e) => {
                  if (e.target.checked) {
                    setCheckedPages(pages.map(page => page.id));
                  } else {
                    setCheckedPages([]);
                  }
                }} checked={checkedPages.length === pages.length} />
              </span>
            </div>
          </div>
          <div className='horizontal-row-bottom ml-15 mr-15' />
          <div className='mt-5 mb-5 pl-22 pr-22 pages-wrapper'>
            {pages?.map((page) => (
              <div key={page?.id}>
                <div className='d-flex justify-between align-center all-pages'>
                  <span>{page?.label}</span>
                  <span>
                    <Checkbox onChange={() => toggleCheckbox(page.id)} checked={checkedPages.includes(page.id)} />
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className='horizontal-row-top ml-15 mr-15' />
          <div className='pt-10 pb-10 pl-15 pr-15'>
            <Button type="primary" onClick={handleDone}>Done</Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default PageSelectCard;