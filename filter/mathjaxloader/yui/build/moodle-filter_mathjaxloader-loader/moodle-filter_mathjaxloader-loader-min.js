YUI.add("moodle-filter_mathjaxloader-loader",function(e,t){M.filter_mathjaxloader=M.filter_mathjaxloader||{_lang:"",_configured:!1,configure:function(t){var n=document.createElement("script");n.type="text/x-mathjax-config",n[window.opera?"innerHTML":"text"]=t.mathjaxconfig,document.getElementsByTagName("head")[0].appendChild(n),this._lang=t.lang,e.on(M.core.event.FILTER_CONTENT_UPDATED,this.contentUpdated,this)},_setLocale:function(){if(!this._configured){var e=this._lang;MathJax.Hub.Queue(function(){MathJax.Localization.setLocale(e)}),MathJax.Hub.Configured(),this._configured=!0}},typeset:function(){if(!this._configured){var t=this;e.use("mathjax",function(){t._setLocale(),e.all(".filter_mathjaxloader_equation").each(function(e){MathJax.Hub.Queue(["Typeset",MathJax.Hub,e.getDOMNode()])})})}},contentUpdated:function(t){var n=this;e.use("mathjax",function(){n._setLocale(),t.nodes.each(function(e){e.all(".filter_mathjaxloader_equation").each(function(e){MathJax.Hub.Queue(["Typeset",MathJax.Hub,e.getDOMNode()])})})})}}},"@VERSION@",{requires:["moodle-core-event"]});