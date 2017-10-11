/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojL10n!ojtranslations/nls/localeElements","ojs/ojvalidation-base"],function(a){a.Im=function(){this.Init()};o_("NumberConverter",a.Im,a);a.f.xa(a.Im,a.ul,"oj.NumberConverter");a.Im.prototype.Init=function(c){a.Im.O.Init.call(this,c)};a.f.j("NumberConverter.prototype.Init",{Init:a.Im.prototype.Init});a.Im.prototype.format=function(c){return a.Im.O.format.call(this,c)};a.f.j("NumberConverter.prototype.format",{format:a.Im.prototype.format});a.Im.prototype.parse=function(c){return a.Im.O.parse.call(this,
c)};a.f.j("NumberConverter.prototype.parse",{parse:a.Im.prototype.parse});a.Dp=function(a){this.Init(a)};o_("NumberRangeValidator",a.Dp,a);a.f.xa(a.Dp,a.io,"oj.NumberRangeValidator");a.Dp.prototype.Init=function(c){a.Dp.O.Init.call(this);c&&(this.Hj=c.min,this.Lk=c.max,this.fd=a.Ua.EI(c.converter),this.xG=c.hint||{},this.JF=c.messageSummary||{},this.IF=c.messageDetail||{})};a.f.j("NumberRangeValidator.prototype.Init",{Init:a.Dp.prototype.Init});a.Dp.prototype.validate=function(c){var b=c?c.toString():
c,d=parseFloat(b),e=this.JF,f=this.IF,h=f.rangeOverflow,k=f.rangeUnderflow,f=f.exact,g=e.rangeOverflow,e=e.rangeUnderflow,m=void 0!==this.Hj?parseFloat(this.Hj):null,p=void 0!==this.Lk?parseFloat(this.Lk):null,t=m&&this.fd?this.fd.format(m):m,s=p&&this.fd?this.fd.format(p):p,n="",r="",q=null,u=a.ya;if(null===c)return c;if(null!==m&&null!==p){if(d>=m&&d<=p||m>p)return b}else if(null!==m){if(d>=m)return b}else if(null===p||d<=p)return b;null!==p&&null!==m&&m===p?(q={value:c,num:s},r=f?u.Rc(f,q):u.R("oj-validator.range.number.messageDetail.exact",
q),d>p?n=g?g:u.R("oj-validator.range.number.messageSummary.rangeOverflow"):d<m&&(n=g?e:u.R("oj-validator.range.number.messageSummary.rangeUnderflow"))):null!==p&&d>p?(q={value:c,max:s},n=g?g:u.R("oj-validator.range.number.messageSummary.rangeOverflow"),r=h?u.Rc(h,q):u.R("oj-validator.range.number.messageDetail.rangeOverflow",q)):null!==m&&d<m&&(q={value:c,min:t},n=e?e:u.R("oj-validator.range.number.messageSummary.rangeUnderflow"),r=k?u.Rc(k,q):u.R("oj-validator.range.number.messageDetail.rangeUnderflow",
q));throw new a.Il(n,r);};a.f.j("NumberRangeValidator.prototype.validate",{validate:a.Dp.prototype.validate});a.Dp.prototype.Oe=function(){var c=null,b=this.xG,d=b.inRange,e=b.exact,f=b.min,b=b.max,h=a.ya,k=void 0!==this.Hj?parseFloat(this.Hj):null,g=void 0!==this.Lk?parseFloat(this.Lk):null,m=k&&this.fd?this.fd.format(k):k,p=g&&this.fd?this.fd.format(g):g;null!==k&&null!==g?c=k!==g?d?h.Rc(d,{min:m,max:p}):h.R("oj-validator.range.number.hint.inRange",{min:m,max:p}):e?h.Rc(e,{num:m}):h.R("oj-validator.range.number.hint.exact",
{num:m}):null!==k?c=f?h.Rc(f,{min:m}):h.R("oj-validator.range.number.hint.min",{min:m}):null!==g&&(c=b?h.Rc(b,{max:p}):h.R("oj-validator.range.number.hint.max",{max:p}));return c};a.f.j("NumberRangeValidator.prototype.getHint",{Oe:a.Dp.prototype.Oe});a.tg=function(a){this.Init(a)};o_("IntlNumberConverter",a.tg,a);a.f.xa(a.tg,a.Im,"oj.IntlNumberConverter");a.tg.prototype.Init=function(c){a.tg.O.Init.call(this,c)};a.f.j("IntlNumberConverter.prototype.Init",{Init:a.tg.prototype.Init});a.tg.prototype.Ho=
function(){this.oI||(this.oI=g.lc());return this.oI};a.tg.prototype.format=function(c){var b,d,e;if(null==c||"string"===typeof c&&0===a.Sa.trim(""+c).length||"number"===typeof c&&isNaN(c))return"";b=a.oa.fj();d=a.ob.Tl();e=this.resolvedOptions();try{return this.Ho().format(c,d,e,b)}catch(f){throw c=this.cv(f,c),c;}};a.f.j("IntlNumberConverter.prototype.format",{format:a.tg.prototype.format});a.tg.prototype.Oe=function(){return null};a.f.j("IntlNumberConverter.prototype.getHint",{Oe:a.tg.prototype.Oe});
a.tg.prototype.dl=function(){return a.tg.O.dl.call(this)};a.f.j("IntlNumberConverter.prototype.getOptions",{dl:a.tg.prototype.dl});a.tg.prototype.parse=function(c){var b,d,e;if(null==c||""===c)return null;b=a.oa.fj();d=a.ob.Tl();e=this.resolvedOptions();try{return this.Ho().parse(a.Sa.trim(c),d,e,b)}catch(f){throw c=this.cv(f,c),c;}};a.f.j("IntlNumberConverter.prototype.parse",{parse:a.tg.prototype.parse});a.tg.prototype.resolvedOptions=function(){var c;c=a.oa.fj();var b;if(c!==this.QB||!this.IH){b=
a.ob.Tl();try{if(!b)return a.C.error("locale bundle for the current locale %s is unavailable",c),{};this.IH=this.Ho().resolvedOptions(b,this.dl(),c);this.QB=c}catch(d){throw c=this.cv(d),c;}}return this.IH};a.f.j("IntlNumberConverter.prototype.resolvedOptions",{resolvedOptions:a.tg.prototype.resolvedOptions});a.tg.prototype.cv=function(c,b){var d,e,f=c.errorInfo,h;if(f){e=f.errorCode;f=f.parameterMap;a.A.Yi(f);switch(e){case "optionTypesMismatch":case "optionTypeInvalid":d=a.Ua.OA(e,f);break;case "optionOutOfRange":d=
a.Ua.OA(e,f);break;case "optionValueInvalid":d=a.Ua.OA(e,f);break;case "decimalFormatMismatch":h="oj-converter.number.decimalFormatMismatch.summary";break;case "currencyFormatMismatch":h="oj-converter.number.currencyFormatMismatch.summary";break;case "percentFormatMismatch":h="oj-converter.number.percentFormatMismatch.summary";break;case "unsupportedParseFormat":e=a.ya.R("oj-converter.number.decimalFormatUnsupportedParse.summary"),d=a.ya.R("oj-converter.number.decimalFormatUnsupportedParse.detail"),
d=new a.Vf(e,d)}h&&(e=a.ya.R(h,{value:b||f.value,format:f.format}),d=a.ya.R("oj-converter.hint.detail",{exampleValue:this.oN()}),d=new a.Vf(e,d))}d||(d=e=c.message,d=new a.Vf(e,d));return d};a.tg.prototype.oN=function(){var c="";try{c=this.format(12345.98765)}catch(b){b instanceof a.Vf&&(c="",a.C.error("error retrieving hint value in format"))}finally{return c}};a.Lsa=function(){return{createConverter:function(c){return new a.tg(c)}}}();a.La.tV(a.Rh.CONVERTER_TYPE_NUMBER,a.Lsa);a.Msa=function(){return{createValidator:function(c){return new a.Dp(c)}}}();
a.La.QA(a.Df.VALIDATOR_TYPE_NUMBERRANGE,a.Msa);var g;g=function(){function c(){return{format:function(a,b,c,e){if(2>=arguments.length||void 0===c)c={useGrouping:!0,style:"decimal"};n(c,"OraNumberConverter.format");var h={};s(b,h,c,e);return d(a,c,b,h,e)},parse:function(a,b,c,d){if("number"===typeof a)return a;if("[object Number]"===Object.prototype.toString.call(a))return Number(a);if(2>=arguments.length||void 0===c)c={useGrouping:!0,style:"decimal"};n(c,"OraNumberConverter.parse");return e(a,b,c,
d)},resolvedOptions:function(b,c,d){if(3>arguments.length||void 0===d)d=a.N.Gv(b);if(2>arguments.length||void 0===c)c={useGrouping:!0,style:"decimal"};var e=O(b,c,d);return Y(e,c,d)}}}var b,d,e,f,h,k,g,m,p,t,s,n,r,q,u,v,w,y,x,z,A,G,D,C,J,E,B,H,F,N,L,P,R,O,Y,Z=/^[+\-]?infinity$/i,ga=/^[+\-]?\d*\.?\d*(e[+\-]?\d+)?$/,da=/([^+-.0-9]*)([+\-]?\d*\.?\d*(E[+\-]?\d+)?).*$/,S=/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,ia=/(^0\.0*)([^0].*$)/,V={trillion:[1E14,1E13,1E12],billion:[1E11,1E10,1E9],million:[1E8,1E7,1E6],
thousand:[1E5,1E4,1E3]},la={trillion:1E12,billion:1E9,million:1E6,thousand:1E3},fa={HALF_UP:"ceil",HALF_DOWN:"floor",DEFAULT:"round"};b=function(a,b,c){var d;for(d=a.length;d<b;d+=1)a=c?"0"+a:a+"0";return a};w=function(a,b,c,d){var e=new RangeError(a+" is out of range.  Enter a value between "+b+" and "+c+" for "+d);e.errorInfo={errorCode:"numberOptionOutOfRange",parameterMap:{value:a,minValue:b,maxValue:c,propertyName:d}};throw e;};A=function(a,b,c,d,e){a=a[b];return void 0!==a?(a=Number(a),(isNaN(a)||
a<c||a>d)&&w(a,c,d,b),Math.floor(a)):e};u=function(a,b){if(void 0===b)return"latn";var c=G(b);void 0===a.numbers["symbols-numberSystem-"+c]&&(c="latn");return c};v=function(a){return a.split("-")[0]};G=function(a){a=a||"en-US";var b=a.indexOf("-u-nu-"),c="latn";-1!==b&&(c=a.substr(b+6,4));return c};s=function(b,c,d,e){var h=a.N.lh(b);e=u(h,e);c.numberingSystemKey=e;c.numberingSystem="symbols-numberSystem-"+e;c.lenientParse=d.lenientParse||"full";if(void 0!==d.pattern&&0<d.pattern.length)e=d.pattern;
else{switch(d.style){case "decimal":e="decimalFormats-numberSystem-";break;case "currency":e="currencyFormats-numberSystem-";break;case "percent":e="percentFormats-numberSystem-";break;default:e="decimalFormats-numberSystem-"}e+=c.numberingSystemKey;e=h.numbers[e].standard;var f=d.decimalFormat;void 0!==f&&"decimal"===d.style&&(c.shortDecimalFormat=h.numbers["decimalFormats-numberSystem-latn"][f].decimalFormat)}var f=h.numbers[c.numberingSystem].decimal,k=h.numbers[c.numberingSystem].group,m=d.separators;
if(void 0!==m){c.separators=m;var q=m.decimal,t=m.group;void 0!==q&&""!==q&&(f=m.decimal);void 0!==t&&(k=m.group)}m=v(a.N.Gv(b));c.plurals=b.supplemental.plurals;c.lang=m;c.pat=e;c.minusSign=h.numbers[c.numberingSystem].minusSign;c.decimalSeparator=f;c.exponential=h.numbers[c.numberingSystem].exponential;c.groupingSeparator=k;c.currencyDisplay=d.currencyDisplay;void 0!==d.currency&&(c.currencyCode=d.currency.toUpperCase());c.style=d.style;g(d,e,h,c);void 0===d.pattern&&(c.minimumIntegerDigits=A(d,
"minimumIntegerDigits",1,21,c.minimumIntegerDigits),void 0!==d.maximumFractionDigits&&(c.maximumFractionDigits=A(d,"maximumFractionDigits",0,20,c.maximumFractionDigits),c.maximumFractionDigits<c.minimumFractionDigits&&(c.minimumFractionDigits=c.maximumFractionDigits)),void 0!==d.minimumFractionDigits&&(c.minimumFractionDigits=A(d,"minimumFractionDigits",0,20,c.minimumFractionDigits)),c.maximumFractionDigits<c.minimumFractionDigits&&(c.maximumFractionDigits=c.minimumFractionDigits))};q=function(a){var b=
new TypeError('The property "currency" is required whenthe property "'+a+'" is "currency". An accepted value is a three-letter ISO 4217 currency code.');b.errorInfo={errorCode:"optionTypesMismatch",parameterMap:{propertyName:a,propertyValue:"currency",requiredPropertyName:"currency",requiredPropertyValueValid:"a three-letter ISO 4217 currency code"}};throw b;};J=function(){var a;a=Error("long and short decimalFormats are not supported for parsing");a.errorInfo={errorCode:"unsupportedParseFormat",
parameterMap:{value:"decimal"}};throw a;};n=function(b,c){var d=a.N.ri(b,c),e=d("style","string",["currency","decimal","percent","perMill"],"decimal");"decimal"===e&&(e=d("decimalFormat","string",["standard","short","long"]),"OraNumberConverter.parse"===c&&void 0!==e&&"standard"!==e&&J());var h=d("currency","string");"currency"===e&&void 0===h&&q("style");d("roundingMode","string",["HALF_UP","HALF_DOWN","HALF_EVEN"],"DEFAULT");d("lenientParse","string",["none","full"],"full")};H=function(a,b,c){function d(a){var b=
0,c=0,e=0,h="";if("0"!==a[0]){for(;"0"!==a[b]&&b<a.length;)b++;h=a.substr(0,b);e=b}for(b=e;b<a.length;b++)if("0"===a[b])c++;else break;return[h,c]}var e=function(a){var b,c,d;for(b in V)for(d=V[b].length,c=0;c<d;c++)if(V[b][c]<=a)return[b,V[b][c]];return[a,null]}(a),h="";if(null!==e[1]){var h=c.plurals[c.lang](Math.floor(a/la[e[0]])),f=""+e[1]+"-count-"+h,f=c.shortDecimalFormat[f];void 0===f&&(f=""+e[1]+"-count-other",f=c.shortDecimalFormat[f]);var k=d(f),g=k[1],h=k[0];if(g<f.length){var l=1*Math.pow(10,
g),l=e[1]/l*10;a/=l}}e="";void 0!==f&&(e=f.substr(g+k[0].length));a=E(a,b,c);return h+a+e};B=function(a,c){var d=a+"",e=0,h=d.split(/e/i),f=h[0];ia.lastIndex=0;var k=ia.exec(f);null!==k?(e=k[1].length-1,f=k[2]):f=f.replace(".","");var k=1<h.length?parseInt(h[1],10):0,h=parseInt(f,10),g=c.minimumIntegerDigits+c.maximumFractionDigits;f.length>g&&(g-=f.length,h=Math.round(h*Math.pow(10,g)));g=c.minimumIntegerDigits+c.minimumFractionDigits;h=b(h+"",g,!1);k=-1!==d.indexOf(".")?k-(c.minimumIntegerDigits-
d.indexOf(".")+e):k-(g-f.length-c.minimumFractionDigits);d=Math.abs(k);d=b(d+"",c.minExponentDigits,!0);0>k&&(d=c.minusSign+d);e=h.slice(0,c.minimumIntegerDigits);return e=0<h.slice(c.minimumIntegerDigits).length?e+(c.decimalSeparator+h.slice(c.minimumIntegerDigits)+c.exponential+d):e+(c.exponential+d)};E=function(a,c,d){var e=d.groupingSize,h=d.groupingSize0,f=d.decimalSeparator,k,g=(a+"").split(/e/i),l=1<g.length?parseInt(g[1],10):0;k=g[0];var g=k.split("."),m=1<g.length?g[1]:"";if(1<g.length&&
m.length>l){var q=Math.min(d.maximumFractionDigits,m.length-l);a=y(a,q,c.roundingMode||"DEFAULT")}g=(a+"").split(/e/i);l=1<g.length?parseInt(g[1],10):0;k=g[0];g=k.split(".");k=g[0];m=1<g.length?g[1]:"";0<l?(m=b(m,l,!1),k+=m.slice(0,l),m=m.substr(l)):0>l&&(l=-l,k=b(k,l+1,!0),m=k.slice(-l,k.length)+m,k=k.slice(0,-l));m=0<q&&0<m.length?f+(m.length>q?m.slice(0,q):b(m,q,!1)):0<d.minimumFractionDigits?f:"";m=b(m,f.length+d.minimumFractionDigits,!1);a=d.groupingSeparator;f="";!1===c.useGrouping&&void 0===
c.pattern&&(a="");k=b(k,d.minimumIntegerDigits,!0);c=k.length-1;for(m=1<m.length?m:"";0<=c;){if(0===e||e>c)return e=k.slice(0,c+1)+(f.length?a+f+m:m);f=k.slice(c-e+1,c+1)+(f.length?a+f:"");c-=e;0<h&&(e=h)}return e=k.slice(0,c+1)+a+f+m};D=function(a,b,c){if("HALF_DOWN"===c||"HALF_EVEN"===c)a=a.substr(b),a=parseInt(a,10),5<a&&(c="HALF_UP");return c};y=function(a,b,c){var d=a.toString().split(".");if(void 0===d[1])return a;if("5"===d[1][b]&&"DEFAULT"!==c)return c=D(d[1],b,c),c=z(d,c,b),x(a,-b,c,d);b=
Math.pow(10,b);b=Math.round(a*b)/b;return isFinite(b)?b:a};z=function(a,b,c){var d=fa[b];"HALF_EVEN"===b&&(d=0==(0===c?parseInt(a[0][a[0].length-1],10):parseInt(a[1][c-1],10))%2?fa.HALF_DOWN:fa.HALF_UP);return d};x=function(a,b,c,d){if(0===b)return"5"===d[1][0]?Math[c](a):Math.round(a);d=a.toString().split("e");a=d[0];d=d[1];a=a+"e"+(d?parseInt(d,10)-b:-b);a=parseFloat(a);a=Math[c](a);d=a.toString().split("e");a=d[0];d=d[1];a=a+"e"+(d?parseInt(d,10)+b:b);return a=parseFloat(a)};d=function(b,c,d,e,
h){d=a.N.lh(d);if(!isFinite(b))return Infinity===b||-Infinity===b?d.numbers[e.numberingSystem].infinity:d.numbers[e.numberingSystem].nan;d=Math.abs(b);!0===e.isPercent||"percent"===c.style?d*=100:!0===e.isPerMill&&(d*=1E3);d="decimal"===c.style&&void 0!==c.decimalFormat&&"standard"!==c.decimalFormat?H(d,c,e):!0===e.useExponentialNotation?B(d,e):E(d,c,e);c="";c=0>b&&0!=d-0?c+(e.negativePrefix+d+e.negativeSuffix):c+(e.positivePrefix+d+e.positiveSuffix);b=G(h);void 0===a.N.nr[b]&&(b="latn");if("latn"!==
b){h=[];for(e=0;e<c.length;e++)"0"<=c[e]&&"9">=c[e]?h.push(a.N.nr[b][c[e]]):h.push(c[e]);return h.join("")}return c};m=function(b,c,d,e){var h,f=a.N.vr(b),g="",l=!1,m=new RegExp("^"+e.numbers[d.numberingSystem].plusSign.replace(S,"\\$1")),f=f.replace(m,""),q=a.N.vr(d.positivePrefix),t=a.N.vr(d.positiveSuffix),s=a.N.vr(d.negativePrefix),m=a.N.vr(d.negativeSuffix),r=new RegExp("^"+(q||"").replace(S,"\\$1")),n=new RegExp((t||"").replace(S,"\\$1")+"$"),u=new RegExp("^"+(s||"").replace(S,"\\$1")),C=new RegExp((m||
"").replace(S,"\\$1")+"$");if(!0===u.test(f)&&!0===C.test(f))f=f.replace(u,""),f=f.replace(C,""),g="-",l=!0;else if(!0===r.test(f)&&!0===n.test(f))f=f.replace(r,""),f=f.replace(n,""),g="+",l=!0;else if("currency"===c.style){var n=r=d.currencyCode,v;void 0!==e.numbers.currencies[r]&&(n=e.numbers.currencies[r].symbol);void 0===d.currencyDisplay||"symbol"===d.currencyDisplay?v=n:"code"===d.currencyDisplay&&(v=r);void 0!==v&&(e=(q||"").replace(v,""),t=(t||"").replace(v,""),s=(s||"").replace(v,""),v=(m||
"").replace(v,""),r=new RegExp(("^"+e).replace(S,"\\$1")),n=new RegExp(t.replace(S,"\\$1")+"$"),u=new RegExp(("^"+s).replace(S,"\\$1")),C=new RegExp(v.replace(S,"\\$1")+"$"),!0===u.test(f)&&!0===C.test(f)?(f=f.replace(u,""),f=f.replace(C,""),g="-",l=!0):!0===r.test(f)&&!0===n.test(f)&&(f=f.replace(r,""),f=f.replace(n,""),g="+",l=!0))}l?h=[g,f]:"full"===d.lenientParse?(h=p(f,d),h[2]=!0):k(c.style,d,b);return h};p=function(b,c){var d=c.groupingSeparator,e=c.decimalSeparator,h=c.minusSign,f="",k="",
g=a.N.fk(c.exponential);b=a.N.fk(b);b=b.split(g).join("E");b=b.split(d).join("");g=d.replace(/\u00A0/g," ");d!==g&&(b=b.split(g).join(""));b=b.split(e).join(".");"."===b.charAt(0)&&(b=b.substr(1),k=".");b=b.replace(h,"-");d=da.exec(b);k+=d[2];a.N.Nz(k,"-")?(k=k.substr(1),f="-"):a.N.Nz(b,"+")&&(k=k.substr(1),f="+");return[f,k]};t=function(b,c){var d=c.minusSign,e=c.plusSign,h;b=a.N.vr(b);d=a.N.vr(d);e=a.N.vr(e);a.N.Nz(b,d)?h=["-",b.substr(d.length)]:a.N.Nz(b,a.N.vr(e))&&(h=["+",b.substr(e.length)]);
return h||["",b]};f=function(b,c){var d=G(c);if(void 0===a.N.nr[d])return b;var e,h=[];for(e=0;e<b.length;e++){var f=a.N.nr[d].indexOf(b[e]);-1!==f?h.push(f):h.push(b[e])}return h.join("")};h=function(b,c){var d={},e=c.decimalSeparator,h=c.groupingSeparator;b=b.replace(/ /g,"");var f=c.exponential,k,g=b.indexOf(f.toLowerCase());0>g&&(g=b.indexOf(a.N.fk(f)));0>g?(k=b,d.exponent=null):(k=b.substr(0,g),d.exponent=b.substr(g+f.length));g=k.indexOf(e);0>g?(f=k,d.fraction=null):(f=k.substr(0,g),d.fraction=
k.substr(g+e.length));f=f.split(h).join("");e=h.replace(/\u00A0/g," ");h!==e&&(f=f.split(e).join(""));d.integer=f;return d};C=function(b,c,d,e){isNaN(b)&&k(c.style,d,e);!0===d.isPercent||"percent"===c.style?b/=100:!0===d.isPerMill&&(b/=1E3);a.N.ri(c,"OraNumberConverter.parse")("roundDuringParse","boolean",[!0,!1],!1)&&(b=r(b,d,c));return b};k=function(a,b,c){var d,e;d="Unparsable number "+c+" The expected number pattern is "+b.pat;switch(a){case "decimal":e="decimalFormatMismatch";break;case "currency":e=
"currencyFormatMismatch";break;case "percent":e="percentFormatMismatch"}a=Error(d);a.errorInfo={errorCode:e,parameterMap:{value:c,format:b.pat}};throw a;};e=function(b,c,d,e){var g=a.N.lh(c),l={},q=f(b,e);s(c,l,d,e);c=NaN;e=q.replace(/ /g,"");if(Z.test(e))return c=parseFloat(q);e=m(q,d,l,g);var g=e[0],r=e[1],g=g||"+";if(e[2])return c=parseFloat(g+r),C(c,d,l,b);var n=h(r,l);e=n.fraction;r=n.exponent;g+=n.integer;null!==e&&(g+="."+e);null!==r&&(e=t(r,l),g+="e"+(e[0]||"+")+e[1]);ga.test(g)?c=parseFloat(g):
"full"===l.lenientParse?(g=p(q,l),c=parseFloat(g[0]+g[1])):k(d.style,l,b);return C(c,d,l,b)};var ea,aa,U,I;R=function(a){var b;b=new SyntaxError('Unexpected character(s) encountered in the pattern "'+a+' An example of a valid pattern is "#,##0.###".');b.errorInfo={errorCode:"optionValueInvalid",parameterMap:{propertyName:"pattern",propertyValue:a,propertyValueHint:"#,##0.###"}};throw b;};N=function(a,b,c){return null!==(new RegExp(c,"i")).exec(a.substr(b,c.length))};P=function(a,b){var c={};null!==
ea&&(b.positivePrefix=L(ea,a,b,c));null!==aa&&(b.positiveSuffix=L(aa,a,b,c));null!==U&&(b.negativePrefix=L(U,a,b,c));null!==I&&(b.negativeSuffix=L(I,a,b,c));void 0!==c.name&&(b.positiveSuffix="\u00a0"+c.name,b.positivePrefix="","ar"===b.lang?(b.negativeSuffix=a.numbers[b.numberingSystem].minusSign+"\u00a0"+c.name,b.negativePrefix=""):(b.negativeSuffix="\u00a0"+c.name,b.negativePrefix=a.numbers[b.numberingSystem].minusSign))};L=function(a,b,c,d){for(var e="",h=0;h<a.length;){var f=a.charAt(h++);if("'"!==
f){switch(f){case "\u00a4":var k=f=c.currencyCode,g=f;void 0!==b.numbers.currencies[f]&&(k=b.numbers.currencies[f].displayName,g=b.numbers.currencies[f].symbol);void 0===c.currencyDisplay||"symbol"===c.currencyDisplay?f=g:"code"!==c.currencyDisplay&&(f=k,d.name=f);break;case "%":f=b.numbers[c.numberingSystem].percentSign;break;case "\u2030":f=b.numbers[c.numberingSystem].perMille;break;case "-":f=b.numbers[c.numberingSystem].minusSign}e=e.concat(f)}}return e};g=function(a,b,c,d){for(var e=!1,h=!1,
f=0,k=0,g=!0,l=1;0<=l&&k<b.length;--l){for(var m=!1,t="",s="",p=-1,r=1,n=0,u=0,C=0,v=-1,D=-1,J,w=0,g=!0,B=k;B<b.length;++B){var E=b.charAt(B);switch(w){case 0:case 2:if(m){if("'"===E){B+1<b.length&&"'"===b.charAt(B+1)?(++B,g?t=t.concat("''"):s=s.concat("''")):m=!1;continue}}else if("#"===E||"0"===E||","===E||"."===E){w=1;--B;continue}else if("\u00a4"===E){void 0===a.currency&&q("pattern");a.style="currency";(E=B+1<b.length&&"\u00a4"===b.charAt(B+1))&&++B;g?t=t.concat(E?"'\u00a4\u00a4":"'\u00a4"):
s=s.concat(E?"'\u00a4\u00a4":"'\u00a4");continue}else if("'"===E){if("'"===E){B+1<b.length&&"'"===b.charAt(B+1)?(++B,g?t=t.concat("''"):s=s.concat("''")):m=!0;continue}}else if(";"===E){0!==w&&0!==l||R(b);k=B+1;B=b.length;continue}else if("%"===E){a.style="percent";1!==r&&R(b);d.isPercent=!0;r=100;g?t=t.concat("'%"):s=s.concat("'%");continue}else if("\u2030"===E){1!==r&&R(b);a.style="perMill";d.isPerMill=!0;r=1E3;g?t=t.concat("'\u2030"):s=s.concat("'\u2030");continue}else if("-"===E){g?t=t.concat("'-"):
s=s.concat("'-");continue}g?t=t.concat(E):s=s.concat(E);break;case 1:if(1===l)++f;else{0===--f&&(w=2,g=!1);continue}if("#"===E)0<u?++C:++n,0<=v&&0>p&&++v;else if("0"===E)0<C&&R(b),++u,0<=v&&0>p&&++v;else if(","===E)D=v,v=0;else if("."===E)0<=p&&R(b),p=n+u+C;else if(N(b,B,"E")){h&&R(b);h=!0;J=0;for(B+=1;B<b.length&&"0"===b.charAt(B);)++J,++f,++B;(1>n+u||1>J)&&R(b);w=2;g=!1;--B}else w=2,g=!1,--B,--f}}0===u&&0<n&&0<=p&&(u=p,0===u&&++u,C=n-u,n=u-1,u=1);(0>p&&0<C||0<=p&&(p<n||p>n+u)||0===v||m)&&R(b);1===
l?(ea=t,aa=s,U=ea,I=aa,m=n+u+C,d.minimumIntegerDigits=(0<=p?p:m)-n,d.maximumIntegerDigits=h?n+d.minimumIntegerDigits:2147483647,d.maximumFractionDigits=0<=p?m-p:0,d.minimumFractionDigits=0<=p?n+u-p:0,d.groupingSize=0<v?v:0,d.groupingSize0=D):(U=t,I=s,e=!0)}0===b.length&&(ea=aa="",d.minimumIntegerDigits=0,d.maximumIntegerDigits=2147483647,d.minimumFractionDigits=0,d.maximumFractionDigits=2147483647);d.useExponentialNotation=h;d.minExponentDigits=J;if(!e||0===U.localeCompare(ea)&&0===I.localeCompare(aa))"currency"===
a.style&&"ar"===d.lang?(I=aa+"'\u200f-",U=ea):(I=aa,U="'-"+ea);P(c,d)};r=function(a,b,c){var d=0>a;a=y(Math.abs(a),b.maximumFractionDigits,c.roundingMode||"DEFAULT");return d?-a:a};O=function(b,c,d){var e={};n(c,"OraNumberConverter.resolvedOptions");s(b,e,c,d);e.numberingSystemKey=G(d);void 0===a.N.nr[e.numberingSystemKey]&&(e.numberingSystemKey="latn");return e};Y=function(a,b,c){c={locale:c,style:void 0===b.style?"decimal":b.style,useGrouping:void 0===b.useGrouping?!0:b.useGrouping,numberingSystem:a.numberingSystemKey};
c.minimumIntegerDigits=a.minimumIntegerDigits;c.minimumFractionDigits=a.minimumFractionDigits;c.maximumFractionDigits=a.maximumFractionDigits;"decimal"===b.style&&void 0!==b.decimalFormat&&(c.decimalFormat=b.decimalFormat);"currency"===b.style&&(c.currency=b.currency,c.currencyDisplay=void 0===b.currencyDisplay?"symbol":b.currencyDisplay);void 0!==b.pattern&&(c.pattern=b.pattern);var d=b.roundingMode;b=b.roundDuringParse;void 0!==d&&(c.roundingMode=d);void 0!==b&&(c.roundDuringParse=b);b=a.lenientParse;
void 0!==b&&(c.lenientParse=b);a=a.separators;void 0!==a&&(c.separators=a);return c};return{lc:function(){F||(F=c());return F}}}()});