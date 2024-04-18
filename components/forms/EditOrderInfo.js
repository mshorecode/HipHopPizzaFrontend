import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { editOrder, getOrderById } from '../../api/OrdersData';

export default function EditOrderInfo() {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  });

  useEffect(() => {
    if (id) {
      getOrderById(id).then((o) => {
        setFormData({
          id: o.id,
          customerName: o.customerName,
          customerEmail: o.customerEmail,
          customerPhone: o.customerPhone,
        });
      });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editOrder(formData).then(() => router.push('/orders'));
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
          <Form.Control type="text" placeholder="Edit customer name" name="customerName" value={formData.customerName} onChange={handleChange} className="rounded-none" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-bold text-outline text-white">Customer Email</Form.Label>
          <Form.Control type="text" placeholder="Edit customer email" name="customerEmail" value={formData.customerEmail} onChange={handleChange} className="rounded-none" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label className="font-bold text-outline text-white">Product Price</Form.Label>
          <Form.Control type="text" placeholder="Edit customer phone" name="customerPhone" value={formData.customerPhone} onChange={handleChange} className="rounded-none" required />
        </Form.Group>
        <Button type="submit" className="bg-slate-800 border-white border-[2px] rounded-full text-sm px-6 font-bold">
          Update
        </Button>
      </Form>
    </div>
  );
}

EditOrderInfo.propTypes = {
  order: PropTypes.shape({
    customerName: PropTypes.string,
    customerEmail: PropTypes.string,
    customerPhone: PropTypes.string,
  }),
};

EditOrderInfo.defaultProps = {
  order: {
    customerName: '',
    customerEmail: '',
    customerPhone: '',
  },
};
