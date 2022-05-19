import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
    return (
        <div class="navbar bg-green-300">
  <div class="flex-1">
    <span class="btn btn-ghost normal-case text-xl">Task manager</span>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><Link to="/" className='font-bold uppercase mr-5'>Add Task</Link></li>
      {
        !user?
        <li><Link to="/login" className='font-bold uppercase mr-5'>Log in</Link></li> :
        <li><span onClick={logout} to="/login" className='font-bold uppercase mr-5'>Log out</span></li>
      }
    </ul>
  </div>
</div>
    );
};

export default Navbar;