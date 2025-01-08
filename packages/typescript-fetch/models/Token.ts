/* tslint:disable */
/* eslint-disable */
/**
 * Grafana HTTP API.
 * The Grafana backend exposes an HTTP API, the same API is used by the frontend to do everything from saving dashboards, creating users and updating data sources.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: hello@grafana.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface Token
 */
export interface Token {
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    account?: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    anonymousRatio?: number;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    company?: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    detailsUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    exp?: number;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    iat?: number;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    includedUsers?: number;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    iss?: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    jti?: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    lexp?: number;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    licExpWarnDays?: number;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    lid?: string;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    limitBy?: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    maxConcurrentUserSessions?: number;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    nbf?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Token
     */
    prod?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof Token
     */
    sub?: string;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    tokExpWarnDays?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Token
     */
    trial?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    trialExp?: number;
    /**
     * 
     * @type {number}
     * @memberof Token
     */
    updateDays?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Token
     */
    usageBilling?: boolean;
}

/**
 * Check if a given object implements the Token interface.
 */
export function instanceOfToken(value: object): value is Token {
    return true;
}

export function TokenFromJSON(json: any): Token {
    return TokenFromJSONTyped(json, false);
}

export function TokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): Token {
    if (json == null) {
        return json;
    }
    return {
        
        'account': json['account'] == null ? undefined : json['account'],
        'anonymousRatio': json['anonymousRatio'] == null ? undefined : json['anonymousRatio'],
        'company': json['company'] == null ? undefined : json['company'],
        'detailsUrl': json['details_url'] == null ? undefined : json['details_url'],
        'exp': json['exp'] == null ? undefined : json['exp'],
        'iat': json['iat'] == null ? undefined : json['iat'],
        'includedUsers': json['included_users'] == null ? undefined : json['included_users'],
        'iss': json['iss'] == null ? undefined : json['iss'],
        'jti': json['jti'] == null ? undefined : json['jti'],
        'lexp': json['lexp'] == null ? undefined : json['lexp'],
        'licExpWarnDays': json['lic_exp_warn_days'] == null ? undefined : json['lic_exp_warn_days'],
        'lid': json['lid'] == null ? undefined : json['lid'],
        'limitBy': json['limit_by'] == null ? undefined : json['limit_by'],
        'maxConcurrentUserSessions': json['max_concurrent_user_sessions'] == null ? undefined : json['max_concurrent_user_sessions'],
        'nbf': json['nbf'] == null ? undefined : json['nbf'],
        'prod': json['prod'] == null ? undefined : json['prod'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'status': json['status'] == null ? undefined : json['status'],
        'sub': json['sub'] == null ? undefined : json['sub'],
        'tokExpWarnDays': json['tok_exp_warn_days'] == null ? undefined : json['tok_exp_warn_days'],
        'trial': json['trial'] == null ? undefined : json['trial'],
        'trialExp': json['trial_exp'] == null ? undefined : json['trial_exp'],
        'updateDays': json['update_days'] == null ? undefined : json['update_days'],
        'usageBilling': json['usage_billing'] == null ? undefined : json['usage_billing'],
    };
}

export function TokenToJSON(json: any): Token {
    return TokenToJSONTyped(json, false);
}

export function TokenToJSONTyped(value?: Token | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'account': value['account'],
        'anonymousRatio': value['anonymousRatio'],
        'company': value['company'],
        'details_url': value['detailsUrl'],
        'exp': value['exp'],
        'iat': value['iat'],
        'included_users': value['includedUsers'],
        'iss': value['iss'],
        'jti': value['jti'],
        'lexp': value['lexp'],
        'lic_exp_warn_days': value['licExpWarnDays'],
        'lid': value['lid'],
        'limit_by': value['limitBy'],
        'max_concurrent_user_sessions': value['maxConcurrentUserSessions'],
        'nbf': value['nbf'],
        'prod': value['prod'],
        'slug': value['slug'],
        'status': value['status'],
        'sub': value['sub'],
        'tok_exp_warn_days': value['tokExpWarnDays'],
        'trial': value['trial'],
        'trial_exp': value['trialExp'],
        'update_days': value['updateDays'],
        'usage_billing': value['usageBilling'],
    };
}

