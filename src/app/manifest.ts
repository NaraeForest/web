import type {
  MetadataRoute,
} from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '05-project',
    short_name: '05-project',
    description: 'Mandarin planner with feeds.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#333333',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
