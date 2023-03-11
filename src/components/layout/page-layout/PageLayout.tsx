import React from 'react';

import Navigation from '@/components/common/navigation/Navigation';

import * as style from './PageLayout.style';

type PageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutProps) => (
  <style.Wrapper>
    <Navigation />
    <div className="content">{children}</div>
  </style.Wrapper>
);

export default PageLayout;
