create table if not exists render_outputs (
  id uuid primary key default gen_random_uuid(),
  render_job_id uuid,
  file_url text,
  format text,
  created_at timestamptz default now()
);

create index if not exists idx_render_outputs_job on render_outputs(render_job_id);
