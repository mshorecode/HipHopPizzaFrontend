import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getItemsByOrder, getOrderById } from '../../api/OrdersData';

export default function OrderDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getOrderById(id).then((data) => setOrder(data));
    getItemsByOrder(id).then((data) => setItems(data));
  }, [id]);

  return (
    <div className="flex justify-around mt-16">
      <div className="flex flex-col gap-10 justify-center mb-4">
        <div>
          <p className="text-white font-bold">Customer Name</p>
          <p className="text-white ml-4">{order.customerName}</p>
        </div>
        <div>
          <p className="text-white font-bold">Customer Email</p>
          <p className="text-white ml-4">{order.customerEmail}</p>
        </div>
        <div>
          <p className="text-white font-bold">Customer Phone</p>
          <p className="text-white ml-4">{order.customerPhone}</p>
        </div>
        <div>
          <p className="text-white font-bold">Order Type</p>
          <p className="text-white ml-4">{order.orderTypeId === 1 ? 'Walk-In' : 'Call-In'}</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-2 gap-4">
        <p className="text-white font-bold fs-4 mb-4">Items on Order</p>
        {items.map((item) => (
          <div className="flex gap-10">
            <p className="text-white font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
