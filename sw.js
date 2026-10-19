/* Offline app shell. scripts/postbuild.mjs fills in BUILD_ID and PRECACHE after `next build`. */
const BUILD_ID = "8f9d638ceb39";
const PRECACHE = ["/microsync-demo/__next.__PAGE__.txt","/microsync-demo/__next._full.txt","/microsync-demo/__next._tree.txt","/microsync-demo/_next/static/chunks/006t7jcat-r1g.js","/microsync-demo/_next/static/chunks/0114-heca49ro.js","/microsync-demo/_next/static/chunks/063al_q720fkj.js","/microsync-demo/_next/static/chunks/0_k_5utndaarb.js","/microsync-demo/_next/static/chunks/0cz1d0mv5g_q7.js","/microsync-demo/_next/static/chunks/0woy9sx-buo59.js","/microsync-demo/_next/static/chunks/0zgg3t2j7ign-.js","/microsync-demo/_next/static/chunks/1-cudu4o_97u1.js","/microsync-demo/_next/static/chunks/14yup-_367s0h.js","/microsync-demo/_next/static/chunks/1opx21lbc2vgr.js","/microsync-demo/_next/static/chunks/1qab6biuspe50.js","/microsync-demo/_next/static/chunks/1rtpu1qdsw7ax.js","/microsync-demo/_next/static/chunks/260v4o_hhh1gy.js","/microsync-demo/_next/static/chunks/2bwr3eawuqy-f.js","/microsync-demo/_next/static/chunks/2dpdz_-lka3q_.js","/microsync-demo/_next/static/chunks/2dps_qfjugnlz.js","/microsync-demo/_next/static/chunks/2i6qlfl55u1b3.js","/microsync-demo/_next/static/chunks/2m4q6vtio3yrc.js","/microsync-demo/_next/static/chunks/2wv8yc-b241yc.js","/microsync-demo/_next/static/chunks/3048k88klm1vm.js","/microsync-demo/_next/static/chunks/398w7is2q_ec_.js","/microsync-demo/_next/static/chunks/3j1sq0_3uo9qh.js","/microsync-demo/_next/static/chunks/3koyarw6rgz08.js","/microsync-demo/_next/static/chunks/3mrfwojnlt2zq.js","/microsync-demo/_next/static/chunks/3nixmt44i8ztw.js","/microsync-demo/_next/static/chunks/3p1308ma2p976.css","/microsync-demo/_next/static/chunks/3q-bjjgbllt9s.js","/microsync-demo/_next/static/chunks/3xtw31qn8oh55.js","/microsync-demo/_next/static/chunks/407xbo2_28_qr.js","/microsync-demo/_next/static/chunks/turbopack-1kkgfh25c-yw9.js","/microsync-demo/_next/static/j4F1EBiewD_0Lq6npe3aK/_buildManifest.js","/microsync-demo/_next/static/j4F1EBiewD_0Lq6npe3aK/_clientMiddlewareManifest.js","/microsync-demo/_next/static/j4F1EBiewD_0Lq6npe3aK/_ssgManifest.js","/microsync-demo/_next/static/media/017d9bea37084d9b-s.p.41rroleoq1br7.woff2","/microsync-demo/_next/static/media/033400d475fad6b1-s.197tvtifbphtu.woff2","/microsync-demo/_next/static/media/0b1dc8ddaa74ba49-s.0e__wj8580tc5.woff2","/microsync-demo/_next/static/media/1a099d89ee94ee96-s.35a5cae5tspm2.woff2","/microsync-demo/_next/static/media/26daee0352f50a5f-s.2e115y8-hourl.woff2","/microsync-demo/_next/static/media/e629b5bc06499d58-s.10u7vx61f1ie7.woff2","/microsync-demo/_next/static/media/favicon.117ezoe8m31dk.ico","/microsync-demo/_next/static/media/fba5a26ea33df6a3-s.p.18rizl4rsrl42.woff2","/microsync-demo/add","/microsync-demo/add.txt","/microsync-demo/add/__next._full.txt","/microsync-demo/add/__next._tree.txt","/microsync-demo/add/__next.add.__PAGE__.txt","/microsync-demo/apple-touch-icon.png","/microsync-demo/batch","/microsync-demo/batch.txt","/microsync-demo/batch/__next._full.txt","/microsync-demo/batch/__next._tree.txt","/microsync-demo/batch/__next.batch.__PAGE__.txt","/microsync-demo/calendar","/microsync-demo/calendar.txt","/microsync-demo/calendar/__next._full.txt","/microsync-demo/calendar/__next._tree.txt","/microsync-demo/calendar/__next.calendar.__PAGE__.txt","/microsync-demo/crop","/microsync-demo/crop.txt","/microsync-demo/crop/__next._full.txt","/microsync-demo/crop/__next._tree.txt","/microsync-demo/crop/__next.crop.__PAGE__.txt","/microsync-demo/crops/alfalfa.jpg","/microsync-demo/crops/amaranth.jpg","/microsync-demo/crops/arugula.jpg","/microsync-demo/crops/basil.jpg","/microsync-demo/crops/broccoli.jpg","/microsync-demo/crops/buckwheat.jpg","/microsync-demo/crops/chia.jpg","/microsync-demo/crops/cilantro.jpg","/microsync-demo/crops/clover.jpg","/microsync-demo/crops/cress.jpg","/microsync-demo/crops/dill.jpg","/microsync-demo/crops/fenugreek.jpg","/microsync-demo/crops/kale.jpg","/microsync-demo/crops/kohlrabi.jpg","/microsync-demo/crops/mizuna.jpg","/microsync-demo/crops/mung-bean.jpg","/microsync-demo/crops/mustard.jpg","/microsync-demo/crops/onion.jpg","/microsync-demo/crops/pea.jpg","/microsync-demo/crops/radish.jpg","/microsync-demo/crops/red-cabbage.jpg","/microsync-demo/crops/shiso.jpg","/microsync-demo/crops/sunflower.jpg","/microsync-demo/crops/tatsoi.jpg","/microsync-demo/crops/wheatgrass.jpg","/microsync-demo/demo/amaranth-1.jpg","/microsync-demo/demo/amaranth-2.jpg","/microsync-demo/demo/broccoli-1.jpg","/microsync-demo/demo/pea-1.jpg","/microsync-demo/demo/pea-2.jpg","/microsync-demo/demo/radish-1.jpg","/microsync-demo/demo/sunflower-1.jpg","/microsync-demo/discover","/microsync-demo/discover.txt","/microsync-demo/discover/__next._full.txt","/microsync-demo/discover/__next._tree.txt","/microsync-demo/discover/__next.discover.__PAGE__.txt","/microsync-demo/favicon.ico","/microsync-demo/icon-192.png","/microsync-demo/icon-512.png","/microsync-demo/icon-maskable-512.png","/microsync-demo/","/microsync-demo/index.txt","/microsync-demo/manifest.webmanifest","/microsync-demo/profile","/microsync-demo/profile.txt","/microsync-demo/profile/__next._full.txt","/microsync-demo/profile/__next._tree.txt","/microsync-demo/profile/__next.profile.__PAGE__.txt","/microsync-demo/robots.txt","/microsync-demo/screenshots/crop.jpg","/microsync-demo/screenshots/discover.jpg","/microsync-demo/screenshots/home.jpg","/microsync-demo/shelf","/microsync-demo/shelf.txt","/microsync-demo/shelf/__next._full.txt","/microsync-demo/shelf/__next._tree.txt","/microsync-demo/shelf/__next.shelf.__PAGE__.txt"];
const CACHE = `microsync-${BUILD_ID}`;
// The site may live under a sub path (GitHub Pages). The registration scope tells us which.
const BASE = new URL(self.registration.scope).pathname.replace(/\/$/, "");

