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
 * @interface ImportDashboardResponse
 */
export interface ImportDashboardResponse {
    /**
     * 
     * @type {number}
     * @memberof ImportDashboardResponse
     */
    dashboardId?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    description?: string;
    /**
     * Deprecated: use FolderUID instead
     * @type {number}
     * @memberof ImportDashboardResponse
     */
    folderId?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    folderUid?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImportDashboardResponse
     */
    imported?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImportDashboardResponse
     */
    importedRevision?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    importedUri?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    importedUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    pluginId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ImportDashboardResponse
     */
    removed?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ImportDashboardResponse
     */
    revision?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardResponse
     */
    uid?: string;
}

/**
 * Check if a given object implements the ImportDashboardResponse interface.
 */
export function instanceOfImportDashboardResponse(value: object): value is ImportDashboardResponse {
    return true;
}

export function ImportDashboardResponseFromJSON(json: any): ImportDashboardResponse {
    return ImportDashboardResponseFromJSONTyped(json, false);
}

export function ImportDashboardResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportDashboardResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'dashboardId': json['dashboardId'] == null ? undefined : json['dashboardId'],
        'description': json['description'] == null ? undefined : json['description'],
        'folderId': json['folderId'] == null ? undefined : json['folderId'],
        'folderUid': json['folderUid'] == null ? undefined : json['folderUid'],
        'imported': json['imported'] == null ? undefined : json['imported'],
        'importedRevision': json['importedRevision'] == null ? undefined : json['importedRevision'],
        'importedUri': json['importedUri'] == null ? undefined : json['importedUri'],
        'importedUrl': json['importedUrl'] == null ? undefined : json['importedUrl'],
        'path': json['path'] == null ? undefined : json['path'],
        'pluginId': json['pluginId'] == null ? undefined : json['pluginId'],
        'removed': json['removed'] == null ? undefined : json['removed'],
        'revision': json['revision'] == null ? undefined : json['revision'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'title': json['title'] == null ? undefined : json['title'],
        'uid': json['uid'] == null ? undefined : json['uid'],
    };
}

export function ImportDashboardResponseToJSON(json: any): ImportDashboardResponse {
    return ImportDashboardResponseToJSONTyped(json, false);
}

export function ImportDashboardResponseToJSONTyped(value?: ImportDashboardResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dashboardId': value['dashboardId'],
        'description': value['description'],
        'folderId': value['folderId'],
        'folderUid': value['folderUid'],
        'imported': value['imported'],
        'importedRevision': value['importedRevision'],
        'importedUri': value['importedUri'],
        'importedUrl': value['importedUrl'],
        'path': value['path'],
        'pluginId': value['pluginId'],
        'removed': value['removed'],
        'revision': value['revision'],
        'slug': value['slug'],
        'title': value['title'],
        'uid': value['uid'],
    };
}

