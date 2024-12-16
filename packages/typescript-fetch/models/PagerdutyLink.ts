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
/**
 * PagerdutyLink is a link
 * @export
 * @interface PagerdutyLink
 */
export interface PagerdutyLink {
    /**
     * 
     * @type {string}
     * @memberof PagerdutyLink
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof PagerdutyLink
     */
    text?: string;
}

/**
 * Check if a given object implements the PagerdutyLink interface.
 */
export function instanceOfPagerdutyLink(value: object): value is PagerdutyLink {
    return true;
}

export function PagerdutyLinkFromJSON(json: any): PagerdutyLink {
    return PagerdutyLinkFromJSONTyped(json, false);
}

export function PagerdutyLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagerdutyLink {
    if (json == null) {
        return json;
    }
    return {
        
        'href': json['href'] == null ? undefined : json['href'],
        'text': json['text'] == null ? undefined : json['text'],
    };
}

export function PagerdutyLinkToJSON(json: any): PagerdutyLink {
    return PagerdutyLinkToJSONTyped(json, false);
}

export function PagerdutyLinkToJSONTyped(value?: PagerdutyLink | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'href': value['href'],
        'text': value['text'],
    };
}

