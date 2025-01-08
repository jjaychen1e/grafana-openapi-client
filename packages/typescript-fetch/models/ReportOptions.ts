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
import type { ReportTimeRange } from './ReportTimeRange.js';
import {
    ReportTimeRangeFromJSON,
    ReportTimeRangeFromJSONTyped,
    ReportTimeRangeToJSON,
    ReportTimeRangeToJSONTyped,
} from './ReportTimeRange.js';

/**
 * 
 * @export
 * @interface ReportOptions
 */
export interface ReportOptions {
    /**
     * 
     * @type {string}
     * @memberof ReportOptions
     */
    layout?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportOptions
     */
    orientation?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ReportOptions
     */
    pdfShowTemplateVariables?: boolean;
    /**
     * 
     * @type {ReportTimeRange}
     * @memberof ReportOptions
     */
    timeRange?: ReportTimeRange;
}

/**
 * Check if a given object implements the ReportOptions interface.
 */
export function instanceOfReportOptions(value: object): value is ReportOptions {
    return true;
}

export function ReportOptionsFromJSON(json: any): ReportOptions {
    return ReportOptionsFromJSONTyped(json, false);
}

export function ReportOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'layout': json['layout'] == null ? undefined : json['layout'],
        'orientation': json['orientation'] == null ? undefined : json['orientation'],
        'pdfShowTemplateVariables': json['pdfShowTemplateVariables'] == null ? undefined : json['pdfShowTemplateVariables'],
        'timeRange': json['timeRange'] == null ? undefined : ReportTimeRangeFromJSON(json['timeRange']),
    };
}

export function ReportOptionsToJSON(json: any): ReportOptions {
    return ReportOptionsToJSONTyped(json, false);
}

export function ReportOptionsToJSONTyped(value?: ReportOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'layout': value['layout'],
        'orientation': value['orientation'],
        'pdfShowTemplateVariables': value['pdfShowTemplateVariables'],
        'timeRange': ReportTimeRangeToJSON(value['timeRange']),
    };
}

