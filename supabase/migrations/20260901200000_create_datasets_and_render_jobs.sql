create table if not exists public.datasets (
  id uuid primary key default gen_random_uuid(),
  template_id uuid not null,
  organization_id uuid not null,
  name text not null,
  original_filename text,
  total_rows integer default 0,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists public.dataset_rows (
  id uuid primary key default gen_random_uuid(),
  dataset_id uuid not null references public.datasets(id) on delete cascade,
  row_number integer not null,
  payload_json jsonb not null default '{}'::jsonb,
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists public.render_jobs (
  id uuid primary key default gen_random_uuid(),
  template_id uuid not null,
  dataset_row_id uuid references public.dataset_rows(id) on delete cascade,
  format text not null,
  payload_json jsonb not null default '{}'::jsonb,
  status text default 'pending',
  output_url text,
  error_message text,
  created_at timestamptz default now(),
  completed_at timestamptz
);

create index if not exists idx_render_jobs_status on public.render_jobs(status);
create index if not exists idx_dataset_rows_dataset on public.dataset_rows(dataset_id);
