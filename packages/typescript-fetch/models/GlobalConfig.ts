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
 * GlobalConfig defines configuration parameters that are valid globally
 * unless overwritten.
 * @export
 * @interface GlobalConfig
 */
export interface GlobalConfig {
    /**
     * 
     * @type {HTTPClientConfig}
     * @memberof GlobalConfig
     */
    httpConfig?: HTTPClientConfig;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    opsgenieApiKey?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    opsgenieApiKeyFile?: string;
    /**
     * 
     * @type {URL}
     * @memberof GlobalConfig
     */
    opsgenieApiUrl?: URL;
    /**
     * 
     * @type {URL}
     * @memberof GlobalConfig
     */
    pagerdutyUrl?: URL;
    /**
     * A Duration represents the elapsed time between two instants
     * as an int64 nanosecond count. The representation limits the
     * largest representable duration to approximately 290 years.
     * @type {number}
     * @memberof GlobalConfig
     */
    resolveTimeout?: number;
    /**
     * 
     * @type {URL}
     * @memberof GlobalConfig
     */
    slackApiUrl?: URL;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    slackApiUrlFile?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    smtpAuthIdentity?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    smtpAuthPassword?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    smtpAuthPasswordFile?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    smtpAuthSecret?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    smtpAuthUsername?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    smtpFrom?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    smtpHello?: string;
    /**
     * 
     * @type {boolean}
     * @memberof GlobalConfig
     */
    smtpRequireTls?: boolean;
    /**
     * 
     * @type {HostPort}
     * @memberof GlobalConfig
     */
    smtpSmarthost?: HostPort;
    /**
     * 
     * @type {URL}
     * @memberof GlobalConfig
     */
    telegramApiUrl?: URL;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    victoropsApiKey?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    victoropsApiKeyFile?: string;
    /**
     * 
     * @type {URL}
     * @memberof GlobalConfig
     */
    victoropsApiUrl?: URL;
    /**
     * 
     * @type {URL}
     * @memberof GlobalConfig
     */
    webexApiUrl?: URL;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    wechatApiCorpId?: string;
    /**
     * 
     * @type {string}
     * @memberof GlobalConfig
     */
    wechatApiSecret?: string;
    /**
     * 
     * @type {URL}
     * @memberof GlobalConfig
     */
    wechatApiUrl?: URL;
}

/**
 * Check if a given object implements the GlobalConfig interface.
 */
export function instanceOfGlobalConfig(value: object): value is GlobalConfig {
    return true;
}

export function GlobalConfigFromJSON(json: any): GlobalConfig {
    return GlobalConfigFromJSONTyped(json, false);
}

export function GlobalConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'httpConfig': json['http_config'] == null ? undefined : HTTPClientConfigFromJSON(json['http_config']),
        'opsgenieApiKey': json['opsgenie_api_key'] == null ? undefined : json['opsgenie_api_key'],
        'opsgenieApiKeyFile': json['opsgenie_api_key_file'] == null ? undefined : json['opsgenie_api_key_file'],
        'opsgenieApiUrl': json['opsgenie_api_url'] == null ? undefined : URLFromJSON(json['opsgenie_api_url']),
        'pagerdutyUrl': json['pagerduty_url'] == null ? undefined : URLFromJSON(json['pagerduty_url']),
        'resolveTimeout': json['resolve_timeout'] == null ? undefined : json['resolve_timeout'],
        'slackApiUrl': json['slack_api_url'] == null ? undefined : URLFromJSON(json['slack_api_url']),
        'slackApiUrlFile': json['slack_api_url_file'] == null ? undefined : json['slack_api_url_file'],
        'smtpAuthIdentity': json['smtp_auth_identity'] == null ? undefined : json['smtp_auth_identity'],
        'smtpAuthPassword': json['smtp_auth_password'] == null ? undefined : json['smtp_auth_password'],
        'smtpAuthPasswordFile': json['smtp_auth_password_file'] == null ? undefined : json['smtp_auth_password_file'],
        'smtpAuthSecret': json['smtp_auth_secret'] == null ? undefined : json['smtp_auth_secret'],
        'smtpAuthUsername': json['smtp_auth_username'] == null ? undefined : json['smtp_auth_username'],
        'smtpFrom': json['smtp_from'] == null ? undefined : json['smtp_from'],
        'smtpHello': json['smtp_hello'] == null ? undefined : json['smtp_hello'],
        'smtpRequireTls': json['smtp_require_tls'] == null ? undefined : json['smtp_require_tls'],
        'smtpSmarthost': json['smtp_smarthost'] == null ? undefined : HostPortFromJSON(json['smtp_smarthost']),
        'telegramApiUrl': json['telegram_api_url'] == null ? undefined : URLFromJSON(json['telegram_api_url']),
        'victoropsApiKey': json['victorops_api_key'] == null ? undefined : json['victorops_api_key'],
        'victoropsApiKeyFile': json['victorops_api_key_file'] == null ? undefined : json['victorops_api_key_file'],
        'victoropsApiUrl': json['victorops_api_url'] == null ? undefined : URLFromJSON(json['victorops_api_url']),
        'webexApiUrl': json['webex_api_url'] == null ? undefined : URLFromJSON(json['webex_api_url']),
        'wechatApiCorpId': json['wechat_api_corp_id'] == null ? undefined : json['wechat_api_corp_id'],
        'wechatApiSecret': json['wechat_api_secret'] == null ? undefined : json['wechat_api_secret'],
        'wechatApiUrl': json['wechat_api_url'] == null ? undefined : URLFromJSON(json['wechat_api_url']),
    };
}

export function GlobalConfigToJSON(json: any): GlobalConfig {
    return GlobalConfigToJSONTyped(json, false);
}

export function GlobalConfigToJSONTyped(value?: GlobalConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'http_config': HTTPClientConfigToJSON(value['httpConfig']),
        'opsgenie_api_key': value['opsgenieApiKey'],
        'opsgenie_api_key_file': value['opsgenieApiKeyFile'],
        'opsgenie_api_url': URLToJSON(value['opsgenieApiUrl']),
        'pagerduty_url': URLToJSON(value['pagerdutyUrl']),
        'resolve_timeout': value['resolveTimeout'],
        'slack_api_url': URLToJSON(value['slackApiUrl']),
        'slack_api_url_file': value['slackApiUrlFile'],
        'smtp_auth_identity': value['smtpAuthIdentity'],
        'smtp_auth_password': value['smtpAuthPassword'],
        'smtp_auth_password_file': value['smtpAuthPasswordFile'],
        'smtp_auth_secret': value['smtpAuthSecret'],
        'smtp_auth_username': value['smtpAuthUsername'],
        'smtp_from': value['smtpFrom'],
        'smtp_hello': value['smtpHello'],
        'smtp_require_tls': value['smtpRequireTls'],
        'smtp_smarthost': HostPortToJSON(value['smtpSmarthost']),
        'telegram_api_url': URLToJSON(value['telegramApiUrl']),
        'victorops_api_key': value['victoropsApiKey'],
        'victorops_api_key_file': value['victoropsApiKeyFile'],
        'victorops_api_url': URLToJSON(value['victoropsApiUrl']),
        'webex_api_url': URLToJSON(value['webexApiUrl']),
        'wechat_api_corp_id': value['wechatApiCorpId'],
        'wechat_api_secret': value['wechatApiSecret'],
        'wechat_api_url': URLToJSON(value['wechatApiUrl']),
    };
}
