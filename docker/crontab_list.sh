  
# 每3天的23:50分清理一次日志
50 23 */3 * * rm -rf /scripts/logs/*.log

##############短期活动##############
#极速版红包
40 0,8 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
#jd_health
13 1,7,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
#jd_health_collect
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
#jd_jintie
10 0 * * * node /scripts/jd_jintie.js >> /scripts/logs/jd_jintie.log 2>&1
#jd_daily_lottery
13 1,22,23 * * * node /scripts/jd_daily_lottery.js >> /scripts/logs/jd_daily_lottery.log 2>&1
#京喜牧场
20 * * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
#众筹许愿池
20 12 * * * node /scripts/jd_wishingPool.js >> /scripts/logs/jd_wishingPool.log 2>&1
#图形验证
10 0,18 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
#京东金融摇钱树助力
# MMdou
21 9 * * * node /scripts/jd_MMdou.js >> /scripts/logs/jd_MMdou.log 2>&1
# 领卷中心签到
15 10 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1
# 京喜财富岛合成月饼
5 * * * * node /scripts/jd_cfd_mooncake.js >> /scripts/logs/jd_cfd_mooncake.log 2>&1
# 送豆得豆
24 0,12 * * * node /scripts/jd_sendBeans.js >> /scripts/logs/jd_sendBeans.log 2>&1
# 京东小魔方
10 2,8 * * * node /scripts/jd_mf.js >> /scripts/logs/jd_mf.log 2>&1
#芥么签到
11 9,18 * * * node /scripts/jd_jmsign.js >> /scripts/logs/jd_jmsign.log 2>&1
#芥么赚好礼
37 0,11 * * * node /scripts/jd_jmzhl.js >> /scripts/logs/jd_jmzhl.log 2>&1
#财富岛热气球接待
30 * * * * node /scripts/jd_cfd_loop.js >> /scripts/logs/jd_cfd_loop.log 2>&1
# 推一推
20 3,13 * * * node /scripts/jd_tyt.js >> /scripts/logs/jd_tyt.log 2>&1
# 签到免单
1 0,12,18 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log 2>&1
# 发财挖宝
20 1,9,16 * * * node /scripts/jd_fcwb.js >> /scripts/logs/jd_fcwb.log 2>&1
# 京东超市奖品查询
30 1,23 * * * node /scripts/jd_cscx.js >> /scripts/logs/jd_cscx.log 2>&1
# 赚京豆(微信小程序)
12 * * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
#京东小魔方--收集兑换
31 8 * * * node /scripts/jd_mofang_ex.js >> /scripts/logs/jd_mofang_ex.log 2>&1
# 财富岛珍珠兑换
59 0-23/1 * * * node /scripts/jd_cfd_pearl_ex.js >> /scripts/logs/jd_cfd_pearl_ex.log 2>&1
# 天天压岁钱
33 0,14,20 * * * node /scripts/jd_ttysq.js >> /scripts/logs/jd_ttysq.log 2>&1
#jd_15_5
58 59 6,9,14,17,20 * * * node /scripts/jd_15_5.js >> /scripts/logs/jd_15_5.log 2>&1
#jd_29_8
58 59 8,11,14,16,19 * * * node /scripts/jd_29_8.js >> /scripts/logs/jd_29_8.log 2>&1
#jd_5_2
58 59 6,9,14,17,20 * * * node /scripts/jd_5_2.js >> /scripts/logs/jd_5_2.log 2>&1
#jd_10_4
58 59 7,10,13,15,19 * * * node /scripts/jd_10_4.js >> /scripts/logs/jd_10_4.log 2>&1
#jd_pay_contract
35 21 */3 * * node /scripts/jd_pay_contract.js >> /scripts/logs/jd_pay_contract.log 2>&1
#jd_joy_park_task
2 2,15 * * * node /scripts/jd_joy_park_task.js >> /scripts/logs/jd_joy_park_task.log 2>&1
#jd_joy_park_exchange
20 * * * * node /scripts/jd_joy_park_exchange.js >> /scripts/logs/jd_joy_park_exchange.log 2>&1
##############长期活动##############
# 签到
0 0,18 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
#京喜签到
20 1 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
# 东东超市兑换奖品
0,30 0 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
0 0 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
5 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 东东萌宠
5 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
0  */6 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东全民开红包
1 1 * * * node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
10 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 东东超市
11 */6 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
55 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
0 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东月资产变动通知
10 7 1-31/7 * * node /scripts/jd_bean_MonthChange.js >> /scripts/logs/jd_bean_MonthChange.log 2>&1
# 金融养猪
12 * * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 京喜工厂
20 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 京喜工厂开团
20 9,13,16 * * * node /scripts/jd_dreamFactory_tuan.js >> /scripts/logs/jd_dreamFactory_tuan.log 2>&1
# 东东工厂
36 */4 * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 十元街
36 0-23/4 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 京东快递签到
23 1 * * * node /scripts/jd_kd.js >> /scripts/logs/jd_kd.log 2>&1
# 微信小程序京东赚赚
30 0,1 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 导到所有互助码
47 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 签到领现金
27 7,15 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 闪购盲盒
27 8 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京喜财富岛
10 * * * *  node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 京东极速版
48 0,12,18 * * *  node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京东摇一摇
0 1,17 * * * node /scripts/jd_shake.js >> /scripts/logs/jd_shake.log 2>&1
#京东试用（默认注释，请配合取关脚本使用）
10 0 * * *  node /scripts/jd_try_new.js >> /scripts/logs/jd_try_new.log 2>&1
#京东评价
21 12 * * * node /scripts/jd_comment.js >> /scripts/logs/jd_comment.log 2>&1
##############默认注释活动##############
# jd_cash_exchange
# 0,1,2 0 * * * node /scripts/jd_cash_exchange.js >> /scripts/logs/jd_cash_exchange.log 2>&1
# 惊喜红包返现助力
# 48 20 * * * node /scripts/jx_aid_cashback.js >> /scripts/logs/jx_aid_cashback.log 2>&1
# 清空购物车
# 0 1 * * * node /scripts/jd_CartRemove.js >> /scripts/logs/jd_CartRemove.log 2>&1
# 宠汪汪
# 5 */2,9,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪积分兑换京豆
# 59 7,15,23 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 宠汪汪喂食
# 35 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪偷好友积分与喂食
# 30 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 宠汪汪邀请助力
# 10 9-20/1 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1