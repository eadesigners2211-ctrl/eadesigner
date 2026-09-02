-- Profiles, organizations and roles foundation

create table if not exists public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  created_at timestamptz default now()
);

create table if not exists public.profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid unique not null references auth.users(id) on delete cascade,
  organization_id uuid references public.organizations(id) on delete set null,
  full_name text,
  avatar_url text,
  role text not null default 'designer',
  created_at timestamptz default now()
);

alter table public.organizations enable row level security;
alter table public.profiles enable row level security;

create policy "users can view own profile"
on public.profiles
for select
using (auth.uid() = user_id);

create policy "users can update own profile"
on public.profiles
for update
using (auth.uid() = user_id);

create policy "organization members can view organization"
on public.organizations
for select
using (
  id in (
    select organization_id from public.profiles where user_id = auth.uid()
  )
);
