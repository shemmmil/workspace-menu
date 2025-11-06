import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$4 = ".button-module_button__oZUwn{align-items:center;border:none;border-radius:.375rem;cursor:pointer;display:inline-flex;flex-shrink:0;font-size:.875rem;font-weight:500;gap:.5rem;justify-content:center;line-height:1.25rem;outline:none;transition:all .15s ease-in-out;white-space:nowrap}.button-module_button__oZUwn:disabled{opacity:.5;pointer-events:none}.button-module_button__oZUwn:focus-visible{outline:3px solid rgba(156,163,175,.5);outline-offset:2px}.button-module_default__ttQOq{background-color:#18181b;color:#fafafa}.button-module_default__ttQOq:hover:not(:disabled){background-color:rgba(24,24,27,.9)}.button-module_destructive__giqF6{background-color:#ef4444;color:#fff}.button-module_destructive__giqF6:hover:not(:disabled){background-color:rgba(239,68,68,.9)}.button-module_outline__K9Dje{background-color:#fff;border:1px solid #e4e4e7;box-shadow:0 1px 2px 0 rgba(0,0,0,.05)}.button-module_outline__K9Dje:hover:not(:disabled),.button-module_secondary__b9hPX{background-color:#f4f4f5;color:#18181b}.button-module_secondary__b9hPX:hover:not(:disabled){background-color:hsla(240,5%,96%,.8)}.button-module_ghost__d3Zpx{background-color:transparent}.button-module_ghost__d3Zpx:hover:not(:disabled){background-color:#f4f4f5;color:#18181b}.button-module_link__Y0HuD{background-color:transparent;color:#18181b;text-decoration:underline;text-underline-offset:4px}.button-module_link__Y0HuD:hover:not(:disabled){text-decoration:underline}.button-module_sizeDefault__sW9fZ{height:2.25rem;padding:.5rem 1rem}.button-module_sizeDefault__sW9fZ:has(svg){padding:.5rem .75rem}.button-module_sizeSm__JnfjC{border-radius:.375rem;gap:.375rem;height:2rem;padding:.5rem .75rem}.button-module_sizeSm__JnfjC:has(svg){padding:.5rem .625rem}.button-module_sizeLg__HxTV0{border-radius:.375rem;height:2.5rem;padding:.5rem 1.5rem}.button-module_sizeLg__HxTV0:has(svg){padding:.5rem 1rem}.button-module_sizeIcon__Fp7-g{height:2.25rem;padding:0;width:2.25rem}.button-module_sizeIconSm__C96a7{height:2rem;padding:0;width:2rem}.button-module_sizeIconLg__DHIKX{height:2.5rem;padding:0;width:2.5rem}.button-module_button__oZUwn svg{flex-shrink:0;height:1rem;pointer-events:none;width:1rem}";
var styles$4 = {"button":"button-module_button__oZUwn","default":"button-module_default__ttQOq","destructive":"button-module_destructive__giqF6","outline":"button-module_outline__K9Dje","secondary":"button-module_secondary__b9hPX","ghost":"button-module_ghost__d3Zpx","link":"button-module_link__Y0HuD","sizeDefault":"button-module_sizeDefault__sW9fZ","sizeSm":"button-module_sizeSm__JnfjC","sizeLg":"button-module_sizeLg__HxTV0","sizeIcon":"button-module_sizeIcon__Fp7-g","sizeIconSm":"button-module_sizeIconSm__C96a7","sizeIconLg":"button-module_sizeIconLg__DHIKX"};
styleInject(css_248z$4);

