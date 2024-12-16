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
import type { ReportDashboard } from './ReportDashboard';
import {
    ReportDashboardFromJSON,
    ReportDashboardFromJSONTyped,
    ReportDashboardToJSON,
    ReportDashboardToJSONTyped,
} from './ReportDashboard';
import type { ReportSchedule } from './ReportSchedule';
import {
    ReportScheduleFromJSON,
    ReportScheduleFromJSONTyped,
    ReportScheduleToJSON,
    ReportScheduleToJSONTyped,
} from './ReportSchedule';
import type { ReportOptions } from './ReportOptions';
import {
    ReportOptionsFromJSON,
    ReportOptionsFromJSONTyped,
    ReportOptionsToJSON,
    ReportOptionsToJSONTyped,
} from './ReportOptions';

/**
 * ConfigDTO is model representation in transfer
 * @export
 * @interface Report
 */
export interface Report {
    /**
     * 
     * @type {Date}
     * @memberof Report
     */
    created?: Date;
    /**
     * 
     * @type {Array<ReportDashboard>}
     * @memberof Report
     */
    dashboards?: Array<ReportDashboard>;
    /**
     * 
     * @type {boolean}
     * @memberof Report
     */
    enableCsv?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Report
     */
    enableDashboardUrl?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Report
     */
    formats?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof Report
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Report
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof Report
     */
    name?: string;
    /**
     * 
     * @type {ReportOptions}
     * @memberof Report
     */
    options?: ReportOptions;
    /**
     * 
     * @type {number}
     * @memberof Report
     */
    orgId?: number;
    /**
     * 
     * @type {string}
     * @memberof Report
     */
    recipients?: string;
    /**
     * 
     * @type {string}
     * @memberof Report
     */
    replyTo?: string;
    /**
     * 
     * @type {number}
     * @memberof Report
     */
    scaleFactor?: number;
    /**
     * 
     * @type {ReportSchedule}
     * @memberof Report
     */
    schedule?: ReportSchedule;
    /**
     * 
     * @type {string}
     * @memberof Report
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Report
     */
    uid?: string;
    /**
     * 
     * @type {Date}
     * @memberof Report
     */
    updated?: Date;
    /**
     * 
     * @type {number}
     * @memberof Report
     */
    userId?: number;
}

/**
 * Check if a given object implements the Report interface.
 */
export function instanceOfReport(value: object): value is Report {
    return true;
}

export function ReportFromJSON(json: any): Report {
    return ReportFromJSONTyped(json, false);
}

export function ReportFromJSONTyped(json: any, ignoreDiscriminator: boolean): Report {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : (new Date(json['created'])),
        'dashboards': json['dashboards'] == null ? undefined : ((json['dashboards'] as Array<any>).map(ReportDashboardFromJSON)),
        'enableCsv': json['enableCsv'] == null ? undefined : json['enableCsv'],
        'enableDashboardUrl': json['enableDashboardUrl'] == null ? undefined : json['enableDashboardUrl'],
        'formats': json['formats'] == null ? undefined : json['formats'],
        'id': json['id'] == null ? undefined : json['id'],
        'message': json['message'] == null ? undefined : json['message'],
        'name': json['name'] == null ? undefined : json['name'],
        'options': json['options'] == null ? undefined : ReportOptionsFromJSON(json['options']),
        'orgId': json['orgId'] == null ? undefined : json['orgId'],
        'recipients': json['recipients'] == null ? undefined : json['recipients'],
        'replyTo': json['replyTo'] == null ? undefined : json['replyTo'],
        'scaleFactor': json['scaleFactor'] == null ? undefined : json['scaleFactor'],
        'schedule': json['schedule'] == null ? undefined : ReportScheduleFromJSON(json['schedule']),
        'state': json['state'] == null ? undefined : json['state'],
        'uid': json['uid'] == null ? undefined : json['uid'],
        'updated': json['updated'] == null ? undefined : (new Date(json['updated'])),
        'userId': json['userId'] == null ? undefined : json['userId'],
    };
}

export function ReportToJSON(json: any): Report {
    return ReportToJSONTyped(json, false);
}

export function ReportToJSONTyped(value?: Report | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'created': value['created'] == null ? undefined : ((value['created']).toISOString()),
        'dashboards': value['dashboards'] == null ? undefined : ((value['dashboards'] as Array<any>).map(ReportDashboardToJSON)),
        'enableCsv': value['enableCsv'],
        'enableDashboardUrl': value['enableDashboardUrl'],
        'formats': value['formats'],
        'id': value['id'],
        'message': value['message'],
        'name': value['name'],
        'options': ReportOptionsToJSON(value['options']),
        'orgId': value['orgId'],
        'recipients': value['recipients'],
        'replyTo': value['replyTo'],
        'scaleFactor': value['scaleFactor'],
        'schedule': ReportScheduleToJSON(value['schedule']),
        'state': value['state'],
        'uid': value['uid'],
        'updated': value['updated'] == null ? undefined : ((value['updated']).toISOString()),
        'userId': value['userId'],
    };
}

