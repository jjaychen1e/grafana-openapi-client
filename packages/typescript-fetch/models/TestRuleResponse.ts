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
import type { AlertInstancesResponse } from './AlertInstancesResponse.js';
import {
    AlertInstancesResponseFromJSON,
    AlertInstancesResponseFromJSONTyped,
    AlertInstancesResponseToJSON,
    AlertInstancesResponseToJSONTyped,
} from './AlertInstancesResponse.js';
import type { Sample } from './Sample.js';
import {
    SampleFromJSON,
    SampleFromJSONTyped,
    SampleToJSON,
    SampleToJSONTyped,
} from './Sample.js';

/**
 * 
 * @export
 * @interface TestRuleResponse
 */
export interface TestRuleResponse {
    /**
     * Vector is basically only an alias for []Sample, but the contract is that
     * in a Vector, all Samples have the same timestamp.
     * @type {Array<Sample>}
     * @memberof TestRuleResponse
     */
    alerts?: Array<Sample>;
    /**
     * 
     * @type {AlertInstancesResponse}
     * @memberof TestRuleResponse
     */
    grafanaAlertInstances?: AlertInstancesResponse;
}

/**
 * Check if a given object implements the TestRuleResponse interface.
 */
export function instanceOfTestRuleResponse(value: object): value is TestRuleResponse {
    return true;
}

export function TestRuleResponseFromJSON(json: any): TestRuleResponse {
    return TestRuleResponseFromJSONTyped(json, false);
}

export function TestRuleResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestRuleResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'alerts': json['alerts'] == null ? undefined : ((json['alerts'] as Array<any>).map(SampleFromJSON)),
        'grafanaAlertInstances': json['grafana_alert_instances'] == null ? undefined : AlertInstancesResponseFromJSON(json['grafana_alert_instances']),
    };
}

export function TestRuleResponseToJSON(json: any): TestRuleResponse {
    return TestRuleResponseToJSONTyped(json, false);
}

export function TestRuleResponseToJSONTyped(value?: TestRuleResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'alerts': value['alerts'] == null ? undefined : ((value['alerts'] as Array<any>).map(SampleToJSON)),
        'grafana_alert_instances': AlertInstancesResponseToJSON(value['grafanaAlertInstances']),
    };
}

