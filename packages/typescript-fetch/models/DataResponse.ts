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
import type { Frame } from './Frame.js';
import {
    FrameFromJSON,
    FrameFromJSONTyped,
    FrameToJSON,
    FrameToJSONTyped,
} from './Frame.js';

/**
 * A map of RefIDs (unique query identifiers) to this type makes up the Responses property of a QueryDataResponse.
 * The Error property is used to allow for partial success responses from the containing QueryDataResponse.
 * @export
 * @interface DataResponse
 */
export interface DataResponse {
    /**
     * Error is a property to be set if the corresponding DataQuery has an error.
     * @type {string}
     * @memberof DataResponse
     */
    error?: string;
    /**
     * ErrorSource type defines the source of the error
     * @type {string}
     * @memberof DataResponse
     */
    errorSource?: string;
    /**
     * It is the main data container within a backend.DataResponse.
     * There should be no `nil` entries in the Frames slice (making them pointers was a mistake).
     * @type {Array<Frame>}
     * @memberof DataResponse
     */
    frames?: Array<Frame>;
    /**
     * 
     * @type {number}
     * @memberof DataResponse
     */
    status?: number;
}

/**
 * Check if a given object implements the DataResponse interface.
 */
export function instanceOfDataResponse(value: object): value is DataResponse {
    return true;
}

export function DataResponseFromJSON(json: any): DataResponse {
    return DataResponseFromJSONTyped(json, false);
}

export function DataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'error': json['Error'] == null ? undefined : json['Error'],
        'errorSource': json['ErrorSource'] == null ? undefined : json['ErrorSource'],
        'frames': json['Frames'] == null ? undefined : ((json['Frames'] as Array<any>).map(FrameFromJSON)),
        'status': json['Status'] == null ? undefined : json['Status'],
    };
}

export function DataResponseToJSON(json: any): DataResponse {
    return DataResponseToJSONTyped(json, false);
}

export function DataResponseToJSONTyped(value?: DataResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Error': value['error'],
        'ErrorSource': value['errorSource'],
        'Frames': value['frames'] == null ? undefined : ((value['frames'] as Array<any>).map(FrameToJSON)),
        'Status': value['status'],
    };
}
