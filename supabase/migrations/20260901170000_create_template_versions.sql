create table if not exists public.template_versions (
  id uuid primary key default gen_random_uuid(),
  template_id uuid not null references public.templates(id) on delete cascade,
  organization_id uuid,
  version_number integer not null default 1,
  layout_json jsonb not null default '{}'::jsonb,
  thumbnail_url text,
  created_by uuid,
  created_at timestamptz not null default now()
);

create index if not exists template_versions_template_id_idx
on public.template_versions(template_id);
