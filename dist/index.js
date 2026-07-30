"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var m=f(function(D,c){
var b=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-positive-zerof/dist');function O(r,e,n,o,u,x,_){var t,s,v,a,i;if(r<=0)return NaN;for(s=o,v=_,i=0;i<r&&(a=e[s],!(a===a&&u[v]===0));i++)s+=n,v+=x;if(i===r)return NaN;for(t=a,i+=1,i;i<r;i++)s+=n,v+=x,!u[v]&&(a=e[s],!b(a)&&(a>t||a===t&&E(a))&&(t=a));return t}c.exports=O
});var j=f(function(F,y){
var p=require('@stdlib/strided-base-stride2offset/dist'),P=m();function Z(r,e,n,o,u){return P(r,e,n,p(r,n),o,u,p(r,u))}y.exports=Z
});var l=f(function(G,k){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=j(),h=m();g(d,"ndarray",h);k.exports=d
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),q,R=z(w(__dirname,"./native.js"));A(R)?q=B:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
