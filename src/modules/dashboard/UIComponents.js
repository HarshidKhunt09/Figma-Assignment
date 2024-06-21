import React from 'react';
import AllPagesCard from './components/AllPagesCard';
import CommonButton from './components/CommonButton';
import CommonCheckbox from './components/CommonCheckbox';
import PageSelectCard from './components/PageSelectCard';
import './uiComponent.less';


const UIComponents = () => (
  <div className='p-48 components-wrapper'>
    <CommonButton />
    <CommonCheckbox />
    <AllPagesCard />
    <PageSelectCard />
  </div>
);

export default UIComponents;
