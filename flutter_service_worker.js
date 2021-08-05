'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5018a5968123e1c906b53f6c410e7dfa",
".git/config": "216bc319b39ff1236ee504847684c178",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ddadd967fd59288a7039ccbee6cb980b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0eda768e419ef48570fad6d3d93787f3",
".git/logs/refs/heads/main": "0eda768e419ef48570fad6d3d93787f3",
".git/logs/refs/remotes/origin/main": "4f0c84323558fd3707cf36f0b35cbf3b",
".git/objects/01/72dc55a3cd050660a5a8229423018d8c6ea3ac": "6b5044ee801b349d219b0c4d1f15b437",
".git/objects/08/de85e0c50dc3224800f02837dd241dd4044389": "c8a630dce382fc3179526c5b8e7093ba",
".git/objects/0f/6f8d8a59a5909e15713ae702cfc9161a8e7952": "46ba2c6db8544489eb2a2d11a859bd4d",
".git/objects/13/449c8aec7c358d32ea1a006468d5037047d8a5": "97c2a8ab463aa0dc387378a84d6fb49a",
".git/objects/14/a02d6cb3fc6dcb12287d79ebde9cbf896bea6c": "92d68e3ca9b795149dc581643dd6b8c6",
".git/objects/1e/077f6c17d87ff7c03b5e1b72cef545fa238757": "1f7be82805bdef8e45aa802bda35a4b8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/73eb3335f7e9dac160932d64332b9c5e3f564b": "0f0e3825d043b07e3d34f2fdf716c903",
".git/objects/2a/66d4e2903e5148640ffa1f9f8439f7cefb2e75": "114de901636405828ac9cbdc7eac528a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3a/0c9cbc6420b4d4831a9e5d7bc2656728734ed6": "56e7d55e232f6d2a796e021c161138f5",
".git/objects/3c/81c3b9c180caa5476d2c0c386e78474869c294": "a94f10cfa5d6aff40a46fecbcf739ab3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/ed0cce54d1b59dfc81e8ca028fd60ecf3759ac": "cc6aeb2f64aeac688a48ed3b1979eb46",
".git/objects/4c/9d5a0e2d2bb2b8042334f46f6a65c4a9621abb": "7a106a96752f47d2468f50ea63b55f4d",
".git/objects/5c/b7cddd9aa37b75fa8024d73a0b38482a1fdc11": "4743c918e6faedb668d55ffe465db525",
".git/objects/5e/e20beb381e9adad6ae7c1fa7047a41dadac56b": "9adcc1388dea875b79fe092a2531c92f",
".git/objects/61/705142fe0c6a3c7ae3e088c98cb8573e931da0": "2894cda34f03d33262513239ff8d3251",
".git/objects/62/cde345cdd0a2ef7b97370a93f7c56e832308b5": "77290d22be4059753e21b504472239bb",
".git/objects/65/610c683be296b444272d9fc435e4adbc263d42": "a9d5a3271aeeafd3abd24fd53f36325a",
".git/objects/74/77072cc92f3899a0429a23323e54e8161424a9": "9b033c2c0deed59cd11148c43d8b5a8b",
".git/objects/75/d3ccee1b5d535f9421f3fd5511557482c4c77e": "f294b68e0550546879b8575071c30c0e",
".git/objects/76/52fe9daa65e5e34780950355418c830f4cee0d": "1523bb1d265308882857cc196b16175e",
".git/objects/79/6381e0e924d12e25a7bd39c3a3eac6d4d41165": "e3e29fa516851933ccc6a33ef76ed73f",
".git/objects/79/82655d08dec963b7b14bae8d8217543bae22fc": "ea13cf767c24dba977df705497dd4437",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/478454cb53132f60510b447ed3defd4f45593d": "892927eed2680aa143cca11b2ed84993",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/043e6d16cd8f0de05492cb9d8587f89e428fa2": "b29fb37b2c0edb74097be13d2c4adf49",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/aedcc91fbe756133bec8b54166261e118da168": "c2517ad4ee37d8467957cf15d6e1d918",
".git/objects/94/1cdb6082e178a47d272b14287e02902dca3648": "8d48df7cbf5ffa3442ea066c43bd5cad",
".git/objects/9b/f13c001da15198c73a467a3d619a3aceb98735": "b9444b42373c1f504916f28f66037a36",
".git/objects/9f/d9ee5ecf030f7a4f9a8ca1bb19e5bc66e6892d": "3671718ec98ba7ff1747a625d4b64b05",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/8f496e7650a7110da647f5089cb39749f4607b": "ba603332ab2d270228bc7bd432e36598",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c6/1e1218bd38312c7770500e3857635d95ddee22": "9ef09e7763c11231cf2695b98f201537",
".git/objects/d6/65bb0ecd5b46478bbb88d8c7e6647e550c5f3c": "f9569477951fd2c70c2c98add5780741",
".git/objects/db/7183199a976425b2b2d1a4deb0b8502994a785": "6619cc0bd39f64c6382e21a3685a1d15",
".git/objects/e0/0dbba8c3d9555ddd3b89a2b94f8a0b7760fbb3": "af4cc3f60305104069220b7deb24e8e4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/6f360c7532735c1cff8593bdaf13b387060b85": "5ce2aaa2d14e71db300886cd545e4f2d",
".git/objects/ec/82516e3f3eb185ec79a915e1ecf4586fb2a0f7": "942a6a3ceb9ef3c45ed7a7c3b0bb7224",
".git/objects/f0/8ff1856cd7265053cc8008f6d3cb3654950865": "da48dd87f931a9b77bbafe030ae2b5df",
".git/objects/f2/1a59a7649691d0c42a3942a94bc2e6de8e97bc": "552e8196b11364419dae16756481301b",
".git/refs/heads/main": "a67ea7c4c6dae3401d3286c51db8e514",
".git/refs/remotes/origin/main": "a67ea7c4c6dae3401d3286c51db8e514",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "619d71695c9c3cc72abf25e620e6aa22",
"assets/assets/icons/logo.png": "26c8bf4d404cb7d921f79e5e104153fb",
"assets/assets/images/error.png": "34a3c86257800bf5e90595c112370b19",
"assets/assets/images/profile.jpg": "f9bead6a645c076fb2d75a6b9dd6689b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "6149ec0cd4daae8e3ca0b002acca0ae6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1773966fb0fb080a58fc8a2204459a1f",
"/": "1773966fb0fb080a58fc8a2204459a1f",
"main.dart.js": "d5cd748c8a9c00ce6096b0f28d11e67f",
"manifest.json": "a448d8bf8cbb46c495e88f115ea41a6a",
"readme.txt": "4fff0588b34c7704525bd360bb1ddaea",
"version.json": "9ccff8570e23b8227095e9182048d655"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
