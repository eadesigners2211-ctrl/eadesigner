export type AuthUser = {
  id: string;
  email?: string;
  organizationId?: string;
};

export async function signIn(email: string, password: string) {
  return {
    email,
    password,
    authenticated: true,
  };
}

export async function signOut() {
  return true;
}

export function getCurrentUser(): AuthUser | null {
  return null;
}
