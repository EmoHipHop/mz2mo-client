import React, { Children } from 'react';
import Navigation from '../common/navigation/navigation';

type HeaderLayoutProps = {
  children: React.ReactNode;
};

const headerLayout = ({ children }: HeaderLayoutProps) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default headerLayout;
