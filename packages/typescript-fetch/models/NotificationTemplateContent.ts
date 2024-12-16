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
 * @interface NotificationTemplateContent
 */
export interface NotificationTemplateContent {
    /**
     * 
     * @type {string}
     * @memberof NotificationTemplateContent
     */
    template?: string;
}

/**
 * Check if a given object implements the NotificationTemplateContent interface.
 */
export function instanceOfNotificationTemplateContent(value: object): value is NotificationTemplateContent {
    return true;
}

export function NotificationTemplateContentFromJSON(json: any): NotificationTemplateContent {
    return NotificationTemplateContentFromJSONTyped(json, false);
}

export function NotificationTemplateContentFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationTemplateContent {
    if (json == null) {
        return json;
    }
    return {
        
        'template': json['template'] == null ? undefined : json['template'],
    };
}

export function NotificationTemplateContentToJSON(json: any): NotificationTemplateContent {
    return NotificationTemplateContentToJSONTyped(json, false);
}

export function NotificationTemplateContentToJSONTyped(value?: NotificationTemplateContent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'template': value['template'],
    };
}

