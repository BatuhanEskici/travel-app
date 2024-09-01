// components/Wrapper.tsx
import React from 'react';

interface WrapperProps {
  className: string;
  children: React.ReactNode; // Include children in the type definition
}

const Wrapper: React.FC<WrapperProps> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export default Wrapper;
