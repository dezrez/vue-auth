/* global btoa, sessionStorage */

import superagent from 'superagent';
import * as config from '../config';
import { delay } from 'lodash';

var requesting = false;

const getBaseAuthentication = (username, password) => {
    var token = username + ':' + password;
    var hash = btoa(token);
    return 'Basic ' + hash;
}

const checkIsAuthenticated = () => {
    if (!sessionStorage.credentials) {
        return false;
    } else {
        return true;
    }
}

const BuildAuthUrl = () => {
    var state = Date.now() + '' + Math.random();
    var url = config.authenticationUrl + '?' +
        'client_id=' + encodeURI(config.clientId) + '&' +
        'redirect_uri=' + encodeURI(config.redirectUrl) + '&' +
        'response_type=' + encodeURI('code') + '&' +
        'scope=' + encodeURI(config.accessScope) + '&' +
        'state=' + encodeURI(state);
    return url;
}

const parseLocation = function (location) {
    var pairs = location.substring(1).split('&');
    var obj = {};
    var pair;
    var i;
    for (i in pairs) {
        if (pairs[i] === '') continue;
        pair = pairs[i].split('=');
        obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return obj;
};

const getToken = function (code, callback) {
    var self = this;
    var authConfig = { grant_type: 'authorization_code', code: code, redirect_uri: config.redirectUrl };
    var authHeader = { 'Authorization': getBaseAuthentication(config.clientId, config.clientPassword) };
    if (!requesting) {
        requesting = true;
        superagent
            .post(config.tokenUrl)
            .set(authHeader)
            .send(authConfig)
            .on('error', () => {
                delay(() => {
                    getToken(code, callback);
                }, 2000)
            })
            .end((err, res) => {
                self.requesting = false;
                if (res.body) {
                    sessionStorage.credentials = JSON.stringify(res.body);
                    callback(res.body);
                }
            });
    }
}

export {getBaseAuthentication, BuildAuthUrl, parseLocation, getToken, checkIsAuthenticated}