import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "fontFamily": "Arial",
        "fontSize": 13,
        "lineHeight": 1.42857143
    },
    "h3": {
        "borderBottom": "1px solid #DFE1E5",
        "color": "#6A7280",
        "fontSize": 16,
        "paddingBottom": 15
    },
    "invalid input": {
        "borderColor": "#E93615!important",
        "boxShadow": "none!important"
    },
    "label": {
        "position": "relative",
        "display": "inline-block",
        "top": 5
    },
    "form-group label": {
        "height": 24,
        "cursor": "default",
        "marginTop": 5
    },
    "form-group label span": {
        "verticalAlign": "top"
    },
    "field": {
        "marginBottom": 10,
        "position": "relative",
        "display": "block"
    },
    "field[required] label:after": {
        "content": "'*'",
        "fontWeight": "700",
        "display": "inline-block",
        "marginLeft": 2,
        "color": "#E93616"
    },
    "fieldicon-calendar:before": {
        "position": "absolute",
        "right": 2,
        "bottom": 14,
        "top": "auto",
        "fontSize": 15,
        "color": "#6A7280"
    },
    "icon-calendar:before": {
        "content": "\\e113"
    },
    "field-validation-message": {
        "display": "none",
        "color": "#E93616",
        "marginTop": 2
    },
    "glyphicon": {
        "position": "relative",
        "top": 1,
        "display": "inline-block",
        "fontFamily": "'Glyphicons Halflings'",
        "fontStyle": "normal",
        "fontWeight": "400",
        "lineHeight": 1,
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale",
        "color": "#6A7280",
        "transition": "border linear .2s,box-shadow linear .2s"
    },
    "glyphicon-calendar:before": {
        "content": "\\e109",
        "color": "#6A7280",
        "borderColor": "transparent"
    },
    "form-control": {
        "display": "block",
        "width": "100%",
        "height": 30,
        "marginBottom": 0,
        "paddingTop": 4,
        "paddingRight": 6,
        "paddingBottom": 4,
        "paddingLeft": 6,
        "fontSize": 12,
        "lineHeight": 1.42857143,
        "verticalAlign": "middle",
        "color": "#6A7280",
        "border": "1px solid #DFE1E5",
        "borderRadius": 4
    },
    "selectform-control": {
        "backgroundImage": "linear-gradient(to bottom,rgba(255,255,255,.9),rgba(255,255,255,0))",
        "backgroundColor": "#DFE1E5",
        "WebkitBoxShadow": "inset 0 1px 1px rgba(0,0,0,.03)",
        "boxShadow": "inset 0 1px 1px rgba(0,0,0,.01)",
        "WebkitTransition": "border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s",
        "OTransition": "border-color ease-in-out .15s,box-shadow ease-in-out .15s",
        "transition": "border-color ease-in-out .15s,box-shadow ease-in-out .15s"
    },
    "required": {
        "display": "inline-block",
        "fontSize": 24,
        "color": "#E93716",
        "lineHeight": 24,
        "left": 3,
        "top": -4,
        "position": "relative"
    },
    "input-group-addon": {
        "paddingTop": 6,
        "paddingRight": 12,
        "paddingBottom": 6,
        "paddingLeft": 12,
        "fontSize": 14,
        "fontWeight": "400",
        "lineHeight": 1,
        "textAlign": "center",
        "backgroundImage": "linear-gradient(to bottom,rgba(255,255,255,.9),rgba(255,255,255,0))",
        "border": "1px solid #BEC3CC",
        "borderRadius": 4,
        "color": "#6A7280"
    },
    "input-group-addon:hover": {
        "fontFamily": "Arial",
        "backgroundColor": "#C0EDFC",
        "color": "#9299A6",
        "textDecoration": "none",
        "transition": "background-position .02s linear",
        "border": "1px solid #EDEFF2"
    },
    "[class^=\"icon-\"]": {
        "MozOsxFontSmoothing": "grayscale"
    },
    "[class*=\" icon-\"]": {
        "MozOsxFontSmoothing": "grayscale"
    },
    "icon-info-circle:before": {
        "content": "\\f05a",
        "fontSize": 18,
        "color": "#00b4f1"
    },
    "glyphicon-info-sign": {
        "top": -8,
        "left": -2,
        "fontSize": 16,
        "color": "#00b4f1",
        "background": "transparent",
        "textShadow": "2px 2px 4px rgba(0, 0, 0, .1)"
    },
    "paycor-table": {
        "border": "1px solid #BEC3CC"
    },
    "paycor-table thead tr": {
        "background": "rgb(138, 139, 142) linear-gradient(rgb(157, 159, 162), rgb(109, 110, 113)) repeat-x scroll 0px 50% / auto padding-box border-box",
        "color": "white"
    },
    "paycor-table thead tr td": {
        "borderRight": "1px solid #9299A6"
    },
    "paycor-table tbody tr td": {
        "borderRight": "1px solid #9299A6"
    },
    "tooltip-inner": {
        "maxWidth": 400,
        "width": 365,
        "textAlign": "left",
        "border": "1px solid #00B4F1",
        "color": "#6A7280",
        "background": "#C0EDFC",
        "boxShadow": "0 3px 6px rgba(0,0,0,.2)"
    },
    "tooltipright tooltip-arrow": {
        "borderRightColor": "#00B4F1",
        "background": "transparent"
    },
    "tooltipin": {
        "opacity": 1
    },
    "carrot": {
        "zIndex": 301,
        "height": 0,
        "width": 100,
        "maxWidth": 150,
        "position": "relative",
        "marginLeft": -15,
        "marginRight": -55,
        "float": "left"
    },
    "carrot:after": {
        "content": "",
        "borderColor": "#E93716  #E93716  transparent #E93716",
        "borderStyle": "solid",
        "borderWidth": 7,
        "width": 0,
        "height": 0,
        "position": "absolute",
        "left": 30
    },
    "carrot:before": {
        "content": "",
        "borderColor": "#E93716  #E93716  transparent #E93716",
        "borderStyle": "solid",
        "borderWidth": 7,
        "width": 0,
        "height": 0,
        "position": "absolute",
        "left": 30
    },
    "input-error": {
        "paddingLeft": 40,
        "color": "#E93716",
        "size": 12
    },
    "btn-icon": {
        "backgroundColor": "transparent",
        "border": "none",
        "outline": "none"
    },
    "form-control::-moz-placeholder": {
        "color": "#9299A6",
        "opacity": 1
    },
    "form-control:-ms-input-placeholder": {
        "color": "#9299A6"
    },
    "form-control::-webkit-input-placeholder": {
        "color": "#9299A6"
    },
    "datepicker": {
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "direction": "ltr"
    },
    "datepicker-inline": {
        "width": 220
    },
    "datepickerdatepicker-rtl": {
        "direction": "rtl"
    },
    "datepickerdatepicker-rtl table tr td span": {
        "float": "right"
    },
    "datepicker-dropdown": {
        "top": 0,
        "left": 0
    },
    "datepicker-dropdown:before": {
        "content": "''",
        "display": "inline-block",
        "borderLeft": "7px solid transparent",
        "borderRight": "7px solid transparent",
        "borderBottom": "7px solid #9299A6",
        "borderTop": 0,
        "borderBottomColor": "rgba(0, 0, 0, 0.2)",
        "position": "absolute"
    },
    "datepicker-dropdown:after": {
        "content": "''",
        "display": "inline-block",
        "borderLeft": "6px solid transparent",
        "borderRight": "6px solid transparent",
        "borderBottom": "6px solid #ffffff",
        "borderTop": 0,
        "position": "absolute"
    },
    "datepicker-dropdowndatepicker-orient-left:before": {
        "left": 6
    },
    "datepicker-dropdowndatepicker-orient-left:after": {
        "left": 7
    },
    "datepicker-dropdowndatepicker-orient-right:before": {
        "right": 6
    },
    "datepicker-dropdowndatepicker-orient-right:after": {
        "right": 7
    },
    "datepicker-dropdowndatepicker-orient-bottom:before": {
        "top": -7
    },
    "datepicker-dropdowndatepicker-orient-bottom:after": {
        "top": -6
    },
    "datepicker-dropdowndatepicker-orient-top:before": {
        "bottom": -7,
        "borderBottom": 0,
        "borderTop": "7px solid #9299A6"
    },
    "datepicker-dropdowndatepicker-orient-top:after": {
        "bottom": -6,
        "borderBottom": 0,
        "borderTop": "6px solid #ffffff"
    },
    "datepicker > div": {
        "display": "none"
    },
    "datepicker table": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "WebkitTouchCallout": "none",
        "WebkitUserSelect": "none",
        "KhtmlUserSelect": "none",
        "MozUserSelect": "none",
        "MsUserSelect": "none",
        "userSelect": "none"
    },
    "datepicker td": {
        "textAlign": "center",
        "width": 20,
        "height": 20,
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "border": "none"
    },
    "datepicker th": {
        "textAlign": "center",
        "width": 20,
        "height": 20,
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4,
        "border": "none"
    },
    "table-striped datepicker table tr td": {
        "backgroundColor": "transparent"
    },
    "table-striped datepicker table tr th": {
        "backgroundColor": "transparent"
    },
    "datepicker table tr tdday:hover": {
        "background": "#eeeeee",
        "cursor": "pointer"
    },
    "datepicker table tr tddayfocused": {
        "background": "#eeeeee",
        "cursor": "pointer"
    },
    "datepicker table tr tdold": {
        "color": "#9299A6"
    },
    "datepicker table tr tdnew": {
        "color": "#9299A6"
    },
    "datepicker table tr tddisabled": {
        "background": "none",
        "color": "#9299A6",
        "cursor": "default"
    },
    "datepicker table tr tddisabled:hover": {
        "background": "none",
        "color": "#9299A6",
        "cursor": "default"
    },
    "datepicker table tr tdhighlighted": {
        "background": "#d9edf7",
        "borderRadius": 0
    },
    "datepicker table tr tdtoday": {
        "backgroundColor": "#fde19a",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#000"
    },
    "datepicker table tr tdtoday:hover": {
        "backgroundColor": "#EDEFF2",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#000"
    },
    "datepicker table tr tdtodaydisabled": {
        "backgroundColor": "#EDEFF2",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#000"
    },
    "datepicker table tr tdtodaydisabled:hover": {
        "backgroundColor": "#EDEFF2",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#000"
    },
    "datepicker table tr tdtoday:hover:hover": {
        "backgroundColor": "#EDEFF2",
        "color": "#000"
    },
    "datepicker table tr tdtodaydisabled:hover:hover": {
        "backgroundColor": "#EDEFF2"
    },
    "datepicker table tr tdtoday:active": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdtoday:hover:active": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdtodaydisabled:active": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdtodaydisabled:hover:active": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdtodayactive": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdtoday:hoveractive": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdtodaydisabledactive": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdtodaydisabled:hoveractive": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdtoday:hoverdisabled": {
        "backgroundColor": "#EDEFF2"
    },
    "datepicker table tr tdtodaydisableddisabled": {
        "backgroundColor": "#EDEFF2"
    },
    "datepicker table tr tdtodaydisabled:hoverdisabled": {
        "backgroundColor": "#EDEFF2"
    },
    "datepicker table tr tdtoday[disabled]": {
        "backgroundColor": "#EDEFF2"
    },
    "datepicker table tr tdtoday:hover[disabled]": {
        "backgroundColor": "#EDEFF2"
    },
    "datepicker table tr tdtodaydisabled[disabled]": {
        "backgroundColor": "#EDEFF2"
    },
    "datepicker table tr tdtodaydisabled:hover[disabled]": {
        "backgroundColor": "#EDEFF2"
    },
    "datepicker table tr tdtodayactive:hover": {
        "color": "#fff"
    },
    "datepicker table tr tdrange": {
        "background": "#eeeeee",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "datepicker table tr tdrange:hover": {
        "background": "#eeeeee",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "datepicker table tr tdrangedisabled": {
        "background": "#eeeeee",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "datepicker table tr tdrangedisabled:hover": {
        "background": "#eeeeee",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "datepicker table tr tdrangetoday": {
        "backgroundColor": "#DFE1E5",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "datepicker table tr tdrangetoday:hover": {
        "backgroundColor": "#DFE1E5",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "datepicker table tr tdrangetodaydisabled": {
        "backgroundColor": "#DFE1E5",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "datepicker table tr tdrangetodaydisabled:hover": {
        "backgroundColor": "#DFE1E5",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "WebkitBorderRadius": 0,
        "MozBorderRadius": 0,
        "borderRadius": 0
    },
    "datepicker table tr tdrangetoday:hover:hover": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdrangetodaydisabled:hover:hover": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdrangetoday:active": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdrangetoday:hover:active": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdrangetodaydisabled:active": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdrangetodaydisabled:hover:active": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdrangetodayactive": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdrangetoday:hoveractive": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdrangetodaydisabledactive": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdrangetodaydisabled:hoveractive": {
        "backgroundColor": "#DFE1E5 \\9"
    },
    "datepicker table tr tdrangetoday:hoverdisabled": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdrangetodaydisableddisabled": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdrangetodaydisabled:hoverdisabled": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdrangetoday[disabled]": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdrangetoday:hover[disabled]": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdrangetodaydisabled[disabled]": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdrangetodaydisabled:hover[disabled]": {
        "backgroundColor": "#DFE1E5"
    },
    "datepicker table tr tdselected": {
        "backgroundColor": "#9299A6",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr tdselected:hover": {
        "backgroundColor": "#9299A6",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr tdselecteddisabled": {
        "backgroundColor": "#9299A6",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr tdselecteddisabled:hover": {
        "backgroundColor": "#9299A6",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr tdselected:hover:hover": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdselecteddisabled:hover:hover": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdselected:active": {
        "backgroundColor": "#6A7280 \\9"
    },
    "datepicker table tr tdselected:hover:active": {
        "backgroundColor": "#6A7280 \\9"
    },
    "datepicker table tr tdselecteddisabled:active": {
        "backgroundColor": "#6A7280 \\9"
    },
    "datepicker table tr tdselecteddisabled:hover:active": {
        "backgroundColor": "#6A7280 \\9"
    },
    "datepicker table tr tdselectedactive": {
        "backgroundColor": "#6A7280 \\9"
    },
    "datepicker table tr tdselected:hoveractive": {
        "backgroundColor": "#6A7280 \\9"
    },
    "datepicker table tr tdselecteddisabledactive": {
        "backgroundColor": "#6A7280 \\9"
    },
    "datepicker table tr tdselecteddisabled:hoveractive": {
        "backgroundColor": "#6A7280 \\9"
    },
    "datepicker table tr tdselected:hoverdisabled": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdselecteddisableddisabled": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdselecteddisabled:hoverdisabled": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdselected[disabled]": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdselected:hover[disabled]": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdselecteddisabled[disabled]": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdselecteddisabled:hover[disabled]": {
        "backgroundColor": "#9299A6"
    },
    "datepicker table tr tdactive": {
        "backgroundColor": "#8BE0FC",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr tdactive:hover": {
        "backgroundColor": "#8BE0FC",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr tdactivedisabled": {
        "backgroundColor": "#8BE0FC",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr tdactivedisabled:hover": {
        "backgroundColor": "#8BE0FC",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr tdactive:hover:hover": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr tdactivedisabled:hover:hover": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr tdactive:active": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr tdactive:hover:active": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr tdactivedisabled:active": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr tdactivedisabled:hover:active": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr tdactiveactive": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr tdactive:hoveractive": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr tdactivedisabledactive": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr tdactivedisabled:hoveractive": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr tdactive:hoverdisabled": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr tdactivedisableddisabled": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr tdactivedisabled:hoverdisabled": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr tdactive[disabled]": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr tdactive:hover[disabled]": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr tdactivedisabled[disabled]": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr tdactivedisabled:hover[disabled]": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td span": {
        "display": "block",
        "width": "23%",
        "height": 54,
        "lineHeight": 54,
        "float": "left",
        "marginTop": "1%",
        "marginRight": "1%",
        "marginBottom": "1%",
        "marginLeft": "1%",
        "cursor": "pointer",
        "WebkitBorderRadius": 4,
        "MozBorderRadius": 4,
        "borderRadius": 4
    },
    "datepicker table tr td span:hover": {
        "background": "#eeeeee"
    },
    "datepicker table tr td spanfocused": {
        "background": "#eeeeee"
    },
    "datepicker table tr td spandisabled": {
        "background": "none",
        "color": "#9299A6",
        "cursor": "default"
    },
    "datepicker table tr td spandisabled:hover": {
        "background": "none",
        "color": "#9299A6",
        "cursor": "default"
    },
    "datepicker table tr td spanactive": {
        "backgroundColor": "#00B4F1",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr td spanactive:hover": {
        "backgroundColor": "#8BE0FC",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr td spanactivedisabled": {
        "backgroundColor": "#8BE0FC",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr td spanactivedisabled:hover": {
        "backgroundColor": "#8BE0FC",
        "borderColor": "rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25)",
        "filter": "progid:DXImageTransform.Microsoft.gradient(enabled=false)",
        "color": "#fff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "datepicker table tr td spanactive:hover:hover": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanactivedisabled:hover:hover": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanactive:active": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr td spanactive:hover:active": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr td spanactivedisabled:active": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr td spanactivedisabled:hover:active": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr td spanactiveactive": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr td spanactive:hoveractive": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr td spanactivedisabledactive": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr td spanactivedisabled:hoveractive": {
        "backgroundColor": "#8BE0FC \\9"
    },
    "datepicker table tr td spanactive:hoverdisabled": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanactivedisableddisabled": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanactivedisabled:hoverdisabled": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanactive[disabled]": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanactive:hover[disabled]": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanactivedisabled[disabled]": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanactivedisabled:hover[disabled]": {
        "backgroundColor": "#8BE0FC"
    },
    "datepicker table tr td spanold": {
        "color": "#9299A6"
    },
    "datepicker table tr td spannew": {
        "color": "#9299A6"
    },
    "datepicker datepicker-switch": {
        "width": 145,
        "cursor": "pointer"
    },
    "datepicker prev": {
        "cursor": "pointer"
    },
    "datepicker next": {
        "cursor": "pointer"
    },
    "datepicker tfoot tr th": {
        "cursor": "pointer"
    },
    "datepicker datepicker-switch:hover": {
        "background": "#eeeeee"
    },
    "datepicker prev:hover": {
        "background": "#eeeeee"
    },
    "datepicker next:hover": {
        "background": "#eeeeee"
    },
    "datepicker tfoot tr th:hover": {
        "background": "#eeeeee"
    },
    "datepicker cw": {
        "fontSize": 10,
        "width": 12,
        "paddingTop": 0,
        "paddingRight": 2,
        "paddingBottom": 0,
        "paddingLeft": 5,
        "verticalAlign": "middle"
    },
    "input-appenddate add-on": {
        "cursor": "pointer"
    },
    "input-prependdate add-on": {
        "cursor": "pointer"
    },
    "input-appenddate add-on i": {
        "marginTop": 3
    },
    "input-prependdate add-on i": {
        "marginTop": 3
    },
    "input-daterange input": {
        "textAlign": "center"
    },
    "input-daterange input:first-child": {
        "WebkitBorderRadius": "3px 0 0 3px",
        "MozBorderRadius": "3px 0 0 3px",
        "borderRadius": "3px 0 0 3px"
    },
    "input-daterange input:last-child": {
        "WebkitBorderRadius": "0 3px 3px 0",
        "MozBorderRadius": "0 3px 3px 0",
        "borderRadius": "0 3px 3px 0"
    },
    "input-daterange add-on": {
        "display": "inline-block",
        "width": "auto",
        "minWidth": 16,
        "height": 18,
        "paddingTop": 4,
        "paddingRight": 5,
        "paddingBottom": 4,
        "paddingLeft": 5,
        "fontWeight": "normal",
        "lineHeight": 18,
        "textAlign": "center",
        "textShadow": "0 1px 0 #ffffff",
        "verticalAlign": "middle",
        "backgroundColor": "#eeeeee",
        "border": "1px solid #ccc",
        "marginLeft": -5,
        "marginRight": -5
    },
    "bootstrap-datetimepicker-widget table tdtoday:before": {
        "content": "''",
        "display": "inline-block",
        "border": "solid transparent",
        "borderWidth": "0 0 7px 7px",
        "borderBottomColor": "#8BE0FC",
        "borderTopColor": "rgba(0, 0, 0, 0.2)",
        "position": "absolute",
        "bottom": 4,
        "right": 4
    },
    "btn-primary": {
        "fontFamily": "Arial",
        "color": "#fff",
        "backgroundColor": "#337ab7",
        "backgroundImage": "linear-gradient(to bottom,rgba(255,255,255,.3),rgba(255,255,255,0))",
        "border": "1px solid #BEC3CC"
    },
    "btn-default": {
        "color": "#6A7280",
        "backgroundImage": "linear-gradient(to bottom,rgba(255,255,255,.9),rgba(255,255,255,0.5))",
        "border": "1px solid #DFE1E5",
        "backgroundColor": "#CED2D9",
        "borderColor": "#CED2D9",
        "outline": "none"
    },
    "btn-default:hover": {
        "fontFamily": "Arial",
        "backgroundColor": "#C0EDFC",
        "color": "#9299A6",
        "textDecoration": "none",
        "border": "1px solid #EDEFF2"
    },
    "glpyhContainerbtn-default": {
        "backgroundImage": "transparent",
        "outline": "none",
        "height": 18,
        "width": 14,
        "boxShadow": "none",
        "textShadow": "none"
    },
    "bootstrap-datetimepicker-widget table tdactive": {
        "backgroundColor": "#8BE0FC",
        "color": "#ffffff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "bootstrap-datetimepicker-widget table tdactive:hover": {
        "backgroundColor": "#8BE0FC",
        "color": "#ffffff",
        "textShadow": "0 -1px 0 rgba(0, 0, 0, 0.25)"
    },
    "has-feedback label~form-control-feedback": {
        "top": 25,
        "display": "none",
        "opacity": 0
    },
    "bg-primary": {
        "color": "#fff",
        "backgroundColor": "#8BE0FC"
    },
    "icon-transfer:before": {
        "content": "\\e178"
    },
    "glyphicon-transfer": {
        "color": "#fff"
    },
    "glyphicon-ok": {
        "color": "#fff"
    },
    "glyphicon-remove": {
        "color": "#6a7280"
    },
    "col-lg-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-lg-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-md-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-sm-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "col-xs-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 15
    },
    "modalBodyOuterContainer col-lg-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-lg-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-md-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-sm-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-1": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-10": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-11": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-12": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-2": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-3": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-4": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-5": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-6": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-7": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-8": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modalBodyOuterContainer col-xs-9": {
        "position": "relative",
        "minHeight": 1,
        "paddingRight": 15,
        "paddingLeft": 0,
        "marginBottom": 5
    },
    "modal-content": {
        "position": "relative",
        "marginTop": "20%",
        "marginRight": "auto",
        "marginBottom": "20%",
        "marginLeft": "auto",
        "background": "#fff",
        "WebkitBackgroundClip": "padding-box",
        "backgroundClip": "padding-box",
        "border": "1px solid rgba(0,0,0,.2)",
        "borderRadius": 6,
        "outline": 0,
        "WebkitBoxShadow": "0 3px 9px rgba(0,0,0,.5)",
        "boxShadow": "0 3px 9px rgba(0,0,0,.5)"
    },
    "select": {
        "backgroundColor": "green",
        "borderImageSource": "initial",
        "borderImageSlice": "initial",
        "borderImageWidth": "initial",
        "borderImageOutset": "initial",
        "borderImageRepeat": "initial",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "green"
    },
    "input[type=\"color\" i][list]": {
        "backgroundColor": "green",
        "borderImageSource": "initial",
        "borderImageSlice": "initial",
        "borderImageWidth": "initial",
        "borderImageOutset": "initial",
        "borderImageRepeat": "initial",
        "borderWidth": 1,
        "borderStyle": "solid",
        "borderColor": "green"
    },
    "modal-footer": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "right",
        "borderTop": 0
    },
    "modal-footer buttons": {
        "paddingRight": 10
    },
    "radio label": {
        "minHeight": 44,
        "paddingLeft": 20,
        "marginBottom": 0,
        "fontWeight": "400",
        "cursor": "pointer"
    },
    "btn-adjust": {
        "position": "relative",
        "display": "inline-block",
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15,
        "paddingTop": 4,
        "paddingRight": 4,
        "paddingBottom": 4,
        "paddingLeft": 4,
        "textAlign": "right",
        "borderTop": 0
    },
    "hr": {
        "width": "100%",
        "clear": "both",
        "marginTop": 333,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0,
        "borderTop": "1px solid #DFE1E5"
    },
    "table>tbody>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "middle",
        "borderTop": "1px solid #ddd"
    },
    "table>tbody>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "middle",
        "borderTop": "1px solid #ddd"
    },
    "table>tfoot>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "middle",
        "borderTop": "1px solid #ddd"
    },
    "table>tfoot>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "middle",
        "borderTop": "1px solid #ddd"
    },
    "table>thead>tr>td": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "middle",
        "borderTop": "1px solid #ddd"
    },
    "table>thead>tr>th": {
        "paddingTop": 8,
        "paddingRight": 8,
        "paddingBottom": 8,
        "paddingLeft": 8,
        "lineHeight": 1.42857143,
        "verticalAlign": "middle",
        "borderTop": "1px solid #ddd"
    }
});