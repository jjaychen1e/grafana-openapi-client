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
 * @interface GettableGrafanaReceiver
 */
export interface GettableGrafanaReceiver {
    /**
     * 
     * @type {boolean}
     * @memberof GettableGrafanaReceiver
     */
    disableResolveMessage?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaReceiver
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaReceiver
     */
    provenance?: string;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof GettableGrafanaReceiver
     */
    secureFields?: { [key: string]: boolean; };
    /**
     * 
     * @type {object}
     * @memberof GettableGrafanaReceiver
     */
    settings?: object;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaReceiver
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof GettableGrafanaReceiver
     */
    uid?: string;
}

/**
 * Check if a given object implements the GettableGrafanaReceiver interface.
 */
export function instanceOfGettableGrafanaReceiver(value: object): value is GettableGrafanaReceiver {
    return true;
}

export function GettableGrafanaReceiverFromJSON(json: any): GettableGrafanaReceiver {
    return GettableGrafanaReceiverFromJSONTyped(json, false);
}

export function GettableGrafanaReceiverFromJSONTyped(json: any, ignoreDiscriminator: boolean): GettableGrafanaReceiver {
    if (json == null) {
        return json;
    }
    return {
        
        'disableResolveMessage': json['disableResolveMessage'] == null ? undefined : json['disableResolveMessage'],
        'name': json['name'] == null ? undefined : json['name'],
        'provenance': json['provenance'] == null ? undefined : json['provenance'],
        'secureFields': json['secureFields'] == null ? undefined : json['secureFields'],
        'settings': json['settings'] == null ? undefined : json['settings'],
        'type': json['type'] == null ? undefined : json['type'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function GettableGrafanaReceiverToJSON(json: any): GettableGrafanaReceiver {
    return GettableGrafanaReceiverToJSONTyped(json, false);
}

export function GettableGrafanaReceiverToJSONTyped(value?: GettableGrafanaReceiver | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'disableResolveMessage': value['disableResolveMessage'],
        'name': value['name'],
        'provenance': value['provenance'],
        'secureFields': value['secureFields'],
        'settings': value['settings'],
        'type': value['type'],
        'uid': value['uid'],
    };
}
