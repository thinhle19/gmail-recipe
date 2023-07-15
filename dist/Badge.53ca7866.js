"use strict";const e=require("./index.3840a89d.js"),n=require("./useDelayTime.c75a4cd7.js"),a=e.defineComponent({name:"SlotMachineNumber",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],required:!0},oldOriginalNumber:{type:Number,default:void 0},newOriginalNumber:{type:Number,default:void 0}},setup(n){const a=e.ref(null),t=e.ref(n.value),o=e.ref(n.value),r=e.ref("up"),i=e.ref(!1),l=e.computed((()=>i.value?`${n.clsPrefix}-base-slot-machine-current-number--${r.value}-scroll`:null)),s=e.computed((()=>i.value?`${n.clsPrefix}-base-slot-machine-old-number--${r.value}-scroll`:null));function u(){const e=n.newOriginalNumber,a=n.oldOriginalNumber;void 0!==a&&void 0!==e&&(e>a?c("up"):a>e&&c("down"))}function c(n){r.value=n,i.value=!1,e.nextTick((()=>{var e;null===(e=a.value)||void 0===e||e.offsetWidth,i.value=!0}))}return e.watch(e.toRef(n,"value"),((n,a)=>{t.value=a,o.value=n,e.nextTick(u)})),()=>{const{clsPrefix:r}=n;return e.h("span",{ref:a,class:`${r}-base-slot-machine-number`},null!==t.value?e.h("span",{class:[`${r}-base-slot-machine-old-number ${r}-base-slot-machine-old-number--top`,s.value]},t.value):null,e.h("span",{class:[`${r}-base-slot-machine-current-number`,l.value]},e.h("span",{ref:"numberWrapper",class:[`${r}-base-slot-machine-current-number__inner`,"number"!=typeof n.value&&`${r}-base-slot-machine-current-number__inner--not-number`]},o.value)),null!==t.value?e.h("span",{class:[`${r}-base-slot-machine-old-number ${r}-base-slot-machine-old-number--bottom`,s.value]},t.value):null)}}}),{cubicBezierEaseOut:t}=e.commonVariables$1;const o=e.c([e.c("@keyframes n-base-slot-machine-fade-up-in","\n from {\n transform: translateY(60%);\n opacity: 0;\n }\n to {\n transform: translateY(0);\n opacity: 1;\n }\n "),e.c("@keyframes n-base-slot-machine-fade-down-in","\n from {\n transform: translateY(-60%);\n opacity: 0;\n }\n to {\n transform: translateY(0);\n opacity: 1;\n }\n "),e.c("@keyframes n-base-slot-machine-fade-up-out","\n from {\n transform: translateY(0%);\n opacity: 1;\n }\n to {\n transform: translateY(-60%);\n opacity: 0;\n }\n "),e.c("@keyframes n-base-slot-machine-fade-down-out","\n from {\n transform: translateY(0%);\n opacity: 1;\n }\n to {\n transform: translateY(60%);\n opacity: 0;\n }\n "),e.cB("base-slot-machine","\n overflow: hidden;\n white-space: nowrap;\n display: inline-block;\n height: 18px;\n line-height: 18px;\n ",[e.cB("base-slot-machine-number","\n display: inline-block;\n position: relative;\n height: 18px;\n width: .6em;\n max-width: .6em;\n ",[function({duration:n=".2s"}={}){return[e.c("&.fade-up-width-expand-transition-leave-active",{transition:`\n opacity ${n} ${t},\n max-width ${n} ${t},\n transform ${n} ${t}\n `}),e.c("&.fade-up-width-expand-transition-enter-active",{transition:`\n opacity ${n} ${t},\n max-width ${n} ${t},\n transform ${n} ${t}\n `}),e.c("&.fade-up-width-expand-transition-enter-to",{opacity:1,transform:"translateX(0) translateY(0)"}),e.c("&.fade-up-width-expand-transition-enter-from",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"}),e.c("&.fade-up-width-expand-transition-leave-from",{opacity:1,transform:"translateY(0)"}),e.c("&.fade-up-width-expand-transition-leave-to",{maxWidth:"0 !important",opacity:0,transform:"translateY(60%)"})]}({duration:".2s"}),e.fadeInWidthExpandTransition({duration:".2s",delay:"0s"}),e.cB("base-slot-machine-old-number","\n display: inline-block;\n opacity: 0;\n position: absolute;\n left: 0;\n right: 0;\n ",[e.cM("top",{transform:"translateY(-100%)"}),e.cM("bottom",{transform:"translateY(100%)"}),e.cM("down-scroll",{animation:"n-base-slot-machine-fade-down-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),e.cM("up-scroll",{animation:"n-base-slot-machine-fade-up-out .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1})]),e.cB("base-slot-machine-current-number","\n display: inline-block;\n position: absolute;\n left: 0;\n top: 0;\n bottom: 0;\n right: 0;\n opacity: 1;\n transform: translateY(0);\n width: .6em;\n ",[e.cM("down-scroll",{animation:"n-base-slot-machine-fade-down-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),e.cM("up-scroll",{animation:"n-base-slot-machine-fade-up-in .2s cubic-bezier(0, 0, .2, 1)",animationIterationCount:1}),e.cE("inner","\n display: inline-block;\n position: absolute;\n right: 0;\n top: 0;\n width: .6em;\n ",[e.cM("not-number","\n right: unset;\n left: 0;\n ")])])])])]),r=e.defineComponent({name:"BaseSlotMachine",props:{clsPrefix:{type:String,required:!0},value:{type:[Number,String],default:0},max:{type:Number,default:void 0},appeared:{type:Boolean,required:!0}},setup(n){e.useStyle("-base-slot-machine",o,e.toRef(n,"clsPrefix"));const t=e.ref(),r=e.ref(),i=e.computed((()=>{if("string"==typeof n.value)return[];if(n.value<1)return[0];const e=[];let a=n.value;for(void 0!==n.max&&(a=Math.min(n.max,a));a>=1;)e.push(a%10),a/=10,a=Math.floor(a);return e.reverse(),e}));return e.watch(e.toRef(n,"value"),((e,n)=>{"string"==typeof e?(r.value=void 0,t.value=void 0):"string"==typeof n?(r.value=e,t.value=void 0):(r.value=e,t.value=n)})),()=>{const{value:o,clsPrefix:l}=n;return"number"==typeof o?e.h("span",{class:`${l}-base-slot-machine`},e.h(e.TransitionGroup,{name:"fade-up-width-expand-transition",tag:"span"},{default:()=>i.value.map(((n,o)=>e.h(a,{clsPrefix:l,key:i.value.length-o-1,oldOriginalNumber:t.value,newOriginalNumber:r.value,value:n})))}),e.h(e.NFadeInExpandTransition,{key:"+",width:!0},{default:()=>void 0!==n.max&&n.max<o?e.h(a,{clsPrefix:l,value:"+"}):null})):e.h("span",{class:`${l}-base-slot-machine`},o)}}}),i={name:"Badge",common:e.commonLight,self:e=>{const{errorColor:n,infoColor:a,successColor:t,warningColor:o,fontFamily:r}=e;return{color:n,colorInfo:a,colorSuccess:t,colorError:n,colorWarning:o,fontSize:"12px",fontFamily:r}}},l=e.c([e.c("@keyframes badge-wave-spread",{from:{boxShadow:"0 0 0.5px 0px var(--n-ripple-color)",opacity:.6},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)",opacity:0}}),e.cB("badge","\n display: inline-flex;\n position: relative;\n vertical-align: middle;\n color: var(--n-color);\n font-family: var(--n-font-family);\n ",[e.cM("as-is",[e.cB("badge-sup",{position:"static",transform:"translateX(0)"},[e.fadeInScaleUpTransition({transformOrigin:"left bottom",originalTransform:"translateX(0)"})])]),e.cM("dot",[e.cB("badge-sup","\n height: 8px;\n width: 8px;\n padding: 0;\n min-width: 8px;\n left: 100%;\n bottom: calc(100% - 4px);\n ",[e.c("::before","border-radius: 4px;")])]),e.cB("badge-sup","\n background: var(--n-color);\n transition:\n background-color .3s var(--n-bezier),\n color .3s var(--n-bezier);\n color: #FFF;\n position: absolute;\n height: 18px;\n line-height: 18px;\n border-radius: 9px;\n padding: 0 6px;\n text-align: center;\n font-size: var(--n-font-size);\n transform: translateX(-50%);\n left: 100%;\n bottom: calc(100% - 9px);\n font-variant-numeric: tabular-nums;\n z-index: 1;\n display: flex;\n align-items: center;\n ",[e.fadeInScaleUpTransition({transformOrigin:"left bottom",originalTransform:"translateX(-50%)"}),e.cB("base-wave",{zIndex:1,animationDuration:"2s",animationIterationCount:"infinite",animationDelay:"1s",animationTimingFunction:"var(--n-ripple-bezier)",animationName:"badge-wave-spread"}),e.c("&::before",'\n opacity: 0;\n transform: scale(1);\n border-radius: 9px;\n content: "";\n position: absolute;\n left: 0;\n right: 0;\n top: 0;\n bottom: 0;\n ')])])]),s=Object.assign(Object.assign({},e.useTheme.props),{value:[String,Number],max:Number,dot:Boolean,type:{type:String,default:"default"},show:{type:Boolean,default:!0},showZero:Boolean,processing:Boolean,color:String,offset:Array}),u=e.defineComponent({name:"Badge",props:s,setup(n,{slots:a}){const{mergedClsPrefixRef:t,inlineThemeDisabled:o,mergedRtlRef:r}=e.useConfig(n),s=e.useTheme("Badge","-badge",l,i,n,t),u=e.ref(!1),c=e.computed((()=>n.show&&(n.dot||void 0!==n.value&&!(!n.showZero&&n.value<=0)||!e.isSlotEmpty(a.value))));e.onMounted((()=>{c.value&&(u.value=!0)}));const d=e.useRtl("Badge",r,t),m=e.computed((()=>{const{type:a,color:t}=n,{common:{cubicBezierEaseInOut:o,cubicBezierEaseOut:r},self:{[e.createKey("color",a)]:i,fontFamily:l,fontSize:u}}=s.value;return{"--n-font-size":u,"--n-font-family":l,"--n-color":t||i,"--n-ripple-color":t||i,"--n-bezier":o,"--n-ripple-bezier":r}})),p=o?e.useThemeClass("badge",e.computed((()=>{let a="";const{type:t,color:o}=n;return t&&(a+=t[0]),o&&(a+=e.color2Class(o)),a})),m,n):void 0,f=e.computed((()=>{const{offset:e}=n;if(!e)return;const[a,t]=e,o="number"==typeof a?`${a}px`:a,r="number"==typeof t?`${t}px`:t;return{transform:`translate(calc(${(null==d?void 0:d.value)?"50%":"-50%"} + ${o}), ${r})`}}));return{rtlEnabled:d,mergedClsPrefix:t,appeared:u,showBadge:c,handleAfterEnter:()=>{u.value=!0},handleAfterLeave:()=>{u.value=!1},cssVars:o?void 0:m,themeClass:null==p?void 0:p.themeClass,onRender:null==p?void 0:p.onRender,offsetStyle:f}},render(){var a;const{mergedClsPrefix:t,onRender:o,themeClass:i,$slots:l}=this;null==o||o();const s=null===(a=l.default)||void 0===a?void 0:a.call(l);return e.h("div",{class:[`${t}-badge`,this.rtlEnabled&&`${t}-badge--rtl`,i,{[`${t}-badge--dot`]:this.dot,[`${t}-badge--as-is`]:!s}],style:this.cssVars},s,e.h(e.Transition,{name:"fade-in-scale-up-transition",onAfterEnter:this.handleAfterEnter,onAfterLeave:this.handleAfterLeave},{default:()=>this.showBadge?e.h("sup",{class:`${t}-badge-sup`,title:n.getTitleAttribute(this.value),style:this.offsetStyle},e.resolveSlot(l.value,(()=>[this.dot?null:e.h(r,{clsPrefix:t,appeared:this.appeared,max:this.max,value:this.value})])),this.processing?e.h(e.NBaseWave,{clsPrefix:t}):null):null}))}});exports.NBadge=u;