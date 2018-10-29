global.Buffer = require('buffer').Buffer;
global.process = require('process');
if (typeof btoa === 'undefined') {
    global.btoa = function (str) {
        return new Buffer(str, 'binary').toString('base64');
    };
}

if (typeof atob === 'undefined') {
    global.atob = function (b64Encoded) {
        return new Buffer(b64Encoded, 'base64').toString('binary');
    };
}

import { GoogleAnalyticsTracker } from "react-native-google-analytics-bridge";
if (typeof tracker === 'undefined') {
    global.tracker = new GoogleAnalyticsTracker("UA-128248157-1");
}