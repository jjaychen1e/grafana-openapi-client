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
 * PeerStatus peer status
 * @export
 * @interface PeerStatus
 */
export interface PeerStatus {
    /**
     * address
     * @type {string}
     * @memberof PeerStatus
     */
    address: string;
    /**
     * name
     * @type {string}
     * @memberof PeerStatus
     */
    name: string;
}

/**
 * Check if a given object implements the PeerStatus interface.
 */
export function instanceOfPeerStatus(value: object): value is PeerStatus {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function PeerStatusFromJSON(json: any): PeerStatus {
    return PeerStatusFromJSONTyped(json, false);
}

export function PeerStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): PeerStatus {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'name': json['name'],
    };
}

export function PeerStatusToJSON(json: any): PeerStatus {
    return PeerStatusToJSONTyped(json, false);
}

export function PeerStatusToJSONTyped(value?: PeerStatus | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'name': value['name'],
    };
}

