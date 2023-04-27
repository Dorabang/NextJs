import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};
const AboutLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h1>THIS IS THE ABOUT LAYOUT</h1>
      {children}
    </div>
  );
};

export default AboutLayout;
