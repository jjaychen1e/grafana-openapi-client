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
import type { HostPort } from './HostPort.js';
import {
    HostPortFromJSON,
    HostPortFromJSONTyped,
    HostPortToJSON,
    HostPortToJSONTyped,
} from './HostPort.js';
import type { TLSConfig } from './TLSConfig.js';
import {
    TLSConfigFromJSON,
    TLSConfigFromJSONTyped,
    TLSConfigToJSON,
    TLSConfigToJSONTyped,
} from './TLSConfig.js';

/**
 * 
 * @export
 * @interface EmailConfig
 */
export interface EmailConfig {
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    authIdentity?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    authPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    authPasswordFile?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    authSecret?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    authUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    from?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof EmailConfig
     */
    headers?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    hello?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    html?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmailConfig
     */
    requireTls?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmailConfig
     */
    sendResolved?: boolean;
    /**
     * 
     * @type {HostPort}
     * @memberof EmailConfig
     */
    smarthost?: HostPort;
    /**
     * 
     * @type {string}
     * @memberof EmailConfig
     */
    text?: string;
    /**
     * 
     * @type {TLSConfig}
     * @memberof EmailConfig
     */
    tlsConfig?: TLSConfig;
    /**
     * Email address to notify.
     * @type {string}
     * @memberof EmailConfig
     */
    to?: string;
}

/**
 * Check if a given object implements the EmailConfig interface.
 */
export function instanceOfEmailConfig(value: object): value is EmailConfig {
    return true;
}

export function EmailConfigFromJSON(json: any): EmailConfig {
    return EmailConfigFromJSONTyped(json, false);
}

export function EmailConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'authIdentity': json['auth_identity'] == null ? undefined : json['auth_identity'],
        'authPassword': json['auth_password'] == null ? undefined : json['auth_password'],
        'authPasswordFile': json['auth_password_file'] == null ? undefined : json['auth_password_file'],
        'authSecret': json['auth_secret'] == null ? undefined : json['auth_secret'],
        'authUsername': json['auth_username'] == null ? undefined : json['auth_username'],
        'from': json['from'] == null ? undefined : json['from'],
        'headers': json['headers'] == null ? undefined : json['headers'],
        'hello': json['hello'] == null ? undefined : json['hello'],
        'html': json['html'] == null ? undefined : json['html'],
        'requireTls': json['require_tls'] == null ? undefined : json['require_tls'],
        'sendResolved': json['send_resolved'] == null ? undefined : json['send_resolved'],
        'smarthost': json['smarthost'] == null ? undefined : HostPortFromJSON(json['smarthost']),
        'text': json['text'] == null ? undefined : json['text'],
        'tlsConfig': json['tls_config'] == null ? undefined : TLSConfigFromJSON(json['tls_config']),
        'to': json['to'] == null ? undefined : json['to'],
    };
}

export function EmailConfigToJSON(json: any): EmailConfig {
    return EmailConfigToJSONTyped(json, false);
}

export function EmailConfigToJSONTyped(value?: EmailConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'auth_identity': value['authIdentity'],
        'auth_password': value['authPassword'],
        'auth_password_file': value['authPasswordFile'],
        'auth_secret': value['authSecret'],
        'auth_username': value['authUsername'],
        'from': value['from'],
        'headers': value['headers'],
        'hello': value['hello'],
        'html': value['html'],
        'require_tls': value['requireTls'],
        'send_resolved': value['sendResolved'],
        'smarthost': HostPortToJSON(value['smarthost']),
        'text': value['text'],
        'tls_config': TLSConfigToJSON(value['tlsConfig']),
        'to': value['to'],
    };
}
