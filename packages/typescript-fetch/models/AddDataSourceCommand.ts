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

import { mapValues } from '../runtime';
/**
 * Also acts as api DTO
 * @export
 * @interface AddDataSourceCommand
 */
export interface AddDataSourceCommand {
    /**
     * 
     * @type {string}
     * @memberof AddDataSourceCommand
     */
    access?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddDataSourceCommand
     */
    basicAuth?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AddDataSourceCommand
     */
    basicAuthUser?: string;
    /**
     * 
     * @type {string}
     * @memberof AddDataSourceCommand
     */
    database?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddDataSourceCommand
     */
    isDefault?: boolean;
    /**
     * 
     * @type {object}
     * @memberof AddDataSourceCommand
     */
    jsonData?: object;
    /**
     * 
     * @type {string}
     * @memberof AddDataSourceCommand
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof AddDataSourceCommand
     */
    secureJsonData?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof AddDataSourceCommand
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof AddDataSourceCommand
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof AddDataSourceCommand
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof AddDataSourceCommand
     */
    user?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AddDataSourceCommand
     */
    withCredentials?: boolean;
}

/**
 * Check if a given object implements the AddDataSourceCommand interface.
 */
export function instanceOfAddDataSourceCommand(value: object): value is AddDataSourceCommand {
    return true;
}

export function AddDataSourceCommandFromJSON(json: any): AddDataSourceCommand {
    return AddDataSourceCommandFromJSONTyped(json, false);
}

export function AddDataSourceCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddDataSourceCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'access': json['access'] == null ? undefined : json['access'],
        'basicAuth': json['basicAuth'] == null ? undefined : json['basicAuth'],
        'basicAuthUser': json['basicAuthUser'] == null ? undefined : json['basicAuthUser'],
        'database': json['database'] == null ? undefined : json['database'],
        'isDefault': json['isDefault'] == null ? undefined : json['isDefault'],
        'jsonData': json['jsonData'] == null ? undefined : json['jsonData'],
        'name': json['name'] == null ? undefined : json['name'],
        'secureJsonData': json['secureJsonData'] == null ? undefined : json['secureJsonData'],
        'type': json['type'] == null ? undefined : json['type'],
        'uid': json['uid'] == null ? undefined : json['uid'],
        'url': json['url'] == null ? undefined : json['url'],
        'user': json['user'] == null ? undefined : json['user'],
        'withCredentials': json['withCredentials'] == null ? undefined : json['withCredentials'],
    };
}

export function AddDataSourceCommandToJSON(json: any): AddDataSourceCommand {
    return AddDataSourceCommandToJSONTyped(json, false);
}

export function AddDataSourceCommandToJSONTyped(value?: AddDataSourceCommand | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'access': value['access'],
        'basicAuth': value['basicAuth'],
        'basicAuthUser': value['basicAuthUser'],
        'database': value['database'],
        'isDefault': value['isDefault'],
        'jsonData': value['jsonData'],
        'name': value['name'],
        'secureJsonData': value['secureJsonData'],
        'type': value['type'],
        'uid': value['uid'],
        'url': value['url'],
        'user': value['user'],
        'withCredentials': value['withCredentials'],
    };
}

