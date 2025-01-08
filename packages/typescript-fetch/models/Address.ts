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
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address1?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    address2?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    zipCode?: string;
}

/**
 * Check if a given object implements the Address interface.
 */
export function instanceOfAddress(value: object): value is Address {
    return true;
}

export function AddressFromJSON(json: any): Address {
    return AddressFromJSONTyped(json, false);
}

export function AddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): Address {
    if (json == null) {
        return json;
    }
    return {
        
        'address1': json['address1'] == null ? undefined : json['address1'],
        'address2': json['address2'] == null ? undefined : json['address2'],
        'city': json['city'] == null ? undefined : json['city'],
        'country': json['country'] == null ? undefined : json['country'],
        'state': json['state'] == null ? undefined : json['state'],
        'zipCode': json['zipCode'] == null ? undefined : json['zipCode'],
    };
}

export function AddressToJSON(json: any): Address {
    return AddressToJSONTyped(json, false);
}

export function AddressToJSONTyped(value?: Address | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address1': value['address1'],
        'address2': value['address2'],
        'city': value['city'],
        'country': value['country'],
        'state': value['state'],
        'zipCode': value['zipCode'],
    };
}

