-- Ejecuta este script en Supabase SQL Editor

create table if not exists public.site_content (
  section text primary key,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_site_content_updated_at on public.site_content;
create trigger trg_site_content_updated_at
before update on public.site_content
for each row
execute function public.set_updated_at();

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  is_admin boolean not null default false,
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row
execute function public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.is_admin = true
  );
$$;

alter table public.site_content enable row level security;
alter table public.profiles enable row level security;

drop policy if exists "public read site_content" on public.site_content;
drop policy if exists "admin write site_content" on public.site_content;
drop policy if exists "users read own profile" on public.profiles;

create policy "public read site_content"
on public.site_content
for select
to anon, authenticated
using (true);

create policy "admin write site_content"
on public.site_content
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

create policy "users read own profile"
on public.profiles
for select
to authenticated
using (id = auth.uid());

insert into public.site_content (section, data)
values
  ('home', '{}'::jsonb),
  ('we_are', '{}'::jsonb),
  ('solutions', '{}'::jsonb),
  ('ai', '{}'::jsonb),
  ('bitrix24', '{}'::jsonb)
on conflict (section) do nothing;
