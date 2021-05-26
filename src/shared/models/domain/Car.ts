import React from 'react';

export interface CarModel {
  modelName: string;
  overlayNode: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}