const Button = React.forwardRef(({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const sizeClass = {
        default: styles$4.sizeDefault,
        sm: styles$4.sizeSm,
        lg: styles$4.sizeLg,
        icon: styles$4.sizeIcon,
        "icon-sm": styles$4.sizeIconSm,
        "icon-lg": styles$4.sizeIconLg,
    }[size];
    const variantClass = styles$4[variant];
    return (jsx("button", { ref: ref, className: `${styles$4.button} ${variantClass} ${sizeClass} ${className}`, ...props }));
});
Button.displayName = "Button";

const BarChart3 = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M3 3v18h18" }), jsx("path", { d: "M18 17V9" }), jsx("path", { d: "M13 17V5" }), jsx("path", { d: "M8 17v-3" })] }));
const Brain = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" }), jsx("path", { d: "M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" })] }));
const ChevronRight = ({ className, ...props }) => (jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: jsx("path", { d: "m9 18 6-6-6-6" }) }));
const ChevronsUpDown = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "m7 15 5 5 5-5" }), jsx("path", { d: "m7 9 5-5 5 5" })] }));
const HandMetal = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4" }), jsx("path", { d: "M14 11V9a2 2 0 1 0-4 0v2" }), jsx("path", { d: "M10 10.5V5a2 2 0 1 0-4 0v9" }), jsx("path", { d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5" })] }));
const Headphones = ({ className, ...props }) => (jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: jsx("path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" }) }));
const LayoutGrid = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("rect", { x: "3", y: "3", width: "7", height: "7" }), jsx("rect", { x: "14", y: "3", width: "7", height: "7" }), jsx("rect", { x: "14", y: "14", width: "7", height: "7" }), jsx("rect", { x: "3", y: "14", width: "7", height: "7" })] }));
const ExternalLink = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }), jsx("polyline", { points: "15 3 21 3 21 9" }), jsx("line", { x1: "10", y1: "14", x2: "21", y2: "3" })] }));
const Mail = ({ className, ...props }) => (jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }), jsx("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })] }));
const Newspaper = ({ className, ...props }) => (jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" }), jsx("path", { d: "M18 14h-8" }), jsx("path", { d: "M15 18h-5" }), jsx("path", { d: "M10 6h8v4h-8V6Z" })] }));
const FileCheck2 = ({ className, ...props }) => (jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" }), jsx("polyline", { points: "14 2 14 8 20 8" }), jsx("path", { d: "m3 15 2 2 4-4" })] }));
const PencilRuler = ({ className, ...props }) => (jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "m15 5 4 4" }), jsx("path", { d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" }), jsx("path", { d: "m8 6 2-2" }), jsx("path", { d: "m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" }), jsx("path", { d: "m18 16 2-2" }), jsx("path", { d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" })] }));
const Handshake = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "m11 17 2 2a1 1 0 1 0 3-3" }), jsx("path", { d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" }), jsx("path", { d: "m21 3 1 11h-2" }), jsx("path", { d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" }), jsx("path", { d: "M3 4h8" })] }));
const BookOpen = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }), jsx("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })] }));
const HeadsetIcon = ({ className, ...props }) => (jsxs("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z" }), jsx("path", { d: "M21 16v2a4 4 0 0 1-4 4h-5" })] }));
const XIcon = ({ className, ...props }) => (jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: className, ...props, children: [jsx("path", { d: "M18 6 6 18" }), jsx("path", { d: "m6 6 12 12" })] }));
// Custom component icons
const OneCIcon = () => (jsx("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-label": "1C", children: jsx("path", { d: "M7.27275 7.27274V24.7272H2.90906V13.0909H0V8.72724H2.90906V7.27274H7.27275ZM21.5273 14.5454H26.0364C25.3091 10.4727 21.8182 7.27274 17.4545 7.27274C12.6545 7.27274 8.72725 11.2 8.72725 16C8.72725 20.7026 12.4969 24.5724 17.1636 24.7272H32V20.3636H17.4546C13.3125 20.2708 11.9342 15.7128 14.1375 13.1359C16.3177 10.6042 20.4394 11.4068 21.5386 14.577", fill: "#F59E0B" }) }));
const MacroERPIcon = () => (jsxs("svg", { width: "32", height: "26", viewBox: "0 0 32 26", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-label": "MacroERP", children: [jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.5224 -0.00979614L16.0001 5.32204L6.47779 -0.00979614L0 3.6171L16.0001 12.5753L31.9997 3.6171L25.5224 -0.00979614Z", fill: "#C85FA5" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9996 3.61734L16 12.5755V21.5321L24.0006 17.0532V26.0098L31.9996 21.5311V3.61734Z", fill: "#7391C8" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 3.61734L16.0001 12.5755V21.5321L7.99951 17.0532V26.0098L0 21.5311V3.61734Z", fill: "#50648C" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24.0006 17.0529L16 21.5318L24.0006 26.0095V17.0529Z", fill: "#AAAAAA" }), jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 17.0529L16.0006 21.5318L8 26.0095V17.0529Z", fill: "#D2D2D2" })] }));
const SensataServicesIcon = () => (jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M4.00004 17.3333H5.33337V26.6666C5.33337 28.1373 6.52938 29.3333 8.00004 29.3333H24C25.4707 29.3333 26.6667 28.1373 26.6667 26.6666V17.3333H28C28.2637 17.3333 28.5214 17.255 28.7407 17.1085C28.9599 16.962 29.1307 16.7538 29.2316 16.5102C29.3325 16.2666 29.3589 15.9985 29.3075 15.7399C29.2561 15.4813 29.1291 15.2438 28.9427 15.0573L16.9427 3.05731C16.6927 2.80735 16.3536 2.66693 16 2.66693C15.6465 2.66693 15.3074 2.80735 15.0574 3.05731L3.05737 15.0573C2.87096 15.2438 2.74402 15.4813 2.6926 15.7399C2.64117 15.9985 2.66758 16.2666 2.76847 16.5102C2.86936 16.7538 3.04022 16.962 3.25943 17.1085C3.47864 17.255 3.73637 17.3333 4.00004 17.3333ZM16 5.88531L24 13.8853V20L24.0014 26.6666H8.00004V13.8853L16 5.88531Z", fill: "#4346A2" }), jsx("path", { d: "M16 24C20.9374 24 22.5347 19.2814 22.6 19.0814L20.0667 18.2534C20.056 18.284 19.0254 21.3334 16 21.3334C13.016 21.3334 11.9734 18.372 11.932 18.2454L9.40002 19.0814C9.46536 19.2814 11.0627 24 16 24Z", fill: "#4346A2" })] }));
const RefbookIcon = () => (jsx("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M5.33325 26V5.99996C5.33325 5.1159 5.68444 4.26806 6.30956 3.64294C6.93468 3.01782 7.78253 2.66663 8.66659 2.66663H26.6666V29.3333H8.66659C7.78253 29.3333 6.93468 28.9821 6.30956 28.357C5.68444 27.7319 5.33325 26.884 5.33325 26ZM5.33325 26C5.33325 25.1159 5.68444 24.2681 6.30956 23.6429C6.93468 23.0178 7.78253 22.6666 8.66659 22.6666H26.6666M10.6666 17.3333L15.9999 7.99996L21.3333 17.3333M12.1334 14.6666H19.7334", stroke: "#047857", strokeWidth: "2.9925", strokeLinecap: "round", strokeLinejoin: "round" }) }));

var css_248z$3 = ".dropdown-menu-module_dropdownMenu__MK-L9{display:inline-block;position:relative}.dropdown-menu-module_trigger__--kT9{all:unset;cursor:pointer}.dropdown-menu-module_content__tNYaz{animation:dropdown-menu-module_dropdownSlideIn__Du3sm .15s ease-out;background-color:#fff;border:1px solid #e4e4e7;border-radius:.375rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);color:#18181b;min-width:8rem;overflow-x:hidden;overflow-y:auto;padding:.25rem;position:absolute;z-index:50}.dropdown-menu-module_content__tNYaz.dropdown-menu-module_closing__PvWo9{animation:dropdown-menu-module_dropdownSlideOut__aTDnh .15s ease-out}.dropdown-menu-module_content__tNYaz[data-side=bottom]{top:calc(100% + 4px)}.dropdown-menu-module_content__tNYaz[data-side=top]{bottom:calc(100% + 4px)}.dropdown-menu-module_content__tNYaz[data-side=right]{left:calc(100% + 4px)}.dropdown-menu-module_content__tNYaz[data-side=left]{right:calc(100% + 4px)}.dropdown-menu-module_content__tNYaz[data-align=start]{left:0}.dropdown-menu-module_content__tNYaz[data-align=end]{right:0}.dropdown-menu-module_content__tNYaz[data-align=center]{left:50%;transform:translateX(-50%)}.dropdown-menu-module_item__JI4Zq{align-items:center;background:transparent;border:none;border-radius:.125rem;cursor:pointer;display:flex;font-size:.875rem;gap:.5rem;line-height:1.25rem;outline:none;padding:.375rem .5rem;position:relative;text-align:left;transition:background-color .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.dropdown-menu-module_item__JI4Zq:focus,.dropdown-menu-module_item__JI4Zq:hover:not(:disabled){background-color:#f4f4f5;color:#18181b}.dropdown-menu-module_item__JI4Zq:disabled{opacity:.5;pointer-events:none}.dropdown-menu-module_item__JI4Zq[data-variant=destructive]{color:#ef4444}.dropdown-menu-module_item__JI4Zq[data-variant=destructive]:focus{background-color:rgba(239,68,68,.1)}.dropdown-menu-module_item__JI4Zq[data-variant=destructive]:hover:not(:disabled){background-color:rgba(239,68,68,.1);color:#ef4444}.dropdown-menu-module_item__JI4Zq[data-inset]{padding-left:2rem}.dropdown-menu-module_item__JI4Zq svg{color:#71717a;flex-shrink:0;height:1rem;pointer-events:none;width:1rem}.dropdown-menu-module_checkboxItem__zQplP,.dropdown-menu-module_radioItem__MgVlq{align-items:center;border-radius:.125rem;cursor:default;display:flex;font-size:.875rem;gap:.5rem;line-height:1.25rem;outline:none;padding:.375rem .5rem .375rem 2rem;position:relative;transition:background-color .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.dropdown-menu-module_checkboxItem__zQplP:focus,.dropdown-menu-module_radioItem__MgVlq:focus{background-color:#f4f4f5;color:#18181b}.dropdown-menu-module_checkboxItem__zQplP:disabled,.dropdown-menu-module_radioItem__MgVlq:disabled{opacity:.5;pointer-events:none}.dropdown-menu-module_itemIndicator__Gri0-{align-items:center;display:flex;height:.875rem;justify-content:center;left:.5rem;pointer-events:none;position:absolute;width:.875rem}.dropdown-menu-module_itemIndicator__Gri0- svg{height:1rem;width:1rem}.dropdown-menu-module_label__d8LHk{font-size:.875rem;font-weight:500;line-height:1.25rem;padding:.5rem .5rem .375rem}.dropdown-menu-module_label__d8LHk[data-inset]{padding-left:2rem}.dropdown-menu-module_separator__jDrK0{background-color:#e4e4e7;height:1px;margin:.25rem -.25rem}.dropdown-menu-module_shortcut__bDbxM{color:#71717a;font-size:.75rem;letter-spacing:.1em;line-height:1rem;margin-left:auto}.dropdown-menu-module_subMenu__Zx6Wp{position:relative}.dropdown-menu-module_subTrigger__60e0I{align-items:center;border-radius:.125rem;cursor:default;display:flex;font-size:.875rem;gap:.5rem;line-height:1.25rem;outline:none;padding:.375rem .5rem;position:relative;transition:background-color .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;user-select:none}.dropdown-menu-module_subTrigger__60e0I:focus,.dropdown-menu-module_subTrigger__60e0I[data-state=open]{background-color:#f4f4f5;color:#18181b}.dropdown-menu-module_subTrigger__60e0I[data-inset]{padding-left:2rem}.dropdown-menu-module_subTrigger__60e0I svg{color:#71717a;flex-shrink:0;height:1rem;pointer-events:none;width:1rem}.dropdown-menu-module_subContent__NHnNQ{animation:dropdown-menu-module_dropdownSlideIn__Du3sm .15s ease-out;background-color:#fff;border:1px solid #e4e4e7;border-radius:.375rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);color:#18181b;min-width:8rem;overflow:hidden;padding:.25rem;position:absolute;z-index:50}.dropdown-menu-module_subContent__NHnNQ.dropdown-menu-module_closing__PvWo9{animation:dropdown-menu-module_dropdownSlideOut__aTDnh .15s ease-out}@keyframes dropdown-menu-module_dropdownSlideIn__Du3sm{0%{opacity:0;transform:scale(.95) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes dropdown-menu-module_dropdownSlideOut__aTDnh{0%{opacity:1;transform:scale(1) translateY(0)}to{opacity:0;transform:scale(.95) translateY(-10px)}}";
var styles$3 = {"dropdownMenu":"dropdown-menu-module_dropdownMenu__MK-L9","trigger":"dropdown-menu-module_trigger__--kT9","content":"dropdown-menu-module_content__tNYaz","dropdownSlideIn":"dropdown-menu-module_dropdownSlideIn__Du3sm","closing":"dropdown-menu-module_closing__PvWo9","dropdownSlideOut":"dropdown-menu-module_dropdownSlideOut__aTDnh","group":"dropdown-menu-module_group__f-NO8","item":"dropdown-menu-module_item__JI4Zq","checkboxItem":"dropdown-menu-module_checkboxItem__zQplP","radioItem":"dropdown-menu-module_radioItem__MgVlq","itemIndicator":"dropdown-menu-module_itemIndicator__Gri0-","label":"dropdown-menu-module_label__d8LHk","separator":"dropdown-menu-module_separator__jDrK0","shortcut":"dropdown-menu-module_shortcut__bDbxM","subMenu":"dropdown-menu-module_subMenu__Zx6Wp","subTrigger":"dropdown-menu-module_subTrigger__60e0I","subContent":"dropdown-menu-module_subContent__NHnNQ"};
styleInject(css_248z$3);

const DropdownMenuContext = React.createContext(undefined);
const DropdownMenu = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (jsx(DropdownMenuContext.Provider, { value: { open, onOpenChange: setOpen }, children: jsx("div", { className: styles$3.dropdownMenu, "data-slot": "dropdown-menu", children: children }) }));
};
const DropdownMenuTrigger = ({ asChild, children }) => {
    const context = React.useContext(DropdownMenuContext);
    const handleClick = () => {
        context?.onOpenChange(!context.open);
    };
    if (asChild) {
        return React.cloneElement(children, {
            onClick: handleClick,
            "data-slot": "dropdown-menu-trigger",
        });
    }
    return (jsx("button", { "data-slot": "dropdown-menu-trigger", className: styles$3.trigger, onClick: handleClick, children: children }));
};
const DropdownMenuPortal = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
    if (!mounted)
        return null;
    return createPortal(jsx("div", { "data-workspace-menu-portal": "", children: children }), document.body);
};
const DropdownMenuContent = React.forwardRef(({ className = "", children, align = "start", side = "bottom", sideOffset = 4, ...props }, ref) => {
    const context = React.useContext(DropdownMenuContext);
    const [closing, setClosing] = useState(false);
    const contentRef = useRef(null);
    const [position, setPosition] = useState(null);
    const handleClose = useCallback(() => {
        setClosing(true);
        setTimeout(() => {
            context?.onOpenChange(false);
            setClosing(false);
        }, 150);
    }, [context]);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (contentRef.current && !contentRef.current.contains(e.target)) {
                const trigger = document.querySelector('[data-slot="dropdown-menu-trigger"]');
                if (trigger && !trigger.contains(e.target)) {
                    handleClose();
                }
            }
        };
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        if (context?.open) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscape);
            // Calculate position
            const trigger = document.querySelector('[data-slot="dropdown-menu-trigger"]');
            if (trigger && contentRef.current) {
                const triggerRect = trigger.getBoundingClientRect();
                const contentRect = contentRef.current.getBoundingClientRect();
                let top = triggerRect.bottom + sideOffset;
                let left = triggerRect.left;
                if (side === "top") {
                    top = triggerRect.top - contentRect.height - sideOffset;
                }
                else if (side === "right") {
                    top = triggerRect.top;
                    left = triggerRect.right + sideOffset;
                }
                else if (side === "left") {
                    top = triggerRect.top;
                    left = triggerRect.left - contentRect.width - sideOffset;
                }
                if (align === "end") {
                    left = triggerRect.right - contentRect.width;
                }
                else if (align === "center") {
                    left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
                }
                setPosition({ top, left });
            }
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [context?.open, handleClose, align, side, sideOffset]);
    if (!context?.open)
        return null;
    return (jsx(DropdownMenuPortal, { children: jsx("div", { ref: contentRef, "data-slot": "dropdown-menu-content", "data-side": side, "data-align": align, className: `${styles$3.content} ${closing ? styles$3.closing : ""} ${className}`, style: position ? { position: "fixed", top: `${position.top}px`, left: `${position.left}px` } : {}, ...props, children: children }) }));
});
DropdownMenuContent.displayName = "DropdownMenuContent";
const DropdownMenuGroup = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "dropdown-menu-group", className: `${styles$3.group} ${className}`, role: "group", ...props }));
});
DropdownMenuGroup.displayName = "DropdownMenuGroup";
const DropdownMenuItem = React.forwardRef(({ className = "", inset, variant = "default", disabled, children, onClick, ...props }, ref) => {
    const context = React.useContext(DropdownMenuContext);
    const handleClick = (e) => {
        if (disabled)
            return;
        onClick?.(e);
        context?.onOpenChange(false);
    };
    return (jsx("div", { ref: ref, "data-slot": "dropdown-menu-item", "data-inset": inset ? "true" : undefined, "data-variant": variant, className: `${styles$3.item} ${className}`, onClick: handleClick, role: "menuitem", tabIndex: disabled ? -1 : 0, "aria-disabled": disabled, ...props, children: children }));
});
DropdownMenuItem.displayName = "DropdownMenuItem";
const DropdownMenuCheckboxItem = React.forwardRef(({ className = "", children, checked, onCheckedChange, onClick, ...props }, ref) => {
    const handleClick = (e) => {
        onClick?.(e);
        onCheckedChange?.(!checked);
    };
    return (jsxs("div", { ref: ref, "data-slot": "dropdown-menu-checkbox-item", className: `${styles$3.checkboxItem} ${className}`, onClick: handleClick, role: "menuitemcheckbox", "aria-checked": checked, tabIndex: 0, ...props, children: [jsx("span", { className: styles$3.itemIndicator, children: checked && (jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: jsx("polyline", { points: "20 6 9 17 4 12" }) })) }), children] }));
});
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
const DropdownMenuRadioGroup = React.forwardRef(({ className = "", children, value, onValueChange, ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "dropdown-menu-radio-group", className: className, role: "radiogroup", ...props, children: React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    checked: child.props.value === value,
                    onValueChange,
                });
            }
            return child;
        }) }));
});
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";
const DropdownMenuRadioItem = React.forwardRef(({ className = "", children, value, checked, onValueChange, onClick, ...props }, ref) => {
    const handleClick = (e) => {
        onClick?.(e);
        onValueChange?.(value);
    };
    return (jsxs("div", { ref: ref, "data-slot": "dropdown-menu-radio-item", className: `${styles$3.radioItem} ${className}`, onClick: handleClick, role: "menuitemradio", "aria-checked": checked, tabIndex: 0, ...props, children: [jsx("span", { className: styles$3.itemIndicator, children: checked && (jsx("svg", { width: "8", height: "8", viewBox: "0 0 8 8", fill: "currentColor", children: jsx("circle", { cx: "4", cy: "4", r: "4" }) })) }), children] }));
});
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
const DropdownMenuLabel = React.forwardRef(({ className = "", inset, ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "dropdown-menu-label", "data-inset": inset ? "true" : undefined, className: `${styles$3.label} ${className}`, ...props }));
});
DropdownMenuLabel.displayName = "DropdownMenuLabel";
const DropdownMenuSeparator = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "dropdown-menu-separator", className: `${styles$3.separator} ${className}`, role: "separator", ...props }));
});
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
const DropdownMenuShortcut = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("span", { ref: ref, "data-slot": "dropdown-menu-shortcut", className: `${styles$3.shortcut} ${className}`, ...props }));
});
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
const DropdownMenuSub = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (jsx("div", { className: styles$3.subMenu, "data-slot": "dropdown-menu-sub", children: React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                    open,
                    onOpenChange: setOpen,
                });
            }
            return child;
        }) }));
};
const DropdownMenuSubTrigger = React.forwardRef(({ className = "", inset, children, open, onOpenChange, ...props }, ref) => {
    const handleClick = () => {
        onOpenChange?.(!open);
    };
    return (jsxs("div", { ref: ref, "data-slot": "dropdown-menu-sub-trigger", "data-inset": inset ? "true" : undefined, "data-state": open ? "open" : "closed", className: `${styles$3.subTrigger} ${className}`, onClick: handleClick, role: "menuitem", "aria-haspopup": "true", "aria-expanded": open, tabIndex: 0, ...props, children: [children, jsx(ChevronRight, { className: "ml-auto" })] }));
});
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
const DropdownMenuSubContent = React.forwardRef(({ className = "", children, open, ...props }, ref) => {
    const [closing, setClosing] = useState(false);
    if (!open)
        return null;
    return (jsx("div", { ref: ref, "data-slot": "dropdown-menu-sub-content", className: `${styles$3.subContent} ${closing ? styles$3.closing : ""} ${className}`, role: "menu", ...props, children: children }));
});
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

