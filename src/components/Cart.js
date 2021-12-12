import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import NotFoundAlt from '../assets/icons/NotFoundAlt';
import Cancel from '../assets/icons/Cancel';

const Cart = ({
  onClose,
  showCart,
  cart,
  handleAddToCart,
  handleRemoveItem,
  getTotalPrice,
}) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const nodeRef = useRef(null);

  return ReactDOM.createPortal(
    <CSSTransition
      in={showCart}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
      nodeRef={nodeRef}
    >
      <div className='cart' onClick={onClose} ref={nodeRef}>
        <div className='cart-content' onClick={(e) => e.stopPropagation()}>
          <div className='cart-header'>
            <h2 className='cart-title'>Shopping Cart</h2>
            <div className='cart-close' onClick={() => onClose()}>
              <Cancel />
            </div>
          </div>
          <div className='cart-body'>
            <div
              className={`cart-items-wrapper ${
                cart.length > 2 ? 'has-shadow' : ''
              }`}
            >
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div className='cart-item-container' key={item.productId}>
                    <div
                      className='cart-item-cover'
                      style={{
                        backgroundImage: `url(${item.productImage})`,
                      }}
                    ></div>
                    <div className='cart-item-info'>
                      <h3 className='cart-item-title'>{item.productName}</h3>
                      <p className='cart-item-price'>
                        Unit Price ${item.productPrice}
                      </p>
                      <div className='cart-item-footer'>
                        <div className='cart-item-action'>
                          <button onClick={() => handleRemoveItem(item)}>
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => handleAddToCart(item)}>
                            +
                          </button>
                        </div>
                        <h4>
                          $
                          {(
                            parseFloat(item.productPrice) * item.quantity
                          ).toFixed(2)}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='not-found'>
                  <NotFoundAlt />
                  <h3 className='not-found-title'>No products in the cart.</h3>
                </div>
              )}
            </div>
          </div>
          <div className='cart-footer'>
            <button className='cart-checkout' disabled={cart.length === 0}>
              <span className='cart-label'>Proceed To Checkout</span>{' '}
              <span className='cart-price'>$ {getTotalPrice()}</span>
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById('root')
  );
};

export default Cart;
