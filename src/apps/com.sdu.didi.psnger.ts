import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sdu.didi.psnger',
  name: '滴滴出行',
  groups: [
    {
      key: 1,
      name: '关闭弹出广告',
      actionDelay:100,
      actionCd:3000,
      
      rules: [
        {
          activityIds: 'com.didi.ride.dimina.DMActivity',
          matches: '@Image <2 View < View <4 View < WebView < WebView < [vid="touch_intercept_fl"]',
        },
      ],
    },
    {
  key: 2,
  name: '关闭弹出广告2',
 actionDelay:100,
      actionCd:3000,
  rules: [
    {
      fastQuery: true,
      activityIds: 'com.didi.sdk.app.MainActivity',
      matches: '[id="com.sdu.didi.psnger:id/popClose"][desc="关闭弹窗"]',
    },
  ],
},
{
  key: 3,
  name: '关闭弹窗-开心收下',
  actionDelay:100,
      actionCd:3000,
  rules: [
    {
	       fastQuery: true,
      activityIds: 'com.didi.bike.ammox.biz.webview.BikeWebActivity',
      matches: '@TextView <3 View < WebView < WebView < [vid="web_parent"]',
    },
  ],
},
{
  key: 4,
  name: '马上领',
  actionDelay:100,
      actionCd:3000,
  rules: [
    {
      fastQuery: true,
      activityIds: 'com.didi.sdk.app.MainActivity',
      matches: '@ImageView < ViewGroup <4 ViewGroup <5 ViewGroup <3 ViewGroup < ViewGroup <3 ViewGroup < [vid="hummer_layout_root_view"]',
    },
  ],
},
{
  key: 5,
  name: '全部收下',
  actionDelay:100,
      actionCd:3000,
  rules: [
    {
      fastQuery: true,
      activityIds: 'com.didi.sdk.app.MainActivity',
      matches: '@TextView <2 View < View <2 View <6 WebView < WebView < FrameLayout < [vid="web_parent"]',
    },
  ],
},
{
  key: 6,
  name: '弹窗6',
  actionDelay:100,
      actionCd:3000,
  rules: [
    {
      fastQuery: true,
      activityIds: 'com.didi.sdk.app.MainActivity',
      matches: '@TextView <2 View <2 View <2 View < View < WebView < WebView < FrameLayout < [vid="web_parent"]',
    },
  ],
}
  ],
});
