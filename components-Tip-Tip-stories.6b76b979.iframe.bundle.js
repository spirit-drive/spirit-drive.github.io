/*! For license information please see components-Tip-Tip-stories.6b76b979.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[977],{"./src/components/Tip/Tip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tip_stories});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Tip_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tip/Tip.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Tip_module.Z,options);const Tip_Tip_module=Tip_module.Z&&Tip_module.Z.locals?Tip_module.Z.locals:void 0;var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TipType=function(TipType){return TipType[TipType.mount=0]="mount",TipType[TipType.visible=1]="visible",TipType[TipType.unmount=2]="unmount",TipType[TipType.invisible=3]="invisible",TipType}({}),reducer=function reducer(state,action){var type=action.type;switch(type){case TipType.invisible:case TipType.mount:return _objectSpread(_objectSpread({},state),{},{mount:!0,visible:!1});case TipType.visible:return _objectSpread(_objectSpread({},state),{},{mount:!0,visible:!0});case TipType.unmount:return _objectSpread(_objectSpread({},state),{},{mount:!1,visible:!1});default:var unhandled=type;console.error("unhandled type: ".concat(unhandled))}},TipPlace=function(TipPlace){return TipPlace.top="top",TipPlace.bottom="bottom",TipPlace}({}),Tip=function Tip(_ref){var _document,className=_ref.className,children=_ref.children,title=_ref.title,_ref$container=_ref.container,container=void 0===_ref$container?null===(_document=document)||void 0===_document?void 0:_document.body:_ref$container,_useReducer2=_slicedToArray((0,react.useReducer)(reducer,{mount:!1,visible:!1}),2),state=_useReducer2[0],dispatch=_useReducer2[1],_useState2=_slicedToArray((0,react.useState)({left:0,top:0}),2),position=_useState2[0],setPosition=_useState2[1],_useState4=_slicedToArray((0,react.useState)(TipPlace.top),2),place=_useState4[0],setPlace=_useState4[1],tip=(0,react.useRef)(),holder=(0,react.useRef)(),child=react.Children.only(children),_child$props=child.props,style=_child$props.style,classN=_child$props.className,clonedChild=react.cloneElement(react.Children.only(children),_objectSpread(_objectSpread({},child.props),{},{style:null,className:null})),timeoutId=(0,react.useRef)(),onMouseLeave=function onMouseLeave(){var _window;timeoutId.current=null===(_window=window)||void 0===_window?void 0:_window.setTimeout((function(){dispatch({type:TipType.invisible}),setTimeout((function(){return dispatch({type:TipType.unmount})}),0)}),1e3)},parent=react.createElement(child.type,{key:child.key,style,className:classN,ref:holder,onMouseEnter:function onMouseEnter(){var _holder$current;clearTimeout(timeoutId.current),dispatch({type:TipType.mount}),setTimeout((function(){return dispatch({type:TipType.visible})}),0);var rect=null===(_holder$current=holder.current)||void 0===_holder$current?void 0:_holder$current.getBoundingClientRect(),rectContainer=container.getBoundingClientRect();setPosition({left:rect.x+Math.round(rect.width/2)-rectContainer.x,top:rect.y-rectContainer.y})},onMouseLeave},clonedChild);return(0,react.useLayoutEffect)((function(){if(tip.current&&state.mount){var rect=tip.current.getBoundingClientRect(),rectHolder=holder.current.getBoundingClientRect();rect.top<8?(setPlace(TipPlace.bottom),setPosition((function(v){return _objectSpread(_objectSpread({},v),{},{top:v.top+rectHolder.height})}))):setPlace(TipPlace.top)}}),[state.mount]),(0,react.useEffect)((function(){state.mount||setPlace(TipPlace.top)}),[state.mount]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[state.mount&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)("div",{ref:tip,style:position,onMouseEnter:function onMouseEnter(){return clearTimeout(timeoutId.current)},onMouseLeave,className:(0,clsx_m.Z)(Tip_Tip_module.root,Tip_Tip_module[place],state.visible&&Tip_Tip_module.visible,className),children:title}),container),parent]})};try{Tip.displayName="Tip",Tip.__docgenInfo={description:"",displayName:"Tip",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},container:{defaultValue:{value:"document?.body"},description:"",name:"container",required:!1,type:{name:"HTMLElement"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Tip/Tip.tsx#Tip"]={docgenInfo:Tip.__docgenInfo,name:"Tip",path:"src/components/Tip/Tip.tsx#Tip"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,ComponentInfo=__webpack_require__("./src/components/ComponentInfo/index.ts");function Tip_stories_typeof(obj){return Tip_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Tip_stories_typeof(obj)}function Tip_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Tip_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Tip_stories_ownKeys(Object(source),!0).forEach((function(key){Tip_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Tip_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Tip_stories_defineProperty(obj,key,value){return(key=function Tip_stories_toPropertyKey(arg){var key=function Tip_stories_toPrimitive(input,hint){if("object"!==Tip_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Tip_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Tip_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Wrapper=function Wrapper(){return(0,jsx_runtime.jsx)(ComponentInfo.C,{title:"Tip",desc:"Компонент использует useLayoutEffect и onTransitionEnd.",children:(0,jsx_runtime.jsxs)("div",{style:{position:"relative",width:400,height:1200,overflow:"hidden"},children:[(0,jsx_runtime.jsx)(Tip,{title:"Текст получил широкое распространение в учебных и демонстрационных материалах по полиграфии и дизайну печатных изданий и веб-страниц. Распространился в 1970-х годах из-за трафаретов компании Letraset, а затем — из-за того, что служил примером текста в программе PageMaker. Применяется для того, чтобы показать читателю (пользователю) как будет выглядеть страница при использовании того или иного набора оформительских элементов и шрифтов. Бессмысленность текста приводит к тому, что при этом читатель сосредотачивается именно на внешнем виде и общем восприятии страницы, а не на ее содержании",children:(0,jsx_runtime.jsx)("div",{style:{height:50,top:60,left:10,backgroundColor:"#efc"},children:"test"})}),(0,jsx_runtime.jsx)(Tip,{title:"ttile1",children:(0,jsx_runtime.jsx)("span",{style:{position:"absolute",width:40,height:40,top:60,left:10,backgroundColor:"#efc"},children:"test"})}),(0,jsx_runtime.jsx)(Tip,{title:"ttile1",children:(0,jsx_runtime.jsx)("div",{style:{position:"absolute",width:40,height:20,top:60,left:80,backgroundColor:"#efc"}})}),(0,jsx_runtime.jsx)(Tip,{title:"ttile1",children:(0,jsx_runtime.jsx)("div",{style:{position:"absolute",width:40,height:40,top:60,left:160,backgroundColor:"#efc"},children:"test"})}),(0,jsx_runtime.jsx)(Tip,{title:"ttile1",children:(0,jsx_runtime.jsx)("div",{style:{position:"absolute",width:40,height:80,top:60,left:240,backgroundColor:"#efc"},children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("div",{children:"2323"})})})}),(0,jsx_runtime.jsx)(Tip,{title:(0,jsx_runtime.jsx)("div",{children:"sdqwd32"}),children:(0,jsx_runtime.jsx)("div",{style:{position:"absolute",width:40,height:40,top:230,left:10,backgroundColor:"#efc"},children:"test"})})]})})};Wrapper.displayName="Wrapper";const Tip_stories={title:"Tip",component:Wrapper};var Default={};Default.parameters=Tip_stories_objectSpread(Tip_stories_objectSpread({},Default.parameters),{},{docs:Tip_stories_objectSpread(Tip_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:Tip_stories_objectSpread({originalSource:"{}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/components/ComponentInfo/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>ComponentInfo});__webpack_require__("./node_modules/react/index.js");var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ComponentInfo_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ComponentInfo/ComponentInfo.module.sass"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ComponentInfo_module.Z,options);const ComponentInfo_ComponentInfo_module=ComponentInfo_module.Z&&ComponentInfo_module.Z.locals?ComponentInfo_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","desc","fullWidth","title","children"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ComponentInfo=function ComponentInfo(_ref){var className=_ref.className,desc=_ref.desc,fullWidth=_ref.fullWidth,title=_ref.title,children=_ref.children,props=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.jsxs)("div",_objectSpread(_objectSpread({className:(0,clsx_m.Z)(ComponentInfo_ComponentInfo_module.root,className)},props),{},{children:[(0,jsx_runtime.jsx)("div",{className:ComponentInfo_ComponentInfo_module.title,children:title}),(0,jsx_runtime.jsx)("div",{children:desc}),(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.Z)(ComponentInfo_ComponentInfo_module.main,fullWidth&&ComponentInfo_ComponentInfo_module.fullWidth),children})]}))};ComponentInfo.displayName="ComponentInfo";try{ComponentInfo.displayName="ComponentInfo",ComponentInfo.__docgenInfo={description:"",displayName:"ComponentInfo",props:{desc:{defaultValue:null,description:"",name:"desc",required:!1,type:{name:"ReactNode"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ComponentInfo/ComponentInfo.tsx#ComponentInfo"]={docgenInfo:ComponentInfo.__docgenInfo,name:"ComponentInfo",path:"src/components/ComponentInfo/ComponentInfo.tsx#ComponentInfo"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/ComponentInfo/ComponentInfo.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".sO9bN5WSdlhPILLuRMNn{font-family:Montserrat,sans-serif}.CQkg3g_S_bdzswmIrEAk{font-size:28px;font-weight:600;margin-bottom:16px}.WD3r1guXt_PjgW6y4usu{display:inline-block;margin-top:16px;border-radius:8px;padding:16px;border:1px solid #f0f0f0;box-shadow:1px 3px 20px 0 rgba(110,110,110,.3)}.WD3r1guXt_PjgW6y4usu:empty{display:none}.WD3r1guXt_PjgW6y4usu.o6LxgyImyts_CMOiK4gi{display:block}","",{version:3,sources:["webpack://./src/components/ComponentInfo/ComponentInfo.module.sass"],names:[],mappings:"AAAA,sBACE,iCAAA,CAEF,sBACE,cAAA,CACA,eAAA,CACA,kBAAA,CAEF,sBACE,oBAAA,CACA,eAAA,CACA,iBAAA,CACA,YAAA,CACA,wBAAA,CACA,8CAAA,CAEA,4BACE,YAAA,CAEF,2CACE,aAAA",sourcesContent:[".root\n  font-family: Montserrat, sans-serif\n\n.title\n  font-size: 28px\n  font-weight: 600\n  margin-bottom: 16px\n\n.main\n  display: inline-block\n  margin-top: 16px\n  border-radius: 8px\n  padding: 16px\n  border: 1px solid #f0f0f0\n  box-shadow: 1px 3px 20px 0 rgba(110, 110, 110, 0.3)\n  \n  &:empty\n    display: none\n\n  &.fullWidth\n    display: block"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"sO9bN5WSdlhPILLuRMNn",title:"CQkg3g_S_bdzswmIrEAk",main:"WD3r1guXt_PjgW6y4usu",fullWidth:"o6LxgyImyts_CMOiK4gi"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Tip/Tip.module.sass":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".W3p5m97at268gWubxQMg{position:absolute;z-index:3;padding:8px;border-radius:8px;background-color:rgba(0,0,0,.5);transition:opacity .2s ease-in;opacity:0}.W3p5m97at268gWubxQMg.kZcvX12VfaxGQYQ98y6w{opacity:1}.W3p5m97at268gWubxQMg.Fmh1FGaIsC4LtbDQk8yP{transform:translate(-50%, calc(-100% - 8px))}.W3p5m97at268gWubxQMg.e0M74paMzATb8oV6sEJe{transform:translate(-50%, 8px)}","",{version:3,sources:["webpack://./src/components/Tip/Tip.module.sass"],names:[],mappings:"AAEA,sBACE,iBAAA,CACA,SAAA,CACA,WAAA,CACA,iBAAA,CACA,+BAAA,CACA,8BAAA,CACA,SAAA,CAEA,2CACE,SAAA,CAEF,2CACE,4CAAA,CAEF,2CACE,8BAAA",sourcesContent:["$indent: 8px\n\n.root\n  position: absolute\n  z-index: 3\n  padding: 8px\n  border-radius: 8px\n  background-color: rgba(0, 0, 0, 0.5)\n  transition: opacity .2s ease-in\n  opacity: 0\n\n  &.visible\n    opacity: 1\n\n  &.top\n    transform: translate(-50%, calc(-100% - $indent))\n\n  &.bottom\n    transform: translate(-50%, $indent)\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"W3p5m97at268gWubxQMg",visible:"kZcvX12VfaxGQYQ98y6w",top:"Fmh1FGaIsC4LtbDQk8yP",bottom:"e0M74paMzATb8oV6sEJe"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);