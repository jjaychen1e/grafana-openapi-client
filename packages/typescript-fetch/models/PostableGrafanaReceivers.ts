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
import type { PostableGrafanaReceiver } from './PostableGrafanaReceiver.js';
import {
    PostableGrafanaReceiverFromJSON,
    PostableGrafanaReceiverFromJSONTyped,
    PostableGrafanaReceiverToJSON,
    PostableGrafanaReceiverToJSONTyped,
} from './PostableGrafanaReceiver.js';

/**
 * 
 * @export
 * @interface PostableGrafanaReceivers
 */
export interface PostableGrafanaReceivers {
    /**
     * 
     * @type {Array<PostableGrafanaReceiver>}
     * @memberof PostableGrafanaReceivers
     */
    grafanaManagedReceiverConfigs?: Array<PostableGrafanaReceiver>;
}

/**
 * Check if a given object implements the PostableGrafanaReceivers interface.
 */
export function instanceOfPostableGrafanaReceivers(value: object): value is PostableGrafanaReceivers {
    return true;
}

export function PostableGrafanaReceiversFromJSON(json: any): PostableGrafanaReceivers {
    return PostableGrafanaReceiversFromJSONTyped(json, false);
}

export function PostableGrafanaReceiversFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableGrafanaReceivers {
    if (json == null) {
        return json;
    }
    return {
        
        'grafanaManagedReceiverConfigs': json['grafana_managed_receiver_configs'] == null ? undefined : ((json['grafana_managed_receiver_configs'] as Array<any>).map(PostableGrafanaReceiverFromJSON)),
    };
}

export function PostableGrafanaReceiversToJSON(json: any): PostableGrafanaReceivers {
    return PostableGrafanaReceiversToJSONTyped(json, false);
}

export function PostableGrafanaReceiversToJSONTyped(value?: PostableGrafanaReceivers | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'grafana_managed_receiver_configs': value['grafanaManagedReceiverConfigs'] == null ? undefined : ((value['grafanaManagedReceiverConfigs'] as Array<any>).map(PostableGrafanaReceiverToJSON)),
    };
}