self.addEventListener("install", (event) => {
  // Without postbuild the placeholders are still strings. Refuse, so a cache that never rotates is never created.
  if (!Array.isArray(PRECACHE)) {
    event.waitUntil(Promise.reject(new Error("sw.js was not processed by postbuild")));
    return;
  }
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith("microsync-") && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

function isStatic(url) {
  return url.pathname.startsWith(`${BASE}/_next/static/`) || /\.(png|jpg)$/.test(url.pathname);
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;

  // Pages come from the versioned cache first, so a weak signal never stalls launch.
  if (request.mode === "navigate") {
    event.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const trimmed = url.pathname.replace(/\/$/, "");
        const path = trimmed === BASE ? `${BASE}/` : trimmed;
        const hit = await cache.match(path);
        if (hit) return hit;
        try {
          return await fetch(request);
        } catch {
          return (await cache.match(`${BASE}/`)) || Response.error();
        }
      }),
    );
    return;
  }

  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      // Client navigation asks for /shelf.txt?_rsc=..., the precache holds /shelf.txt.
      const hit = await cache.match(request, { ignoreSearch: url.pathname.endsWith(".txt") });
      if (hit) return hit;
      const res = await fetch(request);
      if (res.status === 200 && isStatic(url)) cache.put(request, res.clone()).catch(() => {});
      return res;
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: "window" }).then((list) => (list.length ? list[0].focus() : self.clients.openWindow(`${BASE}/`))),
  );
});
