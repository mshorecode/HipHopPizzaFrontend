import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import getItems from '../../../api/ItemData';
import ItemCard from '../../../components/ItemCard';
import { getOrderById } from '../../../api/OrdersData';

export default function AddItemsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);

  const renderItems = () => {
    getItems().then((data) => setItems(data));
  };

  useEffect(() => {
    renderItems();
    const intervalId = setInterval(() => {
      getOrderById(id).then((data) => setOrder(data));
    }, 2000);

    return () => clearInterval(intervalId);
  }, [id]);

  return (
    <div>
      <div className="flex gap-3 justify-center">
        <div className="flex gap-1 justify-center">
          <p className="text-white font-bold fs-5">Subtotal:</p>
          <p className="text-white fs-5">${order.subtotal}</p>
        </div>
        <Button type="button" href={`/orders/pay/${order.id}`} className="border-white border-[2px] text-xs font-bold px-6 rounded-full bg-slate-800 mr-2">
          Pay
        </Button>
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
