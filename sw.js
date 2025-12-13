{\rtf1\ansi\ansicpg1251\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const CACHE_NAME = 'quadra-breath-v1';\
const urlsToCache = [\
  './',\
  './index.html',\
  './manifest.json',\
  './icon-192.png',\
  './icon-512.png'\
];\
\
// \uc0\u1059 \u1089 \u1090 \u1072 \u1085 \u1086 \u1074 \u1082 \u1072  Service Worker \u1080  \u1082 \u1101 \u1096 \u1080 \u1088 \u1086 \u1074 \u1072 \u1085 \u1080 \u1077  \u1088 \u1077 \u1089 \u1091 \u1088 \u1089 \u1086 \u1074 \
self.addEventListener('install', (event) => \{\
  event.waitUntil(\
    caches.open(CACHE_NAME)\
      .then((cache) => \{\
        return cache.addAll(urlsToCache);\
      \})\
      .catch((err) => \{\
        console.warn('\uc0\u1050 \u1101 \u1096 \u1080 \u1088 \u1086 \u1074 \u1072 \u1085 \u1080 \u1077  \u1085 \u1077  \u1091 \u1076 \u1072 \u1083 \u1086 \u1089 \u1100 :', err);\
      \})\
  );\
\});\
\
// \uc0\u1054 \u1073 \u1088 \u1072 \u1073 \u1086 \u1090 \u1082 \u1072  \u1089 \u1077 \u1090 \u1077 \u1074 \u1099 \u1093  \u1079 \u1072 \u1087 \u1088 \u1086 \u1089 \u1086 \u1074 : \u1089 \u1085 \u1072 \u1095 \u1072 \u1083 \u1072  \u1080 \u1079  \u1082 \u1101 \u1096 \u1072 , \u1087 \u1086 \u1090 \u1086 \u1084  \u1080 \u1079  \u1089 \u1077 \u1090 \u1080 \
self.addEventListener('fetch', (event) => \{\
  event.respondWith(\
    caches.match(event.request)\
      .then((response) => \{\
        // \uc0\u1045 \u1089 \u1083 \u1080  \u1088 \u1077 \u1089 \u1091 \u1088 \u1089  \u1074  \u1082 \u1101 \u1096 \u1077  \'97 \u1074 \u1086 \u1079 \u1074 \u1088 \u1072 \u1097 \u1072 \u1077 \u1084  \u1077 \u1075 \u1086 \
        if (response) \{\
          return response;\
        \}\
        // \uc0\u1048 \u1085 \u1072 \u1095 \u1077  \'97 \u1079 \u1072 \u1087 \u1088 \u1072 \u1096 \u1080 \u1074 \u1072 \u1077 \u1084  \u1080 \u1079  \u1089 \u1077 \u1090 \u1080 \
        return fetch(event.request).catch(() => \{\
          // \uc0\u1044 \u1083 \u1103  \u1082 \u1086 \u1088 \u1085 \u1077 \u1074 \u1086 \u1075 \u1086  \u1079 \u1072 \u1087 \u1088 \u1086 \u1089 \u1072  \u1084 \u1086 \u1078 \u1085 \u1086  \u1074 \u1077 \u1088 \u1085 \u1091 \u1090 \u1100  index.html (\u1076 \u1083 \u1103  SPA)\
          if (event.request.destination === 'document') \{\
            return caches.match('./index.html');\
          \}\
        \});\
      \})\
  );\
\});\
\
// \uc0\u1054 \u1087 \u1094 \u1080 \u1086 \u1085 \u1072 \u1083 \u1100 \u1085 \u1086 : \u1086 \u1095 \u1080 \u1089 \u1090 \u1082 \u1072  \u1089 \u1090 \u1072 \u1088 \u1099 \u1093  \u1082 \u1101 \u1096 \u1077 \u1081  \u1087 \u1088 \u1080  \u1086 \u1073 \u1085 \u1086 \u1074 \u1083 \u1077 \u1085 \u1080 \u1080 \
self.addEventListener('activate', (event) => \{\
  const cacheWhitelist = [CACHE_NAME];\
  event.waitUntil(\
    caches.keys().then((cacheNames) => \{\
      return Promise.all(\
        cacheNames.map((cacheName) => \{\
          if (!cacheWhitelist.includes(cacheName)) \{\
            return caches.delete(cacheName);\
          \}\
        \})\
      );\
    \})\
  );\
\});}