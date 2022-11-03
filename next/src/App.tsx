import React from 'react';
import './App.css';
import Content from './components/content';
import Arrow from './components/Arrow.svg'

function Page() {
  return (
    <div className="Page">
      <Content />
      <button id="return-back"><img src={Arrow}></img><a href="../../index.html">return to job board</a></button>
    </div>
  );
}

export default Page;
