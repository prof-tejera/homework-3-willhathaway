import React, { useState } from 'react';
import "./Pager.css"
import PagerComp from 'components/Pager/Pager';

const Pager = () => {
  let numberOfPages = 12;
  return <PagerComp num={numberOfPages}/>
};

export default Pager;
