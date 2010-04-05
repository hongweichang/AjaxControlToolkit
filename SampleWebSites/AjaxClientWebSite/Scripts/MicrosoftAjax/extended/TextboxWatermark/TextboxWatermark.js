// (c) 2010 CodePlex Foundation
(function(){var b="ExtendedWatermark";function a(){var f="WatermarkCssClass",e="WatermarkText",c=true,d="keypress",b=false,a=null;Type.registerNamespace("Sys.Extended.UI");Sys.Extended.UI.TextBoxWatermarkBehavior=function(c){var b=this;Sys.Extended.UI.TextBoxWatermarkBehavior.initializeBase(b,[c]);b._watermarkText=a;b._watermarkCssClass=a;b._focusHandler=a;b._blurHandler=a;b._keyPressHandler=a;b._propertyChangedHandler=a;b._watermarkChangedHandler=a;b._oldClassName=a;b._clearedForSubmit=a;b._maxLength=a;if(typeof WebForm_OnSubmit=="function"&&!Sys.Extended.UI.TextBoxWatermarkBehavior._originalWebForm_OnSubmit){Sys.Extended.UI.TextBoxWatermarkBehavior._originalWebForm_OnSubmit=WebForm_OnSubmit;WebForm_OnSubmit=Sys.Extended.UI.TextBoxWatermarkBehavior.WebForm_OnSubmit}};Sys.Extended.UI.TextBoxWatermarkBehavior.prototype={initialize:function(){var e=this;Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(e,"initialize");var f=e.get_element(),i=b,g=Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(e,"get_ClientState");if(g!=a&&g!=""){i=g=="Focused";Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(e,"set_ClientState",a)}e._oldClassName=f.className;e._focusHandler=Function.createDelegate(e,e._onFocus);e._blurHandler=Function.createDelegate(e,e._onBlur);e._keyPressHandler=Function.createDelegate(e,e._onKeyPress);$addHandler(f,"focus",e._focusHandler);$addHandler(f,"blur",e._blurHandler);$addHandler(f,d,e._keyPressHandler);e.registerPropertyChanged();var j=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(e.get_element()).get_Current(),h=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(e.get_element());if(""==j||e._watermarkText==j){h.set_Watermark(e._watermarkText);h.set_IsWatermarked(c)}if(i)e._onFocus();else{f.blur();e._onBlur()}e._clearedForSubmit=b;e.registerPartialUpdateEvents();e._watermarkChangedHandler=Function.createDelegate(e,e._onWatermarkChanged);h.add_WatermarkChanged(e._watermarkChangedHandler)},dispose:function(){var c=this,e=c.get_element();if(c._watermarkChangedHandler){Sys.Extended.UI.TextBoxWrapper.get_Wrapper(c.get_element()).remove_WatermarkChanged(c._watermarkChangedHandler);c._watermarkChangedHandler=a}if(e.control&&c._propertyChangedHandler){e.control.remove_propertyChanged(c._propertyChangedHandler);c._propertyChangedHandler=a}if(c._focusHandler){$removeHandler(e,"focus",c._focusHandler);c._focusHandler=a}if(c._blurHandler){$removeHandler(e,"blur",c._blurHandler);c._blurHandler=a}if(c._keyPressHandler){$removeHandler(e,d,c._keyPressHandler);c._keyPressHandler=a}Sys.Extended.UI.TextBoxWrapper.get_Wrapper(c.get_element()).get_IsWatermarked()&&c.clearText(b);Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(c,"dispose")},_onWatermarkChanged:function(){if(Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).get_IsWatermarked())this._onBlur();else this._onFocus()},clearText:function(d){var a=this.get_element(),c=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a);c.set_Value("");c.set_IsWatermarked(b);if(d){a.setAttribute("autocomplete","off");a.select()}},_onFocus:function(f){var d=this,e=d.get_element();Sys.Extended.UI.TextBoxWrapper.get_Wrapper(e).get_IsWatermarked()&&d.clearText(f?c:b);e.className=d._oldClassName;if(d._maxLength>0){d.get_element().maxLength=d._maxLength;d._maxLength=a}},_onBlur:function(){var a=this,b=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a.get_element());if(""==b.get_Current()||b.get_IsWatermarked()){if(a.get_element().maxLength>0&&a._watermarkText.length>a.get_element().maxLength){a._maxLength=a.get_element().maxLength;a.get_element().maxLength=a._watermarkText.length}a._applyWatermark()}},_applyWatermark:function(){var a=this,b=Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a.get_element());b.set_Watermark(a._watermarkText);b.set_IsWatermarked(c);if(a._watermarkCssClass)a.get_element().className=a._watermarkCssClass},_onKeyPress:function(){Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).set_IsWatermarked(b)},registerPropertyChanged:function(){var a=this,b=a.get_element();if(b.control&&!a._propertyChangedHandler){a._propertyChangedHandler=Function.createDelegate(a,a._onPropertyChanged);b.control.add_propertyChanged(a._propertyChangedHandler)}},_onPropertyChanged:function(b,a){"text"==a.get_propertyName()&&this.set_Text(Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).get_Current())},_onSubmit:function(){if(Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).get_IsWatermarked()){this.clearText(b);this._clearedForSubmit=c}},_partialUpdateEndRequest:function(d,c){var a=this;Sys.Extended.UI.TextBoxWatermarkBehavior.callBaseMethod(a,"_partialUpdateEndRequest",[d,c]);if(a.get_element()&&a._clearedForSubmit){a.get_element().blur();a._onBlur();a._clearedForSubmit=b}},get_WatermarkText:function(){return this._watermarkText},set_WatermarkText:function(b){var a=this;if(a._watermarkText!=b){a._watermarkText=b;Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a.get_element()).get_IsWatermarked()&&a._applyWatermark();a.raisePropertyChanged(e)}},get_WatermarkCssClass:function(){return this._watermarkCssClass},set_WatermarkCssClass:function(b){var a=this;if(a._watermarkCssClass!=b){a._watermarkCssClass=b;Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a.get_element()).get_IsWatermarked()&&a._applyWatermark();a.raisePropertyChanged(f)}},get_Text:function(){return Sys.Extended.UI.TextBoxWrapper.get_Wrapper(this.get_element()).get_Value()},set_Text:function(b){var a=this;if(""==b){Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a.get_element()).set_Current("");a.get_element().blur();a._onBlur()}else{a._onFocus();Sys.Extended.UI.TextBoxWrapper.get_Wrapper(a.get_element()).set_Current(b)}}};Sys.Extended.UI.TextBoxWatermarkBehavior.registerClass("Sys.Extended.UI.TextBoxWatermarkBehavior",Sys.Extended.UI.BehaviorBase);Sys.registerComponent(Sys.Extended.UI.TextBoxWatermarkBehavior,{name:"watermark",parameters:[{name:e,type:"String"},{name:f,type:"String"}]});Sys.Extended.UI.TextBoxWatermarkBehavior.WebForm_OnSubmit=function(){var d=Sys.Extended.UI.TextBoxWatermarkBehavior._originalWebForm_OnSubmit();if(d)for(var b=Sys.Application.getComponents(),a=0;a<b.length;a++){var c=b[a];Sys.Extended.UI.TextBoxWatermarkBehavior.isInstanceOfType(c)&&c._onSubmit()}return d}}if(window.Sys&&Sys.loader)Sys.loader.registerScript(b,["ExtendedBase","ExtendedCommon"],a);else a()})();