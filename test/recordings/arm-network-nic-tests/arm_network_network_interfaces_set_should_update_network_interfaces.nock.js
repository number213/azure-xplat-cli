// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '2c224e7e-3ef5-431d-a57b-e71f4662e3a6',
    name: 'Node CLI Test',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1889',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"69cbcd23-f1d5-4387-ac44-8727f04621cb"',
  'x-ms-request-id': '54afc993-e1c3-4060-83f2-f69d025daf22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '63ed6d56-4e99-4bfb-81e5-6bacea593dd4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133922Z:63ed6d56-4e99-4bfb-81e5-6bacea593dd4',
  date: 'Fri, 07 Jul 2017 13:39:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"69cbcd23-f1d5-4387-ac44-8727f04621cb\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-foo\",\r\n      \"internalFqdn\": \"internal-dns-foo.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": false,\r\n    \"enableIPForwarding\": false\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1889',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"69cbcd23-f1d5-4387-ac44-8727f04621cb"',
  'x-ms-request-id': '54afc993-e1c3-4060-83f2-f69d025daf22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14997',
  'x-ms-correlation-request-id': '63ed6d56-4e99-4bfb-81e5-6bacea593dd4',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133922Z:63ed6d56-4e99-4bfb-81e5-6bacea593dd4',
  date: 'Fri, 07 Jul 2017 13:39:21 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": true,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eeb10ce6-ca76-497c-91a5-8fadd9129c2a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/eeb10ce6-ca76-497c-91a5-8fadd9129c2a?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6b45e344-f0ab-4ea2-a8b4-58db92a682f3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133923Z:6b45e344-f0ab-4ea2-a8b4-58db92a682f3',
  date: 'Fri, 07 Jul 2017 13:39:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-06-01', '*')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": true,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'eeb10ce6-ca76-497c-91a5-8fadd9129c2a',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/providers/Microsoft.Network/locations/westus.validation/operations/eeb10ce6-ca76-497c-91a5-8fadd9129c2a?api-version=2017-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '6b45e344-f0ab-4ea2-a8b4-58db92a682f3',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133923Z:6b45e344-f0ab-4ea2-a8b4-58db92a682f3',
  date: 'Fri, 07 Jul 2017 13:39:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": true,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"87203943-9fa5-4e3f-91bd-cae70c413982"',
  'x-ms-request-id': '3d881b2b-6a15-47f0-93de-4b02f1c99903',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '63a485db-5f34-4db9-a196-8a433efb594f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133924Z:63a485db-5f34-4db9-a196-8a433efb594f',
  date: 'Fri, 07 Jul 2017 13:39:23 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName?api-version=2017-06-01')
  .reply(200, "{\r\n  \"name\": \"networkInterfaceName\",\r\n  \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n  \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n  \"location\": \"westus\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n    \"ipConfigurations\": [\r\n      {\r\n        \"name\": \"createipconf\",\r\n        \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n        \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n        \"properties\": {\r\n          \"provisioningState\": \"Succeeded\",\r\n          \"privateIPAddress\": \"10.0.0.42\",\r\n          \"privateIPAllocationMethod\": \"Static\",\r\n          \"publicIPAddress\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n          },\r\n          \"subnet\": {\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n          },\r\n          \"primary\": true,\r\n          \"privateIPAddressVersion\": \"IPv4\"\r\n        }\r\n      }\r\n    ],\r\n    \"dnsSettings\": {\r\n      \"dnsServers\": [],\r\n      \"appliedDnsServers\": [],\r\n      \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n      \"internalFqdn\": \"internal-dns-bar.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n      \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n    },\r\n    \"enableAcceleratedNetworking\": true,\r\n    \"enableIPForwarding\": true\r\n  },\r\n  \"type\": \"Microsoft.Network/networkInterfaces\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1887',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"87203943-9fa5-4e3f-91bd-cae70c413982"',
  'x-ms-request-id': '3d881b2b-6a15-47f0-93de-4b02f1c99903',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14996',
  'x-ms-correlation-request-id': '63a485db-5f34-4db9-a196-8a433efb594f',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133924Z:63a485db-5f34-4db9-a196-8a433efb594f',
  date: 'Fri, 07 Jul 2017 13:39:23 GMT',
  connection: 'close' });
 return result; }]];