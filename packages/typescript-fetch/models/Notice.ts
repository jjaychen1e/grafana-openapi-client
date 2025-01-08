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
 * @interface Notice
 */
export interface Notice {
    /**
     * 
     * @type {number}
     * @memberof Notice
     */
    inspect?: number;
    /**
     * Link is an optional link for display in the user interface and can be an
     * absolute URL or a path relative to Grafana's root url.
     * @type {string}
     * @memberof Notice
     */
    link?: string;
    /**
     * 
     * @type {number}
     * @memberof Notice
     */
    severity?: number;
    /**
     * Text is freeform descriptive text for the notice.
     * @type {string}
     * @memberof Notice
     */
    text?: string;
}

/**
 * Check if a given object implements the Notice interface.
 */
export function instanceOfNotice(value: object): value is Notice {
    return true;
}

export function NoticeFromJSON(json: any): Notice {
    return NoticeFromJSONTyped(json, false);
}

export function NoticeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Notice {
    if (json == null) {
        return json;
    }
    return {
        
        'inspect': json['inspect'] == null ? undefined : json['inspect'],
        'link': json['link'] == null ? undefined : json['link'],
        'severity': json['severity'] == null ? undefined : json['severity'],
        'text': json['text'] == null ? undefined : json['text'],
    };
}

export function NoticeToJSON(json: any): Notice {
    return NoticeToJSONTyped(json, false);
}

export function NoticeToJSONTyped(value?: Notice | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'inspect': value['inspect'],
        'link': value['link'],
        'severity': value['severity'],
        'text': value['text'],
    };
}

