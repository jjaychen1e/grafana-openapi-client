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
 * @interface PostDashboard200Response
 */
export interface PostDashboard200Response {
    /**
     * FolderUID The unique identifier (uid) of the folder the dashboard belongs to.
     * @type {string}
     * @memberof PostDashboard200Response
     */
    folderUid?: string;
    /**
     * ID The unique identifier (id) of the created/updated dashboard.
     * @type {number}
     * @memberof PostDashboard200Response
     */
    id: number;
    /**
     * Status status of the response.
     * @type {string}
     * @memberof PostDashboard200Response
     */
    status: string;
    /**
     * Slug The slug of the dashboard.
     * @type {string}
     * @memberof PostDashboard200Response
     */
    title: string;
    /**
     * UID The unique identifier (uid) of the created/updated dashboard.
     * @type {string}
     * @memberof PostDashboard200Response
     */
    uid: string;
    /**
     * URL The relative URL for accessing the created/updated dashboard.
     * @type {string}
     * @memberof PostDashboard200Response
     */
    url: string;
    /**
     * Version The version of the dashboard.
     * @type {number}
     * @memberof PostDashboard200Response
     */
    version: number;
}

/**
 * Check if a given object implements the PostDashboard200Response interface.
 */
export function instanceOfPostDashboard200Response(value: object): value is PostDashboard200Response {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('uid' in value) || value['uid'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function PostDashboard200ResponseFromJSON(json: any): PostDashboard200Response {
    return PostDashboard200ResponseFromJSONTyped(json, false);
}

export function PostDashboard200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostDashboard200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'folderUid': json['folderUid'] == null ? undefined : json['folderUid'],
        'id': json['id'],
        'status': json['status'],
        'title': json['title'],
        'uid': json['uid'],
        'url': json['url'],
        'version': json['version'],
    };
}

export function PostDashboard200ResponseToJSON(json: any): PostDashboard200Response {
    return PostDashboard200ResponseToJSONTyped(json, false);
}

export function PostDashboard200ResponseToJSONTyped(value?: PostDashboard200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'folderUid': value['folderUid'],
        'id': value['id'],
        'status': value['status'],
        'title': value['title'],
        'uid': value['uid'],
        'url': value['url'],
        'version': value['version'],
    };
}

