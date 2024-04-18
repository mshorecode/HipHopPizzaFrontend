import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getOrderById } from '../../../api/OrdersData';
import EditOrderInfo from '../../../components/forms/EditOrderInfo';

export default function EditOrder() {
  const [editOrder, setEditOrder] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getOrderById(id).then(setEditOrder);
  }, [id]);

  return <EditOrderInfo order={editOrder} onUpdate={setEditOrder} />;
}
