create table if not exists public.template_variables (
  id uuid primary key default gen_random_uuid(),
  template_id uuid not null references public.templates(id) on delete cascade,
  organization_id uuid,
  name text not null,
  type text not null default 'text',
  required boolean default false,
  default_value text,
  created_at timestamptz default now()
);

create index if not exists template_variables_template_id_idx
on public.template_variables(template_id);
