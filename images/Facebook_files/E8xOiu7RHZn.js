;/*FB_PKG_DELIM*/

__d("StoriesCometSuspenseSingleBucketRootWithEntryPoint.entrypoint",["JSResourceForInteraction","StoriesGatingEntrypoint.entrypointutils","StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.routeParams.bucket_id;a=a.routeProps.bucket_id_from_card_id;c=d("StoriesGatingEntrypoint.entrypointutils").getContentPaneParams((c=c)!=null?c:a);return{queries:{storiesSuspenseContentPaneRootReference:{parameters:b("StoriesSuspenseContentPaneRootWithEntryPointQuery$Parameters"),variables:c}}}},root:c("JSResourceForInteraction")("StoriesCometSuspenseSingleBucketRootWithEntryPoint.react").__setRef("StoriesCometSuspenseSingleBucketRootWithEntryPoint.entrypoint")};g["default"]=a}),98);
__d("StoriesResizeToView.react",["fbt","ix","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react");function a(){return j.jsx("div",{children:j.jsx("div",{className:"x6s0dn4 xal61yo x78zum5 xdt5ytf x1jaa9fa xl56j7k x6ikm8r xh8yej3",children:j.jsxs("div",{className:"x14ctfv xngnso2",style:{verticalAlign:"middle"},children:[j.jsx(c("TetraIcon.react"),{color:"white",icon:d("fbicon")._(i("580264"),24),size:24}),j.jsx("span",{className:"x1sln4lm",children:h._("__JHASH__cC0LYuBnYn4__JHASH__")})]})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesCometSuspenseSingleBucketRootWrapper.react",["CometErrorBoundary.react","CometPlaceholder.react","CometRouteRenderType","StoriesCometPlaceholder.react","StoriesResizeToView.react","StoriesRootError.react","StoriesUtils","react","useCometWindowSize"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.bucketID;a=a.children;var e=d("CometRouteRenderType").useIsHosted(),f=d("CometRouteRenderType").useIsPushView();b=b==="";var g=c("useCometWindowSize")();return d("StoriesUtils").shouldResizeToViewStories(g.innerHeight)?h.jsx(c("StoriesResizeToView.react"),{}):h.jsx("div",{className:""+((e?" x78zum5 x1r8uery x1iyjqo2 xs83m0k xh8yej3":"")+(e?""+((e?" x1n2onr6":"")+(f?" x13vifvy":""+(e?"":""))):" x10l6tqk x13vifvy x1ey2m1c xds687c x17qophe")),children:h.jsx(c("CometPlaceholder.react"),{fallback:h.jsx(c("StoriesCometPlaceholder.react"),{isNullState:b,leftRail:!1}),children:h.jsx(c("CometErrorBoundary.react"),{fallback:function(a){return h.jsx(c("StoriesRootError.react"),{error:a})},children:a})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesSingleBucketProcessRoute",["CometRouteParams","uuid"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b,e=d("CometRouteParams").useRouteParams();a=typeof e.bucket_id==="string"?e.bucket_id:a;a=(b=a)!=null?b:"";b=typeof e.card_id==="string"?e.card_id:"";var f=typeof e.source==="string"?e.source:"";e=typeof e.tray_session_id==="string"?e.tray_session_id:"";var g=c("uuid")();return{bucketID:a,cardID:b,source:f,traySessionID:e,viewerSessionID:g}}g["default"]=a}),98);
__d("StoriesCometSuspenseSingleBucketRootWithEntryPoint.react",["StoriesCometSuspenseSingleBucketRootWrapper.react","deferredLoadComponent","react","requireDeferredForDisplay","useStoriesSingleBucketProcessRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("deferredLoadComponent")(c("requireDeferredForDisplay")("StoriesViewerSingleBucketWithEntryPoint.react").__setRef("StoriesCometSuspenseSingleBucketRootWithEntryPoint.react"));function a(a){var b=a.props;a=a.queries;b=c("useStoriesSingleBucketProcessRoute")(b.routeProps.bucket_id_from_card_id);var d=b.bucketID,e=b.cardID,f=b.source,g=b.traySessionID;b=b.viewerSessionID;return h.jsx(c("StoriesCometSuspenseSingleBucketRootWrapper.react"),{bucketID:d,children:h.jsx(i,{bucketID:d,cardID:e,openSource:f,queries:a,traySessionID:g,viewerSessionID:b})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesViewerSingleBucketWrapper.react",["fbt","CometErrorBoundary.react","CometPlaceholder.react","CometStyleXSheet","StoriesEnums","StoriesLoggerSession","StoriesQueryArgumentsContext","StoriesRootError.react","StoriesSetBucketHelper","StoriesSuspenseBucketDataContext","StoriesSuspenseContentPanePlaceholder.react","StoriesSuspenseViewerKeyboardListener.react","emptyFunction","gkx","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");b=d("react");var j=b.useEffect,k=b.useMemo;d("CometStyleXSheet").rootStyleSheet.injectTheme();function a(a){var b=a.bucketID,e=a.children,f=a.openSource,g=a.traySessionID,l=a.viewerSessionID;j(function(){d("StoriesLoggerSession").initialize(g,l,f)},[f,g,l]);a=k(function(){return{bucketData:d("StoriesSetBucketHelper").defaultBucketData(b),bucketNavDirection:d("StoriesEnums").NAV_DIRECTIONS.NEXT_BUCKET,isViewerV3:!1,setBucketData:c("emptyFunction"),setNavigationDirection:c("emptyFunction")}},[b]);var m=k(function(){return{hideSelfBucket:!1,initialBucketID:b,initialBucketsCount:9,pageBucketsCount:9}},[b]),n=b;n=n==="";return i.jsx(c("CometErrorBoundary.react"),{fallback:function(a){return i.jsx(c("StoriesRootError.react"),{error:a})},children:i.jsx(c("StoriesQueryArgumentsContext").Provider,{value:m,children:i.jsx(c("StoriesSuspenseBucketDataContext").Provider,{value:a,children:i.jsx("div",{className:"x78zum5 xh8yej3","data-testid":void 0,children:i.jsxs(c("StoriesSuspenseViewerKeyboardListener.react"),{children:[i.jsx(c("CometPlaceholder.react"),{fallback:i.jsx(c("StoriesSuspenseContentPanePlaceholder.react"),{isNullState:n}),children:e}),c("gkx")("678680")&&i.jsx("div",{className:"x1vtvx1t x1ey2m1c x14ctfv xb2kyzz x1kpxq89 x10l6tqk x17qophe xsmyaan",children:h._("__JHASH__nLgQZ6BZ3eV__JHASH__")})]})})})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesViewerSingleBucketWithEntryPoint.react",["CometStyleXSheet","StoriesSuspenseContentPaneRootWithEntryPoint.react","StoriesViewerSingleBucketWrapper.react","emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");d("CometStyleXSheet").rootStyleSheet.injectTheme();function a(a){var b=a.bucketID,d=a.cardID,e=a.openSource,f=a.queries,g=a.traySessionID;a=a.viewerSessionID;var i=b;return h.jsx(c("StoriesViewerSingleBucketWrapper.react"),{bucketID:i,openSource:e,traySessionID:g,viewerSessionID:a,children:h.jsx(c("StoriesSuspenseContentPaneRootWithEntryPoint.react"),{bucketID:i,initialBucketID:b,initialCardID:d,queryReference:f.storiesSuspenseContentPaneRootReference,updateFetchPolicy:c("emptyFunction"),viewSingle:!0,viewerSessionID:a})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);