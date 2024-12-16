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
 * 
 * @export
 * @interface DataSource
 */
export interface DataSource {
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    access?: string;
    /**
     * Metadata contains user accesses for a given resource
     * Ex: map[string]bool{"create":true, "delete": true}
     * @type {{ [key: string]: boolean; }}
     * @memberof DataSource
     */
    accessControl?: { [key: string]: boolean; };
    /**
     * 
     * @type {boolean}
     * @memberof DataSource
     */
    basicAuth?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    basicAuthUser?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    database?: string;
    /**
     * 
     * @type {number}
     * @memberof DataSource
     */
    id?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DataSource
     */
    isDefault?: boolean;
    /**
     * 
     * @type {object}
     * @memberof DataSource
     */
    jsonData?: object;
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof DataSource
     */
    orgId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DataSource
     */
    readOnly?: boolean;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof DataSource
     */
    secureJsonFields?: { [key: string]: boolean; };
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    typeLogoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    uid?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSource
     */
    user?: string;
    /**
     * 
     * @type {number}
     * @memberof DataSource
     */
    version?: number;
    /**
     * 
     * @type {boolean}
     * @memberof DataSource
     */
    withCredentials?: boolean;
}

/**
 * Check if a given object implements the DataSource interface.
 */
export function instanceOfDataSource(value: object): value is DataSource {
    return true;
}

export function DataSourceFromJSON(json: any): DataSource {
    return DataSourceFromJSONTyped(json, false);
}

export function DataSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataSource {
    if (json == null) {
        return json;
    }
    return {
        
        'access': json['access'] == null ? undefined : json['access'],
        'accessControl': json['accessControl'] == null ? undefined : json['accessControl'],
        'basicAuth': json['basicAuth'] == null ? undefined : json['basicAuth'],
        'basicAuthUser': json['basicAuthUser'] == null ? undefined : json['basicAuthUser'],
        'database': json['database'] == null ? undefined : json['database'],
        'id': json['id'] == null ? undefined : json['id'],
        'isDefault': json['isDefault'] == null ? undefined : json['isDefault'],
        'jsonData': json['jsonData'] == null ? undefined : json['jsonData'],
        'name': json['name'] == null ? undefined : json['name'],
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'readOnly': json['readOnly'] == null ? undefined : json['readOnly'],
        'secureJsonFields': json['secureJsonFields'] == null ? undefined : json['secureJsonFields'],
        'type': json['type'] == null ? undefined : json['type'],
        'typeLogoUrl': json['typeLogoUrl'] == null ? undefined : json['typeLogoUrl'],
        'uid': json['uid'] == null ? undefined : json['uid'],
        'url': json['url'] == null ? undefined : json['url'],
        'user': json['user'] == null ? undefined : json['user'],
        'version': json['version'] == null ? undefined : json['version'],
        'withCredentials': json['withCredentials'] == null ? undefined : json['withCredentials'],
    };
}

export function DataSourceToJSON(json: any): DataSource {
    return DataSourceToJSONTyped(json, false);
}

export function DataSourceToJSONTyped(value?: DataSource | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'access': value['access'],
        'accessControl': value['accessControl'],
        'basicAuth': value['basicAuth'],
        'basicAuthUser': value['basicAuthUser'],
        'database': value['database'],
        'id': value['id'],
        'isDefault': value['isDefault'],
        'jsonData': value['jsonData'],
        'name': value['name'],
        'orgId': value['orgId'],
        'readOnly': value['readOnly'],
        'secureJsonFields': value['secureJsonFields'],
        'type': value['type'],
        'typeLogoUrl': value['typeLogoUrl'],
        'uid': value['uid'],
        'url': value['url'],
        'user': value['user'],
        'version': value['version'],
        'withCredentials': value['withCredentials'],
    };
}

