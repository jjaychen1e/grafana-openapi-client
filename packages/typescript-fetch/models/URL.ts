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
 * The general form represented is:
 * 
 * [scheme:][//[userinfo@]host][/]path[?query][#fragment]
 * 
 * URLs that do not start with a slash after the scheme are interpreted as:
 * 
 * scheme:opaque[?query][#fragment]
 * 
 * The Host field contains the host and port subcomponents of the URL.
 * When the port is present, it is separated from the host with a colon.
 * When the host is an IPv6 address, it must be enclosed in square brackets:
 * "[fe80::1]:80". The [net.JoinHostPort] function combines a host and port
 * into a string suitable for the Host field, adding square brackets to
 * the host when necessary.
 * 
 * Note that the Path field is stored in decoded form: /%47%6f%2f becomes /Go/.
 * A consequence is that it is impossible to tell which slashes in the Path were
 * slashes in the raw URL and which were %2f. This distinction is rarely important,
 * but when it is, the code should use the [URL.EscapedPath] method, which preserves
 * the original encoding of Path.
 * 
 * The RawPath field is an optional field which is only set when the default
 * encoding of Path is different from the escaped path. See the EscapedPath method
 * for more details.
 * 
 * URL's String method uses the EscapedPath method to obtain the path.
 * @export
 * @interface URL
 */
export interface URL {
    /**
     * 
     * @type {boolean}
     * @memberof URL
     */
    forceQuery?: boolean;
    /**
     * 
     * @type {string}
     * @memberof URL
     */
    fragment?: string;
    /**
     * 
     * @type {string}
     * @memberof URL
     */
    host?: string;
    /**
     * 
     * @type {boolean}
     * @memberof URL
     */
    omitHost?: boolean;
    /**
     * 
     * @type {string}
     * @memberof URL
     */
    opaque?: string;
    /**
     * 
     * @type {string}
     * @memberof URL
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof URL
     */
    rawFragment?: string;
    /**
     * 
     * @type {string}
     * @memberof URL
     */
    rawPath?: string;
    /**
     * 
     * @type {string}
     * @memberof URL
     */
    rawQuery?: string;
    /**
     * 
     * @type {string}
     * @memberof URL
     */
    scheme?: string;
    /**
     * The Userinfo type is an immutable encapsulation of username and
     * password details for a [URL]. An existing Userinfo value is guaranteed
     * to have a username set (potentially empty, as allowed by RFC 2396),
     * and optionally a password.
     * @type {object}
     * @memberof URL
     */
    user?: object;
}

/**
 * Check if a given object implements the URL interface.
 */
export function instanceOfURL(value: object): value is URL {
    return true;
}

export function URLFromJSON(json: any): URL {
    return URLFromJSONTyped(json, false);
}

export function URLFromJSONTyped(json: any, ignoreDiscriminator: boolean): URL {
    if (json == null) {
        return json;
    }
    return {
        
        'forceQuery': json['ForceQuery'] == null ? undefined : json['ForceQuery'],
        'fragment': json['Fragment'] == null ? undefined : json['Fragment'],
        'host': json['Host'] == null ? undefined : json['Host'],
        'omitHost': json['OmitHost'] == null ? undefined : json['OmitHost'],
        'opaque': json['Opaque'] == null ? undefined : json['Opaque'],
        'path': json['Path'] == null ? undefined : json['Path'],
        'rawFragment': json['RawFragment'] == null ? undefined : json['RawFragment'],
        'rawPath': json['RawPath'] == null ? undefined : json['RawPath'],
        'rawQuery': json['RawQuery'] == null ? undefined : json['RawQuery'],
        'scheme': json['Scheme'] == null ? undefined : json['Scheme'],
        'user': json['User'] == null ? undefined : json['User'],
    };
}

export function URLToJSON(json: any): URL {
    return URLToJSONTyped(json, false);
}

export function URLToJSONTyped(value?: URL | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'ForceQuery': value['forceQuery'],
        'Fragment': value['fragment'],
        'Host': value['host'],
        'OmitHost': value['omitHost'],
        'Opaque': value['opaque'],
        'Path': value['path'],
        'RawFragment': value['rawFragment'],
        'RawPath': value['rawPath'],
        'RawQuery': value['rawQuery'],
        'Scheme': value['scheme'],
        'User': value['user'],
    };
}
