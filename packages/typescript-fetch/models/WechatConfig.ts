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
 * @interface WechatConfig
 */
export interface WechatConfig {
    /**
     * 
     * @type {string}
     * @memberof WechatConfig
     */
    agentId?: string;
    /**
     * 
     * @type {string}
     * @memberof WechatConfig
     */
    apiSecret?: string;
    /**
     * 
     * @type {URL}
     * @memberof WechatConfig
     */
    apiUrl?: URL;
    /**
     * 
     * @type {string}
     * @memberof WechatConfig
     */
    corpId?: string;
    /**
     * 
     * @type {HTTPClientConfig}
     * @memberof WechatConfig
     */
    httpConfig?: HTTPClientConfig;
    /**
     * 
     * @type {string}
     * @memberof WechatConfig
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof WechatConfig
     */
    messageType?: string;
    /**
     * 
     * @type {boolean}
     * @memberof WechatConfig
     */
    sendResolved?: boolean;
    /**
     * 
     * @type {string}
     * @memberof WechatConfig
     */
    toParty?: string;
    /**
     * 
     * @type {string}
     * @memberof WechatConfig
     */
    toTag?: string;
    /**
     * 
     * @type {string}
     * @memberof WechatConfig
     */
    toUser?: string;
}

/**
 * Check if a given object implements the WechatConfig interface.
 */
export function instanceOfWechatConfig(value: object): value is WechatConfig {
    return true;
}

export function WechatConfigFromJSON(json: any): WechatConfig {
    return WechatConfigFromJSONTyped(json, false);
}

export function WechatConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): WechatConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'agentId': json['agent_id'] == null ? undefined : json['agent_id'],
        'apiSecret': json['api_secret'] == null ? undefined : json['api_secret'],
        'apiUrl': json['api_url'] == null ? undefined : URLFromJSON(json['api_url']),
        'corpId': json['corp_id'] == null ? undefined : json['corp_id'],
        'httpConfig': json['http_config'] == null ? undefined : HTTPClientConfigFromJSON(json['http_config']),
        'message': json['message'] == null ? undefined : json['message'],
        'messageType': json['message_type'] == null ? undefined : json['message_type'],
        'sendResolved': json['send_resolved'] == null ? undefined : json['send_resolved'],
        'toParty': json['to_party'] == null ? undefined : json['to_party'],
        'toTag': json['to_tag'] == null ? undefined : json['to_tag'],
        'toUser': json['to_user'] == null ? undefined : json['to_user'],
    };
}

export function WechatConfigToJSON(json: any): WechatConfig {
    return WechatConfigToJSONTyped(json, false);
}

export function WechatConfigToJSONTyped(value?: WechatConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'agent_id': value['agentId'],
        'api_secret': value['apiSecret'],
        'api_url': URLToJSON(value['apiUrl']),
        'corp_id': value['corpId'],
        'http_config': HTTPClientConfigToJSON(value['httpConfig']),
        'message': value['message'],
        'message_type': value['messageType'],
        'send_resolved': value['sendResolved'],
        'to_party': value['toParty'],
        'to_tag': value['toTag'],
        'to_user': value['toUser'],
    };
}