var css_248z$2 = ".dialog-module_overlay__iPYRg{animation:dialog-module_fadeIn__iHT0a .2s ease-out;background-color:rgba(0,0,0,.5);inset:0;position:fixed;z-index:50}.dialog-module_overlay__iPYRg.dialog-module_closing__HTkpP{animation:dialog-module_fadeOut__aeKA2 .2s ease-out}.dialog-module_content__eRYv9{animation:dialog-module_dialogSlideIn__MGhkj .2s ease-out;background-color:#fff;border:1px solid #e4e4e7;border-radius:.5rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);display:grid;gap:1rem;left:50%;max-width:calc(100% - 2rem);padding:1.5rem;position:fixed;top:50%;translate:-50% -50%;width:100%;z-index:50}.dialog-module_content__eRYv9.dialog-module_closing__HTkpP{animation:dialog-module_dialogSlideOut__ctbD8 .2s ease-out}@media (min-width:640px){.dialog-module_content__eRYv9{max-width:32rem}}.dialog-module_closeButton__iASX4{align-items:center;background:transparent;border:none;border-radius:.25rem;cursor:pointer;display:flex;justify-content:center;opacity:.7;padding:.25rem;position:absolute;right:1rem;top:1rem;transition:opacity .15s ease-in-out}.dialog-module_closeButton__iASX4:hover{opacity:1}.dialog-module_closeButton__iASX4:focus{outline:2px solid #9ca3af;outline-offset:2px}.dialog-module_closeButton__iASX4:disabled{pointer-events:none}.dialog-module_closeButton__iASX4 svg{flex-shrink:0;height:1rem;pointer-events:none;width:1rem}.dialog-module_header__jWMk3{display:flex;flex-direction:column;gap:.5rem;text-align:center}@media (min-width:640px){.dialog-module_header__jWMk3{text-align:left}}.dialog-module_footer__oX4kh{display:flex;flex-direction:column-reverse;gap:.5rem}@media (min-width:640px){.dialog-module_footer__oX4kh{flex-direction:row;justify-content:flex-end}}.dialog-module_title__3Vs9k{font-size:1.125rem;font-weight:600;line-height:1}.dialog-module_description__CHS9A{color:#71717a;font-size:.875rem;line-height:1.25rem}.dialog-module_srOnly__pkv8a{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}@keyframes dialog-module_fadeIn__iHT0a{0%{opacity:0}to{opacity:1}}@keyframes dialog-module_fadeOut__aeKA2{0%{opacity:1}to{opacity:0}}@keyframes dialog-module_dialogSlideIn__MGhkj{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}@keyframes dialog-module_dialogSlideOut__ctbD8{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.95)}}";
var styles$2 = {"overlay":"dialog-module_overlay__iPYRg","fadeIn":"dialog-module_fadeIn__iHT0a","closing":"dialog-module_closing__HTkpP","fadeOut":"dialog-module_fadeOut__aeKA2","content":"dialog-module_content__eRYv9","dialogSlideIn":"dialog-module_dialogSlideIn__MGhkj","dialogSlideOut":"dialog-module_dialogSlideOut__ctbD8","closeButton":"dialog-module_closeButton__iASX4","header":"dialog-module_header__jWMk3","footer":"dialog-module_footer__oX4kh","title":"dialog-module_title__3Vs9k","description":"dialog-module_description__CHS9A","srOnly":"dialog-module_srOnly__pkv8a"};
styleInject(css_248z$2);

