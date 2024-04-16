import React, { useEffect, useState } from 'react';
import getOrders from '../api/OrdersData';
import OrderCard from '../components/OrderCard';

export default function Orders() {
  const [orders, setOrders] = useState({});

  const renderOrders = () => {
    getOrders().then((data) => setOrders(data));
    console.warn(orders);
  };

  useEffect(() => {
    renderOrders();
  }, []);

  return (
    <>
      <div className="">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} onUpdate={renderOrders} />
        ))}
      </div>
    </>
  );
}
