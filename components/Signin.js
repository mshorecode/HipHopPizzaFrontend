import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center"
      style={{
        padding: '30px',
        marginTop: '100px',
      }}
    >
      <Image src="/images/HipHop.png" height={400} width={400} />
      <div className="text-center">
        <Button type="button" className="bg-black border-black w-28 rounded-full font-bold" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Signin;
