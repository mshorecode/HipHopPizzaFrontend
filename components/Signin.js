import React from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div className="text-center p-8">
      <Image src="/images/logo.png" height={1000} width={1000} />
      <div className="text-center">
        <Button type="button" className="bg-black border-white border-[2px] w-40 rounded-full font-bold" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Signin;
