(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={item:"Statistics_item__18O3Z"}},function(e,t,a){e.exports={list:"Feedback_list__SzVCt",button:"Feedback_button__2ejIq"}},,,,,,function(e,t,a){e.exports={title:"Section_title__2F0MI"}},function(e,t,a){e.exports={notification:"Notification_notification__27YS-"}},,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),i=a.n(c),s=a(5),r=a.n(s),o=(a(18),a(6)),l=a(7),d=a(8),b=a(12),u=a(11),j=a(3),h=a.n(j),O=function(e){var t=e.buttons,a=e.onHandleIncrement;return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsx)("ul",{className:h.a.list,children:t.map((function(e){var t=e.id,c=e.value;return Object(n.jsx)("li",{className:h.a.item,children:Object(n.jsx)("button",{value:c,className:h.a.button,onClick:function(e){a(e)},children:c})},t)}))})})},m=a(9),v=a.n(m),x=function(e){var t=e.title,a=e.children;return Object(n.jsxs)("section",{children:[Object(n.jsx)("h2",{className:v.a.title,children:t}),a]})},f=a(2),p=a.n(f),k=function(e){var t=e.good,a=e.neutral,c=e.bad,i=e.totalFeedback,s=e.positiveFeedbackPercent;return Object(n.jsx)("div",{className:"wrapper",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{className:p.a.item,children:Object(n.jsxs)("span",{children:["Good: ",t]})},"good"),Object(n.jsx)("li",{className:p.a.item,children:Object(n.jsxs)("span",{children:["Bad: ",c]})},"bad"),Object(n.jsx)("li",{className:p.a.item,children:Object(n.jsxs)("span",{children:["Neutral: ",a]})},"neutral"),Object(n.jsx)("li",{className:p.a.item,children:Object(n.jsxs)("span",{children:["total: ",i]})},"total"),Object(n.jsx)("li",{className:p.a.item,children:Object(n.jsxs)("span",{children:["Positive feedback ",s," %"]})},"positiveFeedback")]})})},g=a(10),N=a.n(g),_=function(e){var t=e.message;return Object(n.jsx)("p",{className:N.a.notification,children:t})},F=[{id:1,value:"good"},{id:2,value:"neutral"},{id:3,value:"bad"}],P=function(e){Object(b.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.handleIncrementFeedbackValue=function(t){var a=t.target.value;e.setState((function(e){return Object(o.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state,a=t.good,n=a/(a+t.neutral+t.bad)*100;return Math.round(n)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.bad,c=e.neutral;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(x,{title:"Please leave feedback",children:Object(n.jsx)(O,{buttons:F,onHandleIncrement:this.handleIncrementFeedbackValue})}),this.state.good||this.state.neutral||this.state.bad?Object(n.jsx)(x,{title:"Statistics",children:Object(n.jsx)(k,{good:t,bad:a,neutral:c,totalFeedback:this.countTotalFeedback(),positiveFeedbackPercent:this.countPositiveFeedbackPercentage()})}):Object(n.jsx)(_,{message:"No feedback given"})]})}}]),a}(c.Component);r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.a5e44957.chunk.js.map