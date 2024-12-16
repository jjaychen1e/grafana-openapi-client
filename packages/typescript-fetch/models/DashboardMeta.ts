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
import type { AnnotationPermission } from './AnnotationPermission';
import {
    AnnotationPermissionFromJSON,
    AnnotationPermissionFromJSONTyped,
    AnnotationPermissionToJSON,
    AnnotationPermissionToJSONTyped,
} from './AnnotationPermission';

/**
 * 
 * @export
 * @interface DashboardMeta
 */
export interface DashboardMeta {
    /**
     * 
     * @type {AnnotationPermission}
     * @memberof DashboardMeta
     */
    annotationsPermissions?: AnnotationPermission;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    canAdmin?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    canDelete?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    canEdit?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    canSave?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    canStar?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof DashboardMeta
     */
    created?: Date;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    createdBy?: string;
    /**
     * 
     * @type {Date}
     * @memberof DashboardMeta
     */
    expires?: Date;
    /**
     * Deprecated: use FolderUID instead
     * @type {number}
     * @memberof DashboardMeta
     */
    folderId?: number;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    folderTitle?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    folderUid?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    folderUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    hasAcl?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    isFolder?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    isSnapshot?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    isStarred?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    provisioned?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    provisionedExternalId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DashboardMeta
     */
    publicDashboardEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    type?: string;
    /**
     * 
     * @type {Date}
     * @memberof DashboardMeta
     */
    updated?: Date;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    updatedBy?: string;
    /**
     * 
     * @type {string}
     * @memberof DashboardMeta
     */
    url?: string;
    /**
     * 
     * @type {number}
     * @memberof DashboardMeta
     */
    version?: number;
}

/**
 * Check if a given object implements the DashboardMeta interface.
 */
export function instanceOfDashboardMeta(value: object): value is DashboardMeta {
    return true;
}

export function DashboardMetaFromJSON(json: any): DashboardMeta {
    return DashboardMetaFromJSONTyped(json, false);
}

export function DashboardMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DashboardMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'annotationsPermissions': json['annotationsPermissions'] == null ? undefined : AnnotationPermissionFromJSON(json['annotationsPermissions']),
        'canAdmin': json['canAdmin'] == null ? undefined : json['canAdmin'],
        'canDelete': json['canDelete'] == null ? undefined : json['canDelete'],
        'canEdit': json['canEdit'] == null ? undefined : json['canEdit'],
        'canSave': json['canSave'] == null ? undefined : json['canSave'],
        'canStar': json['canStar'] == null ? undefined : json['canStar'],
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'expires': json['expires'] == null ? undefined : (new Date(json['expires'])),
        'folderId': json['folderId'] == null ? undefined : json['folderId'],
        'folderTitle': json['folderTitle'] == null ? undefined : json['folderTitle'],
        'folderUid': json['folderUid'] == null ? undefined : json['folderUid'],
        'folderUrl': json['folderUrl'] == null ? undefined : json['folderUrl'],
        'hasAcl': json['hasAcl'] == null ? undefined : json['hasAcl'],
        'isFolder': json['isFolder'] == null ? undefined : json['isFolder'],
        'isSnapshot': json['isSnapshot'] == null ? undefined : json['isSnapshot'],
        'isStarred': json['isStarred'] == null ? undefined : json['isStarred'],
        'provisioned': json['provisioned'] == null ? undefined : json['provisioned'],
        'provisionedExternalId': json['provisionedExternalId'] == null ? undefined : json['provisionedExternalId'],
        'publicDashboardEnabled': json['publicDashboardEnabled'] == null ? undefined : json['publicDashboardEnabled'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'type': json['type'] == null ? undefined : json['type'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'updatedBy': json['updatedBy'] == null ? undefined : json['updatedBy'],
        'url': json['url'] == null ? undefined : json['url'],
        'version': json['version'] == null ? undefined : json['version'],
    };
}

export function DashboardMetaToJSON(json: any): DashboardMeta {
    return DashboardMetaToJSONTyped(json, false);
}

export function DashboardMetaToJSONTyped(value?: DashboardMeta | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'annotationsPermissions': AnnotationPermissionToJSON(value['annotationsPermissions']),
        'canAdmin': value['canAdmin'],
        'canDelete': value['canDelete'],
        'canEdit': value['canEdit'],
        'canSave': value['canSave'],
        'canStar': value['canStar'],
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'createdBy': value['createdBy'],
        'expires': value['expires'] == null ? undefined : ((value['expires']).toISOString()),
        'folderId': value['folderId'],
        'folderTitle': value['folderTitle'],
        'folderUid': value['folderUid'],
        'folderUrl': value['folderUrl'],
        'hasAcl': value['hasAcl'],
        'isFolder': value['isFolder'],
        'isSnapshot': value['isSnapshot'],
        'isStarred': value['isStarred'],
        'provisioned': value['provisioned'],
        'provisionedExternalId': value['provisionedExternalId'],
        'publicDashboardEnabled': value['publicDashboardEnabled'],
        'slug': value['slug'],
        'type': value['type'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
        'updatedBy': value['updatedBy'],
        'url': value['url'],
        'version': value['version'],
    };
}

