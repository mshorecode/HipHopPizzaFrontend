import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import getSingleUser from '../api/UserData';

function Home() {
  const [user, setUser] = useState({});

  useEffect(() => {
    getSingleUser().then((data) => setUser(data));
    console.warn(user);
  }, [user]);

  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Hello {user.displayName}! </h1>
      <Button type="button" className="w-60 rounded-full">
        View Orders
      </Button>
    </div>
  );
}

export default Home;
