import { ReactNode } from 'react';
import { useAuth } from './useAuth';

type ProtectedRouteProps = {
  children: ReactNode;
  fallback?: ReactNode;
};

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { user, loading } = useAuth();

  if (loading) {
    return fallback ?? <div>Carregando...</div>;
  }

  if (!user) {
    return fallback ?? <div>Acesso restrito. Faça login.</div>;
  }

  return <>{children}</>;
}
