import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'bootstrap';

export default function OrderCard({ order }) {
  return (
    <div className="orderCard card">
      <div className="card-body cardStyle" style={{ height: '280px', width: '200px' }}>
        <div>
          <h5 className="card-title">{order.customerName}</h5>
          <p className="card-text bold">{order.isComplete ? 'closed' : 'open'}</p>
          <p className="card-text bold">{order.customerPhone}</p>
          <p className="card-text emailSmall bold">{order.customerEmail}</p>
          <p className="card-text bold">{order.orderTypeId}</p>
          <Button href="#" id={`order-details--${order.id}`}>
            Details
          </Button>
          {order.isComplete ? null : (
            <>
              <Button href="#" id={`order-edit--${order.id}`} className="card-link">
                Edit
              </Button>
              <Button href="#" id={`order-delete--${order.id}`} className="fa-solid fa-trash-can" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    customerName: PropTypes.string,
    customerEmail: PropTypes.string,
    customerPhone: PropTypes.string,
    orderTypeId: PropTypes.number,
    tip: PropTypes.number,
    isComplete: PropTypes.bool,
  }).isRequired,
};
