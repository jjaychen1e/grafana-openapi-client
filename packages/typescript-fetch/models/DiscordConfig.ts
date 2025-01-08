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
 * @interface DiscordConfig
 */
export interface DiscordConfig {
    /**
     * 
     * @type {HTTPClientConfig}
     * @memberof DiscordConfig
     */
    httpConfig?: HTTPClientConfig;
    /**
     * 
     * @type {string}
     * @memberof DiscordConfig
     */
    message?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DiscordConfig
     */
    sendResolved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DiscordConfig
     */
    title?: string;
    /**
     * 
     * @type {URL}
     * @memberof DiscordConfig
     */
    webhookUrl?: URL;
    /**
     * 
     * @type {string}
     * @memberof DiscordConfig
     */
    webhookUrlFile?: string;
}

/**
 * Check if a given object implements the DiscordConfig interface.
 */
export function instanceOfDiscordConfig(value: object): value is DiscordConfig {
    return true;
}

export function DiscordConfigFromJSON(json: any): DiscordConfig {
    return DiscordConfigFromJSONTyped(json, false);
}

export function DiscordConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscordConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'httpConfig': json['http_config'] == null ? undefined : HTTPClientConfigFromJSON(json['http_config']),
        'message': json['message'] == null ? undefined : json['message'],
        'sendResolved': json['send_resolved'] == null ? undefined : json['send_resolved'],
        'title': json['title'] == null ? undefined : json['title'],
        'webhookUrl': json['webhook_url'] == null ? undefined : URLFromJSON(json['webhook_url']),
        'webhookUrlFile': json['webhook_url_file'] == null ? undefined : json['webhook_url_file'],
    };
}

export function DiscordConfigToJSON(json: any): DiscordConfig {
    return DiscordConfigToJSONTyped(json, false);
}

export function DiscordConfigToJSONTyped(value?: DiscordConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'http_config': HTTPClientConfigToJSON(value['httpConfig']),
        'message': value['message'],
        'send_resolved': value['sendResolved'],
        'title': value['title'],
        'webhook_url': URLToJSON(value['webhookUrl']),
        'webhook_url_file': value['webhookUrlFile'],
    };
}