const DialogContext = React.createContext(undefined);
const Dialog = ({ open, onOpenChange, children, }) => {
    return (jsx(DialogContext.Provider, { value: { open: open || false, onOpenChange: onOpenChange || (() => { }) }, children: children }));
};
const DialogTrigger = ({ children, onClick, ...props }) => {
    const context = React.useContext(DialogContext);
    const handleClick = (e) => {
        onClick?.(e);
        context?.onOpenChange(true);
    };
    return (jsx("button", { onClick: handleClick, ...props, children: children }));
};
const DialogPortal = ({ children }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);
    if (!mounted)
        return null;
    return createPortal(jsx("div", { "data-workspace-menu-portal": "", children: children }), document.body);
};
const DialogOverlay = React.forwardRef(({ className = "", closing, ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "dialog-overlay", className: `${styles$2.overlay} ${closing ? styles$2.closing : ""} ${className}`, ...props }));
});
DialogOverlay.displayName = "DialogOverlay";
const DialogContent = React.forwardRef(({ className = "", children, showCloseButton = true, style, ...props }, ref) => {
    const context = React.useContext(DialogContext);
    const [closing, setClosing] = useState(false);
    const contentRef = React.useRef(null);
    const handleClose = useCallback(() => {
        setClosing(true);
        setTimeout(() => {
            context?.onOpenChange(false);
            setClosing(false);
        }, 200);
    }, [context]);
    const handleOverlayClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            handleClose();
        }
    }, [handleClose]);
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                handleClose();
            }
        };
        if (context?.open) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [context?.open, handleClose]);
    if (!context?.open)
        return null;
    return (jsxs(DialogPortal, { children: [jsx(DialogOverlay, { closing: closing, onClick: handleOverlayClick }), jsxs("div", { ref: contentRef, "data-slot": "dialog-content", className: `${styles$2.content} ${closing ? styles$2.closing : ""} ${className}`, style: style, role: "dialog", "aria-modal": "true", ...props, children: [children, showCloseButton && (jsxs("button", { "data-slot": "dialog-close", className: styles$2.closeButton, onClick: handleClose, "aria-label": "Close", children: [jsx(XIcon, {}), jsx("span", { className: styles$2.srOnly, children: "Close" })] }))] })] }));
});
DialogContent.displayName = "DialogContent";
const DialogHeader = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "dialog-header", className: `${styles$2.header} ${className}`, ...props }));
});
DialogHeader.displayName = "DialogHeader";
const DialogFooter = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "dialog-footer", className: `${styles$2.footer} ${className}`, ...props }));
});
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("h2", { ref: ref, "data-slot": "dialog-title", className: `${styles$2.title} ${className}`, ...props }));
});
DialogTitle.displayName = "DialogTitle";
const DialogDescription = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("p", { ref: ref, "data-slot": "dialog-description", className: `${styles$2.description} ${className}`, ...props }));
});
DialogDescription.displayName = "DialogDescription";
const DialogClose = ({ children, onClick, ...props }) => {
    const context = React.useContext(DialogContext);
    const handleClick = (e) => {
        onClick?.(e);
        context?.onOpenChange(false);
    };
    return (jsx("button", { "data-slot": "dialog-close", onClick: handleClick, ...props, children: children }));
};

