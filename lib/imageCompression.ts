import imageCompression from 'browser-image-compression'

export async function compressImage(
  file: File,
  maxSizeMB: number = 1.5,
  maxWidthOrHeight: number = 2048,
  quality: number = 0.9
): Promise<File> {
  if (!file.type.startsWith('image/')) {
    return file
  }

  if (file.size / 1024 / 1024 < maxSizeMB) {
    return file
  }

  try {
    const options = {
      maxSizeMB,
      maxWidthOrHeight,
      useWebWorker: true,
      initialQuality: quality,
      maxIteration: 5,
      fileType: file.type as 'image/jpeg' | 'image/png' | 'image/webp',
    }

    const compressedFile = await imageCompression(file, options)

    return new File([compressedFile], file.name, {
      type: file.type,
      lastModified: Date.now(),
    })
  } catch (error) {
    console.error('Error compressing image:', error)
    return file
  }
}

export async function compressFiles(
  files: File[],
  options?: {
    maxSizeMB?: number
    maxWidthOrHeight?: number
    quality?: number
  }
): Promise<File[]> {
  const compressionPromises = files.map((file) =>
    compressImage(
      file,
      options?.maxSizeMB,
      options?.maxWidthOrHeight,
      options?.quality
    )
  )

  return Promise.all(compressionPromises)
}
