export type UserRole =
  | 'admin'
  | 'designer'
  | 'social_media'
  | 'production';

export const ROLE_PERMISSIONS = {
  admin: [
    'templates:*',
    'assets:*',
    'renders:*',
    'users:*',
  ],
  designer: [
    'templates:read',
    'templates:write',
    'assets:read',
    'assets:write',
    'renders:read',
  ],
  social_media: [
    'templates:read',
    'renders:read',
  ],
  production: [
    'renders:read',
    'outputs:read',
  ],
} as const;

export function hasPermission(
  role: UserRole,
  permission: string
) {
  return ROLE_PERMISSIONS[role]?.includes(permission as never) ?? false;
}