var css_248z$1 = ".card-module_card__3wuz1{background-color:#fff;border:1px solid #e4e4e7;border-radius:.75rem;box-shadow:0 1px 2px 0 rgba(0,0,0,.05);display:flex;flex-direction:column;gap:1.5rem;padding:1.5rem}.card-module_cardHeader__pqwLn{align-items:start;container-type:inline-size;display:grid;gap:.5rem;grid-auto-rows:min-content;grid-template-rows:auto auto;padding:0 1.5rem}.card-module_cardHeader__pqwLn:has([data-slot=card-action]){grid-template-columns:1fr auto}.card-module_cardHeader__pqwLn.card-module_borderBottom__ZbZO7{padding-bottom:1.5rem}.card-module_cardTitle__Ngfsy{font-weight:600;line-height:1}.card-module_cardDescription__4FhVx{color:#71717a;font-size:.875rem;line-height:1.25rem}.card-module_cardAction__a8y3Q{align-self:start;grid-column-start:2;grid-row:span 2/span 2;grid-row-start:1;justify-self:end}.card-module_cardContent__torbQ{padding:0 1.5rem}.card-module_cardFooter__8KBX0{align-items:center;display:flex;padding:0 1.5rem}.card-module_cardFooter__8KBX0.card-module_borderTop__rO9Sw{padding-top:1.5rem}";
var styles$1 = {"card":"card-module_card__3wuz1","cardHeader":"card-module_cardHeader__pqwLn","borderBottom":"card-module_borderBottom__ZbZO7","cardTitle":"card-module_cardTitle__Ngfsy","cardDescription":"card-module_cardDescription__4FhVx","cardAction":"card-module_cardAction__a8y3Q","cardContent":"card-module_cardContent__torbQ","cardFooter":"card-module_cardFooter__8KBX0","borderTop":"card-module_borderTop__rO9Sw"};
styleInject(css_248z$1);

