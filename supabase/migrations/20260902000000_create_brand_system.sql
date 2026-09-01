create table if not exists public.brand_profiles (
 id uuid primary key default gen_random_uuid(),
 organization_id uuid not null,
 name text not null,
 logo_url text,
 colors_json jsonb default '{}'::jsonb,
 fonts_json jsonb default '{}'::jsonb,
 rules_json jsonb default '{}'::jsonb,
 created_at timestamptz default now()
);

create table if not exists public.template_brand_rules (
 id uuid primary key default gen_random_uuid(),
 template_id uuid not null,
 brand_profile_id uuid not null references public.brand_profiles(id) on delete cascade,
 rules_json jsonb default '{}'::jsonb,
 created_at timestamptz default now()
);
