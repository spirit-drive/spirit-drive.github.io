/*! For license information please see components-InfinityList-InfinityList-stories.b97d1d41.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[996],{"./src/components/InfinityList/InfinityList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>InfinityList_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),useEvent=__webpack_require__("./src/hooks/useEvent.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),InfinityList_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/InfinityList/InfinityList.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(InfinityList_module.Z,options);const InfinityList_InfinityList_module=InfinityList_module.Z&&InfinityList_module.Z.locals?InfinityList_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","items","itemElement","itemProps","reserve","itemHeight","onEnd","onStart","innerRef","startLoading","endLoading"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var stringifyItems=function stringifyItems(items){return items.map((function(i){return i.index})).join("_")},InfinityList=function InfinityList(_ref){var className=_ref.className,items=_ref.items,ItemElement=_ref.itemElement,_ref$itemProps=_ref.itemProps,itemProps=void 0===_ref$itemProps?{}:_ref$itemProps,_ref$reserve=_ref.reserve,reserve=void 0===_ref$reserve?100:_ref$reserve,itemHeight=_ref.itemHeight,onEnd=_ref.onEnd,onStart=_ref.onStart,innerRef=_ref.innerRef,startLoading=_ref.startLoading,endLoading=_ref.endLoading,props=_objectWithoutProperties(_ref,_excluded),root=(0,react.useRef)(),holder=(0,react.useRef)(),prevScrollTop=(0,react.useRef)(null),_useState2=_slicedToArray((0,react.useState)((function(){return items.map((function(value,index){return{value,index}}))})),2),visibleItems=_useState2[0],setVisibleItems=_useState2[1],calcVisibleItems=function calcVisibleItems(){var newVisibleItems=[],rootRect=root.current.getBoundingClientRect(),topSide=root.current.scrollTop-reserve,bottomSide=topSide+rootRect.height+reserve;items.forEach((function(value,i){var itemTop=i*itemHeight,itemBottom=(i+1)*itemHeight;itemTop<topSide&&itemBottom<topSide||itemTop>bottomSide&&itemBottom>bottomSide||newVisibleItems.push({value,index:i})})),setVisibleItems((function(v){return function isEqualItems(a,b){return a.length===b.length&&stringifyItems(a)===stringifyItems(b)}(v,newVisibleItems)?v:newVisibleItems}))},applied=(0,react.useRef)({end:!1,start:!1}),commonCalc=(0,useEvent.z)((function(){calcVisibleItems(),function handleInfinityScroll(){var rootRect=root.current.getBoundingClientRect(),holderRect=holder.current.getBoundingClientRect(),bottomDiff=holderRect.bottom-rootRect.bottom,topDiff=rootRect.top-holderRect.top;if(null!==prevScrollTop.current)if(prevScrollTop.current<root.current.scrollTop&&bottomDiff<=reserve){if(applied.current.end)return;applied.current.end=!0,onEnd().then((function(){applied.current.end=!1}))}else if(prevScrollTop.current>root.current.scrollTop&&topDiff<=reserve){if(applied.current.end)return;applied.current.end=!0,onStart().then((function(){applied.current.end=!1,root.current.scrollBy({top:holder.current.getBoundingClientRect().height-holderRect.height})}))}prevScrollTop.current=root.current.scrollTop}()}));(0,react.useLayoutEffect)(commonCalc,[items,itemHeight,commonCalc]);var startLoadingCount=startLoading?1:0,endLoadingCount=endLoading?1:0;(0,react.useLayoutEffect)((function(){var timeoutId,observer=new ResizeObserver((function fn(){cancelAnimationFrame(timeoutId),timeoutId=requestAnimationFrame(commonCalc)}));return observer.observe(root.current),function(){return observer.disconnect()}}),[commonCalc]),(0,react.useImperativeHandle)(innerRef,(function(){return{scrollTo:function scrollTo(index){return root.current.scrollTo({top:(index+startLoadingCount)*itemHeight})}}}));var height=itemHeight*(items.length+endLoadingCount+startLoadingCount),startElem=startLoading&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(InfinityList_InfinityList_module.item,"InfinityList__item"),style:{height:itemHeight,top:0},children:startLoading},"start"),endElem=endLoading&&(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(InfinityList_InfinityList_module.item,"InfinityList__item"),style:{height:itemHeight,top:itemHeight*(endLoadingCount+items.length)},children:endLoading},"end");return(0,jsx_runtime.jsx)("div",_objectSpread(_objectSpread({},props),{},{ref:root,className:(0,clsx_m.Z)(InfinityList_InfinityList_module.root,"InfinityList",className),onScroll:commonCalc,children:(0,jsx_runtime.jsxs)("div",{ref:holder,style:{height},className:(0,clsx_m.Z)(InfinityList_InfinityList_module.holder,"InfinityList__holder"),children:[startElem,visibleItems.map((function(item){var style={height:itemHeight,top:itemHeight*(item.index+startLoadingCount)};return(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(InfinityList_InfinityList_module.item,"InfinityList__item"),style,children:(0,jsx_runtime.jsx)(ItemElement,_objectSpread(_objectSpread({},itemProps),{},{data:item.value}))},item.index)})),endElem]})}))};InfinityList.displayName="InfinityList";try{InfinityList.displayName="InfinityList",InfinityList.__docgenInfo={description:"",displayName:"InfinityList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"T[]"}},itemElement:{defaultValue:null,description:"",name:"itemElement",required:!0,type:{name:"ComponentType<P>"}},itemHeight:{defaultValue:null,description:"",name:"itemHeight",required:!0,type:{name:"number"}},itemProps:{defaultValue:{value:"{} as P"},description:"",name:"itemProps",required:!1,type:{name:"{ data: T; }"}},innerRef:{defaultValue:null,description:"",name:"innerRef",required:!1,type:{name:"MutableRefObject<InfinityListRef>"}},endLoading:{defaultValue:null,description:"",name:"endLoading",required:!1,type:{name:"ReactNode"}},startLoading:{defaultValue:null,description:"",name:"startLoading",required:!1,type:{name:"ReactNode"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!0,type:{name:"() => Promise<void>"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!0,type:{name:"() => Promise<void>"}},reserve:{defaultValue:{value:"100"},description:"",name:"reserve",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/InfinityList/InfinityList.tsx#InfinityList"]={docgenInfo:InfinityList.__docgenInfo,name:"InfinityList",path:"src/components/InfinityList/InfinityList.tsx#InfinityList"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,ComponentInfo=__webpack_require__("./src/components/ComponentInfo/index.ts");function InfinityList_stories_typeof(obj){return InfinityList_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},InfinityList_stories_typeof(obj)}function InfinityList_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function InfinityList_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?InfinityList_stories_ownKeys(Object(source),!0).forEach((function(key){InfinityList_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):InfinityList_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function InfinityList_stories_defineProperty(obj,key,value){return(key=function InfinityList_stories_toPropertyKey(arg){var key=function InfinityList_stories_toPrimitive(input,hint){if("object"!==InfinityList_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==InfinityList_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===InfinityList_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return InfinityList_stories_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||InfinityList_stories_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function InfinityList_stories_slicedToArray(arr,i){return function InfinityList_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function InfinityList_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||InfinityList_stories_unsupportedIterableToArray(arr,i)||function InfinityList_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function InfinityList_stories_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return InfinityList_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?InfinityList_stories_arrayLikeToArray(o,minLen):void 0}}function InfinityList_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Test=function Test(_ref){var _ref$timeout=_ref.timeout,timeout=void 0===_ref$timeout?200:_ref$timeout,_useState2=InfinityList_stories_slicedToArray((0,react.useState)((function(){return Array(100).fill("").map((function(_,i){return i+1}))})),2),items=_useState2[0],setItems=_useState2[1],listElem=(0,react.useRef)();return(0,react.useLayoutEffect)((function(){listElem.current.scrollTo(49)}),[]),(0,jsx_runtime.jsx)(InfinityList,{innerRef:listElem,endLoading:"Loading...",startLoading:"Loading...",items,itemElement:function itemElement(_ref2){var data=_ref2.data;return(0,jsx_runtime.jsx)("div",{children:data})},itemHeight:20,style:{height:"320px",width:"320px"},onEnd:function onEnd(){return new Promise((function(resolve){setTimeout((function(){setItems((function(v){var max=v[v.length-1];return[].concat(_toConsumableArray(v),_toConsumableArray(Array(100).fill("").map((function(_,i){return max+i+1}))))})),setTimeout(resolve)}),timeout)}))},onStart:function onStart(){return new Promise((function(resolve){setTimeout((function(){setItems((function(v){var min=v[0];return[].concat(_toConsumableArray(Array(100).fill("").map((function(_,i){return min-i-1})).reverse()),_toConsumableArray(v))})),setTimeout(resolve)}),timeout)}))}})};Test.displayName="Test";var Wrapper=function Wrapper(props){return(0,jsx_runtime.jsx)(ComponentInfo.C,{title:"Бесконечный виртуализированный список",desc:"Этот компонент можно использовать для отображения истории операций. Компонент использует useLayoutEffect и ResizeObserver. Реализована вирутализация, то есть в dom дереве присунствуют только видимые элементы списка. Элементы списка добавляются асинхронно",children:(0,jsx_runtime.jsx)(Test,InfinityList_stories_objectSpread({},props))})};Wrapper.displayName="Wrapper";const InfinityList_stories={title:"InfinityList",component:Wrapper,args:{timeout:200}};var Default={};Default.parameters=InfinityList_stories_objectSpread(InfinityList_stories_objectSpread({},Default.parameters),{},{docs:InfinityList_stories_objectSpread(InfinityList_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:InfinityList_stories_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/ComponentInfo/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ComponentInfo});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ComponentInfo_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ComponentInfo/ComponentInfo.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ComponentInfo_module.Z,options);const ComponentInfo_ComponentInfo_module=ComponentInfo_module.Z&&ComponentInfo_module.Z.locals?ComponentInfo_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","desc","fullWidth","title","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ComponentInfo=function ComponentInfo(_ref){var className=_ref.className,desc=_ref.desc,fullWidth=_ref.fullWidth,title=_ref.title,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({className:(0,clsx_m.Z)(ComponentInfo_ComponentInfo_module.root,className)},props),{},{children:[(0,jsx_runtime.jsx)("div",{className:ComponentInfo_ComponentInfo_module.title,children:title}),(0,jsx_runtime.jsx)("div",{children:desc}),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(ComponentInfo_ComponentInfo_module.main,fullWidth&&ComponentInfo_ComponentInfo_module.fullWidth),children})]}))};ComponentInfo.displayName="ComponentInfo";try{ComponentInfo.displayName="ComponentInfo",ComponentInfo.__docgenInfo={description:"",displayName:"ComponentInfo",props:{desc:{defaultValue:null,description:"",name:"desc",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ComponentInfo/ComponentInfo.tsx#ComponentInfo"]={docgenInfo:ComponentInfo.__docgenInfo,name:"ComponentInfo",path:"src/components/ComponentInfo/ComponentInfo.tsx#ComponentInfo"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/useEvent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>useEvent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useEvent=function useEvent(callback){var copy=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return copy.current=callback,(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((function(){return copy.current.apply(copy,arguments)}),[])}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ComponentInfo/ComponentInfo.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sO9bN5WSdlhPILLuRMNn{font-family:Montserrat,sans-serif}.CQkg3g_S_bdzswmIrEAk{font-size:28px;font-weight:600;margin-bottom:16px}.WD3r1guXt_PjgW6y4usu{display:inline-block;margin-top:16px;border-radius:8px;padding:16px;border:1px solid #f0f0f0;box-shadow:1px 3px 20px 0 rgba(110,110,110,.3)}.WD3r1guXt_PjgW6y4usu:empty{display:none}.WD3r1guXt_PjgW6y4usu.o6LxgyImyts_CMOiK4gi{display:block}","",{version:3,sources:["webpack://./src/components/ComponentInfo/ComponentInfo.module.sass"],names:[],mappings:"AAAA,sBACE,iCAAA,CAEF,sBACE,cAAA,CACA,eAAA,CACA,kBAAA,CAEF,sBACE,oBAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,wBAAA,CACA,8CAAA,CAEA,4BACE,YAAA,CAEF,2CACE,aAAA",sourcesContent:[".root\n  font-family: Montserrat, sans-serif\n\n.title\n  font-size: 28px\n  font-weight: 600\n  margin-bottom: 16px\n\n.main\n  display: inline-block\n  margin-top: 16px\n  border-radius: 8px\n  padding: 16px\n  border: 1px solid #f0f0f0\n  box-shadow: 1px 3px 20px 0 rgba(110, 110, 110, 0.3)\n  \n  &:empty\n    display: none\n\n  &.fullWidth\n    display: block"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"sO9bN5WSdlhPILLuRMNn",title:"CQkg3g_S_bdzswmIrEAk",main:"WD3r1guXt_PjgW6y4usu",fullWidth:"o6LxgyImyts_CMOiK4gi"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/InfinityList/InfinityList.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".wfu9wAv5v50mkn3aDgpq{overflow:auto}.bu8t8PRjHC2TBHzUlGNL{position:relative}.dDnDV5iaCL_1KiKA3OMu{position:absolute}","",{version:3,sources:["webpack://./src/components/InfinityList/InfinityList.module.sass"],names:[],mappings:"AAAA,sBACE,aAAA,CAEF,sBACE,iBAAA,CAEF,sBACE,iBAAA",sourcesContent:[".root\n  overflow: auto\n\n.holder\n  position: relative\n\n.item\n  position: absolute"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"wfu9wAv5v50mkn3aDgpq",holder:"bu8t8PRjHC2TBHzUlGNL",item:"dDnDV5iaCL_1KiKA3OMu"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);