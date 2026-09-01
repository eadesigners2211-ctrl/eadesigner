type ProtectedRouteProps = {
  children: React.ReactNode;
  authenticated?: boolean;
};

export function ProtectedRoute({ children, authenticated = false }: ProtectedRouteProps) {
  if (!authenticated) {
    return null;
  }

  return children;
}
