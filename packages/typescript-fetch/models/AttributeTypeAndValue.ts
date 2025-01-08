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
 * AttributeTypeAndValue mirrors the ASN.1 structure of the same name in
 * RFC 5280, Section 4.1.2.4.
 * @export
 * @interface AttributeTypeAndValue
 */
export interface AttributeTypeAndValue {
    /**
     * 
     * @type {Array<number>}
     * @memberof AttributeTypeAndValue
     */
    type?: Array<number>;
    /**
     * 
     * @type {object}
     * @memberof AttributeTypeAndValue
     */
    value?: object;
}

/**
 * Check if a given object implements the AttributeTypeAndValue interface.
 */
export function instanceOfAttributeTypeAndValue(value: object): value is AttributeTypeAndValue {
    return true;
}

export function AttributeTypeAndValueFromJSON(json: any): AttributeTypeAndValue {
    return AttributeTypeAndValueFromJSONTyped(json, false);
}

export function AttributeTypeAndValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttributeTypeAndValue {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['Type'] == null ? undefined : json['Type'],
        'value': json['Value'] == null ? undefined : json['Value'],
    };
}

export function AttributeTypeAndValueToJSON(json: any): AttributeTypeAndValue {
    return AttributeTypeAndValueToJSONTyped(json, false);
}

export function AttributeTypeAndValueToJSONTyped(value?: AttributeTypeAndValue | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Type': value['type'],
        'Value': value['value'],
    };
}

