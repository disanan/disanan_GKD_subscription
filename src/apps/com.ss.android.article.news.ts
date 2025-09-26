import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.article.news',
  name: '今日头条',
  groups: [
    {
      key: 1,
      name: '今日头条-暂不关注',
      fastQuery: true,
      actionDelay: 200,
      actionCd: 5000,
      activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
      rules: [
        {
          matches: [
            '[id="com.ss.android.article.news:id/l4k"]',
            '[text="暂不关注"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22505380', //获取链接的方法在上一步有说明
        },
      ],
    },
  ],
});
