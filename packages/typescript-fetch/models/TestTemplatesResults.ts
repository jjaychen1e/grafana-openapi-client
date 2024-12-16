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
import type { TestTemplatesResult } from './TestTemplatesResult';
import {
    TestTemplatesResultFromJSON,
    TestTemplatesResultFromJSONTyped,
    TestTemplatesResultToJSON,
    TestTemplatesResultToJSONTyped,
} from './TestTemplatesResult';
import type { TestTemplatesErrorResult } from './TestTemplatesErrorResult';
import {
    TestTemplatesErrorResultFromJSON,
    TestTemplatesErrorResultFromJSONTyped,
    TestTemplatesErrorResultToJSON,
    TestTemplatesErrorResultToJSONTyped,
} from './TestTemplatesErrorResult';

/**
 * 
 * @export
 * @interface TestTemplatesResults
 */
export interface TestTemplatesResults {
    /**
     * 
     * @type {Array<TestTemplatesErrorResult>}
     * @memberof TestTemplatesResults
     */
    errors?: Array<TestTemplatesErrorResult>;
    /**
     * 
     * @type {Array<TestTemplatesResult>}
     * @memberof TestTemplatesResults
     */
    results?: Array<TestTemplatesResult>;
}

/**
 * Check if a given object implements the TestTemplatesResults interface.
 */
export function instanceOfTestTemplatesResults(value: object): value is TestTemplatesResults {
    return true;
}

export function TestTemplatesResultsFromJSON(json: any): TestTemplatesResults {
    return TestTemplatesResultsFromJSONTyped(json, false);
}

export function TestTemplatesResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TestTemplatesResults {
    if (json == null) {
        return json;
    }
    return {
        
        'errors': json['errors'] == null ? undefined : ((json['errors'] as Array<any>).map(TestTemplatesErrorResultFromJSON)),
        'results': json['results'] == null ? undefined : ((json['results'] as Array<any>).map(TestTemplatesResultFromJSON)),
    };
}

export function TestTemplatesResultsToJSON(json: any): TestTemplatesResults {
    return TestTemplatesResultsToJSONTyped(json, false);
}

export function TestTemplatesResultsToJSONTyped(value?: TestTemplatesResults | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errors': value['errors'] == null ? undefined : ((value['errors'] as Array<any>).map(TestTemplatesErrorResultToJSON)),
        'results': value['results'] == null ? undefined : ((value['results'] as Array<any>).map(TestTemplatesResultToJSON)),
    };
}

