;/*FB_PKG_DELIM*/

__d("CometHomeRightSideEgoMenuQuery.graphql",["CometHomeRightSideEgoMenuQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"id"}],c=[{kind:"Variable",name:"id",variableName:"id"}],d={kind:"InlineFragment",selections:[{args:null,documentName:"CometHomeRightSideEgoMenuQuery",fragmentName:"CometHomeRightSideEgoHideAdMenuItem_sidead",fragmentPropName:"sidead",kind:"ModuleImport"}],type:"EgoAdUnitHideAdMenuItem",abstractKey:null},e={kind:"InlineFragment",selections:[{args:null,documentName:"CometHomeRightSideEgoMenuQuery",fragmentName:"CometHomeRightSideEgoOpenInIDDMenuItem_sidead",fragmentPropName:"sidead",kind:"ModuleImport"}],type:"EgoAdUnitOpenIDDMenuItem",abstractKey:null},f={kind:"InlineFragment",selections:[{args:null,documentName:"CometHomeRightSideEgoMenuQuery",fragmentName:"CometHomeRightSideEgoCopyDemoLinkMenuItem_sidead",fragmentPropName:"sidead",kind:"ModuleImport"}],type:"EgoAdUnitCopyDemoLinkMenuItem",abstractKey:null},g={kind:"InlineFragment",selections:[{args:null,documentName:"CometHomeRightSideEgoMenuQuery",fragmentName:"CometHomeRightSideEgoWAISTAdMenuItem_sidead",fragmentPropName:"sidead",kind:"ModuleImport"}],type:"EgoAdUnitWAISTMenuItem",abstractKey:null},h={kind:"InlineFragment",selections:[{args:null,documentName:"CometHomeRightSideEgoMenuQuery",fragmentName:"CometHomeRightSideEgoReportAdMenuItem_sidead",fragmentPropName:"sidead",kind:"ModuleImport"}],type:"EgoAdUnitReportAdMenuItem",abstractKey:null};return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometHomeRightSideEgoMenuQuery",selections:[{alias:null,args:c,concreteType:"AdsSideFeedUnitItem",kind:"LinkedField",name:"fetch__AdsSideFeedUnitItem",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"menu_items",plural:!0,selections:[d,e,f,g,h],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometHomeRightSideEgoMenuQuery",selections:[{alias:null,args:c,concreteType:"AdsSideFeedUnitItem",kind:"LinkedField",name:"fetch__AdsSideFeedUnitItem",plural:!1,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"menu_items",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,e,f,g,h],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null}]},params:{id:b("CometHomeRightSideEgoMenuQuery_facebookRelayOperation"),metadata:{},name:"CometHomeRightSideEgoMenuQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("CometHomeRightSideEgoMenu.react",["CometErrorBoundary.react","CometHomeRightSideEgoMenuQuery.graphql","CometMenu.react","CometRelay","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.props,f=e.onClose,g=e.sidead,j=e.updateAdUnitVisibility;e=a.queries;a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometHomeRightSideEgoMenuQuery.graphql"),e.queryReference);a=(e=a.fetch__AdsSideFeedUnitItem)==null?void 0:e.menu_items;return a!=null?i.jsx(c("CometMenu.react"),{withArrow:!0,children:a.map(function(a,b){return i.jsx(c("CometErrorBoundary.react"),{fallback:null,children:i.jsx(d("CometRelay").MatchContainer,{match:a,props:{onClose:f,sidead:g,updateAdUnitVisibility:j}})},"rhc-ad-menu-item-"+b)})}):null}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMarketplaceYouOrdersContentContainerQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5616752815085645"}),null);