import React from 'react';
import { Dropdown } from 'react-bootstrap';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserMenu() {
  const { user } = useAuth();

  return (
    <Dropdown align="end" navbar="true" className="last:mt-auto">
      <Dropdown.Toggle className="border-none bg-transparent">
        <Image src={user.fbUser.photoURL} width={40} height={40} alt="Profile Image" className="rounded-full" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="rounded-sm">
        <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
