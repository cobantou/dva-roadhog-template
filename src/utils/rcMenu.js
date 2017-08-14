/**
 * Created by Administrator on 2017/8/14.
 */
export let menu =  [
  {
    key: "workOverview",
    name: "工作概况",
    route:"/remoteCoop/workOverview"
  },{
    key: "myApply",
    name: "我的申请",
    route:"/remoteCoop/apply"
  },{
    key: "myAccept",
    name: "我的受理",
  },{
    key: "rmtCoop",
    name: "远程协作",
    child:[
      {
        key: "attribute",
        name: "待分配",
      },{
        key: "process",
        name: "处理中",
      },{
        key: "finish",
        name: "已完成",
      },{
        key: "all",
        name: "全部",
      },
    ]
  },
]
