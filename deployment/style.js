import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "color": "#6D6E71"
    },
    "label": {
        "fontWeight": "normal"
    },
    "outerContainer": {
        "paddingTop": 50,
        "paddingRight": 50,
        "paddingBottom": 50,
        "paddingLeft": 50
    },
    "dateSelectHelper": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "backgroundColor": "#f2f2f2",
        "width": 198
    },
    "modalBodyOuterContainer": {
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "glphyStyle": {
        "paddingLeft": 5
    },
    "tooltipStyle": {
        "width": 1000,
        "backgroundColor": "#FFFFFF"
    },
    "tableHeaderStyle": {
        "backgroundColor": "#797979",
        "color": "white",
        "fontWeight": "normal",
        "fontSize": 12,
        "fontFamily": "'ArialMT', 'Arial'"
    },
    "input": {
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap",
        "overflow": "hidden"
    },
    "glpyhContainer": {
        "border": "none",
        "backgroundColor": "transparent"
    }
});