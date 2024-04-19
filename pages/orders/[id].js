import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import getItems from '../../api/ItemData';
import { getOrderById } from '../../api/OrdersData';
import ItemCard from '../../components/ItemCard';

export default function OrderDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);

  const renderItems = () => {
    getItems().then((data) => setItems(data));
  };

  useEffect(() => {
    renderItems();
    getOrderById(id).then((data) => setOrder(data));
  }, [id]);

  return (
    <div className="flex flex-col mt-16">
      <div className="flex gap-10 justify-center mb-4">
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
      <div className="flex justify-center mt-2">
        <div className="items-layout">
          {items.map((item) => (
            <ItemCard key={item.id} item={item} onUpdate={renderItems} />
          ))}
        </div>
      </div>
    </div>
  );
}
