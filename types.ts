
import type { ComponentType } from 'react';

export interface Tool {
  id: string;
  slug: string;
  name: string;
  description: string;
  details: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
  color: string;
}
