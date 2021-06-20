                        importScripts("./assets/js/workbox-v5.1.4/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "./assets/js/workbox-v5.1.4"});

            self.__precacheManifest = [{"url":".//index.html","revision":"990f14b38f0990527f020d49d42bf1a3"},{"url":".//manifest.json","revision":"65ff66b7db1d56bece111d69bfa72023"},{"url":".//assets/js/bwk-store.js","revision":"d41d8cd98f00b204e9800998ecf8427e"},{"url":".//assets/css/styles.css","revision":"7d63c097424e27283735557883acdd0a"},{"url":".//assets/css/theme-dark.css","revision":"90b19e2788b9824a9b49b1bea1064519"},{"url":".//assets/css/theme-light.css","revision":"e30f74e5ec0b3105723d66ecaf037ce8"},{"url":".//assets/css/code-highlight.css","revision":"962cead98433fe5d77f6287a95354295"},{"url":".//assets/css/style.css","revision":"0c12d00cc93c2b64eb4cccb3d36df8fd"},{"url":".//assets/uploads/bwk_bot.png","revision":"43ecd02e10c6fc7fad6e6cd2e033362c"},{"url":".//assets/uploads/jill_smith.png","revision":"e1025c511ba6de7fd91dc61ff6564fa7"},{"url":".//assets/uploads/android-chrome-512x512.png","revision":"9dee9d766bc502a8ea2116ffeb826495"},{"url":".//assets/uploads/sample_user_icon.png","revision":"e9e4b7922d30b56a6abe7a18d2f8af48"},{"url":".//assets/uploads/product.png","revision":"bb21f9265096f6b38fbbab85761faae3"},{"url":".//assets/uploads/boris_badenov_px.png","revision":"764cf16da110e27093e49ad70896fc24"},{"url":".//assets/uploads/loader.mov","revision":"084a9a7de5a4da1e082d6a21ddef7729"},{"url":".//pages/system-info/index.html","revision":"5d0ee950ad59aacad1c8b1071c87954b"},{"url":".//pages/products/index.html","revision":"b9baa8689e998f385c0c7cd19b7d271e"},{"url":".//pages/collections/index.html","revision":"ad37b56db40d19ed00849145a8ef2306"},{"url":".//pages/tags/index.html","revision":"d53f216033141e509d61484ec9da80e4"},{"url":".//pages/experiments/index.html","revision":"04aafa17dc6149f1e2ae93ee0223f413"},{"url":".//pages/authors/index.html","revision":"2652806111a35e202ad2014dadda1a3b"},{"url":".//pages/categories/index.html","revision":"3c1324d6a9c7b53878665a3508d0c3bc"},{"url":".//pages/notes/index.html","revision":"adceb0fdd85b4adfc207314734e44f15"},{"url":".//pages/about/index.html","revision":"ace6dc00582a80843dada11e9802fcc4"},{"url":".//blog/p2/index.html","revision":"f3f600f2784866310f181723c84bb87e"},{"url":".//blog/p3/index.html","revision":"b0df17355c9cf11e0524b33dbbf3f871"},{"url":".//blog/cars/2019/08/22/audi/index.html","revision":"e35110bc40f6e19197693184d5bc08a1"},{"url":".//blog/cars/2019/08/20/porshe/index.html","revision":"6e4ebf17ecf2a65119eae3ccc0e1a84b"},{"url":".//blog/cars/2019/08/21/bmw/index.html","revision":"c33a230415d5d3e5982b4db3ede902dc"},{"url":".//blog/fruits/2021/03/05/apples/index.html","revision":"6047d376140e9ed4abfd08c1e7b9ad34"},{"url":".//blog/fruits/2021/03/05/kiwifruit/index.html","revision":"2ed7020bfe7900725c629887b372a95c"},{"url":".//blog/fruits/cat-1/2021/03/05/bananas/index.html","revision":"c8eb09f4c0db7330bf0ab7544f08daf9"},{"url":".//blog/2021/04/20/your-filename/index.html","revision":"a36e7aca5c06e09dc4b29d39dd9704eb"},{"url":".//blog/p5/index.html","revision":"fd1aa516c1ceaa22ba9ef7cf175f3510"},{"url":".//blog/uncategorized/2021/03/05/new-one/index.html","revision":"c2941c62e440abb35e08a55b37f9e51b"},{"url":".//blog/uncategorized/2021/03/05/title/index.html","revision":"84fa66dde3e2b3b54ebcba16c15e9454"},{"url":".//blog/uncategorized/2021/03/05/new-two/index.html","revision":"505e6c5061c06564bf5797e03c6fe964"},{"url":".//blog/uncategorized/2021/03/05/title-1/index.html","revision":"ed4b0a455482d0dd4543d9b1f3f37aab"},{"url":".//blog/uncategorized/2021/04/20/test-one/index.html","revision":"b1601970ca558d6426ade130fbdbd108"},{"url":".//blog/uncategorized/2021/04/20/test/index.html","revision":"8eb189226b38208adfdf96fc7859cc96"},{"url":".//blog/uncategorized/2021/05/07/one-more/index.html","revision":"42764ce98492cf0977a5878f968e7b0d"},{"url":".//blog/uncategorized/2021/05/07/admins-post/index.html","revision":"fd78efcf0960102072f28c6581a89dee"},{"url":".//blog/p4/index.html","revision":"5d2418cfd688ca115fcdbab64ea8ee59"},{"url":".//blog/index.html","revision":"38215096a9bc1e4c3a30eb435b8941d7"},{"url":".//products/ttttttt/index.html","revision":"e60baa89c538cf2796193609d33e6d6a"},{"url":".//products/ttttttt2/index.html","revision":"56f2084acd4b1a9159d7334185e19a04"},{"url":".//products/jjj/index.html","revision":"a3ed86cc51af8ff14ae0f78e6d0b4ff3"},{"url":".//admin/index.html","revision":"8f3719d6d546816bb2afdc2f44c98c13"},{"url":".//authors/boris/index.html","revision":"6e41da4a4075676bce8a61dec165136a"},{"url":".//authors/bullwinkle/index.html","revision":"93e5e418f2fc154082af34e30ed1fc5f"},{"url":".//authors/ted/index.html","revision":"75fbb49978b9c616e67b09182e3c3ca3"},{"url":".//authors/admin/index.html","revision":"40af0888e12ef78540ad8d2f97c82ce3"},{"url":".//authors/vasja/index.html","revision":"3127a0fd2b3409d8e402d723fc249594"},{"url":".//authors/jill/index.html","revision":"affd7b38131ccd17e35713846f8d66a8"},{"url":".//notes/note-2/index.html","revision":"c6067f5baf80713210d74a0678570fb5"},{"url":".//notes/note-1/index.html","revision":"ad4154ca99e16431a65d8f8d838f2bf4"},{"url":".//google04b63ea86a793e7b.html","revision":"bfc8ca58267cacd7574a31d07141ab91"},{"url":".//blog/uncategorized/2021/05/07/admins-post/","revision":"85fce2d11afae862a796f22d443644f2"},{"url":".//blog/uncategorized/2021/05/07/one-more/","revision":"4c0a293a2a22767f9126f169361ddff0"},{"url":".//blog/uncategorized/2021/04/20/test/","revision":"d9ad6ccb6cac0e4257a3775ea4efbe92"},{"url":".//blog/2021/04/20/your-filename/","revision":"533ca5f6ffd00bf4d8a4c2afa3adb02b"},{"url":".//blog/uncategorized/2021/04/20/test-one/","revision":"ad21e4303b9fe5be19ba9d79fbd66496"},{"url":".//blog/uncategorized/2021/03/05/title-1/","revision":"0d0ecf7eb470f3a173879ac57fa45fc9"},{"url":".//blog/uncategorized/2021/03/05/title/","revision":"013d89ac433da09856b1fe8f514bc793"},{"url":".//blog/uncategorized/2021/03/05/new-two/","revision":"f0ab4e5cb58661860729e20e4396607d"},{"url":".//blog/uncategorized/2021/03/05/new-one/","revision":"b0e0ce431904b7746e6de1efe1268567"},{"url":".//blog/fruits/2021/03/05/kiwifruit/","revision":"29d625d5d591e73756e2545cb4a4befd"}];
            // service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'bullwinkle_space',
    suffix: 'v1.0',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html
workbox.routing.registerRoute(
    /\.html$/,
    new workbox.strategies.NetworkFirst()
);

// use `NetworkFirst` strategy for css and js
workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.NetworkFirst()
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(images|favicon|icons)/,
    new workbox.strategies.CacheFirst()
);

// use `StaleWhileRevalidate` third party files
workbox.routing.registerRoute(
    /^https?:\/\/media.githubusercontent.com/,
    new workbox.strategies.StaleWhileRevalidate()
);

