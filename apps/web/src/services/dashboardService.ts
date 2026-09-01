import { supabase } from '../lib/supabase';

export async function getDashboardStats(organizationId: string) {
  const [projects, templates, assets, renders] = await Promise.all([
    supabase.from('projects').select('id', { count: 'exact', head: true }).eq('organization_id', organizationId),
    supabase.from('templates').select('id', { count: 'exact', head: true }).eq('organization_id', organizationId),
    supabase.from('assets').select('id', { count: 'exact', head: true }).eq('organization_id', organizationId),
    supabase.from('render_tasks').select('id', { count: 'exact', head: true }).eq('organization_id', organizationId)
  ]);

  return {
    projects: projects.count ?? 0,
    templates: templates.count ?? 0,
    assets: assets.count ?? 0,
    renders: renders.count ?? 0
  };
}
