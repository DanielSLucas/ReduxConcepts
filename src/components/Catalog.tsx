import React from 'react';
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {
  const state = useSelector(state => state);

  console.log(state);
  
  return (
    <h1>Catalog</h1>
  );
}

export default Catalog;