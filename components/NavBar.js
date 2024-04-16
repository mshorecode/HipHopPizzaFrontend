/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, //
  Nav,
} from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="nav">
      <div>
        <Link passHref href="/">
          <Navbar.Brand>Urban Pizza Co.</Navbar.Brand>
        </Link>
      </div>
      <div className="right-nav">
        <Nav className="me-auto">
          <Link passHref href="/orders">
            <Nav.Link className="mr-1 font-bold">Orders</Nav.Link>
          </Link>
          <Link passHref href="/revenue">
            <Nav.Link className="mr-3 font-bold">Revenue</Nav.Link>
          </Link>
        </Nav>
      </div>
    </Navbar>
  );
}
