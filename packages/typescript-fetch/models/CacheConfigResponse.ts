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
 * @interface CacheConfigResponse
 */
export interface CacheConfigResponse {
    /**
     * 
     * @type {Date}
     * @memberof CacheConfigResponse
     */
    created?: Date;
    /**
     * Fields that can be set by the API caller - read/write
     * @type {number}
     * @memberof CacheConfigResponse
     */
    dataSourceID?: number;
    /**
     * 
     * @type {string}
     * @memberof CacheConfigResponse
     */
    dataSourceUID?: string;
    /**
     * These are returned by the HTTP API, but are managed internally - read-only
     * Note: 'created' and 'updated' are special properties managed automatically by xorm, but we are setting them manually
     * @type {number}
     * @memberof CacheConfigResponse
     */
    defaultTTLMs?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CacheConfigResponse
     */
    enabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CacheConfigResponse
     */
    message?: string;
    /**
     * TTL MS, or "time to live", is how long a cached item will stay in the cache before it is removed (in milliseconds)
     * @type {number}
     * @memberof CacheConfigResponse
     */
    ttlQueriesMs?: number;
    /**
     * 
     * @type {number}
     * @memberof CacheConfigResponse
     */
    ttlResourcesMs?: number;
    /**
     * 
     * @type {Date}
     * @memberof CacheConfigResponse
     */
    updated?: Date;
    /**
     * If UseDefaultTTL is enabled, then the TTLQueriesMS and TTLResourcesMS in this object is always sent as the default TTL located in grafana.ini
     * @type {boolean}
     * @memberof CacheConfigResponse
     */
    useDefaultTTL?: boolean;
}

/**
 * Check if a given object implements the CacheConfigResponse interface.
 */
export function instanceOfCacheConfigResponse(value: object): value is CacheConfigResponse {
    return true;
}

export function CacheConfigResponseFromJSON(json: any): CacheConfigResponse {
    return CacheConfigResponseFromJSONTyped(json, false);
}

export function CacheConfigResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CacheConfigResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'dataSourceID': json['dataSourceID'] == null ? undefined : json['dataSourceID'],
        'dataSourceUID': json['dataSourceUID'] == null ? undefined : json['dataSourceUID'],
        'defaultTTLMs': json['defaultTTLMs'] == null ? undefined : json['defaultTTLMs'],
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'message': json['message'] == null ? undefined : json['message'],
        'ttlQueriesMs': json['ttlQueriesMs'] == null ? undefined : json['ttlQueriesMs'],
        'ttlResourcesMs': json['ttlResourcesMs'] == null ? undefined : json['ttlResourcesMs'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'useDefaultTTL': json['useDefaultTTL'] == null ? undefined : json['useDefaultTTL'],
    };
}

export function CacheConfigResponseToJSON(json: any): CacheConfigResponse {
    return CacheConfigResponseToJSONTyped(json, false);
}

export function CacheConfigResponseToJSONTyped(value?: CacheConfigResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'dataSourceID': value['dataSourceID'],
        'dataSourceUID': value['dataSourceUID'],
        'defaultTTLMs': value['defaultTTLMs'],
        'enabled': value['enabled'],
        'message': value['message'],
        'ttlQueriesMs': value['ttlQueriesMs'],
        'ttlResourcesMs': value['ttlResourcesMs'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
        'useDefaultTTL': value['useDefaultTTL'],
    };
}
