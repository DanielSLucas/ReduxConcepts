import React, { useEffect, useState } from 'react';

import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import CatalogItem from './CatalogItem';

import './catalog.css';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    })
  }, []);

  return (
    <main>
      <h1>{'<'}Catalog{'/>'}</h1>
      <div className="catalog-items-container">
        {catalog.map(product => (
          <CatalogItem product={product} key={product.id}/>
        ))}
      </div>
    </main>
  );
}

export default Catalog;