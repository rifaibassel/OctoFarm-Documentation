/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4d2db8898d11d1a146e4c4dfebed02ab"
  },
  {
    "url": "api/index.html",
    "revision": "95983502adc083f8858535c0f1e2e088"
  },
  {
    "url": "assets/css/0.styles.48e8e2bb.css",
    "revision": "ef823d7451e7e646b0185fa4f940f3f2"
  },
  {
    "url": "assets/img/clone-of.74241f73.png",
    "revision": "74241f73d4aefb9524fb3392e4230348"
  },
  {
    "url": "assets/img/gotify-example.60f15769.png",
    "revision": "60f15769f81ec8cd3236591f6dc84529"
  },
  {
    "url": "assets/img/open-c.296bfbfd.png",
    "revision": "296bfbfdb95d3c5ceb2514310e42a7a8"
  },
  {
    "url": "assets/img/pm2-install.3e05ff0a.png",
    "revision": "3e05ff0a415accd76ca300186e32b2db"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start-octofarm.07ee2557.png",
    "revision": "07ee2557d21f00f16ed1ef736752bc79"
  },
  {
    "url": "assets/js/10.1e710ca1.js",
    "revision": "6fb34fa4352ed0b10837bb0c172e1401"
  },
  {
    "url": "assets/js/11.3aeb6364.js",
    "revision": "e0fcee77c4bab818df176d61401e5ba0"
  },
  {
    "url": "assets/js/12.6a316914.js",
    "revision": "1169151fb3cf9a569a465f9ef8c7dd4b"
  },
  {
    "url": "assets/js/13.14518694.js",
    "revision": "fd696d0df1d457eee0c1d2bcd36617d7"
  },
  {
    "url": "assets/js/14.3ddd9462.js",
    "revision": "d6b3bae1c25832a0d3931c9c662796bd"
  },
  {
    "url": "assets/js/15.d0ae670b.js",
    "revision": "54e48737d7abeaf661342fe197a33228"
  },
  {
    "url": "assets/js/16.3809293c.js",
    "revision": "bf942658f0635b38cdd5c5418c82b7e7"
  },
  {
    "url": "assets/js/17.3619fa02.js",
    "revision": "b9532a7042ec82f63a30b34451a07747"
  },
  {
    "url": "assets/js/18.c754bae6.js",
    "revision": "12a1262267c9bdd08769f28d54e30cd2"
  },
  {
    "url": "assets/js/19.af2ff19d.js",
    "revision": "13920ade54952b7aca44651395bfb98d"
  },
  {
    "url": "assets/js/2.965b894a.js",
    "revision": "f504031d64ab18c8c83edb62aaa17c32"
  },
  {
    "url": "assets/js/20.5d2399f9.js",
    "revision": "d9c5e97022ef05578046e5c18c272b55"
  },
  {
    "url": "assets/js/21.dcc69a65.js",
    "revision": "d973d2bc10310d2b2a725f015b4804e1"
  },
  {
    "url": "assets/js/22.a5b45674.js",
    "revision": "446a7f438923ec23afea93a588774c5f"
  },
  {
    "url": "assets/js/23.b04627e1.js",
    "revision": "8187609837f00ce75a6605244423c0b3"
  },
  {
    "url": "assets/js/24.87efbd3d.js",
    "revision": "971a3dc02931e6b0b1102ff7cc8ac6af"
  },
  {
    "url": "assets/js/25.4ac9a353.js",
    "revision": "d6aaf7390d03b405b872413393b79a14"
  },
  {
    "url": "assets/js/26.4397ebca.js",
    "revision": "0fec93abc3a0841f0167a9e099191d5c"
  },
  {
    "url": "assets/js/27.71c55e50.js",
    "revision": "b24fd2d3d26a0f58a30f23f19a1aabc1"
  },
  {
    "url": "assets/js/28.6039974d.js",
    "revision": "4bd5ab82ad7cd72748ee799ac624d34d"
  },
  {
    "url": "assets/js/29.cd7e2b34.js",
    "revision": "0ba0e73274f514d6d92cf541a6d94ea2"
  },
  {
    "url": "assets/js/3.95bb4ed9.js",
    "revision": "f613701b0f531eac1eed8c2e737266e2"
  },
  {
    "url": "assets/js/30.bbc7e51f.js",
    "revision": "e5098a9a44096c25881e14c913075f8c"
  },
  {
    "url": "assets/js/31.27d09204.js",
    "revision": "f76d16d39e42fc2d2ccc5725394968bf"
  },
  {
    "url": "assets/js/32.a582a39d.js",
    "revision": "22af9b95ad17b5e46e0e26a9233575d5"
  },
  {
    "url": "assets/js/33.f46ea3c2.js",
    "revision": "2cfeda8e0a21b4eb70ce6cfa2b9d3230"
  },
  {
    "url": "assets/js/34.d36377b0.js",
    "revision": "77dd590e0f58ddc9301e0086a0717780"
  },
  {
    "url": "assets/js/35.c28071e6.js",
    "revision": "daa02626f2f74773a134196e222c9ff8"
  },
  {
    "url": "assets/js/36.75012aba.js",
    "revision": "fd653fb2bfd6dbd5391c127752131317"
  },
  {
    "url": "assets/js/37.6ee75b18.js",
    "revision": "6ed8992ed1650b3b853fc8e39bcbe2b9"
  },
  {
    "url": "assets/js/4.c8c44e52.js",
    "revision": "a5aaf9a70dc6b94b790182c68edefeb0"
  },
  {
    "url": "assets/js/5.b307729f.js",
    "revision": "3f0c8a4a67c84961957bb80188151e0c"
  },
  {
    "url": "assets/js/6.e55b13fa.js",
    "revision": "7c7e1147a50e6820eb1964608aee6c85"
  },
  {
    "url": "assets/js/7.4abc5fac.js",
    "revision": "71326cb021fb1b4923b18adf4fc27720"
  },
  {
    "url": "assets/js/8.1a4b60f9.js",
    "revision": "86928c0574561693fb2b60912a798850"
  },
  {
    "url": "assets/js/9.75a81c4f.js",
    "revision": "821719f6a05598ed1604a99c8988f6ac"
  },
  {
    "url": "assets/js/app.512a2525.js",
    "revision": "11866de407204fcf9b90bb54f346038b"
  },
  {
    "url": "contributing/index.html",
    "revision": "dd18c4aa416f4489df86ba662163125a"
  },
  {
    "url": "getting-started/index.html",
    "revision": "2dacc3d773035583e4d2bb0c59b61d96"
  },
  {
    "url": "getting-started/octofarm-cli.html",
    "revision": "977ddfeddfbc249c26b2e73e4a7dce5e"
  },
  {
    "url": "getting-started/octofarm-faq.html",
    "revision": "12dd485cef5d852b5c0453527cec7a55"
  },
  {
    "url": "getting-started/octofarm-remote-access.html",
    "revision": "bebbd1b42b4c818b2b2843cac5a6c86d"
  },
  {
    "url": "getting-started/octofarm-requirements.html",
    "revision": "ce85d37b608df400078c7bfbe338201b"
  },
  {
    "url": "getting-started/octoprint-setup.html",
    "revision": "8be8c026b5d51b94a8169c00cbd4079d"
  },
  {
    "url": "getting-started/octoprint-supported-plugins.html",
    "revision": "6988d1e3cae51b4be9650aadee3c381b"
  },
  {
    "url": "guides/index.html",
    "revision": "328d999cb4e5bd19c1307d099de55bb2"
  },
  {
    "url": "guides/octofarm-scripts-gotify.html",
    "revision": "c93ab574d31cc420c8ca42059803987e"
  },
  {
    "url": "guides/octofarm-updating.html",
    "revision": "b2357a869741ec0386073802f7ef11cc"
  },
  {
    "url": "guides/upgrade-mongodb-database.html",
    "revision": "60a136abd465a703a80028b533bac0b7"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "5017e7e33ca7c617bf40f4c449803354"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0fc1d956b26dfd6d81b992882ed8cfec"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "dd34c21efa1fd560c76c84bd1f8c0e85"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "175295be99cd023090875a8fe8de9cff"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "39939dc9e24b73c478026c5850ac8a4d"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "510c6b26f256ec09d2d8ab82fe713283"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "1f6c689ebef2033c87b211b9f6971826"
  },
  {
    "url": "index.html",
    "revision": "15466a12106b13428119604890f29ddd"
  },
  {
    "url": "installation/index.html",
    "revision": "02e9dbad2a520df9c77402b53f5140ca"
  },
  {
    "url": "installation/install-docker.html",
    "revision": "a5104011249872bacca36d637ffe030f"
  },
  {
    "url": "installation/install-linux-arch.html",
    "revision": "c9a0d1fe9e1fd9b0b3b349cf104afd93"
  },
  {
    "url": "installation/install-linux-debian.html",
    "revision": "704895e7f903ffc2165765890c9d72db"
  },
  {
    "url": "installation/install-linux-opensuse.html",
    "revision": "cf6bc8a4f22a4f7c003cd77e9b377e73"
  },
  {
    "url": "installation/install-linux-redhat.html",
    "revision": "5c7dd1a124f8abc96175dd26a1d8baae"
  },
  {
    "url": "installation/install-linux-ubuntu.html",
    "revision": "732063a850f10a23ac6a23d4ba7a167c"
  },
  {
    "url": "installation/install-raspberry-pi.html",
    "revision": "c6632b7047960048735e4e99bed4ead8"
  },
  {
    "url": "installation/install-windows.html",
    "revision": "cf5e920f4676e7089ab908e1d9f5556c"
  },
  {
    "url": "installation/setup-environment.html",
    "revision": "62ea11ec624c50bbeb5e5fbf851ddb15"
  },
  {
    "url": "installation/setup-service.html",
    "revision": "ee73e16a23228fca574d6574f41d0f88"
  },
  {
    "url": "logo.png",
    "revision": "cafa45e7ede7e3888e08e8640cb7d92d"
  },
  {
    "url": "usage-instructions/index.html",
    "revision": "e8ea77959d918095822b4149e9392d86"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
