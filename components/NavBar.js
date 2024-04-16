/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Nav,
} from 'react-bootstrap';
import UserMenu from './UserMenu';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <div>
        <Link passHref href="/">
          <Navbar.Brand>Hip Hop Pizza</Navbar.Brand>
        </Link>
      </div>
      <div className="right-nav fw-semibold">
        <Nav className="me-auto">
          <Link passHref href="/orders">
            <Nav.Link className="mt-1">Orders</Nav.Link>
          </Link>
          <UserMenu />
        </Nav>
      </div>
    </Navbar>
  );
}
