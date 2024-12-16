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
 * @interface NotificationTemplate
 */
export interface NotificationTemplate {
    /**
     * 
     * @type {string}
     * @memberof NotificationTemplate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationTemplate
     */
    provenance?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationTemplate
     */
    template?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationTemplate
     */
    version?: string;
}

/**
 * Check if a given object implements the NotificationTemplate interface.
 */
export function instanceOfNotificationTemplate(value: object): value is NotificationTemplate {
    return true;
}

export function NotificationTemplateFromJSON(json: any): NotificationTemplate {
    return NotificationTemplateFromJSONTyped(json, false);
}

export function NotificationTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationTemplate {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'provenance': json['provenance'] == null ? undefined : json['provenance'],
        'template': json['template'] == null ? undefined : json['template'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function NotificationTemplateToJSON(json: any): NotificationTemplate {
    return NotificationTemplateToJSONTyped(json, false);
}

export function NotificationTemplateToJSONTyped(value?: NotificationTemplate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'provenance': value['provenance'],
        'template': value['template'],
        'version': value['version'],
    };
}

