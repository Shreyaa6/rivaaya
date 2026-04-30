import React from 'react';
import Collections from '../components/sections/Collections/Collections';

const CollectionsPage: React.FC = () => {
  return (
    <div className="page-collections">
      <div style={{ height: '100px' }}></div> {/* Spacer for Navbar */}
      <Collections />
    </div>
  );
};

export default CollectionsPage;
