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
 * @interface PostableGrafanaReceiver
 */
export interface PostableGrafanaReceiver {
    /**
     * 
     * @type {boolean}
     * @memberof PostableGrafanaReceiver
     */
    disableResolveMessage?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PostableGrafanaReceiver
     */
    name?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof PostableGrafanaReceiver
     */
    secureSettings?: { [key: string]: string; };
    /**
     * 
     * @type {object}
     * @memberof PostableGrafanaReceiver
     */
    settings?: object;
    /**
     * 
     * @type {string}
     * @memberof PostableGrafanaReceiver
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof PostableGrafanaReceiver
     */
    uid?: string;
}

/**
 * Check if a given object implements the PostableGrafanaReceiver interface.
 */
export function instanceOfPostableGrafanaReceiver(value: object): value is PostableGrafanaReceiver {
    return true;
}

export function PostableGrafanaReceiverFromJSON(json: any): PostableGrafanaReceiver {
    return PostableGrafanaReceiverFromJSONTyped(json, false);
}

export function PostableGrafanaReceiverFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableGrafanaReceiver {
    if (json == null) {
        return json;
    }
    return {
        
        'disableResolveMessage': json['disableResolveMessage'] == null ? undefined : json['disableResolveMessage'],
        'name': json['name'] == null ? undefined : json['name'],
        'secureSettings': json['secureSettings'] == null ? undefined : json['secureSettings'],
        'settings': json['settings'] == null ? undefined : json['settings'],
        'type': json['type'] == null ? undefined : json['type'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function PostableGrafanaReceiverToJSON(json: any): PostableGrafanaReceiver {
    return PostableGrafanaReceiverToJSONTyped(json, false);
}

export function PostableGrafanaReceiverToJSONTyped(value?: PostableGrafanaReceiver | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'disableResolveMessage': value['disableResolveMessage'],
        'name': value['name'],
        'secureSettings': value['secureSettings'],
        'settings': value['settings'],
        'type': value['type'],
        'uid': value['uid'],
    };
}

