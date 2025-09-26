import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '用腾讯文件打开-允许',
      fastQuery: true,
      actionDelay: 200,
      actionCd: 5000,
      activityIds: ['.ui.chatting.AppAttachNewDownloadUI'],
      rules: [
        {
          matches: [
            '[id="com.tencent.mm:id/mm_alert_ok_btn"]',
            '[text="允许"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/22210190', //获取链接的方法在上一步有说明
        },
      ],
    },
  ],
});
