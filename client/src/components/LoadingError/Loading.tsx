import React, { ReactNode } from 'react';
interface LoadingProps {
  children?: ReactNode;
}
const Loading: React.FC<LoadingProps> = ({ children }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="loading-state">
        <div className="loading"></div>
      </div>
    </div>
  );
};

export default Loading;
