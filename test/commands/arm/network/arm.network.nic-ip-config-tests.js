﻿/**
 * Copyright (c) Microsoft.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Warning: This code was generated by a tool.
// 
// Changes to this file may cause incorrect behavior and will be lost if the
// code is regenerated.

'use strict';

var should = require('should');
var util = require('util');
var _ = require('underscore');

var testUtils = require('../../../util/util');
var CLITest = require('../../../framework/arm-cli-test');
var utils = require('../../../../lib/util/utils');
var NetworkTestUtil = require('../../../util/networkTestUtil');
var tagUtils = require('../../../../lib/commands/arm/tag/tagUtils');
var networkUtil = new NetworkTestUtil();

var generatorUtils = require('../../../../lib/util/generatorUtils');
var profile = require('../../../../lib/util/profile');
var $ = utils.getLocaleString;

var testPrefix = 'arm-network-nic-ip-config-tests',
  groupName = 'xplat-test-ip-config',
  location;
var index = 0;

var ipConfigurations = {
  privateIPAddress: '10.0.0.13',
  privateIPAddressNew: '10.0.0.42',
  privateIPAddressVersion: 'IPv4',
  name: 'ipConfigurationName'
};

ipConfigurations.virtualNetworkName = 'virtualNetworkName';
ipConfigurations.subnetName = 'subnetName';
ipConfigurations.publicIPAddressName = 'publicIPAddressName';
ipConfigurations.networkInterfaceName = 'networkInterfaceName';

var subnet = {
  addressPrefix: '10.0.0.0/16',
  addressPrefixNew: '10.0.0.0/24'
};
var virtualNetwork = {
  location: 'westus'
};
var networkInterface = {
  location: 'westus'
};
var publicIPAddress = {
  location: 'westus'
};

var requiredEnvironment = [{
  name: 'AZURE_VM_TEST_LOCATION',
  defaultValue: 'westus'
}];

describe('arm', function () {
  describe('network', function () {
    var suite, retry = 5;
    var hour = 60 * 60000;

    before(function (done) {
      this.timeout(hour);
      suite = new CLITest(this, testPrefix, requiredEnvironment);
      suite.setupSuite(function () {
        location = ipConfigurations.location || process.env.AZURE_VM_TEST_LOCATION;
        groupName = suite.isMocked ? groupName : suite.generateId(groupName, null);
        ipConfigurations.location = location;
        ipConfigurations.group = groupName;
        ipConfigurations.name = suite.isMocked ? ipConfigurations.name : suite.generateId(ipConfigurations.name, null);
        if (!suite.isPlayback()) {
          networkUtil.createGroup(groupName, location, suite, function () {
            var cmd = 'network vnet create -g {1} -n virtualNetworkName --location {location} --json'.formatArgs(virtualNetwork, groupName);
            testUtils.executeCommand(suite, retry, cmd, function (result) {
              result.exitStatus.should.equal(0);
              var output = JSON.parse(result.text);
              var cmd = 'network vnet subnet create -g {1} -n subnetName --address-prefix {addressPrefix} --vnet-name virtualNetworkName --json'.formatArgs(subnet, groupName);
              testUtils.executeCommand(suite, retry, cmd, function (result) {
                result.exitStatus.should.equal(0);
                var output = JSON.parse(result.text);
                var cmd = 'network public-ip create -g {1} -n publicIPAddressName --location {location} --json'.formatArgs(publicIPAddress, groupName);
                testUtils.executeCommand(suite, retry, cmd, function (result) {
                  result.exitStatus.should.equal(0);
                  var output = JSON.parse(result.text);
                  var cmd = 'network nic create -g {1} -n networkInterfaceName --location {location} --subnet-vnet-name virtualNetworkName --subnet-name subnetName --ip-config-name defaultConfig  --json'.formatArgs(networkInterface, groupName);
                  testUtils.executeCommand(suite, retry, cmd, function (result) {
                    result.exitStatus.should.equal(0);
                    var output = JSON.parse(result.text);
                    done();
                  });
                });
              });
            });
          });
        } else {
          var subscriptionId = profile.current.getSubscription().id;
          done();
        }
      });
    });
    after(function (done) {
      this.timeout(hour);
      networkUtil.deleteGroup(groupName, suite, function () {
        suite.teardownSuite(done);
      });
    });
    beforeEach(function (done) {
      suite.setupTest(done);
    });
    afterEach(function (done) {
      suite.teardownTest(done);
    });

    describe('ip configurations', function () {
      this.timeout(hour);
      it('create should create ip configurations', function (done) {
        var cmd = 'network nic ip-config create -g {group} -n {name} --private-ip-address {privateIPAddress} --private-ip-version {privateIPAddressVersion} --nic-name {networkInterfaceName}  --json'.formatArgs(ipConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('networkInterfaceName');
          var output = utils.findFirstCaseIgnore(parentOutput.ipConfigurations, {name: 'ipConfigurationName'});

          output.name.should.equal(ipConfigurations.name);
          output.privateIPAddress.toLowerCase().should.equal(ipConfigurations.privateIPAddress.toLowerCase());
          output.privateIPAddressVersion.toLowerCase().should.equal(ipConfigurations.privateIPAddressVersion.toLowerCase());
          done();
        });
      });
      it('show should display ip configurations details', function (done) {
        var cmd = 'network nic ip-config show -g {group} -n {name} --nic-name {networkInterfaceName} --json'.formatArgs(ipConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var output = JSON.parse(result.text);
          output.name.should.equal(ipConfigurations.name);
          output.privateIPAddress.toLowerCase().should.equal(ipConfigurations.privateIPAddress.toLowerCase());
          output.privateIPAddressVersion.toLowerCase().should.equal(ipConfigurations.privateIPAddressVersion.toLowerCase());
          done();
        });
      });
      it('set should update ip configurations', function (done) {
        var cmd = 'network nic ip-config set -g {group} -n {name} --private-ip-address {privateIPAddressNew} --nic-name {networkInterfaceName}  --public-ip-name {publicIPAddressName} --json'.formatArgs(ipConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var parentOutput = JSON.parse(result.text);
          parentOutput.name.should.equal('networkInterfaceName');
          var output = utils.findFirstCaseIgnore(parentOutput.ipConfigurations, {name: 'ipConfigurationName'});

          output.name.should.equal(ipConfigurations.name);
          output.privateIPAddress.toLowerCase().should.equal(ipConfigurations.privateIPAddressNew.toLowerCase());
          done();
        });
      });
      it('list should display all ip configurations in resource group', function (done) {
        var cmd = 'network nic ip-config list -g {group} --nic-name {networkInterfaceName} --json'.formatArgs(ipConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);
          var outputs = JSON.parse(result.text);
          _.some(outputs, function (output) {
            return output.name === ipConfigurations.name;
          }).should.be.true;
          done();
        });
      });
      it('delete should delete ip configurations', function (done) {
        var cmd = 'network nic ip-config delete -g {group} -n {name} --quiet --nic-name {networkInterfaceName} --json'.formatArgs(ipConfigurations);
        testUtils.executeCommand(suite, retry, cmd, function (result) {
          result.exitStatus.should.equal(0);

          cmd = 'network nic ip-config show -g {group} -n {name} --nic-name {networkInterfaceName} --json'.formatArgs(ipConfigurations);
          testUtils.executeCommand(suite, retry, cmd, function (result) {
            result.exitStatus.should.equal(0);
            var output = JSON.parse(result.text);
            output.should.be.empty;
            done();
          });
        });
      });
    });
  });
});
