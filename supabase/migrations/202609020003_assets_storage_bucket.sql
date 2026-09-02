-- Assets Storage Foundation

insert into storage.buckets (id, name, public)
values ('assets', 'assets', false)
on conflict (id) do nothing;

create policy "Organization assets access"
on storage.objects
for all
using (bucket_id = 'assets')
with check (bucket_id = 'assets');
