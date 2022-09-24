import React from 'react';
import SubBlog from '../components/SubBlog';
import '../style/subscriptions.css';
import '../adaptive-styles/AdSubcriptions.css';
import SocialMedia from './subpage/socialmedia';
import SubNavbar from '../components/SubNavbar';
import SubConsulting from '../components/SubConsulting';

const Subscriptions = () => {
  return (
    <div class="subscriptions">
      {/* Intro container */}
      <SubBlog />
      {/* Main body */}
      <SubNavbar />
      <SocialMedia />
      {/* Kosultacja */}
      <SubConsulting />
    </div>
  );
};

export default Subscriptions;