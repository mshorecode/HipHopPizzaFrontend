import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function OrderCard({ order }) {
  return (
    <div className="border-slate-800 border-[3px] rounded-md p-6 bg-[#f0ead6] h-56">
      <div className="flex flex-col gap-[1px]">
        <h5 className="text-lg font-bold">
          {order.customerName}
          <span className="ml-2">{order.isComplete ? <span className="dot-red" /> : <span className="dot-green" />}</span>
        </h5>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Phone</p>
          <p className="text-sm font-medium ml-2">{order.customerPhone}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Email</p>
          <p className="text-sm font-medium ml-2">{order.customerEmail}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold">Order Type</p>
          <p className="text-sm font-medium ml-2">{order.orderTypeId === 1 ? 'Walk-In' : 'Call-In'}</p>
        </div>
        <div className="last:ml-auto">
          <Button type="button" href={`/orders/add/${order.id}`} className="border-none text-xs font-bold px-6 rounded-full bg-slate-800 mr-2">
            Add +
          </Button>
          <Button type="button" href={`/orders/edit/${order.id}`} className="border-none text-xs font-bold px-6 rounded-full bg-slate-800 mr-2">
            Edit
          </Button>
          <Button type="button" href={`/orders/${order.id}`} className="border-none text-xs font-bold px-6 rounded-full bg-slate-800">
            View
          </Button>
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
