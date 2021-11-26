import React from 'react';

export default function Headline({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <h1 className={`font-archivoBlack ${className || ''}`}>{children}</h1>;
}
