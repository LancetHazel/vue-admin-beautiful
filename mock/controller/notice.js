const data = [
  {
    title: '本网站为NJUSE互联网+实践课程项目Scheduler',
    closable: false,
    type: 'success',
  },
  {
    title:
      '恭喜！当前按期交货率正常，所有订单可按照目前排程有序进行~',
    closable: false,
    type: 'success',
  },
]
module.exports = [
  {
    url: '/notice/getList',
    type: 'post',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
