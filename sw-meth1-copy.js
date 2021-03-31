self.addEventListener('install', evt=>{
console.log(evt);
});
self.addEventListener('activate', (evt) => {
  console.log(evt);
// video 19.03.2021 01h59'26
})
self.addEventListener( 'fetch' , evt=>{
  if (!navigator.onLine){
  evt.respondWith( new Response( 'pas de connexion internet' ))
  }
  console .log(evt.request.url);
  })