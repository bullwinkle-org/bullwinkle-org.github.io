                        importScripts("./assets/js/workbox-v5.1.4/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "./assets/js/workbox-v5.1.4"});

            self.__precacheManifest = [{"url":".//index.html","revision":"f84a5a173d5c90ef38c8f1140eb80a33"},{"url":".//manifest.json","revision":"65ff66b7db1d56bece111d69bfa72023"},{"url":".//assets/js/bwk-store.js","revision":"d41d8cd98f00b204e9800998ecf8427e"},{"url":".//assets/css/style.css","revision":"0c12d00cc93c2b64eb4cccb3d36df8fd"},{"url":".//assets/css/theme-dark.css","revision":"90b19e2788b9824a9b49b1bea1064519"},{"url":".//assets/css/theme-light.css","revision":"e30f74e5ec0b3105723d66ecaf037ce8"},{"url":".//assets/css/code-highlight.css","revision":"962cead98433fe5d77f6287a95354295"},{"url":".//assets/css/styles.css","revision":"7d63c097424e27283735557883acdd0a"},{"url":".//assets/uploads/android-chrome-512x512.png","revision":"9dee9d766bc502a8ea2116ffeb826495"},{"url":".//assets/uploads/jill_smith.png","revision":"e1025c511ba6de7fd91dc61ff6564fa7"},{"url":".//assets/uploads/bwk_bot.png","revision":"43ecd02e10c6fc7fad6e6cd2e033362c"},{"url":".//assets/uploads/boris_badenov_px.png","revision":"764cf16da110e27093e49ad70896fc24"},{"url":".//assets/uploads/product.png","revision":"bb21f9265096f6b38fbbab85761faae3"},{"url":".//assets/uploads/sample_user_icon.png","revision":"e9e4b7922d30b56a6abe7a18d2f8af48"},{"url":".//assets/uploads/loader.mov","revision":"084a9a7de5a4da1e082d6a21ddef7729"},{"url":".//pages/collections/index.html","revision":"90f8eb98d7d3e85efaffb8dd4a973b5b"},{"url":".//pages/system-info/index.html","revision":"0e1874f24be7d8130e1fa4af569bd46c"},{"url":".//pages/products/index.html","revision":"0d85dd7323848469d187c304d3ab32e2"},{"url":".//pages/about/index.html","revision":"81c7e7f7388c4ad21dab64e47ccb3ad7"},{"url":".//pages/authors/index.html","revision":"dbd03d7b56ffa11a109465bd446a7c10"},{"url":".//pages/tags/index.html","revision":"510e16f52075cbd63794712d4c2259e0"},{"url":".//pages/notes/index.html","revision":"8e309d0e05fcedcb8f4313d14e09c439"},{"url":".//pages/categories/index.html","revision":"430000269a489a213babbb2a3e2d0359"},{"url":".//pages/experiments/index.html","revision":"54dedb0d60c198fb91a83175c837bd04"},{"url":".//products/jjj/index.html","revision":"f253ed506ba0cd6cf5cb6101f72b8f70"},{"url":".//products/ttttttt/index.html","revision":"7b699112c515ba2a2e5c490e8422e7fc"},{"url":".//products/ttttttt2/index.html","revision":"6d49106400b89801ba6a58d8ae99bd65"},{"url":".//google04b63ea86a793e7b.html","revision":"bfc8ca58267cacd7574a31d07141ab91"},{"url":".//admin/index.html","revision":"8f3719d6d546816bb2afdc2f44c98c13"},{"url":".//authors/jill/index.html","revision":"8f26ee9f31cca2a9e277442b6228ce23"},{"url":".//authors/admin/index.html","revision":"03846a32e040df8bac08d5c6670a4066"},{"url":".//authors/bullwinkle/index.html","revision":"fcd73478d0561b312f7888578a62ebba"},{"url":".//authors/vasja/index.html","revision":"1f6d654b0b2c630734ff931121e5ed4a"},{"url":".//authors/ted/index.html","revision":"623160f6786aeef4f73127e81c608a28"},{"url":".//authors/boris/index.html","revision":"a6dac903da10a7fb780ac59d4c3d6e51"},{"url":".//blog/index.html","revision":"07e4c97dbc610275d9d59f3146a973cb"},{"url":".//blog/2021/04/20/your-filename/index.html","revision":"f0a91a5331e22e17a682a8482b054b5a"},{"url":".//blog/cars/2019/08/21/bmw/index.html","revision":"a1be4add648bc1e2b7a8d3010ac36a23"},{"url":".//blog/cars/2019/08/20/porshe/index.html","revision":"5f692c98a2f29525d7604d0aafd137cc"},{"url":".//blog/cars/2019/08/22/audi/index.html","revision":"b2dc4261226bc1230caecb0d894e973e"},{"url":".//blog/uncategorized/2021/05/07/admins-post/index.html","revision":"5e27907ab86dded7ac87eb55650231ac"},{"url":".//blog/uncategorized/2021/05/07/one-more/index.html","revision":"abef21a6c75add357704bfb3e66b9a04"},{"url":".//blog/uncategorized/2021/03/05/new-two/index.html","revision":"0245c59cf09ef2ab08a89f03f96f8b72"},{"url":".//blog/uncategorized/2021/03/05/new-one/index.html","revision":"1b85e4bd2de5b86be7c5c8e80ca240f2"},{"url":".//blog/uncategorized/2021/03/05/title-1/index.html","revision":"50df03b0d6a53d50bbf727ab54e5c1e5"},{"url":".//blog/uncategorized/2021/03/05/title/index.html","revision":"acfe8599c816a182c70315997bfa5a32"},{"url":".//blog/uncategorized/2021/04/20/test-one/index.html","revision":"a9088df6d9333533438cf51d83af42e5"},{"url":".//blog/uncategorized/2021/04/20/test/index.html","revision":"37e2b6c7bce61d49b5c1e11244a6b32f"},{"url":".//blog/fruits/2021/03/05/apples/index.html","revision":"1b6aaf3085a9f2726e9700f557749d6a"},{"url":".//blog/fruits/2021/03/05/kiwifruit/index.html","revision":"88a9ecbeee55b17517d528074ee0342e"},{"url":".//blog/fruits/cat-1/2021/03/05/bananas/index.html","revision":"e5b1f32ff18c5d81cdafd9f7b6b936ae"},{"url":".//blog/p3/index.html","revision":"c13c385107cde7c396aed3384098f30c"},{"url":".//blog/p4/index.html","revision":"1ca42a6b7e0f53b10070a51d137a97b9"},{"url":".//blog/p2/index.html","revision":"46d9451b075bef2e7f9e56ef6849bdd8"},{"url":".//blog/p5/index.html","revision":"de181b38d6b0742f92ed22e5e09634e4"},{"url":".//notes/note-2/index.html","revision":"27689e46d79c4dbbb6bd25e52d7ce035"},{"url":".//notes/note-1/index.html","revision":"f8d579605912343f98cf7e047c56b58b"},{"url":".//blog/uncategorized/2021/05/07/admins-post/","revision":"85fce2d11afae862a796f22d443644f2"},{"url":".//blog/uncategorized/2021/05/07/one-more/","revision":"4c0a293a2a22767f9126f169361ddff0"},{"url":".//blog/uncategorized/2021/04/20/test/","revision":"d9ad6ccb6cac0e4257a3775ea4efbe92"},{"url":".//blog/2021/04/20/your-filename/","revision":"533ca5f6ffd00bf4d8a4c2afa3adb02b"},{"url":".//blog/uncategorized/2021/04/20/test-one/","revision":"ad21e4303b9fe5be19ba9d79fbd66496"},{"url":".//blog/uncategorized/2021/03/05/title-1/","revision":"0d0ecf7eb470f3a173879ac57fa45fc9"},{"url":".//blog/uncategorized/2021/03/05/title/","revision":"013d89ac433da09856b1fe8f514bc793"},{"url":".//blog/uncategorized/2021/03/05/new-two/","revision":"f0ab4e5cb58661860729e20e4396607d"},{"url":".//blog/uncategorized/2021/03/05/new-one/","revision":"b0e0ce431904b7746e6de1efe1268567"},{"url":".//blog/fruits/2021/03/05/kiwifruit/","revision":"29d625d5d591e73756e2545cb4a4befd"}];
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

