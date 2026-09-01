create table if not exists public.assets (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid,
  name text not null,
  file_path text not null,
  file_url text,
  type text not null default 'image',
  folder text default 'general',
  tags text[] default '{}',
  created_at timestamptz default now()
);

alter table public.assets enable row level security;

create policy "assets organization access"
on public.assets
for all
using (true)
with check (true);

insert into storage.buckets (id, name, public)
values
('assets','assets',false),
('templates','templates',false),
('renders','renders',false),
('exports','exports',false)
on conflict (id) do nothing;
