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
 * @interface PlaylistItem
 */
export interface PlaylistItem {
    /**
     * 
     * @type {number}
     * @memberof PlaylistItem
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof PlaylistItem
     */
    playlistId?: number;
    /**
     * 
     * @type {number}
     * @memberof PlaylistItem
     */
    order?: number;
    /**
     * 
     * @type {string}
     * @memberof PlaylistItem
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaylistItem
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof PlaylistItem
     */
    value?: string;
}

/**
 * Check if a given object implements the PlaylistItem interface.
 */
export function instanceOfPlaylistItem(value: object): value is PlaylistItem {
    return true;
}

export function PlaylistItemFromJSON(json: any): PlaylistItem {
    return PlaylistItemFromJSONTyped(json, false);
}

export function PlaylistItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaylistItem {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['Id'] == null ? undefined : json['Id'],
        'playlistId': json['PlaylistId'] == null ? undefined : json['PlaylistId'],
        'order': json['order'] == null ? undefined : json['order'],
        'title': json['title'] == null ? undefined : json['title'],
        'type': json['type'] == null ? undefined : json['type'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function PlaylistItemToJSON(json: any): PlaylistItem {
    return PlaylistItemToJSONTyped(json, false);
}

export function PlaylistItemToJSONTyped(value?: PlaylistItem | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'Id': value['id'],
        'PlaylistId': value['playlistId'],
        'order': value['order'],
        'title': value['title'],
        'type': value['type'],
        'value': value['value'],
    };
}
