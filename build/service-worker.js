"use strict";var precacheConfig=[["/index.html","fcfa40332545ccc48d1e984585ae2a60"],["/static/css/main.da3263fd.css","0c51211e2aada959ec5b64acd676eac7"],["/static/js/main.fbcacf9e.js","f7f207f7afb600e26d4de294224b7222"],["/static/media/ACBK.e849748a.woff2","e849748a22ab45f0052876d59d0b3300"],["/static/media/ACBL.b422e783.woff2","b422e783c9b85cdee883ec8923ac12e3"],["/static/media/ACM.aa2d47eb.woff2","aa2d47eb2546474277f786c491deb100"],["/static/media/amit_saxena.076d03c5.jpg","076d03c5c429d7a84f03895a2009bfa6"],["/static/media/collaborate.31933883.svg","31933883ea2ec8b33eb49c601f3735bc"],["/static/media/envelope.37793d12.svg","37793d12b58757776f038bd4d2d23448"],["/static/media/greg_wolff.bf773615.jpg","bf7736157794bf2ab60dfba3796ac0f5"],["/static/media/hero.319e31bc.svg","319e31bc7ebe27c62a782ad88eb1b5e0"],["/static/media/karthik_manickam.4b9cd5b4.jpg","4b9cd5b4c32119db338dab1ee49f2e60"],["/static/media/linkedin.82a442ff.svg","82a442ff570a8e378dcae0e35d1a88cd"],["/static/media/logo.dc3f326b.svg","dc3f326b30d86c57099f88eed3bf250e"],["/static/media/network.3f0f35f4.svg","3f0f35f475a4d10afd190ebc5fca71b1"],["/static/media/sparkles.42d44164.svg","42d44164035d15c9a6d997750c46d686"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});