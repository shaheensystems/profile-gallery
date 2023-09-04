import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile'
export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile profile_name="Katherine Johnson"/>
      <Profile profile_name="Anna Johnson" />
      <Profile profile_name="Emma Johnson" />
    </section>
  );
}
