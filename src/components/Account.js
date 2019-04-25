import React, { useEffect } from 'react'

import Navbar from './navbar/Navbar'
import NavbarLink from './navbar/NavbarLink'
import Books from './books/Books'

const Account = ({ history }) => {
    useEffect(() => {
        const jwt = sessionStorage.getItem('jwt');
        if (!jwt) {
            history.push('/login');
        }
    })
    return (
        <div className="account darkfullsize">
            <Navbar>
                <NavbarLink name="My profile" where="/profile" />
                <NavbarLink name="Cart" where="/cart" />
                <NavbarLink name="Logout" where="/logout" />
            </Navbar>
            <Books />
        </div>
    )
}

export default Account
