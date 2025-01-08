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
import type { DataSource } from './DataSource.js';
import {
    DataSourceFromJSON,
    DataSourceFromJSONTyped,
    DataSourceToJSON,
    DataSourceToJSONTyped,
} from './DataSource.js';

/**
 * 
 * @export
 * @interface AddDataSource200Response
 */
export interface AddDataSource200Response {
    /**
     * 
     * @type {DataSource}
     * @memberof AddDataSource200Response
     */
    datasource: DataSource;
    /**
     * ID Identifier of the new data source.
     * @type {number}
     * @memberof AddDataSource200Response
     */
    id: number;
    /**
     * Message Message of the deleted dashboard.
     * @type {string}
     * @memberof AddDataSource200Response
     */
    message: string;
    /**
     * Name of the new data source.
     * @type {string}
     * @memberof AddDataSource200Response
     */
    name: string;
}

/**
 * Check if a given object implements the AddDataSource200Response interface.
 */
export function instanceOfAddDataSource200Response(value: object): value is AddDataSource200Response {
    if (!('datasource' in value) || value['datasource'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function AddDataSource200ResponseFromJSON(json: any): AddDataSource200Response {
    return AddDataSource200ResponseFromJSONTyped(json, false);
}

export function AddDataSource200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddDataSource200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'datasource': DataSourceFromJSON(json['datasource']),
        'id': json['id'],
        'message': json['message'],
        'name': json['name'],
    };
}

export function AddDataSource200ResponseToJSON(json: any): AddDataSource200Response {
    return AddDataSource200ResponseToJSONTyped(json, false);
}

export function AddDataSource200ResponseToJSONTyped(value?: AddDataSource200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'datasource': DataSourceToJSON(value['datasource']),
        'id': value['id'],
        'message': value['message'],
        'name': value['name'],
    };
}

