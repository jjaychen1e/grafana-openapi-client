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
import type { TestReceiverResult } from './TestReceiverResult.js';
import {
    TestReceiverResultFromJSON,
    TestReceiverResultFromJSONTyped,
    TestReceiverResultToJSON,
    TestReceiverResultToJSONTyped,
} from './TestReceiverResult.js';
import type { TestReceiversConfigAlertParams } from './TestReceiversConfigAlertParams.js';
import {
    TestReceiversConfigAlertParamsFromJSON,
    TestReceiversConfigAlertParamsFromJSONTyped,
    TestReceiversConfigAlertParamsToJSON,
    TestReceiversConfigAlertParamsToJSONTyped,
} from './TestReceiversConfigAlertParams.js';

/**
 * 
 * @export
 * @interface TestReceiversResult
 */
export interface TestReceiversResult {
    /**
     * 
     * @type {TestReceiversConfigAlertParams}
     * @memberof TestReceiversResult
     */
    alert?: TestReceiversConfigAlertParams;
    /**
     * 
     * @type {Date}
     * @memberof TestReceiversResult
     */
    notifiedAt?: Date;
    /**
     * 
     * @type {Array<TestReceiverResult>}
     * @memberof TestReceiversResult
     */
    receivers?: Array<TestReceiverResult>;
}

/**
 * Check if a given object implements the TestReceiversResult interface.
 */
export function instanceOfTestReceiversResult(value: object): value is TestReceiversResult {
    return true;
}

export function TestReceiversResultFromJSON(json: any): TestReceiversResult {
    return TestReceiversResultFromJSONTyped(json, false);
}

export function TestReceiversResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestReceiversResult {
    if (json == null) {
        return json;
    }
    return {
        
        'alert': json['alert'] == null ? undefined : TestReceiversConfigAlertParamsFromJSON(json['alert']),
        'notifiedAt': json['notified_at'] == null ? undefined : (new Date(json['notified_at'])),
        'receivers': json['receivers'] == null ? undefined : ((json['receivers'] as Array<any>).map(TestReceiverResultFromJSON)),
    };
}

export function TestReceiversResultToJSON(json: any): TestReceiversResult {
    return TestReceiversResultToJSONTyped(json, false);
}

export function TestReceiversResultToJSONTyped(value?: TestReceiversResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alert': TestReceiversConfigAlertParamsToJSON(value['alert']),
        'notified_at': value['notifiedAt'] == null ? undefined : ((value['notifiedAt']).toISOString()),
        'receivers': value['receivers'] == null ? undefined : ((value['receivers'] as Array<any>).map(TestReceiverResultToJSON)),
    };
}

