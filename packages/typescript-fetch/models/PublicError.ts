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
 * PublicError is derived from Error and only contains information
 * available to the end user.
 * @export
 * @interface PublicError
 */
export interface PublicError {
    /**
     * Extra Additional information about the error
     * @type {{ [key: string]: object; }}
     * @memberof PublicError
     */
    extra?: { [key: string]: object; };
    /**
     * Message A human readable message
     * @type {string}
     * @memberof PublicError
     */
    message?: string;
    /**
     * MessageID A unique identifier for the error
     * @type {string}
     * @memberof PublicError
     */
    messageId: string;
    /**
     * StatusCode The HTTP status code returned
     * @type {number}
     * @memberof PublicError
     */
    statusCode: number;
}

/**
 * Check if a given object implements the PublicError interface.
 */
export function instanceOfPublicError(value: object): value is PublicError {
    if (!('messageId' in value) || value['messageId'] === undefined) return false;
    if (!('statusCode' in value) || value['statusCode'] === undefined) return false;
    return true;
}

export function PublicErrorFromJSON(json: any): PublicError {
    return PublicErrorFromJSONTyped(json, false);
}

export function PublicErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublicError {
    if (json == null) {
        return json;
    }
    return {
        
        'extra': json['extra'] == null ? undefined : json['extra'],
        'message': json['message'] == null ? undefined : json['message'],
        'messageId': json['messageId'],
        'statusCode': json['statusCode'],
    };
}

export function PublicErrorToJSON(json: any): PublicError {
    return PublicErrorToJSONTyped(json, false);
}

export function PublicErrorToJSONTyped(value?: PublicError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'extra': value['extra'],
        'message': value['message'],
        'messageId': value['messageId'],
        'statusCode': value['statusCode'],
    };
}

