import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ct.client',
  name: '中国电信',
  groups: [
    {
      key: 1,
      name: '关闭广告',
      fastQuery: true,
      actionDelay: 200,
      actionCd: 1000,
      activityIds: ['.activity.MainActivity'],
      rules: [
        {
          matches: [
            '[id="com.ct.client:id/cbNoMore"]',
            '[text="不再弹出"]',
          ],                 
        },
      ],
      rules: [
        {
          actionDelay: 200,
          matches: [
            '[id="com.ct.client:id/close"]',
            '[vid="close"]',
          ],
        },
      ],
    },
  ],
});
