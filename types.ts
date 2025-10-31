// FIX: Import `ComponentType` from 'react' to resolve the error "Cannot find namespace 'React'".
import type { ComponentType } from 'react';

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}
