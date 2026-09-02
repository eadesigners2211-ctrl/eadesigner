-- Render Outputs
-- Stores generated files from render jobs

create table if not exists public.render_outputs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null,
  render_job_id uuid not null,
  file_url text,
  storage_path text not null,
  format text not null default 'png',
  width integer,
  height integer,
  created_at timestamptz not null default now()
);

create index if not exists idx_render_outputs_job
on public.render_outputs(render_job_id);

create index if not exists idx_render_outputs_org
on public.render_outputs(organization_id);
