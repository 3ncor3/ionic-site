/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './checkbox';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../config/config';
import * as import9 from '../../util/form';
import * as import10 from '../item/item';
import * as import11 from '@angular/core/src/linker/element_ref';
import * as import12 from '@angular/forms/src/directives/control_value_accessor';
import * as import13 from '../button/button';
import * as import14 from '../button/button.ngfactory';
export var Wrapper_Checkbox = (function () {
    function Wrapper_Checkbox(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.Checkbox(p0, p1, p2, p3, p4);
        this._expr_0 = import1.UNINITIALIZED;
        this._expr_1 = import1.UNINITIALIZED;
        this._expr_2 = import1.UNINITIALIZED;
        this._expr_3 = import1.UNINITIALIZED;
        this._expr_4 = import1.UNINITIALIZED;
    }
    Wrapper_Checkbox.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_Checkbox.prototype.ngOnDestroy = function () {
        this.context.ngOnDestroy();
        (this.subscription0 && this.subscription0.unsubscribe());
    };
    Wrapper_Checkbox.prototype.check_color = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.color = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_Checkbox.prototype.check_mode = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.mode = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_Checkbox.prototype.check_checked = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.checked = currValue;
            this._expr_2 = currValue;
        }
    };
    Wrapper_Checkbox.prototype.check_disabled = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_3, currValue))) {
            this._changed = true;
            this.context.disabled = currValue;
            this._expr_3 = currValue;
        }
    };
    Wrapper_Checkbox.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_Checkbox.prototype.checkHost = function (view, componentView, el, throwOnChange) {
        var currVal_4 = this.context._disabled;
        if (import3.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            view.renderer.setElementClass(el, 'checkbox-disabled', currVal_4);
            this._expr_4 = currVal_4;
        }
    };
    Wrapper_Checkbox.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'click')) {
            var pd_sub_0 = (this.context._click($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_Checkbox.prototype.subscribe = function (view, _eventHandler, emit0) {
        this._eventHandler = _eventHandler;
        if (emit0) {
            (this.subscription0 = this.context.ionChange.subscribe(_eventHandler.bind(view, 'ionChange')));
        }
    };
    return Wrapper_Checkbox;
}());
var renderType_Checkbox_Host = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, [], {});
var View_Checkbox_Host0 = (function (_super) {
    __extends(View_Checkbox_Host0, _super);
    function View_Checkbox_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Checkbox_Host0, renderType_Checkbox_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
    }
    Object.defineProperty(View_Checkbox_Host0.prototype, "_NG_VALUE_ACCESSOR_0_4", {
        get: function () {
            if ((this.__NG_VALUE_ACCESSOR_0_4 == null)) {
                (this.__NG_VALUE_ACCESSOR_0_4 = [this._Checkbox_0_3.context]);
            }
            return this.__NG_VALUE_ACCESSOR_0_4;
        },
        enumerable: true,
        configurable: true
    });
    View_Checkbox_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ion-checkbox', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_Checkbox0(this.viewUtils, this, 0, this._el_0);
        this._Checkbox_0_3 = new Wrapper_Checkbox(this.injectorGet(import8.Config, this.parentIndex), this.injectorGet(import9.Form, this.parentIndex), this.injectorGet(import10.Item, this.parentIndex, null), new import11.ElementRef(this._el_0), this.renderer);
        this.compView_0.create(this._Checkbox_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new import7.ComponentRef_(0, this, this._el_0, this._Checkbox_0_3.context);
    };
    View_Checkbox_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.Checkbox) && (0 === requestNodeIndex))) {
            return this._Checkbox_0_3.context;
        }
        if (((token === import12.NG_VALUE_ACCESSOR) && (0 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_0_4;
        }
        return notFoundResult;
    };
    View_Checkbox_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Checkbox_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Checkbox_0_3.context.ngAfterContentInit();
            }
        }
        this._Checkbox_0_3.checkHost(this, this.compView_0, this._el_0, throwOnChange);
        this.compView_0.detectChanges(throwOnChange);
    };
    View_Checkbox_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
        this._Checkbox_0_3.ngOnDestroy();
    };
    View_Checkbox_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_Checkbox_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._Checkbox_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_Checkbox_Host0;
}(import2.AppView));
export var CheckboxNgFactory = new import7.ComponentFactory('ion-checkbox', View_Checkbox_Host0, import0.Checkbox);
var styles_Checkbox = [];
var renderType_Checkbox = import3.createRenderComponentType('', 0, import5.ViewEncapsulation.None, styles_Checkbox, {});
export var View_Checkbox0 = (function (_super) {
    __extends(View_Checkbox0, _super);
    function View_Checkbox0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_Checkbox0, renderType_Checkbox, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import1.ChangeDetectorStatus.CheckAlways);
        this._expr_6 = import1.UNINITIALIZED;
        this._expr_7 = import1.UNINITIALIZED;
        this._expr_8 = import1.UNINITIALIZED;
        this._expr_9 = import1.UNINITIALIZED;
        this._expr_10 = import1.UNINITIALIZED;
    }
    View_Checkbox0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'checkbox-icon'), null);
        this._el_1 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'checkbox-inner'), null);
        this._el_2 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', new import3.InlineArray8(8, 'class', 'item-cover', 'ion-button', 'item-cover', 'role', 'checkbox', 'type', 'button'), null);
        this.compView_2 = new import14.View_Button0(this.viewUtils, this, 2, this._el_2);
        this._Button_2_3 = new import14.Wrapper_Button('item-cover', this.parentView.injectorGet(import8.Config, this.parentIndex), new import11.ElementRef(this._el_2), this.renderer);
        this._text_3 = this.renderer.createText(null, ' ', null);
        this.compView_2.create(this._Button_2_3.context);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._el_1,
            this._el_2,
            this._text_3
        ]), null);
        return null;
    };
    View_Checkbox0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import13.Button) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 3)))) {
            return this._Button_2_3.context;
        }
        return notFoundResult;
    };
    View_Checkbox0.prototype.detectChangesInternal = function (throwOnChange) {
        if (this._Button_2_3.ngDoCheck(this, this._el_2, throwOnChange)) {
            this.compView_2.markAsCheckOnce();
        }
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_2_3.context.ngAfterContentInit();
            }
        }
        var currVal_6 = this.context._checked;
        if (import3.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_0, 'checkbox-checked', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_7 = this.context.id;
        if (import3.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementProperty(this._el_2, 'id', currVal_7);
            this._expr_7 = currVal_7;
        }
        var currVal_8 = this.context._checked;
        if (import3.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-checked', ((currVal_8 == null) ? null : currVal_8.toString()));
            this._expr_8 = currVal_8;
        }
        var currVal_9 = this.context._labelId;
        if (import3.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-labelledby', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this.context._disabled;
        if (import3.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-disabled', ((currVal_10 == null) ? null : currVal_10.toString()));
            this._expr_10 = currVal_10;
        }
        this.compView_2.detectChanges(throwOnChange);
    };
    View_Checkbox0.prototype.destroyInternal = function () {
        this.compView_2.destroy();
    };
    View_Checkbox0.prototype.visitProjectableNodesInternal = function (nodeIndex, ngContentIndex, cb, ctx) {
        if (((nodeIndex == 2) && (ngContentIndex == 0))) {
            cb(this._text_3, ctx);
        }
    };
    return View_Checkbox0;
}(import2.AppView));
//# sourceMappingURL=checkbox.ngfactory.js.map