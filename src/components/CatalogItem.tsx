import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';
import { addProductToCartRequest } from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';

import './catalogitem.css';

interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  });

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product])
  
  return (
    <article>
      <img src={product.img_url} alt={product.title}/>

      <strong>{product.title}</strong>
      <span>${product.price}</span>

      <button
        type="button"
        onClick={handleAddProductToCart}
      >
        Comprar
      </button>

      { hasFailedStockCheck && (
        <span style={{ color: '#ff0f0f', fontWeight: 500}}>Falta de estoque</span>
      )}
    </article>
  );
}

export default CatalogItem;