(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28686524"],{"091d":function(t,e,a){"use strict";var o=a("caab"),n=a.n(o);n.a},"0d49":function(t,e,a){"use strict";var o=a("2a2e"),n=a.n(o);n.a},1788:function(t,e,a){},"180d":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-wrapper",attrs:{id:"RoomInfo"}},[a("h1",{staticClass:"main-title"},[t._v("\n    宿舍基础信息\n  ")]),t._v(" "),a("div",{staticClass:"wrapper main-card selector-wrapper"},[a("GroupSelector",{attrs:{selectorData:t.selectorData}}),t._v(" "),a("el-button",{attrs:{type:"primary",round:"",disabled:null===t.selectorData.roomId},on:{click:t.handleSearchRoom}},[t._v("检索宿舍")])],1),t._v(" "),a("div",{staticClass:"wrapper"},[a("PanelGroup",{attrs:{roomInfo:t.roomInfo}})],1),t._v(" "),a("h1",{staticClass:"main-title"},[t._v("宿舍成员")]),t._v(" "),a("div",{staticClass:"wrapper main-card"},[a("StudentsTable",{attrs:{"table-data":t.students}})],1),t._v(" "),a("h1",{staticClass:"main-title"},[t._v("宿舍评价")]),t._v(" "),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"main-card form-wrapper"},[a("el-form",{ref:"evaluateForm",attrs:{model:t.evaluateForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"宿舍评价",prop:"note",required:""}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.evaluateForm.note,callback:function(e){t.$set(t.evaluateForm,"note",e)},expression:"evaluateForm.note"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"评分",prop:"score",required:""}},[a("el-input-number",{attrs:{"controls-position":"right",min:1,max:100},model:{value:t.evaluateForm.score,callback:function(e){t.$set(t.evaluateForm,"score",e)},expression:"evaluateForm.score"}})],1)],1),t._v(" "),a("div",{staticClass:"btn-wrapper"},[a("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("发表评分")])],1)],1),t._v(" "),a("Evaluates",{attrs:{evaluatesData:t.evaluatesData},on:{afterDel:function(e){return t.fetchRoomInfo(t.roomInfo.id)}}})],1)])},n=[],r=(a("96cf"),a("3b8d")),s=(a("7f7f"),a("3392")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"room-panel-group"}},[t.roomInfo.id?a("el-row",{attrs:{gutter:30}},t._l(t.panelData,(function(e,o){return a("el-col",{key:o,attrs:{sm:24/t.panelData.length}},[a("div",{staticClass:"group-item-wrapper"},[a("div",{staticClass:"icon-wrapper"},[a("i",{staticClass:"icon",class:e.icon,style:{color:e.color}})]),t._v(" "),a("div",{staticClass:"text-wrapper"},[a("div",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{staticClass:"content"},[t._v(t._s(e.content))])])])])})),1):a("div",{staticClass:"main-card no-data-tips"},[t._v("\n    = 请选择宿舍 =\n  ")])],1)},l=[],c={name:"RoomPanelGroup",data:function(){return{}},props:{roomInfo:{type:Object,required:!0}},computed:{panelData:function(){return[{icon:"el-icon-s-home",color:"#40C9C6",title:"房间号",content:this.roomInfo.number},{icon:"el-icon-location",color:"#36A3F7",title:"所在楼层",content:this.roomInfo.floor.layer+"层"},{icon:"el-icon-office-building",color:"#F4516C",title:"宿舍楼",content:this.roomInfo.building.name},{icon:"el-icon-user-solid",color:"#34BFA3",title:"宿舍最大人数",content:"".concat(this.roomInfo.peopleNum)}]}}},u=c,d=(a("3d52"),a("2877")),f=Object(d["a"])(u,i,l,!1,null,"36af11d7",null),m=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"StudentTable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:!0}},[a("el-table-column",{attrs:{label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{on:{click:function(a){return t.gotoUserDetail(e.row.id)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"account",label:"学号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"电话号"}}),t._v(" "),a("el-table-column",{attrs:{label:"入住时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),t._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[t._v(t._s(t._f("formatDate")(e.row.checkTime,"YYYY-MM-DD")))])]}}])})],1)],1)},p=[],h={name:"StudentTable",data:function(){return{}},props:{tableData:{type:Array,default:function(){return[]}}},methods:{gotoUserDetail:function(t){this.$router.push({name:"userInfo",query:{userId:t}})}}},b=h,_=(a("091d"),Object(d["a"])(b,v,p,!1,null,"e7dd3774",null)),I=_.exports,g=a("8e3e"),C=a("420d"),D=a("dffe"),w={name:"RoomInfo",components:{GroupSelector:s["a"],PanelGroup:m,StudentsTable:I,Evaluates:g["a"]},data:function(){return{roomInfo:{},buildingInfo:{},floorInfo:{},students:[],selectorData:{buildingId:null,floorId:null,roomId:null},evaluatesData:[],evaluateForm:{note:"",score:60}}},watch:{"$route.query.roomId":function(t){t&&"roomInfo"===this.$route.name&&this.fetchRoomInfo(t)}},mounted:function(){var t=this.$route.query.roomId;t&&this.fetchRoomInfo(t)},methods:{fetchRoomInfo:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(e){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(C["a"])(e);case 2:return a=t.sent.data,this.roomInfo=a,this.buildingInfo=a.building,this.students=a.users,t.next=8,Object(D["b"])({roomId:a.id});case 8:o=t.sent.data.evaluates,this.evaluatesData=o;case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleSearchRoom:function(){this.$router.push({name:"roomInfo",query:{roomId:this.selectorData.roomId}})},handleSubmit:function(){var t=this;this.$refs.evaluateForm.validate((function(e){e?Object(D["a"])({note:t.evaluateForm.note,score:t.evaluateForm.score,roomId:t.roomInfo.id}).then((function(){t.$message.success("发布成功"),t.fetchRoomInfo(t.roomInfo.id)})):t.$message.error("请填充完整信息")}))}}},y=w,F=(a("0d49"),Object(d["a"])(y,o,n,!1,null,"2730572d",null));e["default"]=F.exports},"2a2e":function(t,e,a){},"3d52":function(t,e,a){"use strict";var o=a("805c"),n=a.n(o);n.a},"420d":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));var o=a("b775");function n(t){return Object(o["a"])({url:"/room/getRooms",method:"get",params:t})}function r(t){return Object(o["a"])({url:"/room/getRoomInfo",method:"get",params:{roomId:t}})}},"805c":function(t,e,a){},"8e3e":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"room-evaluation"},[a("el-row",{attrs:{gutter:30}},t._l(t.evaluatesData,(function(e){return a("el-col",{key:e.id,attrs:{md:8}},[a("div",{staticClass:"evaluate-item"},[a("div",{staticClass:"top",style:{background:t.getColor(e.score)}},[a("div",{staticClass:"score"},[t._v("\n            评价分数："),a("span",[t._v(t._s(e.score))])]),t._v(" "),a("div",{staticClass:"level"},[t._v(t._s(t.getLevel(e.score)))])]),t._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"note"},[t._v("评价："+t._s(e.note))])]),t._v(" "),a("div",{staticClass:"bottom"},[a("div",{staticClass:"creator"},[a("span",{staticStyle:{"margin-right":"5px"}},[t._v("评价人: "+t._s(e.userName))]),t._v(" "),e.userId===t.userId?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.handleDelete(e.id)}}},[t._v("删除")]):t._e()],1),t._v(" "),a("div",{staticClass:"time"},[t._v("\n            "+t._s(t._f("formatDate")(e.createdAt,"YYYY年MM月DD日 HH:mm"))+"\n          ")])])])])})),1),t._v(" "),0===t.evaluatesData.length?a("div",{staticClass:"tips"},[t._v("= 暂无评价 =")]):t._e()],1)},n=[],r=a("dffe"),s={data:function(){return{}},props:{evaluatesData:{type:Array,required:!0}},computed:{userId:function(){return this.$store.getters.allUserInfo.id}},methods:{getLevel:function(t){return t>=80?"优秀":t>=60?"良好":"差劲"},getColor:function(t){return t>=80?"#1890ff":t>=60?"#FFBA00":"#ff4949"},handleDelete:function(t){var e=this;this.$confirm("确认要删除该条评论","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(r["c"])(t).then((function(){e.$message.success("删除成功"),e.$emit("afterDel")}))}))}}},i=s,l=(a("cdea"),a("2877")),c=Object(l["a"])(i,o,n,!1,null,"4dd32fd8",null);e["a"]=c.exports},be0e:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return s}));var o=a("b775");function n(t){return Object(o["a"])({url:"/floor/getFloors",method:"get",params:t})}function r(t){return Object(o["a"])({url:"/floor/getFloorsDetail",method:"get",params:{buildingId:t}})}function s(t,e){return Object(o["a"])({url:"/floor/addCleanerToFloor",method:"post",data:{floorId:t,cleanerId:e}})}},caab:function(t,e,a){},cdea:function(t,e,a){"use strict";var o=a("1788"),n=a.n(o);n.a},dffe:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"c",(function(){return s}));var o=a("b775");function n(t){return Object(o["a"])({url:"/evaluate/getEvaluates",method:"get",params:t})}function r(t){var e=t.note,a=t.score,n=t.roomId;return Object(o["a"])({url:"/evaluate/addEvaluate",method:"post",data:{note:e,score:a,roomId:n}})}function s(t){return Object(o["a"])({url:"/evaluate/removeEvaluate",method:"delete",params:{evaluateId:t}})}}}]);