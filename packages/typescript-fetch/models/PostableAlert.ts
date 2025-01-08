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
 * PostableAlert postable alert
 * @export
 * @interface PostableAlert
 */
export interface PostableAlert {
    /**
     * LabelSet label set
     * @type {{ [key: string]: string; }}
     * @memberof PostableAlert
     */
    annotations?: { [key: string]: string; };
    /**
     * ends at
     * Format: date-time
     * @type {Date}
     * @memberof PostableAlert
     */
    endsAt?: Date;
    /**
     * generator URL
     * Format: uri
     * @type {string}
     * @memberof PostableAlert
     */
    generatorURL?: string;
    /**
     * LabelSet label set
     * @type {{ [key: string]: string; }}
     * @memberof PostableAlert
     */
    labels: { [key: string]: string; };
    /**
     * starts at
     * Format: date-time
     * @type {Date}
     * @memberof PostableAlert
     */
    startsAt?: Date;
}

/**
 * Check if a given object implements the PostableAlert interface.
 */
export function instanceOfPostableAlert(value: object): value is PostableAlert {
    if (!('labels' in value) || value['labels'] === undefined) return false;
    return true;
}

export function PostableAlertFromJSON(json: any): PostableAlert {
    return PostableAlertFromJSONTyped(json, false);
}

export function PostableAlertFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostableAlert {
    if (json == null) {
        return json;
    }
    return {
        
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'endsAt': json['endsAt'] == null ? undefined : (new Date(json['endsAt'])),
        'generatorURL': json['generatorURL'] == null ? undefined : json['generatorURL'],
        'labels': json['labels'],
        'startsAt': json['startsAt'] == null ? undefined : (new Date(json['startsAt'])),
    };
}

export function PostableAlertToJSON(json: any): PostableAlert {
    return PostableAlertToJSONTyped(json, false);
}

export function PostableAlertToJSONTyped(value?: PostableAlert | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'annotations': value['annotations'],
        'endsAt': value['endsAt'] == null ? undefined : ((value['endsAt']).toISOString()),
        'generatorURL': value['generatorURL'],
        'labels': value['labels'],
        'startsAt': value['startsAt'] == null ? undefined : ((value['startsAt']).toISOString()),
    };
}

