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
import type { ImportDashboardInput } from './ImportDashboardInput.js';
import {
    ImportDashboardInputFromJSON,
    ImportDashboardInputFromJSONTyped,
    ImportDashboardInputToJSON,
    ImportDashboardInputToJSONTyped,
} from './ImportDashboardInput.js';

/**
 * 
 * @export
 * @interface ImportDashboardRequest
 */
export interface ImportDashboardRequest {
    /**
     * 
     * @type {object}
     * @memberof ImportDashboardRequest
     */
    dashboard?: object;
    /**
     * Deprecated: use FolderUID instead
     * @type {number}
     * @memberof ImportDashboardRequest
     */
    folderId?: number;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardRequest
     */
    folderUid?: string;
    /**
     * 
     * @type {Array<ImportDashboardInput>}
     * @memberof ImportDashboardRequest
     */
    inputs?: Array<ImportDashboardInput>;
    /**
     * 
     * @type {boolean}
     * @memberof ImportDashboardRequest
     */
    overwrite?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardRequest
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ImportDashboardRequest
     */
    pluginId?: string;
}

/**
 * Check if a given object implements the ImportDashboardRequest interface.
 */
export function instanceOfImportDashboardRequest(value: object): value is ImportDashboardRequest {
    return true;
}

export function ImportDashboardRequestFromJSON(json: any): ImportDashboardRequest {
    return ImportDashboardRequestFromJSONTyped(json, false);
}

export function ImportDashboardRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImportDashboardRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'dashboard': json['dashboard'] == null ? undefined : json['dashboard'],
        'folderId': json['folderId'] == null ? undefined : json['folderId'],
        'folderUid': json['folderUid'] == null ? undefined : json['folderUid'],
        'inputs': json['inputs'] == null ? undefined : ((json['inputs'] as Array<any>).map(ImportDashboardInputFromJSON)),
        'overwrite': json['overwrite'] == null ? undefined : json['overwrite'],
        'path': json['path'] == null ? undefined : json['path'],
        'pluginId': json['pluginId'] == null ? undefined : json['pluginId'],
    };
}

export function ImportDashboardRequestToJSON(json: any): ImportDashboardRequest {
    return ImportDashboardRequestToJSONTyped(json, false);
}

export function ImportDashboardRequestToJSONTyped(value?: ImportDashboardRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dashboard': value['dashboard'],
        'folderId': value['folderId'],
        'folderUid': value['folderUid'],
        'inputs': value['inputs'] == null ? undefined : ((value['inputs'] as Array<any>).map(ImportDashboardInputToJSON)),
        'overwrite': value['overwrite'],
        'path': value['path'],
        'pluginId': value['pluginId'],
    };
}
