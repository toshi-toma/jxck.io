console.info('worker')

self.addEventListener('install', (e) => {
  console.info('install', e)
  e.waitUntil(skipWaiting())
})

self.addEventListener('activate', (e) => {
  console.info('activate', e)
  e.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', (e) => {
  let path = new URL(e.request.url).pathname
  console.info(path)
  if (path.endsWith('/test')) {
    e.respondWith(new Response('test'))
  }
  return
})
