"use strict";var se=Object.defineProperty,At=Object.defineProperties,Bt=Object.getOwnPropertyDescriptor,Vt=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertyNames,oe=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var $e=(t,n,e)=>n in t?se(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,d=(t,n)=>{for(var e in n||(n={}))We.call(n,e)&&$e(t,e,n[e]);if(oe)for(var e of oe(n))_e.call(n,e)&&$e(t,e,n[e]);return t},p=(t,n)=>At(t,Vt(n));var V=(t,n)=>{var e={};for(var a in t)We.call(t,a)&&n.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&oe)for(var a of oe(t))n.indexOf(a)<0&&_e.call(t,a)&&(e[a]=t[a]);return e};var Gt=(t,n)=>{for(var e in n)se(t,e,{get:n[e],enumerable:!0})},vt=(t,n,e,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of Ht(n))!We.call(t,r)&&r!==e&&se(t,r,{get:()=>n[r],enumerable:!(a=Bt(n,r))||a.enumerable});return t};var Jt=t=>vt(se({},"__esModule",{value:!0}),t);var tn={};Gt(tn,{Calendar:()=>en,activeDateRangesEmitter:()=>H,buildCalendar:()=>Ne,fromDateId:()=>x,getHeightForMonth:()=>ee,toDateId:()=>g,useCalendar:()=>pe,useCalendarList:()=>Me,useDateRange:()=>Ft,useOptimizedDayMetadata:()=>me});module.exports=Jt(tn);var X=require("react");var v=require("react"),P=require("react-native");function Xe(t){return{all:t=t||new Map,on:function(n,e){var a=t.get(n);a?a.push(e):t.set(n,[e])},off:function(n,e){var a=t.get(n);a&&(e?a.splice(a.indexOf(e)>>>0,1):t.set(n,[]))},emit:function(n,e){var a=t.get(n);a&&a.slice().map(function(r){r(e)}),(a=t.get("*"))&&a.slice().map(function(r){r(n,e)})}}}var Y=require("react");var nt=require("react");function g(t){let n=t.getFullYear(),e=t.getMonth()+1,a=t.getDate(),r=e<10?`0${e}`:e,o=a<10?`0${a}`:a;return`${n}-${r}-${o}`}function x(t){let[n,e,a]=t.split("-").map(Number);return new Date(n,e-1,a)}function T(t){return new Date(t.getFullYear(),t.getMonth(),1)}function Ze(t){let n=new Date(t.getFullYear(),t.getMonth()+1,1),e=new Date(n.getTime()-1);return new Date(e)}function et(t,n){let e=new Date(t.getTime()),a=e.getDay();if(a===0&&n==="monday")return e.setDate(e.getDate()-6),e;let o=a-(n==="monday"?1:0);return e.setDate(e.getDate()-o),e}function ie(t,n){let e=new Date(t);return e.setMonth(e.getMonth()+n),e}function Oe(t,n){let e=new Date(t);return e.setMonth(e.getMonth()-n),e}function Q(t,n){let e=new Date(t);return e.setDate(e.getDate()+n),e}function tt(t,n){let e=new Date(t);return e.setDate(e.getDate()-n),e}function de(t){let n=t.getDay();return n===0||n===6}function le(t,n){let e=t.getFullYear()-n.getFullYear(),a=t.getMonth()-n.getMonth();return e*12+a}function Te(t,n){let a=new Date(t.getFullYear(),t.getMonth(),1).getDay();n==="monday"&&(a=a===0?6:a-1);let r=new Date(t.getFullYear(),t.getMonth()+1,0).getDate();return Math.ceil((a+r)/7)}var ce=(t,n,e=1)=>Array.from({length:(n-t)/e+1},(a,r)=>t+r*e);var Kt=(t,n)=>{let e=t.getDay();return n==="sunday"?e:e===0?6:e-1},q=({todayId:t,id:n,calendarActiveDateRanges:e,calendarMinDateId:a,calendarMaxDateId:r,calendarDisabledDateIds:o})=>{let s=e==null?void 0:e.find(({startId:u,endId:D})=>u&&D?n>=u&&n<=D:u?n===u:D?n===D:!1),l=(s==null?void 0:s.startId)!==void 0&&s.endId!==void 0,i=((o==null?void 0:o.includes(n))||a&&n<a||r&&n>r)===!0,m=t===n,C=s?"active":i?"disabled":m?"today":"idle";return{isStartOfRange:n===(s==null?void 0:s.startId),isEndOfRange:n===(s==null?void 0:s.endId),isRangeValid:l,state:C,isDisabled:i,isToday:m}},jt=(t,n)=>new Intl.DateTimeFormat(n,{month:"long",year:"numeric"}).format(t),Ut=(t,n)=>new Intl.DateTimeFormat(n,{weekday:"narrow"}).format(t),Qt=(t,n)=>new Intl.DateTimeFormat(n,{day:"numeric"}).format(t),Ne=t=>{let{calendarMonthId:n,calendarFirstDayOfWeek:e="sunday",calendarFormatLocale:a="en-US",getCalendarMonthFormat:r=jt,getCalendarWeekDayFormat:o=Ut,getCalendarDayFormat:s=Qt}=t,l=x(n),i=T(l),m=g(i),C=Ze(l),u=g(C),D=Kt(i,e),h=e==="sunday"?0:1,f=e==="sunday"?6:0,y=g(new Date),c=tt(i,D),I=[[...ce(1,D).map(()=>{let M=g(c),S=d({date:c,displayLabel:s(c,a),id:M,isDifferentMonth:!0,isEndOfMonth:!1,isEndOfWeek:c.getDay()===f,isStartOfMonth:!1,isStartOfWeek:c.getDay()===h,isWeekend:de(c)},q(p(d({},t),{todayId:y,id:M})));return c=Q(c,1),S})]];for(;c.getMonth()===i.getMonth();){I[I.length-1].length===7&&I.push([]);let S=g(c);I[I.length-1].push(d({date:c,displayLabel:s(c,a),id:S,isDifferentMonth:!1,isEndOfMonth:S===u,isEndOfWeek:c.getDay()===f,isStartOfMonth:S===m,isStartOfWeek:c.getDay()===h,isWeekend:de(c)},q(p(d({},t),{todayId:y,id:S})))),c=Q(c,1)}let F=I[I.length-1],te=7-F.length;F.push(...ce(1,te).map(()=>{let M=g(c),S=d({date:c,displayLabel:s(c,a),id:M,isDifferentMonth:!0,isEndOfMonth:!1,isEndOfWeek:c.getDay()===f,isStartOfMonth:!1,isStartOfWeek:c.getDay()===h,isWeekend:de(c)},q(p(d({},t),{todayId:y,id:M})));return c=Q(c,1),S}));let ne=et(l,e),ae=ce(1,7).map(M=>o(Q(ne,M-1),a));return{weeksList:I,calendarRowMonth:r(l,a),weekDaysList:ae}},pe=t=>(0,nt.useMemo)(()=>Ne(t),[t]);var H=Xe(),me=t=>{let[n,e]=(0,Y.useState)(t);return(0,Y.useEffect)(()=>{e(t)},[t]),(0,Y.useEffect)(()=>{let a=r=>{let{isStartOfRange:o,isEndOfRange:s,isRangeValid:l,state:i}=q({id:n.id,calendarActiveDateRanges:r});e(i==="active"?m=>p(d({},m),{isStartOfRange:o,isEndOfRange:s,isRangeValid:l,state:i}):t)};return H.on("onSetActiveDateRanges",a),()=>{H.off("onSetActiveDateRanges",a)}},[t,n]),n};var lt=require("react-native");var at={spacing:{0:0,2:2,4:4,6:6,8:8,12:12,16:16,20:20,24:24}},fe=p(d({},at),{colors:{content:{disabled:"#B0B0B0",primary:"#000000",secondary:"#212121",inverse:{primary:"#FFFFFF"}},background:{primary:"#FFFFFF",tertiary:"#EDEFEE",tertiaryPressed:"#D1D2D3",inverse:{primary:"#000000"}},borders:{default:"#E0E0E0"},transparent:"transparent"}}),rt=p(d({},at),{colors:{content:{disabled:"#bdbdbd",primary:"#FFFFFF",secondary:"#e8e8e8",inverse:{primary:"#000000"}},background:{primary:"#000000",tertiary:"#111111",tertiaryPressed:"#212121",inverse:{primary:"#FFFFFF"}},borders:{default:"#5c5c5c"},transparent:"transparent"}});var G=require("react"),dt=require("react/jsx-runtime"),ot=(0,G.createContext)({colorScheme:void 0}),st=({children:t,colorScheme:n})=>{let e=(0,G.useMemo)(()=>({colorScheme:n}),[n]);return(0,dt.jsx)(ot.Provider,{value:e,children:t})},it=()=>(0,G.useContext)(ot);var A=()=>{let t=(0,lt.useColorScheme)(),{colorScheme:n}=it();return(n!=null?n:t)==="dark"?rt:fe};var L=require("react/jsx-runtime"),N=P.StyleSheet.create({baseContainer:{padding:6,alignItems:"center",justifyContent:"center",borderRadius:16,flex:1},baseContent:{textAlign:"center"}}),qt=t=>{let n=p(d({},N.baseContent),{color:t.colors.content.primary});return{active:({isPressed:e,isStartOfRange:a,isEndOfRange:r})=>{let o=e?{container:p(d({},N.baseContainer),{backgroundColor:t.colors.background.tertiary}),content:p(d({},n),{color:t.colors.content.primary})}:{container:p(d({},N.baseContainer),{backgroundColor:t.colors.background.inverse.primary}),content:p(d({},n),{color:t.colors.content.inverse.primary})};return o.container.borderRadius=0,a&&(o.container.borderTopLeftRadius=16,o.container.borderBottomLeftRadius=16),r&&(o.container.borderTopRightRadius=16,o.container.borderBottomRightRadius=16),!a&&!r&&(o.container.borderRadius=0),o},disabled:()=>({container:N.baseContainer,content:p(d({},n),{color:t.colors.content.disabled})}),idle:({isPressed:e})=>e?{container:p(d({},N.baseContainer),{backgroundColor:t.colors.background.tertiary}),content:p(d({},n),{color:t.colors.content.primary})}:{container:N.baseContainer,content:n},today:({isPressed:e})=>e?{container:p(d({},N.baseContainer),{backgroundColor:t.colors.background.tertiaryPressed}),content:n}:{container:p(d({},N.baseContainer),{borderColor:t.colors.borders.default,borderStyle:"solid",borderWidth:1}),content:n}}},Le=({onPress:t,children:n,theme:e,height:a,metadata:r})=>{let o=A(),s=(0,v.useMemo)(()=>qt(o),[o]),l=(0,v.useCallback)(()=>{t(r.id)},[r.id,t]);return(0,L.jsx)(P.Pressable,{disabled:r.state==="disabled",onPress:l,style:({pressed:i})=>{var u,D,h,f;let m={isPressed:i,isEndOfRange:(u=r.isEndOfRange)!=null?u:!1,isStartOfRange:(D=r.isStartOfRange)!=null?D:!1},{container:C}=s[r.state](m);return d(d(p(d({},C),{height:a}),(h=e==null?void 0:e.base)==null?void 0:h.call(e,p(d({},r),{isPressed:i})).container),(f=e==null?void 0:e[r.state])==null?void 0:f.call(e,p(d({},r),{isPressed:i})).container)},children:({pressed:i})=>{var u,D,h,f;let m={isPressed:i,isEndOfRange:(u=r.isEndOfRange)!=null?u:!1,isStartOfRange:(D=r.isStartOfRange)!=null?D:!1},{content:C}=s[r.state](m);return(0,L.jsx)(P.Text,{style:d(d(d({},C),(h=e==null?void 0:e.base)==null?void 0:h.call(e,p(d({},r),{isPressed:i})).content),(f=e==null?void 0:e[r.state])==null?void 0:f.call(e,p(d({},r),{isPressed:i})).content),children:n})}})},z=({children:t,isStartOfWeek:n,shouldShowActiveDayFiller:e,theme:a,daySpacing:r,dayHeight:o})=>{let s=A(),l=(0,v.useMemo)(()=>d({position:"relative",marginLeft:n?0:r,flex:1,height:o},a==null?void 0:a.spacer),[o,r,n,a==null?void 0:a.spacer]),i=(0,v.useMemo)(()=>e?d({position:"absolute",top:0,bottom:0,right:-(r+1),width:r+2,backgroundColor:s.colors.background.inverse.primary},a==null?void 0:a.activeDayFiller):null,[s.colors.background.inverse.primary,r,e,a==null?void 0:a.activeDayFiller]);return(0,L.jsxs)(P.View,{style:l,children:[t,i?(0,L.jsx)(P.View,{style:i}):null]})},ye=({children:t,metadata:n,onPress:e,theme:a,dayHeight:r,daySpacing:o,containerTheme:s})=>{let l=me(n);return(0,L.jsx)(z,{dayHeight:r,daySpacing:o,isStartOfWeek:l.isStartOfWeek,shouldShowActiveDayFiller:l.isRangeValid&&!l.isEndOfWeek?!l.isEndOfRange:!1,theme:s,children:(0,L.jsx)(Le,{height:r,metadata:l,onPress:e,theme:a,children:t})})};var Ce=require("react"),ue=require("react-native");var ct=require("react/jsx-runtime"),Yt=ue.StyleSheet.create({container:{padding:6,flex:1}}),$=(0,Ce.memo)(({height:t,theme:n})=>{let e=(0,Ce.useMemo)(()=>[p(d({},Yt.container),{height:t}),n==null?void 0:n.container],[t,n==null?void 0:n.container]);return(0,ct.jsx)(ue.View,{style:e})});$.displayName="CalendarItemEmpty";var mt=require("react"),J=require("react-native");var Ae=require("react/jsx-runtime"),pt=J.StyleSheet.create({container:{alignItems:"center",flex:1,justifyContent:"center",padding:fe.spacing[6]},content:{}}),De=({children:t,height:n,theme:e})=>{let{colors:a}=A(),{containerStyles:r,contentStyles:o}=(0,mt.useMemo)(()=>{let s=[pt.container,{height:n},e==null?void 0:e.container],l=[pt.content,{color:a.content.primary},e==null?void 0:e.content];return{containerStyles:s,contentStyles:l}},[a.content.primary,n,e==null?void 0:e.container,e==null?void 0:e.content]);return(0,Ae.jsx)(J.View,{style:r,children:(0,Ae.jsx)(J.Text,{style:o,children:t})})};var yt=require("react"),K=require("react-native");var Be=require("react/jsx-runtime"),ft=K.StyleSheet.create({container:{width:"100%",alignItems:"center",justifyContent:"center"},content:{textAlign:"center",width:"100%"}}),ge=({children:t,height:n,theme:e})=>{let a=A(),{containerStyles:r,contentStyles:o}=(0,yt.useMemo)(()=>{let s=[ft.container,{height:n},e==null?void 0:e.container],l=[ft.content,{color:a.colors.content.primary},e==null?void 0:e.content];return{containerStyles:s,contentStyles:l}},[a.colors.content.primary,n,e==null?void 0:e.container,e==null?void 0:e.content]);return(0,Be.jsx)(K.View,{style:r,children:(0,Be.jsx)(K.Text,{style:o,children:t})})};var Dt=require("react"),gt=require("react-native");var Ct=require("react"),he=require("react-native"),ut=require("react/jsx-runtime"),zt=he.StyleSheet.create({container:{alignItems:"center",flexDirection:"row",flexGrow:0,flexShrink:0,flexWrap:"nowrap",justifyContent:"flex-start"}}),be=({alignItems:t,children:n,justifyContent:e="flex-start",grow:a=!1,shrink:r=!1,spacing:o=0,wrap:s="nowrap",backgroundColor:l,width:i,style:m={}})=>{let C=(0,Ct.useMemo)(()=>[zt.container,{gap:o},a?{flexGrow:1}:{},r?{flexShrink:1}:{},s?{flexWrap:s}:{},t?{alignItems:t}:{},e?{justifyContent:e}:{},l?{backgroundColor:l}:{},i?{width:i}:{},m],[t,l,a,e,r,o,m,i,s]);return(0,ut.jsx)(he.View,{style:C,children:n})};var ht=require("react/jsx-runtime"),$t=gt.StyleSheet.create({container:{width:"100%"}}),_=({children:t,spacing:n=0,theme:e})=>{let{containerStyles:a}=(0,Dt.useMemo)(()=>{var r;return{containerStyles:d(d({},$t.container),(r=e==null?void 0:e.container)!=null?r:{})}},[e==null?void 0:e.container]);return(0,ht.jsx)(be,{alignItems:"center",grow:!0,justifyContent:"space-between",spacing:n,style:a,children:t})};var E=require("react"),Ie=require("react-native");var Ve=require("react/jsx-runtime"),_t=Ie.StyleSheet.create({container:{flexDirection:"column"}});function Xt(t){return(0,E.isValidElement)(t)&&t.type===E.Fragment}function ke({children:t,spacing:n=0,alignItems:e,justifyContent:a,grow:r}){let o=(0,E.useMemo)(()=>p(d({},_t.container),{gap:n,alignItems:e,justifyContent:a,flex:r?1:void 0}),[e,r,a,n]);return(0,Ve.jsx)(Ie.View,{style:o,children:E.Children.toArray(t).map(s=>Xt(s)?s.props.children:s).flat().filter(s=>s!==null&&typeof s!="undefined").map((s,l)=>(0,Ve.jsx)(E.Fragment,{children:s},l))})}var bt=t=>t.charAt(0).toUpperCase()+t.slice(1);var k=require("react/jsx-runtime"),It=(0,X.memo)(i=>{var m=i,{onCalendarDayPress:t,calendarRowVerticalSpacing:n=8,calendarRowHorizontalSpacing:e=8,theme:a,calendarDayHeight:r=32,calendarMonthHeaderHeight:o=20,calendarWeekHeaderHeight:s=r}=m,l=V(m,["onCalendarDayPress","calendarRowVerticalSpacing","calendarRowHorizontalSpacing","theme","calendarDayHeight","calendarMonthHeaderHeight","calendarWeekHeaderHeight"]);let{calendarRowMonth:C,weeksList:u,weekDaysList:D}=pe(l);return(0,k.jsxs)(ke,{alignItems:"center",spacing:n,children:[(0,k.jsx)(ge,{height:o,theme:a==null?void 0:a.rowMonth,children:bt(C)}),(0,k.jsx)(_,{spacing:8,theme:a==null?void 0:a.rowWeek,children:D.map((h,f)=>(0,k.jsx)(De,{height:s,theme:a==null?void 0:a.itemWeekName,children:h},f))}),u.map((h,f)=>(0,k.jsx)(_,{children:h.map(y=>y.isDifferentMonth?(0,k.jsx)(z,{dayHeight:r,daySpacing:e,isStartOfWeek:y.isStartOfWeek,theme:a==null?void 0:a.itemDayContainer,children:(0,k.jsx)($,{height:r,theme:a==null?void 0:a.itemEmpty})},y.id):(0,k.jsx)(ye,{containerTheme:a==null?void 0:a.itemDayContainer,dayHeight:r,daySpacing:e,metadata:y,onPress:t,theme:a==null?void 0:a.itemDay,children:y.displayLabel},y.id))},f))]})});It.displayName="BaseCalendar";var Z=(0,X.memo)(r=>{var o=r,{calendarActiveDateRanges:t,calendarMonthId:n,calendarColorScheme:e}=o,a=V(o,["calendarActiveDateRanges","calendarMonthId","calendarColorScheme"]);return(0,X.useEffect)(()=>{H.emit("onSetActiveDateRanges",t!=null?t:[])},[t,n]),(0,k.jsx)(st,{colorScheme:e,children:(0,k.jsx)(It,p(d({},a),{calendarMonthId:n}))})});Z.displayName="Calendar";var xt=require("@shopify/flash-list"),b=require("react"),wt=require("react-native");var W=require("react");function kt(t,n,e,a,r,o,s,l,i){switch(arguments.length){case 1:return t;case 2:return n(t);case 3:return e(n(t));case 4:return a(e(n(t)));case 5:return r(a(e(n(t))));case 6:return o(r(a(e(n(t)))));case 7:return s(o(r(a(e(n(t))))));case 8:return l(s(o(r(a(e(n(t)))))));case 9:return i(l(s(o(r(a(e(n(t))))))));default:{let m=arguments[0];for(let C=1;C<arguments.length;C++)m=arguments[C](m);return m}}}var He=(t,n,e="sunday")=>{let a=g(t),r=g(n);if(r<a)return[];let o=[{id:g(t),date:t,numberOfWeeks:Te(t,e)}];if(a===r)return o;let s=le(n,t);for(let l=1;l<=s;l++){let i=ie(t,l),m=Te(i,e);o.push({id:g(i),date:i,numberOfWeeks:m})}return o},Mt=(t,n,e)=>{let a=ie(e,t),r=g(a),o=n!=null?n:r;return r>o?x(o):a},St=(t,n,e)=>{let a=Oe(e,t),r=g(a),o=n!=null?n:r;return o>r?kt(x(o),T):a},Me=({calendarInitialMonthId:t,calendarPastScrollRangeInMonths:n,calendarFutureScrollRangeInMonths:e,calendarFirstDayOfWeek:a,calendarMaxDateId:r,calendarMinDateId:o})=>{let{initialMonth:s,initialMonthId:l}=(0,W.useMemo)(()=>{let f=t?x(t):x(g(new Date)),y=T(f);return{initialMonth:y,initialMonthId:g(y)}},[t]),[i,m]=(0,W.useState)(()=>{let f=T(s),y=St(n,o,f),c=Mt(e,r,f);return He(y,c,a)}),C=(0,W.useCallback)(f=>{let y=ie(i[i.length-1].date,1),c=Mt(Math.max(f-1,0),r,y),I=He(y,c,a),F=[...i,...I];return m(F),F},[a,r,i]),u=(0,W.useCallback)(f=>{let y=Oe(i[0].date,1),c=St(Math.max(f-1,0),o,y),F=[...He(c,y,a),...i];return m(F),F},[a,o,i]),D=(0,W.useCallback)(f=>{let y=i[0],c=i[i.length-1];return f>c.id?C(le(x(f),c.date)):u(le(y.date,x(f)))},[C,i,u]),h=(0,W.useMemo)(()=>i.findIndex(y=>y.id===l),[l,i]);return{monthList:i,initialMonthIndex:h,appendMonths:C,prependMonths:u,addMissingMonths:D}},ee=({calendarRowVerticalSpacing:t,calendarDayHeight:n,calendarWeekHeaderHeight:e,calendarMonthHeaderHeight:a,calendarAdditionalHeight:r,calendarMonth:o,calendarSpacing:s})=>{let l=a+t+e+t,i=n*o.numberOfWeeks+(o.numberOfWeeks-1)*t;return l+i+r+s};var Se=require("react/jsx-runtime"),Zt=t=>t.id,Ge=(0,b.memo)((0,b.forwardRef)((F,I)=>{var te=F,{calendarInitialMonthId:t,calendarPastScrollRangeInMonths:n=12,calendarFutureScrollRangeInMonths:e=12,calendarFirstDayOfWeek:a="sunday",CalendarScrollComponent:r=xt.FlashList,calendarFormatLocale:o,calendarSpacing:s=20,calendarRowHorizontalSpacing:l,calendarRowVerticalSpacing:i=8,calendarMonthHeaderHeight:m=20,calendarDayHeight:C=32,calendarWeekHeaderHeight:u=C,calendarAdditionalHeight:D=0,calendarColorScheme:h,theme:f,onEndReached:y}=te,c=V(te,["calendarInitialMonthId","calendarPastScrollRangeInMonths","calendarFutureScrollRangeInMonths","calendarFirstDayOfWeek","CalendarScrollComponent","calendarFormatLocale","calendarSpacing","calendarRowHorizontalSpacing","calendarRowVerticalSpacing","calendarMonthHeaderHeight","calendarDayHeight","calendarWeekHeaderHeight","calendarAdditionalHeight","calendarColorScheme","theme","onEndReached"]);let Ye=c,{onCalendarDayPress:ne,calendarActiveDateRanges:ae,calendarDisabledDateIds:M,getCalendarDayFormat:S,getCalendarWeekDayFormat:Ke,getCalendarMonthFormat:je,calendarMaxDateId:we,calendarMinDateId:Fe,calendarWidth:nn}=Ye,Ue=V(Ye,["onCalendarDayPress","calendarActiveDateRanges","calendarDisabledDateIds","getCalendarDayFormat","getCalendarWeekDayFormat","getCalendarMonthFormat","calendarMaxDateId","calendarMinDateId","calendarWidth"]),Qe=(0,b.useMemo)(()=>({calendarColorScheme:h,calendarActiveDateRanges:ae,calendarDayHeight:C,calendarDisabledDateIds:M,calendarFirstDayOfWeek:a,calendarFormatLocale:o,calendarMaxDateId:we,calendarMinDateId:Fe,calendarMonthHeaderHeight:m,calendarRowHorizontalSpacing:l,calendarRowVerticalSpacing:i,calendarWeekHeaderHeight:u,getCalendarDayFormat:S,getCalendarMonthFormat:je,getCalendarWeekDayFormat:Ke,onCalendarDayPress:ne,theme:f}),[ae,C,a,S,Ke,we,Fe,o,m,l,je,i,u,M,h,ne,f]),{initialMonthIndex:Rt,monthList:Re,appendMonths:qe,addMissingMonths:Pt}=Me({calendarFirstDayOfWeek:a,calendarFutureScrollRangeInMonths:e,calendarPastScrollRangeInMonths:n,calendarInitialMonthId:t,calendarMaxDateId:we,calendarMinDateId:Fe}),Et=(0,b.useMemo)(()=>Re.map(w=>p(d({},w),{calendarProps:Qe})),[Qe,Re]),Wt=(0,b.useCallback)(()=>{qe(e),y==null||y()},[qe,e,y]),Ot=(0,b.useCallback)((w,U)=>{let O=ee({calendarMonth:U,calendarSpacing:s,calendarDayHeight:C,calendarMonthHeaderHeight:m,calendarRowVerticalSpacing:i,calendarAdditionalHeight:D,calendarWeekHeaderHeight:u});w.size=O},[D,C,m,i,s,u]),Pe=(0,b.useRef)(null);(0,b.useImperativeHandle)(I,()=>({scrollToDate(w,U){let O=g(T(w)),re=Re,Ee=re.findIndex(R=>R.id===O);Ee===-1&&(re=Pt(O),Ee=re.findIndex(R=>R.id===O));let Nt=re.slice(0,Ee).reduce((R,Lt)=>{var ze;return Ue.horizontal?R+((ze=c.calendarWidth)!=null?ze:0):R+ee({calendarMonth:Lt,calendarSpacing:s,calendarDayHeight:C,calendarMonthHeaderHeight:m,calendarRowVerticalSpacing:i,calendarWeekHeaderHeight:u,calendarAdditionalHeight:D})},0);setTimeout(()=>{var R;(R=Pe.current)==null||R.scrollToOffset({offset:Nt,animated:U})},0)},scrollToIndex(w,U){var O;(O=Pe.current)==null||O.scrollToIndex({index:w,animated:U})}}));let Tt=(0,b.useMemo)(()=>({paddingBottom:s}),[s]);return(0,Se.jsx)(r,d({data:Et,estimatedItemSize:273,initialScrollIndex:Rt,keyExtractor:Zt,onEndReached:Wt,overrideItemLayout:Ot,ref:Pe,renderItem:({item:w})=>(0,Se.jsx)(wt.View,{style:Tt,children:(0,Se.jsx)(Z,d({calendarMonthId:w.id},w.calendarProps))}),showsVerticalScrollIndicator:!1},Ue))}));Ge.displayName="CalendarList";var ve=Le;ve.Container=z;ve.WithContainer=ye;var xe={};xe.Day=ve;xe.WeekName=De;xe.Empty=$;var Je={};Je.Month=ge;Je.Week=_;var j=Z;j.Item=xe;j.Row=Je;j.List=Ge;j.HStack=be;j.VStack=ke;var en=j;var B=require("react");var Ft=(t={startId:void 0,endId:void 0})=>{let[n,e]=(0,B.useState)(t),a=(0,B.useCallback)(o=>{e(s=>!s.startId&&!s.endId?{startId:o,endId:void 0}:s.startId&&s.endId?{startId:o,endId:void 0}:s.startId&&!s.endId?o<s.startId?{startId:o,endId:s.startId}:p(d({},s),{endId:o}):{startId:o,endId:o})},[]),r=(0,B.useCallback)(()=>{e({startId:void 0,endId:void 0})},[]);return(0,B.useMemo)(()=>{let o=!n.startId&&!n.endId?[]:[n],s=!!(n.startId&&n.endId);return{dateRange:n,calendarActiveDateRanges:o,onClearDateRange:r,onCalendarDayPress:a,isDateRangeValid:s}},[n,a,r])};0&&(module.exports={Calendar,activeDateRangesEmitter,buildCalendar,fromDateId,getHeightForMonth,toDateId,useCalendar,useCalendarList,useDateRange,useOptimizedDayMetadata});
//# sourceMappingURL=index.js.map