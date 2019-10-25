<html>
 <head>
 <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, minimumscale=1,
maximum-scale=1">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>



 

	 
	 
<!-- BEGIN LivePerson Monitor. -->
<script type="text/javascript">window.lpTag=window.lpTag||{},'undefined'==typeof window.lpTag._tagCount?(window.lpTag={wl:lpTag.wl||null,scp:lpTag.scp||null,site:'12142172'||'',section:lpTag.section||'',tagletSection:lpTag.tagletSection||null,autoStart:lpTag.autoStart!==!1,ovr:lpTag.ovr||{},_v:'1.10.0',_tagCount:1,protocol:'https:',events:{bind:function(t,e,i){lpTag.defer(function(){lpTag.events.bind(t,e,i)},0)},trigger:function(t,e,i){lpTag.defer(function(){lpTag.events.trigger(t,e,i)},1)}},defer:function(t,e){0===e?(this._defB=this._defB||[],this._defB.push(t)):1===e?(this._defT=this._defT||[],this._defT.push(t)):(this._defL=this._defL||[],this._defL.push(t))},load:function(t,e,i){var n=this;setTimeout(function(){n._load(t,e,i)},0)},_load:function(t,e,i){var n=t;t||(n=this.protocol+'//'+(this.ovr&&this.ovr.domain?this.ovr.domain:'lptag.liveperson.net')+'/tag/tag.js?site='+this.site);var o=document.createElement('script');o.setAttribute('charset',e?e:'UTF-8'),i&&o.setAttribute('id',i),o.setAttribute('src',n),document.getElementsByTagName('head').item(0).appendChild(o)},init:function(){this._timing=this._timing||{},this._timing.start=(new Date).getTime();var t=this;window.attachEvent?window.attachEvent('onload',function(){t._domReady('domReady')}):(window.addEventListener('DOMContentLoaded',function(){t._domReady('contReady')},!1),window.addEventListener('load',function(){t._domReady('domReady')},!1)),'undefined'===typeof window._lptStop&&this.load()},start:function(){this.autoStart=!0},_domReady:function(t){this.isDom||(this.isDom=!0,this.events.trigger('LPT','DOM_READY',{t:t})),this._timing[t]=(new Date).getTime()},vars:lpTag.vars||[],dbs:lpTag.dbs||[],ctn:lpTag.ctn||[],sdes:lpTag.sdes||[],hooks:lpTag.hooks||[],identities:lpTag.identities||[],ev:lpTag.ev||[]},lpTag.init()):window.lpTag._tagCount+=1;</script>
<!-- END LivePerson Monitor. -->
 
 




  
 
 
 <title>Masmovil Test</title>
 
 <style>
 body {
 margin : 2px;
 padding: 2px;
 background-image: url("https://i.imgur.com/xR6gc4l.png");
 background-repeat: no-repeat;
 }
  
  .myDiv {
  color: red;
  font-size: 30px;
  position: absolute;
  top: 35px;
  left: 480px;
}
	 
  input {
  color: black;
  font-size: 20px;
  position: absolute;
  top: 5px;
  left: 480px;
  width: 300px;
}
  
 .rotate {
  border-radius: 50%;
  -webkit-transition: -webkit-transform .8s ease-in-out;
          transition:         transform .8s ease-in-out;
}
.rotate:hover {
  -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
}
  
 .zoom {
    transition: transform .2s; /* Animation */
    width: 250px;
    height: 253px;
    margin: 0 auto;
}
.zoom:hover {
    transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
	 
 
 </style>
 </head>
 <body>
  

 

 	
 <script>
	 
	 
$(document).ready(function(){
	 setTimeout(function(){
	 
 var CurrentLocation = window.location.href;
 lpTag.newPage(CurrentLocation, {section: "masmoviltest"});
 
 lpTag.sdes.push({
     "type": "ctmrinfo",
     "info": {
         customerId: '1'
     }
 });
 
	 }, 1000);
	
});
	 
	 // Authentication JSMethod for LiveEngage
 var lpGetAuthenticationToken = function(callback) {
	 console.log("inside lpGetAuthenticationToken!");
	 var token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL3NvbWV0aGluZy5pdCIsInN1YiI6IjV0Z3l0Njd5IiwicHJlZmVycmVkX3VzZXJuYW1lIjoiSm9obkRvZSIsInBob25lX251bWJlciI6IisxLTEwLTM0NC0zNzY1MzMzIiwiZ2l2ZW5fbmFtZSI6IlRlc3QiLCJmYW1pbHlfbmFtZSI6IlRlc3QyIiwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJnZW5kZXIiOiJNYWxlIiwibHBfc2RlcyI6W3sidHlwZSI6ImN0bXJpbmZvIiwiaW5mbyI6eyJjc3RhdHVzIjoiY2FuY2VsbGVkIiwiY3R5cGUiOiJ2aXAiLCJjdXN0b21lcklkIjoiNXRneXQ2N3kiLCJiYWxhbmNlIjoiLTQwMC45OSIsInNvY2lhbElkIjoiMzQ1Njc4NzY1NCIsImltZWkiOiI5OTk2NjMyMSIsInVzZXJOYW1lIjoidXNlcjAwMCIsImNvbXBhbnlTaXplIjoiNTAwIiwiYWNjb3VudE5hbWUiOiJiYW5rIGNvcnAiLCJyb2xlIjoiYnJva2VyIiwibGFzdFBheW1lbnREYXRlIjp7ImRheSI6IjE1IiwibW9udGgiOiIxMCIsInllYXIiOiIyMDE0In0sInJlZ2lzdHJhdGlvbkRhdGUiOnsiZGF5IjoiMjMiLCJtb250aCI6IjUiLCJ5ZWFyIjoiMjAxMyJ9fX0seyJ0eXBlIjoicGVyc29uYWwiLCJwZXJzb25hbCI6eyJmaXJzdG5hbWUiOiJKb2huIiwibGFzdG5hbWUiOiJEb2UiLCJhZ2UiOnsiYWdlIjoiMzQiLCJ5ZWFyIjoiMTk4MCIsIm1vbnRoIjoiNCIsImRheSI6IjE1In0sImNvbnRhY3RzIjpbeyJlbWFpbCI6Im15bmFtZUBleGFtcGxlLmNvbSIsInBob25lIjoiMDAzOSAzNDcgNzU3NjU3NyJ9XSwiZ2VuZGVyIjoiTUFMRSIsImNvbXBhbnkiOiJMaXZlUGVyc29uIn19XSwiaWF0IjoxNTMyMTAxMzg2LCJleHAiOjc1MzIxMDEzODZ9.MFZV1I85Knv4IfUb8FJIknpj1E3Rb6I4EPicRtocUS70-iK6Cy0pV5spp2u36arw34S1V-uGjbU2c2DMUHwiK7gIBq1RoGFQlzzk54GsmdopvaZ715HR_hPMZ-hT_gzktRKz5v7Kh1KCgk7oktpPtJaIMHPqstDKj141ObeBMtzAjyr_uQJXrQiGdKpeM8iRhEbvYvJCAHbdqZ-a1V3dHDF4q1d7OuawyUjjWVOWM2GEm2JRarHC6WfpFmgvjm9vyw7hDNH6xV58uITZcL1I_2MYD_jcKtVeKv2bJBZDSjnysOZv4pq_Ht5ZVfExR-PUDXnysqpm8oZoFJNyZUy8Dg";
	 callback(token);	
     
 };
 
  </script>
  


	
</body>
  

  
</html>
