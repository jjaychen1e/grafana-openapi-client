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
import type { LibraryElementDTOMetaUser } from './LibraryElementDTOMetaUser';
import {
    LibraryElementDTOMetaUserFromJSON,
    LibraryElementDTOMetaUserFromJSONTyped,
    LibraryElementDTOMetaUserToJSON,
    LibraryElementDTOMetaUserToJSONTyped,
} from './LibraryElementDTOMetaUser';

/**
 * 
 * @export
 * @interface LibraryElementDTOMeta
 */
export interface LibraryElementDTOMeta {
    /**
     * 
     * @type {number}
     * @memberof LibraryElementDTOMeta
     */
    connectedDashboards?: number;
    /**
     * 
     * @type {Date}
     * @memberof LibraryElementDTOMeta
     */
    created?: Date;
    /**
     * 
     * @type {LibraryElementDTOMetaUser}
     * @memberof LibraryElementDTOMeta
     */
    createdBy?: LibraryElementDTOMetaUser;
    /**
     * 
     * @type {string}
     * @memberof LibraryElementDTOMeta
     */
    folderName?: string;
    /**
     * 
     * @type {string}
     * @memberof LibraryElementDTOMeta
     */
    folderUid?: string;
    /**
     * 
     * @type {Date}
     * @memberof LibraryElementDTOMeta
     */
    updated?: Date;
    /**
     * 
     * @type {LibraryElementDTOMetaUser}
     * @memberof LibraryElementDTOMeta
     */
    updatedBy?: LibraryElementDTOMetaUser;
}

/**
 * Check if a given object implements the LibraryElementDTOMeta interface.
 */
export function instanceOfLibraryElementDTOMeta(value: object): value is LibraryElementDTOMeta {
    return true;
}

export function LibraryElementDTOMetaFromJSON(json: any): LibraryElementDTOMeta {
    return LibraryElementDTOMetaFromJSONTyped(json, false);
}

export function LibraryElementDTOMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryElementDTOMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'connectedDashboards': json['connectedDashboards'] == null ? undefined : json['connectedDashboards'],
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'createdBy': json['createdBy'] == null ? undefined : LibraryElementDTOMetaUserFromJSON(json['createdBy']),
        'folderName': json['folderName'] == null ? undefined : json['folderName'],
        'folderUid': json['folderUid'] == null ? undefined : json['folderUid'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'updatedBy': json['updatedBy'] == null ? undefined : LibraryElementDTOMetaUserFromJSON(json['updatedBy']),
    };
}

export function LibraryElementDTOMetaToJSON(json: any): LibraryElementDTOMeta {
    return LibraryElementDTOMetaToJSONTyped(json, false);
}

export function LibraryElementDTOMetaToJSONTyped(value?: LibraryElementDTOMeta | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'connectedDashboards': value['connectedDashboards'],
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'createdBy': LibraryElementDTOMetaUserToJSON(value['createdBy']),
        'folderName': value['folderName'],
        'folderUid': value['folderUid'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
        'updatedBy': LibraryElementDTOMetaUserToJSON(value['updatedBy']),
    };
}