const Card = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "card", className: `${styles$1.card} ${className}`, ...props }));
});
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "card-header", className: `${styles$1.cardHeader} ${className}`, ...props }));
});
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "card-title", className: `${styles$1.cardTitle} ${className}`, ...props }));
});
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "card-description", className: `${styles$1.cardDescription} ${className}`, ...props }));
});
CardDescription.displayName = "CardDescription";
const CardAction = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "card-action", className: `${styles$1.cardAction} ${className}`, ...props }));
});
CardAction.displayName = "CardAction";
const CardContent = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "card-content", className: `${styles$1.cardContent} ${className}`, ...props }));
});
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className = "", ...props }, ref) => {
    return (jsx("div", { ref: ref, "data-slot": "card-footer", className: `${styles$1.cardFooter} ${className}`, ...props }));
});
CardFooter.displayName = "CardFooter";

var css_248z = ".widget-module_triggerButton__Z1a56{justify-content:space-between;padding:.625rem 1rem!important;width:100%}.widget-module_triggerContent__RBtt-{align-items:center;display:flex;gap:.5rem}.widget-module_dropdownContent__aOS7Q{width:14rem}.widget-module_allServicesItem__KLt4R{align-items:center;justify-content:space-between}.widget-module_allServicesContent__wDx2Y{align-items:center;display:flex;gap:.5rem}.widget-module_dialogContent__94J6s{overflow-y:auto;padding:1.5rem}.widget-module_dialogHeader__QjUgO{height:-moz-fit-content;height:fit-content}.widget-module_dialogTitle__GMrWa{font-size:1.25rem;font-weight:600;line-height:1.75rem}.widget-module_appsGrid__qq2EM{display:grid;gap:1rem;grid-template-columns:repeat(3,1fr);margin-top:1.5rem}.widget-module_cardClickable__6PMQI{cursor:pointer;transition:box-shadow .15s ease-in-out}.widget-module_cardClickable__6PMQI:hover{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.widget-module_cardContent__-if21{padding:1rem}.widget-module_cardHeader__PTsr-{align-items:start;display:flex;justify-content:space-between;margin-bottom:.75rem;position:relative}.widget-module_iconWrapper__gxQna{align-items:center;display:flex;gap:.75rem;position:relative}.widget-module_iconContainer__cZAEt{position:relative;z-index:10}.widget-module_iconBg__net9X{border-radius:.1875rem;height:1.75rem;left:1rem;position:absolute;top:.5rem;width:1.5rem;z-index:0}.widget-module_externalLinkButton__Q4ixE{cursor:pointer;padding:0}.widget-module_appTitle__sqALF{color:#09090b;font-size:.875rem;font-weight:700;line-height:1.25rem;line-height:1.375;margin-bottom:.5rem}.widget-module_appDescription__uFpTn{color:#64748b;font-size:.75rem;line-height:1rem;line-height:1.625}.widget-module_iconSmall__E-vOL{height:1rem;width:1rem}.widget-module_iconBrand__6-l7x{color:#5c60cc;height:1rem;width:1rem}.widget-module_iconMuted__fLT7o{color:#3f3f46;height:1rem;width:1rem}.widget-module_iconGreen__H0pIx{color:#65a30d;height:1rem;width:1rem}.widget-module_iconFuchsia__uUo2p{color:#a21caf;height:1rem;width:1rem}.widget-module_iconIndigo__lq5uT{color:#4f46e5;height:1rem;width:1rem}.widget-module_iconBlue__pWzV2{color:#4346a2;height:1rem;width:1rem}.widget-module_iconBlueLarge__VnFUb{color:#4346a2;height:2rem;width:2rem}.widget-module_iconOrangeLarge__i8yt5{color:#ea580c;height:2rem;width:2rem}.widget-module_iconIndigoLarge__-IelA{color:#4f46e5;height:2rem;width:2rem}.widget-module_iconLimeLarge__h-lgn{color:#65a30d;height:2rem;width:2rem}.widget-module_iconFuchsiaLarge__rCnAC{color:#c026d3;height:2rem;width:2rem}.widget-module_iconBlueLargePrimary__HeRDG{color:#2563eb;height:2rem;width:2rem}.widget-module_iconRoseLarge__mPXdQ{color:#e11d48;height:2rem;width:2rem}.widget-module_bgBlue__OCHpo{background-color:#ebecff}.widget-module_bgOrange__fp15P{background-color:#fef3c7}.widget-module_bgIndigo__-1bNU{background-color:#e0e7ff}.widget-module_bgLime__Uaj1g{background-color:#ecfccb}.widget-module_bgFuchsia__fOT81{background-color:#fae8ff}.widget-module_bgBluePrimary__-aI22{background-color:#dbeafe}.widget-module_bgAmber__MJw6X{background-color:#fef3c7}.widget-module_bgPink__imJf8{background-color:#fce7f3}.widget-module_bgRose__bcT-E{background-color:#ffe4e6}.widget-module_bgEmerald__mdGJb{background-color:#d1fae5}";
var styles = {"root":"widget-module_root__xkD2M","triggerButton":"widget-module_triggerButton__Z1a56","triggerContent":"widget-module_triggerContent__RBtt-","dropdownContent":"widget-module_dropdownContent__aOS7Q","allServicesItem":"widget-module_allServicesItem__KLt4R","allServicesContent":"widget-module_allServicesContent__wDx2Y","dialogContent":"widget-module_dialogContent__94J6s","dialogHeader":"widget-module_dialogHeader__QjUgO","dialogTitle":"widget-module_dialogTitle__GMrWa","appsGrid":"widget-module_appsGrid__qq2EM","cardClickable":"widget-module_cardClickable__6PMQI","cardContent":"widget-module_cardContent__-if21","cardHeader":"widget-module_cardHeader__PTsr-","iconWrapper":"widget-module_iconWrapper__gxQna","iconContainer":"widget-module_iconContainer__cZAEt","iconBg":"widget-module_iconBg__net9X","externalLinkButton":"widget-module_externalLinkButton__Q4ixE","appTitle":"widget-module_appTitle__sqALF","appDescription":"widget-module_appDescription__uFpTn","iconSmall":"widget-module_iconSmall__E-vOL","iconBrand":"widget-module_iconBrand__6-l7x","iconMuted":"widget-module_iconMuted__fLT7o","iconGreen":"widget-module_iconGreen__H0pIx","iconFuchsia":"widget-module_iconFuchsia__uUo2p","iconIndigo":"widget-module_iconIndigo__lq5uT","iconBlue":"widget-module_iconBlue__pWzV2","iconBlueLarge":"widget-module_iconBlueLarge__VnFUb","iconOrangeLarge":"widget-module_iconOrangeLarge__i8yt5","iconIndigoLarge":"widget-module_iconIndigoLarge__-IelA","iconLimeLarge":"widget-module_iconLimeLarge__h-lgn","iconFuchsiaLarge":"widget-module_iconFuchsiaLarge__rCnAC","iconBlueLargePrimary":"widget-module_iconBlueLargePrimary__HeRDG","iconRoseLarge":"widget-module_iconRoseLarge__mPXdQ","bgBlue":"widget-module_bgBlue__OCHpo","bgOrange":"widget-module_bgOrange__fp15P","bgIndigo":"widget-module_bgIndigo__-1bNU","bgLime":"widget-module_bgLime__Uaj1g","bgFuchsia":"widget-module_bgFuchsia__fOT81","bgBluePrimary":"widget-module_bgBluePrimary__-aI22","bgAmber":"widget-module_bgAmber__MJw6X","bgPink":"widget-module_bgPink__imJf8","bgRose":"widget-module_bgRose__bcT-E","bgEmerald":"widget-module_bgEmerald__mdGJb"};
styleInject(css_248z);

