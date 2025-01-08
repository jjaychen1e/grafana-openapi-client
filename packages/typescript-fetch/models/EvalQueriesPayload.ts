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
import type { AlertQuery } from './AlertQuery.js';
import {
    AlertQueryFromJSON,
    AlertQueryFromJSONTyped,
    AlertQueryToJSON,
    AlertQueryToJSONTyped,
} from './AlertQuery.js';

/**
 * 
 * @export
 * @interface EvalQueriesPayload
 */
export interface EvalQueriesPayload {
    /**
     * 
     * @type {string}
     * @memberof EvalQueriesPayload
     */
    condition?: string;
    /**
     * 
     * @type {Array<AlertQuery>}
     * @memberof EvalQueriesPayload
     */
    data?: Array<AlertQuery>;
    /**
     * 
     * @type {Date}
     * @memberof EvalQueriesPayload
     */
    now?: Date;
}

/**
 * Check if a given object implements the EvalQueriesPayload interface.
 */
export function instanceOfEvalQueriesPayload(value: object): value is EvalQueriesPayload {
    return true;
}

export function EvalQueriesPayloadFromJSON(json: any): EvalQueriesPayload {
    return EvalQueriesPayloadFromJSONTyped(json, false);
}

export function EvalQueriesPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): EvalQueriesPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'condition': json['condition'] == null ? undefined : json['condition'],
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(AlertQueryFromJSON)),
        'now': json['now'] == null ? undefined : (new Date(json['now'])),
    };
}

export function EvalQueriesPayloadToJSON(json: any): EvalQueriesPayload {
    return EvalQueriesPayloadToJSONTyped(json, false);
}

export function EvalQueriesPayloadToJSONTyped(value?: EvalQueriesPayload | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'condition': value['condition'],
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(AlertQueryToJSON)),
        'now': value['now'] == null ? undefined : ((value['now']).toISOString()),
    };
}

