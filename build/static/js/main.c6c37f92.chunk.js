(this.webpackJsonpblogapp=this.webpackJsonpblogapp||[]).push([[0],{125:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(13),l=c.n(r),n=(c(34),c(6)),i=c(2),o=c(7),d=function(e,t){switch(t.type){case"LOGIN_START":return{user:null,isFetching:!0,error:!1};case"LOGIN_SUCCESS":case"UPDATE_SUCCESS":return{user:t.payload,isFetching:!1,error:!1};case"LOGIN_FAILURE":return{user:null,isFetching:!1,error:!0};case"UPDATE_START":return Object(o.a)(Object(o.a)({},e),{},{isFetching:!0});case"UPDATE_FAILURE":return{user:e.user,isFetching:!1,error:!0};case"LOGOUT":return{user:null,isFetching:!1,error:!1};default:return e}},j=c(0),b={user:JSON.parse(localStorage.getItem("user"))||null,isFetching:!1,error:!1},x=Object(s.createContext)(b),u=function(e){var t=e.children,c=Object(s.useReducer)(d,b),a=Object(i.a)(c,2),r=a[0],l=a[1];return Object(s.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r.user))}),[r.user]),Object(j.jsx)(x.Provider,{value:{user:r.user,isFetching:r.isFetching,error:r.error,dispatch:l},children:t})};var h=function(){var e=Object(s.useContext)(x),t=e.user,c=e.dispatch;return Object(j.jsxs)("div",{className:"z-20 top-0 w-screen bg-bluelight-800 text-white h-14 fixed flex justify-between items-center px-5",children:[Object(j.jsxs)("div",{className:"flex space-x-2 bg-white px-5",children:[Object(j.jsx)("i",{class:"fab fa-facebook-square text-2xl text-blue-400 "}),Object(j.jsx)("i",{class:"fab fa-facebook-messenger text-2xl text-red-300"}),Object(j.jsx)("i",{class:"fab fa-whatsapp text-2xl text-green-600  font-bold"}),Object(j.jsx)("i",{class:"fab fa-snapchat-square text-2xl text-red-600"})]}),Object(j.jsxs)("div",{className:"flex justify-between items-center space-x-2",children:[Object(j.jsx)(n.b,{to:"/",style:{textDecoration:"none"},className:"text-white",children:"Home"}),Object(j.jsx)("div",{className:"lg:hidden",children:Object(j.jsx)(n.b,{style:{textDecoration:"none"},className:"text-white",children:"About"})}),Object(j.jsx)(n.b,{to:"#",style:{textDecoration:"none"},className:"text-white",children:"Contact"}),Object(j.jsx)(n.b,{to:"/write",style:{textDecoration:"none"},className:"text-white",children:"Write"}),Object(j.jsx)("div",{children:Object(j.jsx)(n.b,{to:"/login",onClick:function(){c({type:"LOGOUT"})},style:{textDecoration:"none"},className:"text-white",children:t&&"Logout"})})]}),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"flex items-center space-x-2",children:[t?Object(j.jsx)(n.b,{to:"/setting",style:{textDecoration:"none"},className:"text-white",children:Object(j.jsx)("div",{className:"h-10 w-10 rounded-full overflow-hidden bg-gray-400",children:Object(j.jsx)("img",{src:"http://localhost:5000/images/"+t.profilePic,alt:"",className:"w-full h-full object-cover"})})}):Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("div",{className:"mr-3",children:Object(j.jsxs)(n.b,{to:"/login",style:{textDecoration:"none"},className:"text-white",children:[" ","Login"]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(n.b,{to:"/Register",style:{textDecoration:"none"},className:"text-white",children:[" ","Register"]})})]}),Object(j.jsx)("div",{className:"flex",children:Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(j.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})})]})})]})},f=c(5),m=c(4),p=c.n(m),O=c(8),g=(c.p,[{image:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='813' preserveAspectRatio='none' viewBox='0 0 1440 813'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1023%26quot%3b)' fill='none'%3e%3crect width='1440' height='813' x='0' y='0' fill='rgba(41%2c 32%2c 27%2c 1)'%3e%3c/rect%3e%3cpath d='M223.217%2c572.887C278.556%2c571.095%2c327.948%2c542.374%2c357.527%2c495.569C389.531%2c444.927%2c408.901%2c379.96%2c377.31%2c329.059C346.795%2c279.892%2c281.082%2c279.645%2c223.217%2c279.16C164.082%2c278.664%2c97.365%2c277.218%2c64.584%2c326.438C29.225%2c379.528%2c38.423%2c451.147%2c72.947%2c504.783C104.849%2c554.346%2c164.305%2c574.794%2c223.217%2c572.887' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1425.9612028095273 304.8096486572763L1306.851963988477 193.52607438675852 1272.3797586208857 331.78653841202595z' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M502.30060607083783 512.0370322734516L392.3566018313324 376.2674940600088 256.5870636178896 486.21149829951423 366.53106785739504 621.981036512957z' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M189.23406466241858 719.5325729277182L156.87454925500032 567.2930224138463 36.99451414854673 751.8920883351365z' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M131.5279616585823 308.2791354689446L-3.307203071900574 277.14998488750075-34.43635365334447 411.9851496179836 100.39881107713843 443.1143001994275z' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1438.899%2c669.383C1519.032%2c669.362%2c1599.203%2c640.316%2c1640.891%2c571.881C1684.156%2c500.856%2c1679.788%2c412.181%2c1640.094%2c339.1C1598.384%2c262.308%2c1526.282%2c200.951%2c1438.899%2c199.991C1350.09%2c199.015%2c1272.309%2c256.559%2c1229.898%2c334.593C1189.382%2c409.141%2c1191.793%2c500.012%2c1236.724%2c571.986C1279.181%2c639.996%2c1358.724%2c669.404%2c1438.899%2c669.383' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M870.5135542709173 504.5581352112107L952.5769208681453 707.6720950230915 1155.690880680026 625.6087284258635 1073.6275140827981 422.4947686139827z' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M977.239533686727 713.2289698444482L1132.7373893440686 582.7507765135149 1002.2591960131352 427.2529208561733 846.7613403557937 557.7311141871066z' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M-13.358115160007372-1.1328829845449278L-108.59252673130426 90.83391924521342 76.9748823989817 187.70213548727958z' fill='rgba(133%2c 100%2c 17%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1023'%3e%3crect width='1440' height='813' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"},{image:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1039%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(149%2c 231%2c 182%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c473.633C87.328%2c479.228%2c139.797%2c376.052%2c202.342%2c314.851C252.909%2c265.371%2c307.804%2c217.883%2c330.014%2c150.712C351.07%2c87.029%2c324.218%2c20.769%2c321.741%2c-46.259C318.898%2c-123.189%2c355.428%2c-207.285%2c314.379%2c-272.411C272.739%2c-338.474%2c185.572%2c-355.011%2c111.516%2c-379.789C34.83%2c-405.446%2c-44.484%2c-438.277%2c-122.951%2c-418.733C-202.601%2c-398.895%2c-270.79%2c-342.23%2c-315.544%2c-273.421C-357.497%2c-208.918%2c-347.271%2c-127.595%2c-361.492%2c-51.975C-376.499%2c27.828%2c-438.46%2c111.06%2c-401.438%2c183.331C-364.199%2c256.027%2c-252.524%2c242.085%2c-186.338%2c289.948C-114.202%2c342.113%2c-88.839%2c467.941%2c0%2c473.633' fill='%2357d98b'%3e%3c/path%3e%3cpath d='M1440 1194.423C1556.819 1191.691 1616.131 1049.568 1718.968 994.082 1834.383 931.81 2024.8609999999999 971.2370000000001 2076.82 850.826 2129.1620000000003 729.528 1983.569 612.2 1937.122 488.525 1902.333 395.892 1901.839 290.732 1838.062 215.077 1773.863 138.92200000000003 1672.427 115.445 1583.988 69.62299999999999 1471.917 11.557000000000016 1374.172-107.22500000000002 1249.124-90.06500000000005 1124.495-72.96199999999999 1052.021 57.38099999999997 971.134 153.72500000000002 891.44 248.647 777.007 341.682 782.692 465.493 788.412 590.069 928.7339999999999 658.379 999.037 761.381 1054.641 842.848 1082.144 938.22 1152.518 1007.3299999999999 1235.78 1089.096 1323.335 1197.1509999999998 1440 1194.423' fill='%23d3f5e1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1039'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e"},{image:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='804' preserveAspectRatio='none' viewBox='0 0 1440 804'%3e%3cg mask='url(%26quot%3b%23SvgjsMask2275%26quot%3b)' fill='none'%3e%3crect width='1440' height='804' x='0' y='0' fill='url(%23SvgjsLinearGradient2276)'%3e%3c/rect%3e%3cpath d='M571.17 842.09C693.44 805.83 608.1 487.03 908.11 459.08 1208.11 431.13 1400.25 190.86 1581.98 185.72' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M368.48 887.56C495.06 879.6 587.63 642.9 812.63 642.43 1037.63 641.96 1034.71 742.93 1256.78 742.93 1478.85 742.93 1587.09 643.05 1700.93 642.43' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M430.85 854.61C622.88 798 684.11 257.7 960.81 254.27 1237.5 250.84 1341 527.12 1490.76 535.67' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M712.55 824.78C873.97 771.63 863.01 351.95 1146.3 301.37 1429.59 250.79 1457.15 75.44 1580.05 68.21' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M911.54 918.33C1085.26 823.72 1103.5 244.33 1319.4 240.31 1535.31 236.29 1588.79 603.94 1727.27 634.27' stroke='rgba(51%2c121%2c194%2c0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask2275'%3e%3crect width='1440' height='804' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='11.04%25' y1='-19.78%25' x2='88.96%25' y2='119.78%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient2276'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(255%2c 255%2c 255%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e"},{image:"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='800' preserveAspectRatio='none' viewBox='0 0 1440 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1030%26quot%3b)' fill='none'%3e%3crect width='1440' height='800' x='0' y='0' fill='rgba(251%2c 120%2c 120%2c 1)'%3e%3c/rect%3e%3cpath d='M1394.5756497156171 70.59324914104255L1269.8045582010548 248.78483478660274 1447.996143846615 373.5559263011651 1572.7672353611774 195.3643406556049z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1068.5229671399177 161.23696711544397L1010.0575259058297 46.49207794042903 895.3126367308148 104.95751917451695 953.7780779649028 219.70240834953188z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1358.4190335824917 671.3049601178659L1463.2207720895603 580.2021987335868 1274.1657607596076 468.55097166512337z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1018.7852081189975 211.49193190475413L961.0721283050804 361.41243465103463 1100.1348576831463 341.8684425882484z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1033.200703355351 830.7269876920245L998.3835339937687 651.608179228178 854.0818948915044 865.5441570536068z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M724.1465024795402 586.9737486058243L781.255118781688 452.4342797814884 646.7156499573521 395.3256634793406 589.6070336552043 529.8651323036765z' fill='rgba(28%2c 83%2c 142%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1030'%3e%3crect width='1440' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e"}]);var v=c(16);var w=function(e){var t=e.post;return Object(j.jsx)("div",{className:"shadow-2xl rounded-lg border-b-2 hover:border-black ",children:Object(j.jsxs)("div",{className:"   w-small2  ",children:[Object(j.jsx)("div",{className:"h-80 w-full px-2 flex justify-center   overflow-hidden",children:t.photo&&Object(j.jsx)("img",{src:"http://localhost:5000/images/"+t.photo,alt:"",className:"h-80 w-small2  "})}),Object(j.jsxs)("div",{className:"py-4 space-y-2 px-3",children:[Object(j.jsxs)("div",{children:[t.categories.map((function(e){return Object(j.jsx)("h4",{className:"text-center w-full text-gray-400",children:e.name})})),Object(j.jsx)(n.b,{to:"/post/".concat(t._id),style:{textDecoration:"none"},children:Object(j.jsx)("h1",{className:"text-center w-full font-extrabold text-2xl text-gray-600 p-3  bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100",children:t.title})}),Object(j.jsx)("h4",{className:"text-center w-full text-gray-400",children:new Date(t.createdAt).toDateString()})]}),Object(j.jsx)("p",{className:"w-full text-gray-500 h-36 overflow-hidden ",children:Object(v.a)(t.desc)})]})]})})};var N=function(e){var t=e.posts;return Object(j.jsx)("div",{className:" py-4 ",children:Object(j.jsx)("div",{className:" flex items-center justify-center",children:Object(j.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5  ",children:t.map((function(e){return Object(j.jsx)(w,{post:e})}))})})})},y=c(23),k=c.n(y).a.create({baseURL:"https://samblogapp.herokuapp.com/api/",withCredentials:!1,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS"}});var C=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(s.useContext)(x),l=r.user;return r.dispatch,Object(s.useEffect)((function(){var e=function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/categories");case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"px-3 w-80 border-2 border-gray-100 bg-white ",children:[Object(j.jsx)("h4",{className:"w-full text-center  py-1 bg-bluelight-600 text-gray-700 mt-6 ",children:"About me"}),Object(j.jsx)("div",{className:"w-full flex justify-center mt-6 mb-4",children:Object(j.jsx)("div",{className:"h-52 w-52 bg-paper-200 rounded-full overflow-hidden ",children:Object(j.jsx)("img",{src:l&&"http://localhost:5000/images/"+l.profilePic,alt:"",className:"w-52 h-52 object-cover"})})}),Object(j.jsxs)("div",{className:"flex  flex-col items-center space-y-3 w-full",children:[Object(j.jsx)("p",{className:"text-center",children:"typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic"}),Object(j.jsx)("h6",{className:"border-t-2 border-b-2 border-gray-400 px-10",children:"Category"}),Object(j.jsx)("div",{className:"w-full  flex justify-center",children:Object(j.jsx)("div",{className:"grid grid-cols-1 space-x-4  ",children:c.map((function(e){return Object(j.jsx)(n.b,{to:"/?cat=".concat(e.name),style:{textDecoration:"none"},className:"text-black w-full ",children:Object(j.jsx)("h4",{className:"text-center",children:e.name})})}))})}),Object(j.jsx)("h6",{className:"border-t-2 border-b-2 border-gray-400 px-10",children:"Follow Us"})]})]})})},S=c(128);var D=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(f.f)().search,l=Object(s.useState)(0),n=Object(i.a)(l,2),o=n[0],d=n[1];return Object(s.useEffect)((function(){var e=function(){var e=Object(O.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.get("/posts"+r);case 2:t=e.sent,a(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[r]),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("div",{className:" w-screen h-bigx flex justify-center items-center",children:Object(j.jsx)("div",{className:"grid grid-cols-6 ",children:Object(j.jsx)("div",{className:" col-start-2 col-span-4 ",children:Object(j.jsxs)(S.a,{activeIndex:o,onSelect:function(e,t){d(e)},className:"mt-14 border-b-2 hover:border-blue-600  ",variant:"dark",images:g,children:[Object(j.jsxs)(S.a.Item,{hover:"pause",className:"p-10 mt-14 ml-10",children:[Object(j.jsx)("img",{className:"d-block h-small-2 w-full",src:"https://images.unsplash.com/photo-1638914962352-3bdfa3cd1f78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2353&q=80",alt:"Second slide"}),Object(j.jsx)(S.a.Caption,{className:"",children:"lorem20Praesent commodo cursus magna, vel scelerisque"})]}),Object(j.jsxs)(S.a.Item,{hover:"pause",className:"p-10 mt-8 ",children:[Object(j.jsx)("img",{className:"d-block h-small-2 w-full",src:"https://images.unsplash.com/photo-1638914962385-66e892b6c304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2246&q=80",alt:"Second slide"}),Object(j.jsx)(S.a.Caption,{className:"",children:"lorem20Praesent commodo cursus magna, vel scelerisque"})]}),Object(j.jsxs)(S.a.Item,{hover:"pause",className:"p-10 mt-16",children:[Object(j.jsx)("img",{className:"d-block h-small-2 w-full",src:"https://images.unsplash.com/photo-1445633743309-b60418bedbf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",alt:"Third slide"}),Object(j.jsx)(S.a.Caption,{className:"",children:"lorem20Praesent commodo cursus magna, vel scelerisque"})]})]})})})}),Object(j.jsx)("div",{className:"w-screen ",children:Object(j.jsxs)("div",{className:"grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 ",children:[Object(j.jsx)("div",{className:"col-span-1 lg:col-span-3",children:Object(j.jsx)(N,{posts:c})}),Object(j.jsx)("div",{className:"col-span-1  lg:col-span-1 hidden lg:block ",children:Object(j.jsx)("div",{className:"",children:Object(j.jsx)(C,{})})})]})})]})};var M=function(){var e=Object(s.useRef)(),t=Object(s.useRef)(),c=Object(s.useContext)(x),a=c.dispatch,r=c.isFetching,l=function(){var c=Object(O.a)(p.a.mark((function c(s){var r;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),a({type:"LOGIN_START"}),c.prev=2,c.next=5,k.post("/auth/login",{username:e.current.value,password:t.current.value});case 5:r=c.sent,a({type:"LOGIN_SUCCESS",payload:r.data}),c.next=12;break;case 9:c.prev=9,c.t0=c.catch(2),a({type:"LOGIN_FAILURE"});case 12:case"end":return c.stop()}}),c,null,[[2,9]])})));return function(e){return c.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("div",{className:"relative h-screen w-screen   z-10 flex justify-center items-center ",children:[Object(j.jsx)("img",{src:"https://images.unsplash.com/photo-1574192324001-ee41e18ed679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",alt:"",className:"w-full h-full filter blur"}),Object(j.jsx)("div",{className:"absolute z-20  ",children:Object(j.jsxs)("div",{className:"w-small2 ",children:[Object(j.jsx)("div",{className:"w-full flex justify-center ",children:Object(j.jsx)(n.b,{to:"/login",style:{textDecoration:"none"},children:Object(j.jsx)("button",{className:"text-5xl text-black",children:"login"})})}),Object(j.jsxs)("form",{onSubmit:l,children:[Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("label",{for:"email",children:"Username"}),Object(j.jsx)("input",{type:"text",id:"email",placeholder:"Username",className:" ",ref:e})]}),Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("label",{for:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",placeholder:"password",ref:t})]}),Object(j.jsx)("div",{className:"flex justify-center py-2",children:Object(j.jsx)("button",{type:"submit",disabled:r,className:"px-9 py-2  rounded-lg ".concat(r?"cursor-not-allowed bg-greener-400":"bg-greener-600"),children:"login"})})]}),Object(j.jsx)("div",{className:"w-full flex justify-center ",children:Object(j.jsx)("button",{className:"bg-gray-100",children:Object(j.jsx)(n.b,{to:"/register",style:{textDecoration:"none"},className:"text-black",children:"register"})})})]})})]})})};var L=function(){var e=Object(s.useContext)(x),t=e.user,c=e.dispatch,a=Object(s.useState)(null),r=Object(i.a)(a,2),l=r[0],n=r[1],o=Object(s.useState)(""),d=Object(i.a)(o,2),b=d[0],u=d[1],h=Object(s.useState)(""),f=Object(i.a)(h,2),m=f[0],g=f[1],v=Object(s.useState)(""),w=Object(i.a)(v,2),N=w[0],y=w[1],S=Object(s.useState)(!1),D=Object(i.a)(S,2),M=D[0],L=D[1],A=function(){var e=Object(O.a)(p.a.mark((function e(s){var a,r,n,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s.preventDefault(),c({type:"UPDATE_START"}),a={userId:t._id,username:N,email:b,password:m},!l){e.next=16;break}return r=new FormData,n=Date.now()+File.name,r.append("name",n),r.append("file",l),a.profilePic=n,e.prev=9,e.next=12,k.post("/upload",r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.prev=16,e.next=19,k.put("/users/"+t._id,a);case 19:i=e.sent,L(!0),c({type:"UPDATE_SUCCESS",payload:i.data}),e.next=27;break;case 24:e.prev=24,e.t1=e.catch(16),c({type:"UPDATE_FAILURE"});case 27:case"end":return e.stop()}}),e,null,[[9,14],[16,24]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=setTimeout((function(){L(!1)}),4e3);return function(){return function(){return clearTimeout(e)}}}),[M]),Object(j.jsx)("div",{className:"flex justify-center items-center mt-16 px-7",children:Object(j.jsxs)("div",{className:"grid grid-cols-3",children:[Object(j.jsxs)("div",{className:"text-black col-span-2  flex flex-col",children:[Object(j.jsxs)("div",{className:"w-full flex justify-between mt-8",children:[Object(j.jsx)("p",{className:"text-red-400 text-3xl",children:"Update Your Account"}),Object(j.jsx)("button",{className:"text-red-400 self-end",children:"Delete Account"})]}),Object(j.jsx)("h4",{children:"Profile picture"}),Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("form",{className:"w-full",onSubmit:A,children:[Object(j.jsxs)("div",{className:"flex items-center space-x-3",children:[Object(j.jsx)("div",{className:"w-34 h-56\xa0  rounded-full bg-greener-600 overflow-hidden",children:Object(j.jsx)("img",{src:l?URL.createObjectURL(l):"http://localhost:5000/images/"+t.profilePic,alt:"",className:"h-56 w-56 object-cover  "})}),Object(j.jsxs)("div",{className:"",children:[Object(j.jsx)("label",{htmlFor:"file",className:"cursor-pointer",children:Object(j.jsx)("i",{className:"fas fa-cog text-3xl text-red-300"})}),Object(j.jsx)("input",{type:"file",id:"file",style:{display:"none"},onChange:function(e){n(e.target.files[0])}})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("label",{for:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",id:"username",placeholder:t.username,className:" ",onChange:function(e){y(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("label",{for:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",id:"email",placeholder:t.email,onChange:function(e){u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("label",{for:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",placeholder:"Password",onChange:function(e){g(e.target.value)}})]}),Object(j.jsx)("div",{className:"w-full flex justify-center mt-2",children:Object(j.jsx)("button",{className:"bg-greener-600 py-2 px-4",type:"submit",children:"Update"})}),M&&Object(j.jsx)("div",{className:"text-green-600",children:"updated sucessfully!..."})]})]})})]}),Object(j.jsx)("div",{className:"mt-9",children:Object(j.jsx)(C,{})})]})})};var A=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),l=Object(i.a)(r,2),o=l[0],d=l[1],b=Object(s.useState)(""),x=Object(i.a)(b,2),u=x[0],h=x[1],f=Object(s.useState)(!1),m=Object(i.a)(f,2),g=m[0],v=m[1],w=function(){var e=Object(O.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!1),e.prev=2,e.next=5,k.post("/auth/register",{username:c,email:o,password:u});case 5:e.sent.data&&window.location.replace("/login"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),v(!0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("div",{className:"relative h-screen w-screen   z-10 flex justify-center items-center ",children:[Object(j.jsx)("img",{src:"https://images.unsplash.com/photo-1574192324001-ee41e18ed679?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",alt:"",className:"w-full h-full filter blur"}),Object(j.jsxs)("div",{className:"absolute z-20 w-screen h-screen ",children:[Object(j.jsx)("div",{className:" mt-16 w-full flex justify-end px-5",children:Object(j.jsx)(n.b,{to:"/login",children:Object(j.jsx)("button",{className:"bg-red-400 px-5 py-2 rounded-lg text-black",style:{textDecoration:"none"},children:"login"})})}),Object(j.jsx)("div",{className:"flex flex-col justify-center items-center w-screen h-small1 ",children:Object(j.jsxs)("div",{className:"w-small2",children:[Object(j.jsx)("div",{className:"w-full flex justify-center ",children:Object(j.jsx)("h2",{className:"text-5xl",children:"Register"})}),Object(j.jsxs)("form",{onSubmit:w,children:[Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("label",{for:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",id:"username",placeholder:"Username",className:" ",onChange:function(e){a(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("label",{for:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",id:"email",placeholder:"Username",className:" ",onChange:function(e){d(e.target.value)}})]}),Object(j.jsxs)("div",{className:"flex flex-col",children:[Object(j.jsx)("label",{for:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",placeholder:"password",onChange:function(e){h(e.target.value)}})]}),Object(j.jsx)("div",{className:"flex justify-center py-2",children:Object(j.jsx)("button",{className:"px-9 py-2 bg-greener-600 rounded-lg",type:"submit",children:"Register"})}),g&&Object(j.jsx)("div",{className:"w-full text-center text-red-600",children:"something went wrong!"})]})]})})]})]})})},U=c(24),T=c(25),E=c.n(T);var P=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(null),l=Object(i.a)(r,2),n=l[0],o=l[1],d=Object(s.useState)(""),b=Object(i.a)(d,2),u=b[0],h=b[1],f=Object(s.useContext)(x).user,m=function(){var e=Object(O.a)(p.a.mark((function e(t){var s,a,r,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s={username:f.username,title:c,desc:u},!n){e.next=15;break}return a=new FormData,r=Date.now()+File.name+".png",a.append("name",r),a.append("file",n),s.photo=r,e.prev=8,e.next=11,k.post("/upload",a);case 11:e.next=15;break;case 13:e.prev=13,e.t0=e.catch(8);case 15:return e.prev=15,e.next=18,k.post("/posts",s);case 18:l=e.sent,window.location.replace("/post/"+l.data._id),e.next=24;break;case 22:e.prev=22,e.t1=e.catch(15);case 24:k.post("/posts");case 25:case"end":return e.stop()}}),e,null,[[8,13],[15,22]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("div",{className:"flex justify-center items-center mt-16 ".concat(!n&&"h-big items-center"),children:Object(j.jsx)("div",{className:"grid grid-cols-5  ",children:Object(j.jsxs)("div",{className:"text-black col-span-3 col-start-2  flex flex-col",children:[Object(j.jsx)("div",{className:"w-full  rounded-2xl bg-greener-600",children:n&&Object(j.jsx)("img",{src:URL.createObjectURL(n),alt:"",className:"object-contain"})}),Object(j.jsx)("div",{className:"",children:Object(j.jsxs)("form",{className:"w-full ",onSubmit:m,children:[Object(j.jsxs)("div",{className:"w-full flex justify-between",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{for:"filetype",children:Object(j.jsx)("i",{className:"fas fa-plus rounded-full p-1 border border-black"})}),Object(j.jsx)("input",{type:"file",id:"filetype",className:"hidden h-9 w-14 border border-black",onChange:function(e){o(e.target.files[0])}}),Object(j.jsx)("input",{type:"text",placeholder:"Title",className:"",onChange:function(e){a(e.target.value)}})]}),Object(j.jsx)("button",{className:"bg-greener-300 px-7 py-2",type:"submit",children:"publish"})]}),Object(j.jsx)("div",{className:"w-full",children:Object(j.jsx)(U.CKEditor,{editor:E.a,data:u,onChange:function(e,t){var c=t.getData();h(c)}})})]})})]})})})};c(121);var F=function(){var e=Object(f.f)().pathname.split("/")[2],t=Object(s.useState)({}),c=Object(i.a)(t,2),a=c[0],r=c[1],l=Object(s.useState)(""),o=Object(i.a)(l,2),d=o[0],b=o[1],u=Object(s.useState)(""),h=Object(i.a)(u,2),m=h[0],g=h[1],w=Object(s.useState)(!1),N=Object(i.a)(w,2),y=N[0],C=N[1],S=Object(s.useState)(!1),D=Object(i.a)(S,2),M=D[0],L=D[1],A=Object(s.useContext)(x),T=A.user;A.dispatch,Object(s.useEffect)((function(){var t=function(){var t=Object(O.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.get("/posts/"+e);case 2:c=t.sent,r(c.data),b(c.data.title),g(c.data.desc);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e]);var P=function(){var e=Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.delete("/posts/".concat(a._id),{data:{username:T.username}});case 3:window.location.replace("/"),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(O.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.put("/posts/".concat(a._id),{username:T.username,title:d,desc:m});case 3:L(!0),C(!1),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=setTimeout((function(){L(!1)}),4e3);return function(){return function(){return clearTimeout(e)}}}),[M]),Object(j.jsx)("div",{className:"col-span-3 mt-16",children:Object(j.jsx)("div",{className:" flex justify-center",children:Object(j.jsxs)("div",{className:"   w-big  ",children:[Object(j.jsx)("div",{className:"h-small2 w-big rounded-lg overflow-hidden",children:a.photo&&Object(j.jsx)("img",{src:"http://localhost:5000/images/"+a.photo,alt:"",className:"h-full w-full"})}),Object(j.jsxs)("div",{className:"py-4 space-y-4 px-3 flex flex-col justify-center",children:[Object(j.jsxs)("div",{className:"space-y-4",children:[Object(j.jsxs)("h4",{className:"text-center w-full text-gray-600",children:["music life ",Object(j.jsx)("i",{class:"fab fa-facebook text-md"})]}),y?Object(j.jsxs)("div",{className:"w-full flex flex-col  items-center",children:[Object(j.jsx)("h2",{children:"Title"}),Object(j.jsx)("input",{type:"text",value:d,className:"w-1/2",onChange:function(e){return b(e.target.value)}})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(n.b,{style:{textDecoration:"none"},className:"text-black",children:Object(j.jsx)("h1",{className:"text-center w-full font-extrabold text-2xl",children:a.title})}),a.username===(null===T||void 0===T?void 0:T.username)&&Object(j.jsxs)("div",{className:"w-full flex justify-center space-x-6",children:[Object(j.jsxs)("div",{className:"px-3 py-1  space-x-3 border-2 bg-orange-700 rounded-md cursor-pointer",onClick:P,children:[Object(j.jsx)("span",{className:"text-white",children:"delete"}),Object(j.jsx)("i",{class:"fas fa-trash-alt  text-white"})]}),Object(j.jsxs)("div",{className:"px-3 py-1 bg-greener-600 space-x-3 border-2  rounded-md cursor-pointer",onClick:function(){C(!0)},children:[Object(j.jsx)("span",{className:"text-white",children:"edit"}),Object(j.jsx)("i",{class:"fas fa-edit text-white"})]})]})]}),Object(j.jsxs)("div",{className:"w-full flex justify-around",children:[Object(j.jsxs)("div",{children:["Author:",Object(j.jsxs)(n.b,{to:"/?user=".concat(a.username),style:{textDecoration:"none"},className:"text-black",children:[" ",Object(j.jsx)("b",{children:a.username})]})]}),Object(j.jsx)("div",{className:"",children:new Date(a.createdAt).toDateString()})]}),M&&Object(j.jsx)("div",{className:"text-green-600",children:"updated sucessfully!..."})]}),y?Object(j.jsxs)("div",{className:"w-full flex flex-col  items-center",children:[Object(j.jsx)("h2",{children:"Description"}),Object(j.jsx)(U.CKEditor,{value:Object(v.a)(m),editor:E.a,data:m,onChange:function(e,t){var c=t.getData();g(c)}}),Object(j.jsx)("button",{className:"self-end mt-4  bg-blue-600 px-6 py-2 text-white rounded-lg",onClick:F,children:"Update"})]}):Object(j.jsx)("p",{className:"w-full text-gray-500",children:Object(v.a)(m)})]})]})})})};var R=function(){return Object(j.jsx)("div",{className:"mt-16",children:Object(j.jsxs)("div",{className:" grid grid-cols-4",children:[Object(j.jsx)(F,{}),Object(j.jsx)(C,{})]})})};var G=function(){var e=Object(s.useContext)(x).user;return Object(j.jsx)("div",{children:Object(j.jsxs)(n.a,{children:[Object(j.jsx)(h,{}),Object(j.jsxs)(f.c,{children:[Object(j.jsx)(f.a,{exact:!0,path:"/",component:D}),Object(j.jsx)(f.a,{exact:!0,path:"/register",children:e?Object(j.jsx)(D,{}):Object(j.jsx)(A,{})}),Object(j.jsx)(f.a,{exact:!0,path:"/login",children:e?Object(j.jsx)(D,{}):Object(j.jsx)(M,{})}),Object(j.jsx)(f.a,{exact:!0,path:"/write",children:e?Object(j.jsx)(P,{}):Object(j.jsx)(A,{})}),Object(j.jsx)(f.a,{exact:!0,path:"/setting",children:e?Object(j.jsx)(L,{}):Object(j.jsx)(A,{})}),Object(j.jsx)(f.a,{exact:!0,path:"/post/:postId",component:R})]})]})})},I=(c(124),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,129)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,l=t.getTTFB;c(e),s(e),a(e),r(e),l(e)}))});l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(u,{children:Object(j.jsx)(G,{})})}),document.getElementById("root")),I()},34:function(e,t,c){}},[[125,1,2]]]);
//# sourceMappingURL=main.c6c37f92.chunk.js.map