-- Create the storage bucket
insert into storage.buckets (id, name, public)
values ('cuts-images', 'cuts-images', true);

-- Set up storage policy for authenticated users to upload images
create policy "Authenticated users can upload images"
on storage.objects for insert
to authenticated
with check (
    bucket_id = 'cuts-images' AND
    (storage.foldername(name))[1] = 'cuts-images' AND
    (lower(storage.extension(name)) = 'jpg' OR
     lower(storage.extension(name)) = 'jpeg' OR
     lower(storage.extension(name)) = 'png' OR
     lower(storage.extension(name)) = 'webp')
);

-- Set up storage policy for public viewing
create policy "Images are publicly accessible"
on storage.objects for select
to public
using ( bucket_id = 'cuts-images' );