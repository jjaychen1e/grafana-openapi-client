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
 * @interface CreateTeam200Response
 */
export interface CreateTeam200Response {
    /**
     * 
     * @type {string}
     * @memberof CreateTeam200Response
     */
    message?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateTeam200Response
     */
    teamId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateTeam200Response
     */
    uid?: string;
}

/**
 * Check if a given object implements the CreateTeam200Response interface.
 */
export function instanceOfCreateTeam200Response(value: object): value is CreateTeam200Response {
    return true;
}

export function CreateTeam200ResponseFromJSON(json: any): CreateTeam200Response {
    return CreateTeam200ResponseFromJSONTyped(json, false);
}

export function CreateTeam200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTeam200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'] == null ? undefined : json['message'],
        'teamId': json['teamId'] == null ? undefined : json['teamId'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function CreateTeam200ResponseToJSON(json: any): CreateTeam200Response {
    return CreateTeam200ResponseToJSONTyped(json, false);
}

export function CreateTeam200ResponseToJSONTyped(value?: CreateTeam200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
        'teamId': value['teamId'],
        'uid': value['uid'],
    };
}
