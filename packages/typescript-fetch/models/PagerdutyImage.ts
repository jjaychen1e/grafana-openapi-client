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
 * 
 * @export
 * @interface PagerdutyImage
 */
export interface PagerdutyImage {
    /**
     * 
     * @type {string}
     * @memberof PagerdutyImage
     */
    alt?: string;
    /**
     * 
     * @type {string}
     * @memberof PagerdutyImage
     */
    href?: string;
    /**
     * 
     * @type {string}
     * @memberof PagerdutyImage
     */
    src?: string;
}

/**
 * Check if a given object implements the PagerdutyImage interface.
 */
export function instanceOfPagerdutyImage(value: object): value is PagerdutyImage {
    return true;
}

export function PagerdutyImageFromJSON(json: any): PagerdutyImage {
    return PagerdutyImageFromJSONTyped(json, false);
}

export function PagerdutyImageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagerdutyImage {
    if (json == null) {
        return json;
    }
    return {
        
        'alt': json['alt'] == null ? undefined : json['alt'],
        'href': json['href'] == null ? undefined : json['href'],
        'src': json['src'] == null ? undefined : json['src'],
    };
}

export function PagerdutyImageToJSON(json: any): PagerdutyImage {
    return PagerdutyImageToJSONTyped(json, false);
}

export function PagerdutyImageToJSONTyped(value?: PagerdutyImage | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alt': value['alt'],
        'href': value['href'],
        'src': value['src'],
    };
}

