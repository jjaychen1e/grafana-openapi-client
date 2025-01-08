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
import type { HTTPClientConfig } from './HTTPClientConfig.js';
import {
    HTTPClientConfigFromJSON,
    HTTPClientConfigFromJSONTyped,
    HTTPClientConfigToJSON,
    HTTPClientConfigToJSONTyped,
} from './HTTPClientConfig.js';
import type { URL } from './URL.js';
import {
    URLFromJSON,
    URLFromJSONTyped,
    URLToJSON,
    URLToJSONTyped,
} from './URL.js';

/**
 * 
 * @export
 * @interface WebhookConfig
 */
export interface WebhookConfig {
    /**
     * 
     * @type {HTTPClientConfig}
     * @memberof WebhookConfig
     */
    httpConfig?: HTTPClientConfig;
    /**
     * MaxAlerts is the maximum number of alerts to be sent per webhook message.
     * Alerts exceeding this threshold will be truncated. Setting this to 0
     * allows an unlimited number of alerts.
     * @type {number}
     * @memberof WebhookConfig
     */
    maxAlerts?: number;
    /**
     * 
     * @type {boolean}
     * @memberof WebhookConfig
     */
    sendResolved?: boolean;
    /**
     * 
     * @type {URL}
     * @memberof WebhookConfig
     */
    url?: URL;
    /**
     * 
     * @type {string}
     * @memberof WebhookConfig
     */
    urlFile?: string;
}

/**
 * Check if a given object implements the WebhookConfig interface.
 */
export function instanceOfWebhookConfig(value: object): value is WebhookConfig {
    return true;
}

export function WebhookConfigFromJSON(json: any): WebhookConfig {
    return WebhookConfigFromJSONTyped(json, false);
}

export function WebhookConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'httpConfig': json['http_config'] == null ? undefined : HTTPClientConfigFromJSON(json['http_config']),
        'maxAlerts': json['max_alerts'] == null ? undefined : json['max_alerts'],
        'sendResolved': json['send_resolved'] == null ? undefined : json['send_resolved'],
        'url': json['url'] == null ? undefined : URLFromJSON(json['url']),
        'urlFile': json['url_file'] == null ? undefined : json['url_file'],
    };
}

export function WebhookConfigToJSON(json: any): WebhookConfig {
    return WebhookConfigToJSONTyped(json, false);
}

export function WebhookConfigToJSONTyped(value?: WebhookConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'http_config': HTTPClientConfigToJSON(value['httpConfig']),
        'max_alerts': value['maxAlerts'],
        'send_resolved': value['sendResolved'],
        'url': URLToJSON(value['url']),
        'url_file': value['urlFile'],
    };
}

