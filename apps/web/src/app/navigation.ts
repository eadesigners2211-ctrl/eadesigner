export interface NavigationItem {
  name: string;
  path: string;
}

export const mainNavigation: NavigationItem[] = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Templates', path: '/templates' },
  { name: 'Assets', path: '/assets' },
  { name: 'Renderizações', path: '/render' },
  { name: 'Configurações', path: '/configuracoes' },
];
