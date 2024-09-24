import type { Config } from './types';

export default {
  version: '3.0.1',
  id: 'com.bac.feljib.dz.education',
  name: 'Bac Feljib',
  shortName: 'Bac Feljib',
  description: 'موقع الباك في الجيب | bac feljib هو موقع تعليمي جزائري مختص بنشر  كل ما يحتاجه تلاميذ البكالوريا من دروس و ملخصات  و كتب خارجية للبكالوريا, و كذالك نماذج اختبارات و مواضيع الباكالوريا. كما يقدم الموقع نصائح و ارشادات لطلاب البكالوريا صمم موقع الباك في الجيب خصيصا لأصحاب البكالوريا سواء كانوا نظاميين أو احرار  لتسهيل عليهم عملية البحث عن ما يحتاجونه في عام البكالوريا  .',
  direction: 'auto',
  language: 'ar-DZ',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'دروس و ملخصات',
      shortName: 'دروس و ملخصات',
      description: 'دروس و افضل الملخصات لجميع المواد التعليمية',
      url: '/p/lessons-and-summaries-bac.html?utm_source=homescreen',
    },
    {
      name: 'تمارين مع الحل',
      shortName: 'تمارين مع الحل',
      description: 'افضل التمارين لجميع المواد مع الحل',
      url: '/p/exercises-with-solution-bac.html?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://hello-example.blogspot.com',
} satisfies Config;
