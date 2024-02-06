import { ReactNode } from 'react';
import { useFetch } from './hooks/useFetch';

export default function DataFetcher({ children }: { children: ReactNode }) {
  useFetch();
  return <>{children}</>;
}
