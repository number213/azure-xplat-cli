// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '9532a63e-f2eb-4649-bb23-5ed01077ce80',
    name: 'franks-official-test-sub',
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
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"d3798cf0-2a7e-41af-a4f9-033bf62ce429\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    },\r\n    \"serviceEndpoints\": [\r\n      {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"service\": \"Microsoft.Storage\",\r\n        \"locations\": [\r\n          \"westus\",\r\n          \"eastus\"\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '975',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d3798cf0-2a7e-41af-a4f9-033bf62ce429"',
  'x-ms-request-id': 'd6467bef-ae60-4e53-a348-3ad1bfa0d7a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3daba188-e6a7-4ab0-81a4-03db5bf1fa4b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080307Z:3daba188-e6a7-4ab0-81a4-03db5bf1fa4b',
  date: 'Wed, 27 Sep 2017 08:03:07 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName?api-version=2017-09-01')
  .reply(200, "{\r\n  \"name\": \"subnetName\",\r\n  \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/virtualNetworks/virtualNetworkName/subnets/subnetName\",\r\n  \"etag\": \"W/\\\"d3798cf0-2a7e-41af-a4f9-033bf62ce429\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.0.0/16\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/networkSecurityGroups/networkSecurityGroupName\"\r\n    },\r\n    \"routeTable\": {\r\n      \"id\": \"/subscriptions/9532a63e-f2eb-4649-bb23-5ed01077ce80/resourceGroups/xplat-test-subnet/providers/Microsoft.Network/routeTables/routeTableName\"\r\n    },\r\n    \"serviceEndpoints\": [\r\n      {\r\n        \"provisioningState\": \"Succeeded\",\r\n        \"service\": \"Microsoft.Storage\",\r\n        \"locations\": [\r\n          \"westus\",\r\n          \"eastus\"\r\n        ]\r\n      }\r\n    ]\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '975',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"d3798cf0-2a7e-41af-a4f9-033bf62ce429"',
  'x-ms-request-id': 'd6467bef-ae60-4e53-a348-3ad1bfa0d7a0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '3daba188-e6a7-4ab0-81a4-03db5bf1fa4b',
  'x-ms-routing-request-id': 'WESTEUROPE:20170927T080307Z:3daba188-e6a7-4ab0-81a4-03db5bf1fa4b',
  date: 'Wed, 27 Sep 2017 08:03:07 GMT',
  connection: 'close' });
 return result; }]];