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
import type { Extension } from './Extension.js';
import {
    ExtensionFromJSON,
    ExtensionFromJSONTyped,
    ExtensionToJSON,
    ExtensionToJSONTyped,
} from './Extension.js';
import type { IPNet } from './IPNet.js';
import {
    IPNetFromJSON,
    IPNetFromJSONTyped,
    IPNetToJSON,
    IPNetToJSONTyped,
} from './IPNet.js';
import type { URL } from './URL.js';
import {
    URLFromJSON,
    URLFromJSONTyped,
    URLToJSON,
    URLToJSONTyped,
} from './URL.js';
import type { Name } from './Name.js';
import {
    NameFromJSON,
    NameFromJSONTyped,
    NameToJSON,
    NameToJSONTyped,
} from './Name.js';

/**
 * 
 * @export
 * @interface Certificate
 */
export interface Certificate {
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    authorityKeyId?: Array<number>;
    /**
     * BasicConstraintsValid indicates whether IsCA, MaxPathLen,
     * and MaxPathLenZero are valid.
     * @type {boolean}
     * @memberof Certificate
     */
    basicConstraintsValid?: boolean;
    /**
     * CRL Distribution Points
     * @type {Array<string>}
     * @memberof Certificate
     */
    cRLDistributionPoints?: Array<string>;
    /**
     * Subject Alternate Name values. (Note that these values may not be valid
     * if invalid values were contained within a parsed certificate. For
     * example, an element of DNSNames may not be a valid DNS domain name.)
     * @type {Array<string>}
     * @memberof Certificate
     */
    dNSNames?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    emailAddresses?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    excludedDNSDomains?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    excludedEmailAddresses?: Array<string>;
    /**
     * 
     * @type {Array<IPNet>}
     * @memberof Certificate
     */
    excludedIPRanges?: Array<IPNet>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    excludedURIDomains?: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    extKeyUsage?: Array<number>;
    /**
     * Extensions contains raw X.509 extensions. When parsing certificates,
     * this can be used to extract non-critical extensions that are not
     * parsed by this package. When marshaling certificates, the Extensions
     * field is ignored, see ExtraExtensions.
     * @type {Array<Extension>}
     * @memberof Certificate
     */
    extensions?: Array<Extension>;
    /**
     * ExtraExtensions contains extensions to be copied, raw, into any
     * marshaled certificates. Values override any extensions that would
     * otherwise be produced based on the other fields. The ExtraExtensions
     * field is not populated when parsing certificates, see Extensions.
     * @type {Array<Extension>}
     * @memberof Certificate
     */
    extraExtensions?: Array<Extension>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    iPAddresses?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof Certificate
     */
    isCA?: boolean;
    /**
     * 
     * @type {Name}
     * @memberof Certificate
     */
    issuer?: Name;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    issuingCertificateURL?: Array<string>;
    /**
     * KeyUsage represents the set of actions that are valid for a given key. It's
     * a bitmap of the KeyUsage* constants.
     * @type {number}
     * @memberof Certificate
     */
    keyUsage?: number;
    /**
     * MaxPathLen and MaxPathLenZero indicate the presence and
     * value of the BasicConstraints' "pathLenConstraint".
     * 
     * When parsing a certificate, a positive non-zero MaxPathLen
     * means that the field was specified, -1 means it was unset,
     * and MaxPathLenZero being true mean that the field was
     * explicitly set to zero. The case of MaxPathLen==0 with MaxPathLenZero==false
     * should be treated equivalent to -1 (unset).
     * 
     * When generating a certificate, an unset pathLenConstraint
     * can be requested with either MaxPathLen == -1 or using the
     * zero value for both MaxPathLen and MaxPathLenZero.
     * @type {number}
     * @memberof Certificate
     */
    maxPathLen?: number;
    /**
     * MaxPathLenZero indicates that BasicConstraintsValid==true
     * and MaxPathLen==0 should be interpreted as an actual
     * maximum path length of zero. Otherwise, that combination is
     * interpreted as MaxPathLen not being set.
     * @type {boolean}
     * @memberof Certificate
     */
    maxPathLenZero?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Certificate
     */
    notBefore?: Date;
    /**
     * RFC 5280, 4.2.2.1 (Authority Information Access)
     * @type {Array<string>}
     * @memberof Certificate
     */
    oCSPServer?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    permittedDNSDomains?: Array<string>;
    /**
     * Name constraints
     * @type {boolean}
     * @memberof Certificate
     */
    permittedDNSDomainsCritical?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    permittedEmailAddresses?: Array<string>;
    /**
     * 
     * @type {Array<IPNet>}
     * @memberof Certificate
     */
    permittedIPRanges?: Array<IPNet>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Certificate
     */
    permittedURIDomains?: Array<string>;
    /**
     * Policies contains all policy identifiers included in the certificate.
     * In Go 1.22, encoding/gob cannot handle and ignores this field.
     * @type {Array<string>}
     * @memberof Certificate
     */
    policies?: Array<string>;
    /**
     * PolicyIdentifiers contains asn1.ObjectIdentifiers, the components
     * of which are limited to int32. If a certificate contains a policy which
     * cannot be represented by asn1.ObjectIdentifier, it will not be included in
     * PolicyIdentifiers, but will be present in Policies, which contains all parsed
     * policy OIDs.
     * @type {Array<Array<number>>}
     * @memberof Certificate
     */
    policyIdentifiers?: Array<Array<number>>;
    /**
     * 
     * @type {object}
     * @memberof Certificate
     */
    publicKey?: object;
    /**
     * 
     * @type {number}
     * @memberof Certificate
     */
    publicKeyAlgorithm?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    raw?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    rawIssuer?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    rawSubject?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    rawSubjectPublicKeyInfo?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    rawTBSCertificate?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof Certificate
     */
    serialNumber?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    signature?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof Certificate
     */
    signatureAlgorithm?: number;
    /**
     * 
     * @type {Name}
     * @memberof Certificate
     */
    subject?: Name;
    /**
     * 
     * @type {Array<number>}
     * @memberof Certificate
     */
    subjectKeyId?: Array<number>;
    /**
     * 
     * @type {Array<URL>}
     * @memberof Certificate
     */
    uRIs?: Array<URL>;
    /**
     * UnhandledCriticalExtensions contains a list of extension IDs that
     * were not (fully) processed when parsing. Verify will fail if this
     * slice is non-empty, unless verification is delegated to an OS
     * library which understands all the critical extensions.
     * 
     * Users can access these extensions using Extensions and can remove
     * elements from this slice if they believe that they have been
     * handled.
     * @type {Array<Array<number>>}
     * @memberof Certificate
     */
    unhandledCriticalExtensions?: Array<Array<number>>;
    /**
     * 
     * @type {Array<Array<number>>}
     * @memberof Certificate
     */
    unknownExtKeyUsage?: Array<Array<number>>;
    /**
     * 
     * @type {number}
     * @memberof Certificate
     */
    version?: number;
}

