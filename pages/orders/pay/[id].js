import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Form } from 'react-bootstrap';
import { getOrderById } from '../../../api/OrdersData';

export default function Checkout() {
  const router = useRouter();
  const { id } = router.query;
  const [order, setOrder] = useState({});
  const [formData, setFormData] = useState({
    tip: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    getOrderById(id).then((data) => setOrder(data));
  });

  return (
    <div className="flex flex-col mx-auto mt-16 w-[300px]">
      <div className="flex gap-2">
        <p className="text-white font-bold fs-5">Subtotal:</p>
        <p className="text-white fs-5">${order.subtotal}</p>
      </div>
      <Form.Group className="mb-3" controlId="formBasicTip">
        <Form.Label className="font-bold text-outline text-white mt-3">Tip</Form.Label>
        <Form.Control type="text" placeholder="Enter tip amount" name="tip" value={formData.tip} onChange={handleChange} className="rounded-full" required />
      </Form.Group>
    </div>
  );
}
