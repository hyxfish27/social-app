// serviceworker install process
self.addEventListener('install', e => {
    console.log('sw is installed')
})

// serviceworker activate process
self.addEventListener('activate', e => {
    console.log('sw is activated')
})

self.addEventListener('fetch', e => {
    console.log('sw fetch event', e)
})