// Default quick access apps
const defaultQuickAccessApps = [
    {
        id: "manager",
        title: "Панель руководителя",
        icon: jsx(BarChart3, { className: styles.iconGreen }),
        url: "https://isup.sensata.kz",
    },
    {
        id: "partners",
        title: "Портал партнеров",
        icon: jsx(Handshake, { className: styles.iconFuchsia }),
        url: "https://portal-prod.sensata.kz",
    },
    {
        id: "knowledge",
        title: "База знаний",
        icon: jsx(Brain, { className: styles.iconIndigo }),
        url: "https://wiki.sensata.kz/",
    },
    {
        id: "helpdesk",
        title: "Help Desk",
        icon: jsx(Headphones, { className: styles.iconBlue }),
        url: "https://help.sensata.kz/",
    },
];
// Default full apps list
const defaultFullApps = [
    {
        id: "corporate-mail",
        title: "Корпоративная почта",
        description: "Ваш почтовый ящик, Получение важных рассылок, Создание встреч и совещаний",
        icon: jsx(Mail, { className: styles.iconBlueLarge }),
        iconBg: styles.bgBlue,
        url: "https://mail.sensata.kz/",
    },
    {
        id: "documentolog",
        title: "Электронный документооборот Documentolog",
        description: "Служебные записки, Кадровый ЭДО, протокольные поручения",
        icon: jsx(Newspaper, { className: styles.iconOrangeLarge }),
        iconBg: styles.bgOrange,
        url: "https://doc.sensata.kz/structure/index",
    },
    {
        id: "knowledge",
        title: "База знаний",
        description: "Корпоративные стандарты, Регламенты, Шаблоны документов, Руководства и мануалы",
        icon: jsx(BarChart3, { className: styles.iconIndigoLarge }),
        iconBg: styles.bgIndigo,
        url: "https://wiki.sensata.kz/",
    },
    {
        id: "manager",
        title: "Панель Руководителя. Сервис по планированию графиков",
        description: "Паспорта проектов, универсальный сервис для планирования работ, контроль вех жизненного цикла проекта, графики СМР , отчеты по прогрессу строительства",
        icon: jsx(BarChart3, { className: styles.iconLimeLarge }),
        iconBg: styles.bgLime,
        url: "https://isup.sensata.kz/",
    },
    {
        id: "partners",
        title: "Портал партнеров (тендерная площадка)",
        description: "Объявления о тендерах, Документы для участия, Результаты тендеров, Партнерские предложения",
        icon: jsx(HandMetal, { className: styles.iconFuchsiaLarge }),
        iconBg: styles.bgFuchsia,
        url: "https://portal-prod.sensata.kz/",
    },
    {
        id: "bim360",
        title: "BIM360 (Инженерный документооборот)",
        description: "Взаимодействия между проектными организациями, ГИПами, ПТО в части получения ЭП, РП. Возможность просмотра, создания замечаний/запросов на чертежах",
        icon: jsx(FileCheck2, { className: styles.iconBlueLargePrimary }),
        iconBg: styles.bgBluePrimary,
        url: "https://accounts.autodesk.com/logon?resume=%2Fas%2FrRFI1CMk89%2Fresume%2Fas%2Fauthorization.ping&spentity=null",
    },
    {
        id: "1c-estimate",
        title: "1С:Смета",
        description: "Сметное производство, контроль бюджета переменных затрат проекта, база индикативных цен",
        icon: jsx(OneCIcon, {}),
        iconBg: styles.bgAmber,
    },
    {
        id: "macro-erp",
        title: "MacroERP",
        description: "Сервис для управления проектами в разрезе оперативного учета; Процессов «заявка на договор», «акты», «заказ и прием ТМЦ», «заявки на оплату»; Интегрирован с 1С Смета в части создания приложения договоров подряда, с Порталом партнеров для подписания с контрагентом договоров и актов через ЭЦП, с 1С Бухгалтерия в части проведение оплаты по акту или накладной",
        icon: jsx(MacroERPIcon, {}),
        iconBg: styles.bgPink,
        url: "https://macroerp.sensata.kz/",
    },
    {
        id: "plan-radar",
        title: "Plan Radar",
        description: "Создания замечаний от служба контроля качества, БиОТ",
        icon: jsx(PencilRuler, { className: styles.iconRoseLarge }),
        iconBg: styles.bgRose,
        url: "https://www.planradar.com/login?redirect=https://www.planradar.com/dr/1287990?tab=projects",
    },
    {
        id: "sensata-services",
        title: "Sensata Services",
        description: "Подача заявок, оплата услуг, голосования и уведомления от управляющей компании.",
        icon: jsx(SensataServicesIcon, {}),
        iconBg: styles.bgIndigo,
        url: "https://services.sensata.kz/",
    },
    {
        id: "refbook",
        title: "База справочников",
        description: "Администрирование справочников: юр.лиц, проекты, статьи расходов, виды работ и др.",
        icon: jsx(RefbookIcon, {}),
        iconBg: styles.bgEmerald,
        url: "https://refbook.sensata.kz/",
    },
    {
        id: "helpdesk",
        title: "Help Desk (Служба поддержки)",
        description: "Справочный центр и колл-центр поддержки партнеров",
        icon: jsx(HeadsetIcon, { className: styles.iconBlueLargePrimary }),
        url: "https://help.sensata.kz/",
        iconBg: styles.bgIndigo,
    },
    {
        id: "1c-accounting",
        title: "1С: Бухгалтерия",
        description: "Бухгалтерский учет, налоги и финансы",
        icon: jsx(OneCIcon, {}),
        iconBg: styles.bgAmber,
    },
    {
        id: "1c-hr",
        title: "1С: ЗУП",
        description: "Кадровый учет",
        icon: jsx(OneCIcon, {}),
        iconBg: styles.bgAmber,
    },
];
// Main component
const Widget = ({ currentApp, quickAccessApps = defaultQuickAccessApps, fullApps = defaultFullApps, className = "", showAllServicesButton = true, }) => {
    const [isAppsModalOpen, setIsAppsModalOpen] = useState(false);
    const handleQuickAppClick = (app) => {
        if (app.url) {
            window.open(app.url, "_blank");
        }
    };
    const handleFullAppClick = (app) => {
        if (app.url) {
            window.open(app.url, "_blank");
        }
        setIsAppsModalOpen(false);
    };
    const handleAllServicesClick = () => {
        setIsAppsModalOpen(true);
    };
    return (jsxs("div", { className: styles.root, children: [jsxs(DropdownMenu, { children: [jsx(DropdownMenuTrigger, { asChild: true, children: jsxs(Button, { variant: "outline", className: `${styles.triggerButton} ${className}`, children: [jsxs("div", { className: styles.triggerContent, children: [jsx(LayoutGrid, { className: styles.iconBrand }), "IT \u0421\u0435\u0440\u0432\u0438\u0441\u044B"] }), jsx(ChevronsUpDown, { className: styles.iconSmall })] }) }), jsx(DropdownMenuContent, { className: styles.dropdownContent, align: "start", children: jsxs(DropdownMenuGroup, { children: [quickAccessApps
                                    .filter((app) => app.id !== currentApp)
                                    .map((app) => (jsxs(DropdownMenuItem, { onClick: () => handleQuickAppClick(app), disabled: !app.url, children: [app.icon, app.title] }, app.id))), showAllServicesButton && (jsxs(DropdownMenuItem, { className: styles.allServicesItem, onClick: handleAllServicesClick, children: [jsxs("div", { className: styles.allServicesContent, children: [jsx(LayoutGrid, { className: styles.iconSmall }), "\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432"] }), jsx(ChevronRight, { className: styles.iconMuted })] }))] }) })] }), jsx(Dialog, { open: isAppsModalOpen, onOpenChange: setIsAppsModalOpen, children: jsxs(DialogContent, { className: styles.dialogContent, style: {
                        maxWidth: "calc(100vw - 240px)",
                        maxHeight: "95vh",
                    }, children: [jsx(DialogHeader, { className: styles.dialogHeader, children: jsx(DialogTitle, { className: styles.dialogTitle, children: "\u0421\u043F\u0438\u0441\u043E\u043A \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432" }) }), jsx("div", { className: styles.appsGrid, children: fullApps
                                .filter((app) => app.id !== currentApp)
                                .map((app) => (jsx(Card, { className: app.url ? styles.cardClickable : "", onClick: () => app.url && handleFullAppClick(app), children: jsxs(CardContent, { className: styles.cardContent, children: [jsxs("div", { className: styles.cardHeader, children: [jsxs("div", { className: styles.iconWrapper, children: [jsx("div", { className: styles.iconContainer, children: app.icon }), jsx("div", { className: `${styles.iconBg} ${app.iconBg}` })] }), app.url && (jsx(Button, { variant: "ghost", size: "icon", className: styles.externalLinkButton, onClick: (e) => {
                                                        e.stopPropagation();
                                                        handleFullAppClick(app);
                                                    }, children: jsx(ExternalLink, { className: styles.iconSmall }) }))] }), jsx("h3", { className: styles.appTitle, children: app.title }), jsx("p", { className: styles.appDescription, children: app.description })] }) }, app.id))) })] }) })] }));
};

export { BarChart3, BookOpen, Brain, Button, Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, ChevronRight, ChevronsUpDown, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, ExternalLink, FileCheck2, HandMetal, Handshake, Headphones, HeadsetIcon, LayoutGrid, MacroERPIcon, Mail, Newspaper, OneCIcon, PencilRuler, RefbookIcon, SensataServicesIcon, Widget, XIcon, Widget as default };
//# sourceMappingURL=index.esm.js.map
