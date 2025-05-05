-- First, remove all existing policies
DROP POLICY IF EXISTS "Give anon users access to JPG images in folder 6xnbys_0" ON storage.objects;
DROP POLICY IF EXISTS "Give anon users access to JPG images in folder 6xnbys_1" ON storage.objects;
DROP POLICY IF EXISTS "Give anon users access to JPG images in folder 6xnbys_2" ON storage.objects;
DROP POLICY IF EXISTS "Give anon users access to JPG images in folder 6xnbys_3" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can update their own images" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can delete their own images" ON storage.objects;

-- Make sure RLS is enabled
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Update bucket to be public
UPDATE storage.buckets SET public = true WHERE id = 'cuts-images';

-- Create a simple policy that allows all operations for public users
CREATE POLICY "Allow all operations for cuts-images bucket"
ON storage.objects
FOR ALL
TO public
USING (bucket_id = 'cuts-images')
WITH CHECK (bucket_id = 'cuts-images');

-- Additional policy specifically for uploads
CREATE POLICY "Allow public uploads to cuts-images"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (
    bucket_id = 'cuts-images' AND
    (lower(substring(name from '\.([^\.]+)$')) IN ('jpg', 'jpeg', 'png', 'webp'))
);