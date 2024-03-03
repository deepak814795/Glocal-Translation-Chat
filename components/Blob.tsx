// BlobComponent.jsx
// BlobComponent.tsx
import React from 'react';

interface BlobProps {
    top: string;
    left: string;
    width: string;
    height: string;
    clipPath: string;
    gradientFrom: string;
    gradientTo: string;
    opacity: number;
  }
  
  const Blob: React.FC<BlobProps> = ({ top, left, width, height, gradientFrom, gradientTo, opacity }) => {
    const clipPath='polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
    return (
      <div
        className={`absolute inset-x-0 transform-gpu overflow-hidden blur-3xl opacity-${Math.floor(opacity * 1)}`}
        style={{ top, left }}
      >
        <div
          className="relative aspect-[1155/678] w-[36.125rem]"
          style={{
            width,
            height,
            clipPath,
            background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
          }}
        />
      </div>
    );
};
// use this wherever blob is needed  adjust left right
//  <Blob top="50%" left="0%" width="36.125rem" height="20rem" clipPath="..." gradientFrom="#ff80b5" gradientTo="#9089fc" opacity={100}/> 
export default Blob;
