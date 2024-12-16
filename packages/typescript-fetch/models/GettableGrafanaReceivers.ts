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

import { mapValues } from '../runtime';
import type { GettableGrafanaReceiver } from './GettableGrafanaReceiver';
import {
    GettableGrafanaReceiverFromJSON,
    GettableGrafanaReceiverFromJSONTyped,
    GettableGrafanaReceiverToJSON,
    GettableGrafanaReceiverToJSONTyped,
} from './GettableGrafanaReceiver';

/**
 * 
 * @export
 * @interface GettableGrafanaReceivers
 */
export interface GettableGrafanaReceivers {
    /**
     * 
     * @type {Array<GettableGrafanaReceiver>}
     * @memberof GettableGrafanaReceivers
     */
    grafanaManagedReceiverConfigs?: Array<GettableGrafanaReceiver>;
}

/**
 * Check if a given object implements the GettableGrafanaReceivers interface.
 */
export function instanceOfGettableGrafanaReceivers(value: object): value is GettableGrafanaReceivers {
    return true;
}

export function GettableGrafanaReceiversFromJSON(json: any): GettableGrafanaReceivers {
    return GettableGrafanaReceiversFromJSONTyped(json, false);
}

export function GettableGrafanaReceiversFromJSONTyped(json: any, ignoreDiscriminator: boolean): GettableGrafanaReceivers {
    if (json == null) {
        return json;
    }
    return {
        
        'grafanaManagedReceiverConfigs': json['grafana_managed_receiver_configs'] == null ? undefined : ((json['grafana_managed_receiver_configs'] as Array<any>).map(GettableGrafanaReceiverFromJSON)),
    };
}

export function GettableGrafanaReceiversToJSON(json: any): GettableGrafanaReceivers {
    return GettableGrafanaReceiversToJSONTyped(json, false);
}

export function GettableGrafanaReceiversToJSONTyped(value?: GettableGrafanaReceivers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'grafana_managed_receiver_configs': value['grafanaManagedReceiverConfigs'] == null ? undefined : ((value['grafanaManagedReceiverConfigs'] as Array<any>).map(GettableGrafanaReceiverToJSON)),
    };
}

