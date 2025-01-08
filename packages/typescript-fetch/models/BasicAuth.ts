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
 * @interface BasicAuth
 */
export interface BasicAuth {
    /**
     * 
     * @type {string}
     * @memberof BasicAuth
     */
    password?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicAuth
     */
    passwordFile?: string;
    /**
     * PasswordRef is the name of the secret within the secret manager to use as the password.
     * @type {string}
     * @memberof BasicAuth
     */
    passwordRef?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicAuth
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicAuth
     */
    usernameFile?: string;
    /**
     * UsernameRef is the name of the secret within the secret manager to use as the username.
     * @type {string}
     * @memberof BasicAuth
     */
    usernameRef?: string;
}

/**
 * Check if a given object implements the BasicAuth interface.
 */
export function instanceOfBasicAuth(value: object): value is BasicAuth {
    return true;
}

export function BasicAuthFromJSON(json: any): BasicAuth {
    return BasicAuthFromJSONTyped(json, false);
}

export function BasicAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicAuth {
    if (json == null) {
        return json;
    }
    return {
        
        'password': json['password'] == null ? undefined : json['password'],
        'passwordFile': json['password_file'] == null ? undefined : json['password_file'],
        'passwordRef': json['password_ref'] == null ? undefined : json['password_ref'],
        'username': json['username'] == null ? undefined : json['username'],
        'usernameFile': json['username_file'] == null ? undefined : json['username_file'],
        'usernameRef': json['username_ref'] == null ? undefined : json['username_ref'],
    };
}

export function BasicAuthToJSON(json: any): BasicAuth {
    return BasicAuthToJSONTyped(json, false);
}

export function BasicAuthToJSONTyped(value?: BasicAuth | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'password': value['password'],
        'password_file': value['passwordFile'],
        'password_ref': value['passwordRef'],
        'username': value['username'],
        'username_file': value['usernameFile'],
        'username_ref': value['usernameRef'],
    };
}

