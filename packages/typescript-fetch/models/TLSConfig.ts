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
 * @interface TLSConfig
 */
export interface TLSConfig {
    /**
     * Text of the CA cert to use for the targets.
     * @type {string}
     * @memberof TLSConfig
     */
    ca?: string;
    /**
     * The CA cert to use for the targets.
     * @type {string}
     * @memberof TLSConfig
     */
    caFile?: string;
    /**
     * CARef is the name of the secret within the secret manager to use as the CA cert for the
     * targets.
     * @type {string}
     * @memberof TLSConfig
     */
    caRef?: string;
    /**
     * Text of the client cert file for the targets.
     * @type {string}
     * @memberof TLSConfig
     */
    cert?: string;
    /**
     * The client cert file for the targets.
     * @type {string}
     * @memberof TLSConfig
     */
    certFile?: string;
    /**
     * CertRef is the name of the secret within the secret manager to use as the client cert for
     * the targets.
     * @type {string}
     * @memberof TLSConfig
     */
    certRef?: string;
    /**
     * Disable target certificate validation.
     * @type {boolean}
     * @memberof TLSConfig
     */
    insecureSkipVerify?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TLSConfig
     */
    key?: string;
    /**
     * The client key file for the targets.
     * @type {string}
     * @memberof TLSConfig
     */
    keyFile?: string;
    /**
     * KeyRef is the name of the secret within the secret manager to use as the client key for
     * the targets.
     * @type {string}
     * @memberof TLSConfig
     */
    keyRef?: string;
    /**
     * 
     * @type {number}
     * @memberof TLSConfig
     */
    maxVersion?: number;
    /**
     * 
     * @type {number}
     * @memberof TLSConfig
     */
    minVersion?: number;
    /**
     * Used to verify the hostname for the targets.
     * @type {string}
     * @memberof TLSConfig
     */
    serverName?: string;
}

/**
 * Check if a given object implements the TLSConfig interface.
 */
export function instanceOfTLSConfig(value: object): value is TLSConfig {
    return true;
}

export function TLSConfigFromJSON(json: any): TLSConfig {
    return TLSConfigFromJSONTyped(json, false);
}

export function TLSConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLSConfig {
    if (json == null) {
        return json;
    }
    return {
        
        'ca': json['ca'] == null ? undefined : json['ca'],
        'caFile': json['ca_file'] == null ? undefined : json['ca_file'],
        'caRef': json['ca_ref'] == null ? undefined : json['ca_ref'],
        'cert': json['cert'] == null ? undefined : json['cert'],
        'certFile': json['cert_file'] == null ? undefined : json['cert_file'],
        'certRef': json['cert_ref'] == null ? undefined : json['cert_ref'],
        'insecureSkipVerify': json['insecure_skip_verify'] == null ? undefined : json['insecure_skip_verify'],
        'key': json['key'] == null ? undefined : json['key'],
        'keyFile': json['key_file'] == null ? undefined : json['key_file'],
        'keyRef': json['key_ref'] == null ? undefined : json['key_ref'],
        'maxVersion': json['max_version'] == null ? undefined : json['max_version'],
        'minVersion': json['min_version'] == null ? undefined : json['min_version'],
        'serverName': json['server_name'] == null ? undefined : json['server_name'],
    };
}

export function TLSConfigToJSON(json: any): TLSConfig {
    return TLSConfigToJSONTyped(json, false);
}

export function TLSConfigToJSONTyped(value?: TLSConfig | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ca': value['ca'],
        'ca_file': value['caFile'],
        'ca_ref': value['caRef'],
        'cert': value['cert'],
        'cert_file': value['certFile'],
        'cert_ref': value['certRef'],
        'insecure_skip_verify': value['insecureSkipVerify'],
        'key': value['key'],
        'key_file': value['keyFile'],
        'key_ref': value['keyRef'],
        'max_version': value['maxVersion'],
        'min_version': value['minVersion'],
        'server_name': value['serverName'],
    };
}

