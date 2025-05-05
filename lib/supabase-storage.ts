import { supabase } from './supabase'

// Ensure the bucket exists
export async function ensureStorageBucket() {
  try {
    // Check if bucket exists
    const { data: buckets } = await supabase.storage.listBuckets()
    const bucketName = 'cuts-images'
    
    if (!buckets?.find(bucket => bucket.name === bucketName)) {
      // Create the bucket if it doesn't exist
      const { data, error } = await supabase.storage.createBucket(bucketName, {
        public: true, // Make the bucket public
        fileSizeLimit: 1024 * 1024 * 2, // 2MB file size limit
        allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp'] // Only allow images
      })
      
      if (error) {
        throw error
      }
      
      console.log('Storage bucket created:', bucketName)
    }
  } catch (error) {
    console.error('Error ensuring storage bucket exists:', error)
    throw error
  }
}