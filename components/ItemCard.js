import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { addItem, removeItem } from '../api/OrdersData';

export default function ItemCard({ item }) {
  const router = useRouter();
  const { id } = router.query;
  const [formData] = useState({
    orderId: id,
    itemId: item.id,
  });

  const addItemToOrder = () => {
    addItem(formData);
  };

  const removeItemFromOrder = () => {
    removeItem(formData);
  };

  return (
    <div className="product-card bg-[#f0ead6] border-slate-800 border-[3px] rounded-md">
      <div className="product-image">
        <Image src={item.imageUrl} alt={item.name} width={300} height={300} className="rounded-sm" />
      </div>
      <div className="product-info">
        <h3 className="text-black font-bold">{item.name}</h3>
        <p className="text-black">${item.price}</p>
      </div>
      <div className="flex justify-between">
        <Button type="button" onClick={removeItemFromOrder} className="add-button bg-slate-800 font-semibold">
          -
        </Button>
        <Button type="button" onClick={addItemToOrder} className="add-button bg-slate-800 font-semibold">
          +
        </Button>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
  }).isRequired,
};
