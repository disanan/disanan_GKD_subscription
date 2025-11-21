{
  id: 'cn.wsds.gamemaster',
  name: '迅游加速器',
  groups: [
    {
      key: 1,
      name: '关闭弹出广告',
      fastQuery: true,
      //actionMaximum:1,
      actionDelay:200,
      actionCd:5000,
      //activityIds: ['com.ss.android.ugc.detail.activity.TikTokActivity'],
      rules: [
        {
	  
          matches: ['[id="cn.wsds.gamemaster:id/view_close_button"]',
          
        },
       ],
    },
  ],
}
