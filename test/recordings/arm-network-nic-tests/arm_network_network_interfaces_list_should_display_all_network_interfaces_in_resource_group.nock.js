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
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"networkInterfaceName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n      \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"createipconf\",\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n            \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.0.0.42\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n              },\r\n              \"primary\": true,\r\n              \"privateIPAddressVersion\": \"IPv4\"\r\n            }\r\n          }\r\n        ],\r\n        \"dnsSettings\": {\r\n          \"dnsServers\": [],\r\n          \"appliedDnsServers\": [],\r\n          \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n          \"internalFqdn\": \"internal-dns-bar.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n          \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n        },\r\n        \"enableAcceleratedNetworking\": true,\r\n        \"enableIPForwarding\": true\r\n      },\r\n      \"type\": \"Microsoft.Network/networkInterfaces\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2072',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '34e66c3b-5a12-476a-b41b-fa169990eb82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a4192cda-fdc3-485b-9a2d-dab67b678efc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133926Z:a4192cda-fdc3-485b-9a2d-dab67b678efc',
  date: 'Fri, 07 Jul 2017 13:39:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces?api-version=2017-06-01')
  .reply(200, "{\r\n  \"value\": [\r\n    {\r\n      \"name\": \"networkInterfaceName\",\r\n      \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName\",\r\n      \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n      \"location\": \"westus\",\r\n      \"properties\": {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"resourceGuid\": \"39f13623-12cb-41b3-9915-833851af36f2\",\r\n        \"ipConfigurations\": [\r\n          {\r\n            \"name\": \"createipconf\",\r\n            \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/networkInterfaces/networkInterfaceName/ipConfigurations/createipconf\",\r\n            \"etag\": \"W/\\\"87203943-9fa5-4e3f-91bd-cae70c413982\\\"\",\r\n            \"properties\": {\r\n              \"provisioningState\": \"Succeeded\",\r\n              \"privateIPAddress\": \"10.0.0.42\",\r\n              \"privateIPAllocationMethod\": \"Static\",\r\n              \"publicIPAddress\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/publicIPAddresses/publicIPAddressName\"\r\n              },\r\n              \"subnet\": {\r\n                \"id\": \"/subscriptions/2c224e7e-3ef5-431d-a57b-e71f4662e3a6/resourceGroups/xplat-test-nic/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\"\r\n              },\r\n              \"primary\": true,\r\n              \"privateIPAddressVersion\": \"IPv4\"\r\n            }\r\n          }\r\n        ],\r\n        \"dnsSettings\": {\r\n          \"dnsServers\": [],\r\n          \"appliedDnsServers\": [],\r\n          \"internalDnsNameLabel\": \"internal-dns-bar\",\r\n          \"internalFqdn\": \"internal-dns-bar.h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\",\r\n          \"internalDomainNameSuffix\": \"h5fytvv0cx1uff1gqfezc0wzqd.d--x.internal.cloudapp.net\"\r\n        },\r\n        \"enableAcceleratedNetworking\": true,\r\n        \"enableIPForwarding\": true\r\n      },\r\n      \"type\": \"Microsoft.Network/networkInterfaces\"\r\n    }\r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2072',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '34e66c3b-5a12-476a-b41b-fa169990eb82',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'a4192cda-fdc3-485b-9a2d-dab67b678efc',
  'x-ms-routing-request-id': 'WESTEUROPE:20170707T133926Z:a4192cda-fdc3-485b-9a2d-dab67b678efc',
  date: 'Fri, 07 Jul 2017 13:39:25 GMT',
  connection: 'close' });
 return result; }]];