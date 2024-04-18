import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { createOrder } from '../../api/OrdersData';

export default function CreateOrderForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    orderTypeId: 0,
    isComplete: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder(formData).then(router.push('/orders'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="mt-16 flex justify-center">
      <Form onSubmit={handleSubmit} className="w-96">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className="font-bold text-outline text-white">Customer Name</Form.Label>
          <Form.Control type="text" placeholder="Edit customer name" name="customerName" value={formData.customerName} onChange={handleChange} className="rounded-full" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-bold text-outline text-white">Customer Email</Form.Label>
          <Form.Control type="text" placeholder="Edit customer email" name="customerEmail" value={formData.customerEmail} onChange={handleChange} className="rounded-full" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label className="font-bold text-outline text-white">Product Price</Form.Label>
          <Form.Control type="text" placeholder="Edit customer phone" name="customerPhone" value={formData.customerPhone} onChange={handleChange} className="rounded-full" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicType">
          <Form.Label className="font-bold text-outline text-white">Order Type</Form.Label>
          <Form.Select className="rounded-full" name="orderTypeId" value={formData.orderTypeId} onChange={handleChange} required>
            <option>Select a category</option>
            <option value="1">Walk-In</option>
            <option value="2">Call In</option>
          </Form.Select>
        </Form.Group>
        <Button type="submit" className="bg-slate-800 border-white border-[2px] rounded-full text-sm px-6 font-bold">
          Create
        </Button>
      </Form>
    </div>
  );
}