/**
 * Check if a given object implements the Certificate interface.
 */
export function instanceOfCertificate(value: object): value is Certificate {
    return true;
}

export function CertificateFromJSON(json: any): Certificate {
    return CertificateFromJSONTyped(json, false);
}

export function CertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): Certificate {
    if (json == null) {
        return json;
    }
    return {
        
        'authorityKeyId': json['AuthorityKeyId'] == null ? undefined : json['AuthorityKeyId'],
        'basicConstraintsValid': json['BasicConstraintsValid'] == null ? undefined : json['BasicConstraintsValid'],
        'cRLDistributionPoints': json['CRLDistributionPoints'] == null ? undefined : json['CRLDistributionPoints'],
        'dNSNames': json['DNSNames'] == null ? undefined : json['DNSNames'],
        'emailAddresses': json['EmailAddresses'] == null ? undefined : json['EmailAddresses'],
        'excludedDNSDomains': json['ExcludedDNSDomains'] == null ? undefined : json['ExcludedDNSDomains'],
        'excludedEmailAddresses': json['ExcludedEmailAddresses'] == null ? undefined : json['ExcludedEmailAddresses'],
        'excludedIPRanges': json['ExcludedIPRanges'] == null ? undefined : ((json['ExcludedIPRanges'] as Array<any>).map(IPNetFromJSON)),
        'excludedURIDomains': json['ExcludedURIDomains'] == null ? undefined : json['ExcludedURIDomains'],
        'extKeyUsage': json['ExtKeyUsage'] == null ? undefined : json['ExtKeyUsage'],
        'extensions': json['Extensions'] == null ? undefined : ((json['Extensions'] as Array<any>).map(ExtensionFromJSON)),
        'extraExtensions': json['ExtraExtensions'] == null ? undefined : ((json['ExtraExtensions'] as Array<any>).map(ExtensionFromJSON)),
        'iPAddresses': json['IPAddresses'] == null ? undefined : json['IPAddresses'],
        'isCA': json['IsCA'] == null ? undefined : json['IsCA'],
        'issuer': json['Issuer'] == null ? undefined : NameFromJSON(json['Issuer']),
        'issuingCertificateURL': json['IssuingCertificateURL'] == null ? undefined : json['IssuingCertificateURL'],
        'keyUsage': json['KeyUsage'] == null ? undefined : json['KeyUsage'],
        'maxPathLen': json['MaxPathLen'] == null ? undefined : json['MaxPathLen'],
        'maxPathLenZero': json['MaxPathLenZero'] == null ? undefined : json['MaxPathLenZero'],
        'notBefore': json['NotBefore'] == null ? undefined : (new Date(json['NotBefore'])),
        'oCSPServer': json['OCSPServer'] == null ? undefined : json['OCSPServer'],
        'permittedDNSDomains': json['PermittedDNSDomains'] == null ? undefined : json['PermittedDNSDomains'],
        'permittedDNSDomainsCritical': json['PermittedDNSDomainsCritical'] == null ? undefined : json['PermittedDNSDomainsCritical'],
        'permittedEmailAddresses': json['PermittedEmailAddresses'] == null ? undefined : json['PermittedEmailAddresses'],
        'permittedIPRanges': json['PermittedIPRanges'] == null ? undefined : ((json['PermittedIPRanges'] as Array<any>).map(IPNetFromJSON)),
        'permittedURIDomains': json['PermittedURIDomains'] == null ? undefined : json['PermittedURIDomains'],
        'policies': json['Policies'] == null ? undefined : json['Policies'],
        'policyIdentifiers': json['PolicyIdentifiers'] == null ? undefined : json['PolicyIdentifiers'],
        'publicKey': json['PublicKey'] == null ? undefined : json['PublicKey'],
        'publicKeyAlgorithm': json['PublicKeyAlgorithm'] == null ? undefined : json['PublicKeyAlgorithm'],
        'raw': json['Raw'] == null ? undefined : json['Raw'],
        'rawIssuer': json['RawIssuer'] == null ? undefined : json['RawIssuer'],
        'rawSubject': json['RawSubject'] == null ? undefined : json['RawSubject'],
        'rawSubjectPublicKeyInfo': json['RawSubjectPublicKeyInfo'] == null ? undefined : json['RawSubjectPublicKeyInfo'],
        'rawTBSCertificate': json['RawTBSCertificate'] == null ? undefined : json['RawTBSCertificate'],
        'serialNumber': json['SerialNumber'] == null ? undefined : json['SerialNumber'],
        'signature': json['Signature'] == null ? undefined : json['Signature'],
        'signatureAlgorithm': json['SignatureAlgorithm'] == null ? undefined : json['SignatureAlgorithm'],
        'subject': json['Subject'] == null ? undefined : NameFromJSON(json['Subject']),
        'subjectKeyId': json['SubjectKeyId'] == null ? undefined : json['SubjectKeyId'],
        'uRIs': json['URIs'] == null ? undefined : ((json['URIs'] as Array<any>).map(URLFromJSON)),
        'unhandledCriticalExtensions': json['UnhandledCriticalExtensions'] == null ? undefined : json['UnhandledCriticalExtensions'],
        'unknownExtKeyUsage': json['UnknownExtKeyUsage'] == null ? undefined : json['UnknownExtKeyUsage'],
        'version': json['Version'] == null ? undefined : json['Version'],
    };
}

