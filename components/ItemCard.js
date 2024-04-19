import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { addItem } from '../api/OrdersData';

export default function ItemCard({ item }) {
  const addToOrder = () => {
    addItem(item.id);
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
      <Button type="button" onClick={addToOrder} className="add-button bg-slate-800 font-semibold">
        +
      </Button>
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
