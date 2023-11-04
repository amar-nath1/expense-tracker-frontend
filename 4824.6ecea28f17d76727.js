"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4824],{4824:(Y,v,l)=>{l.r(v),l.d(v,{Tab1PageModule:()=>I});var s=l(1509),p=l(6814),m=l(95),P=l(3554),_=l(3044),g=l(5861),e=l(6689),f=l(5247);let Z=(()=>{var t;class r{constructor(n){this.storageService=n,this.prem="",this.getUserInfo()}getUserInfo(){var n=this;return(0,g.Z)(function*(){return n.storageService.getItem("prem")})()}setPremium(){var n=this;return(0,g.Z)(function*(){yield n.storageService.setItem("prem",!0)})()}}return(t=r).\u0275fac=function(n){return new(n||t)(e.LFG(f.V))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),r})();var y=l(9045),b=l(4075);let C=(()=>{var t;class r{constructor(n,o){this.router=n,this.storageService=o,this.name="",this.getUserInfo()}getUserInfo(){var n=this;return(0,g.Z)(function*(){const o=yield n.storageService.getItem("email");n.name=o})()}logoutHandler(){this.storageService.clearStorage().then(()=>{this.router.navigate(["login"],{replaceUrl:!0}).then(()=>{window.location.reload()})})}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(_.F0),e.Y36(f.V))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-explore-container"]],decls:7,vars:2,consts:[[3,"translucent"],[2,"display","flex","justify-content","space-between"],["color","primary",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"div",1)(3,"ion-title"),e._uU(4),e.qZA(),e.TgZ(5,"ion-title",2),e.NdJ("click",function(){return o.logoutHandler()}),e._uU(6," Logout "),e.qZA()()()()),2&n&&(e.Q6J("translucent",!0),e.xp6(4),e.hij(" ",o.name," "))},dependencies:[s.Gu,s.wd,s.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),r})();function A(t,r){if(1&t&&(e.TgZ(0,"div",24)(1,"ion-text"),e._uU(2),e.qZA(),e.TgZ(3,"small"),e._uU(4),e.ALo(5,"date"),e.qZA()()),2&t){const i=r.$implicit,n=r.index;e.xp6(2),e.AsE("",n+1,". ",i.fileUrl,""),e.xp6(2),e.hij(" -> ",e.xi3(5,3,i.createdAt,"dd-MM-yyyy"),"")}}function S(t,r){if(1&t&&(e.TgZ(0,"ion-content",22)(1,"ion-list"),e.YNc(2,A,6,6,"div",23),e.qZA()()),2&t){const i=e.oxw();e.xp6(2),e.Q6J("ngForOf",i.allFileUrls)}}function M(t,r){if(1&t&&(e.TgZ(0,"ion-content",22),e._uU(1),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Oqu(i.expenseService.fileUrl)}}function w(t,r){if(1&t&&(e.TgZ(0,"ion-col",29)(1,"ion-label"),e._uU(2),e.ALo(3,"date"),e.qZA()()),2&t){const i=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,i.createdAt.split("T")[0],"dd-MM-yyyy"))}}function k(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"ion-row",25),e.YNc(1,w,4,4,"ion-col",26),e.TgZ(2,"ion-col",20),e._uU(3),e.qZA(),e.TgZ(4,"ion-col",25),e._uU(5),e.qZA(),e.TgZ(6,"ion-col"),e._uU(7),e.qZA(),e.TgZ(8,"ion-col"),e._uU(9),e.qZA(),e.TgZ(10,"ion-col",27)(11,"ion-icon",28),e.NdJ("click",function(){const a=e.CHM(i).$implicit,c=e.oxw();return e.KtG(c.deleteExpenseHandler(a.id))}),e.qZA()()()}if(2&t){const i=r.$implicit,n=r.index,o=e.oxw();e.Q6J("ngClass",n%2==0?"even-class":"odd-class"),e.xp6(1),e.Q6J("ngIf",o.showDateLabel(o.expenseService.allExpense[n-1],i)),e.xp6(2),e.hij("",o.page+n+1,"."),e.xp6(1),e.Q6J("ngClass",i.income?"income-text":"expense-text"),e.xp6(1),e.Oqu(i.amount),e.xp6(2),e.Oqu(i.description),e.xp6(2),e.Oqu(i.type)}}function U(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"ion-icon",30),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.getPrevExpenses())}),e.qZA()}}function O(t,r){if(1&t){const i=e.EpF();e.TgZ(0,"ion-icon",31),e.NdJ("click",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.getNextExpenses())}),e.qZA()}}const q=[{path:"",component:(()=>{var t;class r{constructor(n,o,a,c,u){this.cdr=n,this.premiumService=o,this.storageService=a,this.apiService=c,this.expenseService=u,this.premium="Go premium",this.filterType="year",this.allFileUrls=[],this.page=0,this.itemsPerPage="5"}ionViewWillEnter(){this.premiumService.getUserInfo().then(n=>{this.premium=!0===n?"you are premium":"Go premium",console.log(this.premium,"aafterset")}),this.storageService.getItem("itemsPerPage").then(n=>{this.itemsPerPage=n,this.expenseService.getAllExpense(this.filterType,!1,this.page,Number(n))})}updateString(){this.cdr.detectChanges()}getPrevExpenses(){this.page>0&&(this.page-=Number(this.itemsPerPage),this.expenseService.getAllExpense(this.filterType,!1,this.page))}getNextExpenses(){this.page+=Number(this.itemsPerPage),this.expenseService.getAllExpense(this.filterType,!1,this.page)}onItemsPerPageChange(){this.storageService.setItem("itemsPerPage",this.itemsPerPage).then(()=>{this.expenseService.getAllExpense(this.filterType,!1,this.page,Number(this.itemsPerPage))})}goPremiumHandler(){var n=this;return(0,g.Z)(function*(){const o=yield n.storageService.getItem("token");n.apiService.get("go-premium",o).subscribe(a=>{var c,u;console.log(a," get res");let h={key_id:a.key_id,order_id:a.order.id,handler:function(T){return(c=c||(0,g.Z)(function*(x){var d;const F=yield n.storageService.getItem("token");n.apiService.put("go-premium",{status:"SUCCESS",orderid:h.order_id,paymentid:x.razorpay_payment_id},F).subscribe(function(Q){return(d=d||(0,g.Z)(function*(N){console.log(N,"payres"),console.log(n.premium,"beforeset"),n.premiumService.setPremium().then(()=>{n.premium="you are premium",n.updateString(),console.log(n.premium,"aafterset")})})).apply(this,arguments)})})).apply(this,arguments)},description:"Payment for products/services",theme:{color:"#0000FF"},prefill:{name:"John Doe",email:"john.doe@example.com",contact:"1234567890"},notes:{address:"Customer Address"}};n.rzp1=new Razorpay(h),n.rzp1.open(),n.rzp1.on("payment.failed",function(J){return(u=u||(0,g.Z)(function*(T){console.log(T," fail ho gya");const x=yield n.storageService.getItem("token");n.apiService.put("go-premium",{status:"FAILED",orderid:h.order_id,paymentid:T.razorpay_payment_id},x).subscribe(d=>{console.log(d,"payres")})})).apply(this,arguments)})})})()}deleteExpenseHandler(n){var o=this;return(0,g.Z)(function*(){const a=yield o.storageService.getItem("token");o.apiService.delete(`delete/${n}`,a).subscribe(c=>{o.expenseService.getAllExpense(o.filterType)})})()}showDateLabel(n,o){return!n||n.createdAt.split("T")[0]!==o.createdAt.split("T")[0]}downloadDataHandler(){var n=this;return(0,g.Z)(function*(){n.expenseService.getAllExpense(n.filterType,!0)})()}viewDownloadsHandler(){var n=this;return(0,g.Z)(function*(){const o=yield n.storageService.getItem("token");n.apiService.get("file-urls",o).subscribe(a=>{console.log(a.urls," allfileurlss"),n.allFileUrls=a.urls})})()}}return(t=r).\u0275fac=function(n){return new(n||t)(e.Y36(e.sBO),e.Y36(Z),e.Y36(f.V),e.Y36(y.s),e.Y36(b.r))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-tab1"]],decls:49,vars:9,consts:[[3,"fullscreen"],["color","primary",1,"ion-margin-vertical","ion-text-end","ion-padding"],[3,"click"],["label","Apply Filter","label-placement","floating","fill","outline",3,"ngModel","ngModelChange","ionChange"],["value","month"],["value","year"],["value","week"],[1,"ion-margin-horizontal"],["size","12",1,"ion-text-end"],["id","view-downloads",3,"disabled","click"],["id","download",3,"disabled","click"],["trigger","view-downloads","triggerAction","click"],["trigger","download","triggerAction","click"],["label","Items Per Page","placeholder","",3,"ngModel","ionChange","ngModelChange"],["value","5"],["value","10"],["value","15"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"ion-text-end"],["name","caret-back-outline",3,"click",4,"ngIf"],["size","1"],["name","caret-forward-outline",3,"click",4,"ngIf"],[1,"ion-padding"],["style","border-bottom: 1px solid grey;padding: 10px;",4,"ngFor","ngForOf"],[2,"border-bottom","1px solid grey","padding","10px"],[3,"ngClass"],["class","date-class","size","12",4,"ngIf"],[1,"ion-text-center"],["id","ex.id","name","trash",3,"click"],["size","12",1,"date-class"],["name","caret-back-outline",3,"click"],["name","caret-forward-outline",3,"click"]],template:function(n,o){1&n&&(e._UZ(0,"app-explore-container"),e.TgZ(1,"ion-content",0)(2,"ion-header",1)(3,"ion-text",2),e.NdJ("click",function(){return o.goPremiumHandler()}),e._uU(4),e.qZA()(),e.TgZ(5,"ion-select",3),e.NdJ("ngModelChange",function(c){return o.filterType=c})("ionChange",function(){return o.expenseService.getAllExpense(o.filterType)}),e.TgZ(6,"ion-select-option",4),e._uU(7,"This Month"),e.qZA(),e.TgZ(8,"ion-select-option",5),e._uU(9,"This Year"),e.qZA(),e.TgZ(10,"ion-select-option",6),e._uU(11,"This Week"),e.qZA()(),e.TgZ(12,"ion-grid",7)(13,"ion-row")(14,"ion-col",8)(15,"ion-button",9),e.NdJ("click",function(){return o.viewDownloadsHandler()}),e._uU(16,"View Download"),e.qZA(),e.TgZ(17,"ion-button",10),e.NdJ("click",function(){return o.downloadDataHandler()}),e._uU(18,"Download"),e.qZA()(),e.TgZ(19,"ion-popover",11),e.YNc(20,S,3,1,"ng-template"),e.qZA(),e.TgZ(21,"ion-popover",12),e.YNc(22,M,2,1,"ng-template"),e.qZA()(),e.TgZ(23,"ion-row")(24,"ion-col",8)(25,"ion-select",13),e.NdJ("ionChange",function(){return o.onItemsPerPageChange()})("ngModelChange",function(c){return o.itemsPerPage=c}),e.TgZ(26,"ion-select-option",14),e._uU(27,"5"),e.qZA(),e.TgZ(28,"ion-select-option",15),e._uU(29,"10"),e.qZA(),e.TgZ(30,"ion-select-option",16),e._uU(31,"15"),e.qZA()()()(),e.TgZ(32,"ion-row")(33,"ion-col"),e._uU(34,"Amount"),e.qZA(),e.TgZ(35,"ion-col"),e._uU(36,"Desc"),e.qZA(),e.TgZ(37,"ion-col"),e._uU(38,"Type"),e.qZA(),e.TgZ(39,"ion-col"),e._uU(40,"Action"),e.qZA()(),e.YNc(41,k,12,7,"ion-row",17),e.qZA(),e.TgZ(42,"ion-grid")(43,"ion-row")(44,"ion-col",18),e.YNc(45,U,1,0,"ion-icon",19),e.qZA(),e._UZ(46,"ion-col",20),e.TgZ(47,"ion-col"),e.YNc(48,O,1,0,"ion-icon",21),e.qZA()()()()),2&n&&(e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(3),e.Oqu(o.premium),e.xp6(1),e.Q6J("ngModel",o.filterType),e.xp6(10),e.Q6J("disabled","Go premium"==o.premium),e.xp6(2),e.Q6J("disabled","Go premium"==o.premium),e.xp6(8),e.Q6J("ngModel",o.itemsPerPage),e.xp6(16),e.Q6J("ngForOf",o.expenseService.allExpense),e.xp6(4),e.Q6J("ngIf",0!==o.page),e.xp6(3),e.Q6J("ngIf",o.expenseService.rowCount>o.page+o.expenseService.allExpense.length))},dependencies:[s.YG,s.wI,s.W2,s.jY,s.Gu,s.gu,s.Q$,s.q_,s.Nd,s.t9,s.n0,s.yW,s.d8,s.QI,p.mk,p.sg,p.O5,m.JJ,m.On,C,p.uU],styles:["[_nghost-%COMP%]   .income-text[_ngcontent-%COMP%]{color:green}[_nghost-%COMP%]   .expense-text[_ngcontent-%COMP%]{color:red}[_nghost-%COMP%]   .even-class[_ngcontent-%COMP%]{background-color:#d3d3d3}[_nghost-%COMP%]   .odd-class[_ngcontent-%COMP%]{background-color:#f5f5f5}[_nghost-%COMP%]   .date-class[_ngcontent-%COMP%]{background-color:#fff!important}"]}),r})()}];let E=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.Bz.forChild(q),_.Bz]}),r})(),I=(()=>{var t;class r{}return(t=r).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.Pc,p.ez,m.u5,P.e,E]}),r})()}}]);