export function CertificateToJSON(json: any): Certificate {
    return CertificateToJSONTyped(json, false);
}

export function CertificateToJSONTyped(value?: Certificate | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'AuthorityKeyId': value['authorityKeyId'],
        'BasicConstraintsValid': value['basicConstraintsValid'],
        'CRLDistributionPoints': value['cRLDistributionPoints'],
        'DNSNames': value['dNSNames'],
        'EmailAddresses': value['emailAddresses'],
        'ExcludedDNSDomains': value['excludedDNSDomains'],
        'ExcludedEmailAddresses': value['excludedEmailAddresses'],
        'ExcludedIPRanges': value['excludedIPRanges'] == null ? undefined : ((value['excludedIPRanges'] as Array<any>).map(IPNetToJSON)),
        'ExcludedURIDomains': value['excludedURIDomains'],
        'ExtKeyUsage': value['extKeyUsage'],
        'Extensions': value['extensions'] == null ? undefined : ((value['extensions'] as Array<any>).map(ExtensionToJSON)),
        'ExtraExtensions': value['extraExtensions'] == null ? undefined : ((value['extraExtensions'] as Array<any>).map(ExtensionToJSON)),
        'IPAddresses': value['iPAddresses'],
        'IsCA': value['isCA'],
        'Issuer': NameToJSON(value['issuer']),
        'IssuingCertificateURL': value['issuingCertificateURL'],
        'KeyUsage': value['keyUsage'],
        'MaxPathLen': value['maxPathLen'],
        'MaxPathLenZero': value['maxPathLenZero'],
        'NotBefore': value['notBefore'] == null ? undefined : ((value['notBefore']).toISOString()),
        'OCSPServer': value['oCSPServer'],
        'PermittedDNSDomains': value['permittedDNSDomains'],
        'PermittedDNSDomainsCritical': value['permittedDNSDomainsCritical'],
        'PermittedEmailAddresses': value['permittedEmailAddresses'],
        'PermittedIPRanges': value['permittedIPRanges'] == null ? undefined : ((value['permittedIPRanges'] as Array<any>).map(IPNetToJSON)),
        'PermittedURIDomains': value['permittedURIDomains'],
        'Policies': value['policies'],
        'PolicyIdentifiers': value['policyIdentifiers'],
        'PublicKey': value['publicKey'],
        'PublicKeyAlgorithm': value['publicKeyAlgorithm'],
        'Raw': value['raw'],
        'RawIssuer': value['rawIssuer'],
        'RawSubject': value['rawSubject'],
        'RawSubjectPublicKeyInfo': value['rawSubjectPublicKeyInfo'],
        'RawTBSCertificate': value['rawTBSCertificate'],
        'SerialNumber': value['serialNumber'],
        'Signature': value['signature'],
        'SignatureAlgorithm': value['signatureAlgorithm'],
        'Subject': NameToJSON(value['subject']),
        'SubjectKeyId': value['subjectKeyId'],
        'URIs': value['uRIs'] == null ? undefined : ((value['uRIs'] as Array<any>).map(URLToJSON)),
        'UnhandledCriticalExtensions': value['unhandledCriticalExtensions'],
        'UnknownExtKeyUsage': value['unknownExtKeyUsage'],
        'Version': value['version'],
    };
}
