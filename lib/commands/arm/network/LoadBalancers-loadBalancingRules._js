/**
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

var generatorUtils = require('../../../util/generatorUtils');
var resourceUtils = require('../resource/resourceUtils');
var util = require('util');
var validation = require('../../../util/validation');

var profile = require('../../../util/profile');
var utils = require('../../../util/utils');

var $ = utils.getLocaleString;

exports.init = function (cli) {
  var network = cli.category('network')
    .description($('Commands to manage network resources'));
  var loadBalancers = network.category('lb')
    .description($('Commands to manage load balancers'));
  var loadBalancingRules = loadBalancers.category('rule')
    .description($('Commands to manage load balancing rules'));

  var defaultProtocol = 'TCP';
  var defaultLoadDistribution = 'Default';
  var defaultFrontendPort = '80';
  var defaultBackendPort = '80';
  var defaultIdleTimeoutInMinutes = '4';
  var defaultEnableFloatingIP = 'false';

  loadBalancingRules.command('create [resource-group] [lb-name] [name]')
    .description($('Create a load balancing rules'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the load balancing rule'))
    .option('-t, --frontend-ip-name [frontend-ip-name]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-id'))
    .option('-r, --frontend-ip-id [frontend-ip-id]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-name'))
    .option('-o, --backend-address-pool-name [backend-address-pool-name]', $('sets backend address pool. This option' +
      '\n     is mutually exclusive with --backend-address-pool-id'))
    .option('-c, --backend-address-pool-id [backend-address-pool-id]', $('sets backend address pool. This option' +
      '\n     is mutually exclusive with --backend-address-pool-name'))
    .option('-a, --probe-name [probe-name]', $('sets probe. This option is mutually' +
      '\n     exclusive with --probe-id'))
    .option('-k, --probe-id [probe-id]', $('sets probe. This option is mutually' +
      '\n     exclusive with --probe-name'))
    .option('-p, --protocol [protocol]', $('the transport protocol for the external' +
      '\n     endpoint. Possible values are \'Udp\' or \'Tcp\''))
    .option('-d, --load-distribution [load-distribution]', $('the load distribution policy for this' +
      '\n     rule. Possible values are \'Default\', \'SourceIP\', and \'SourceIPProtocol\''))
    .option('-f, --frontend-port [frontend-port]', $('the port for the external endpoint.' +
      '\n     Port numbers for each Rule must be unique within the Load Balancer. Acceptable' +
      '\n     values are between 1 and 65534'))
    .option('-b, --backend-port [backend-port]', $('the port used for internal connections' +
      '\n     on the endpoint. Acceptable values are between 1 and 65535'))
    .option('-i, --idle-timeout [idle-timeout]', $('the timeout for the TCP idle' +
      '\n     connection. The value can be set between 4 and 30 minutes. The default value is' +
      '\n     4 minutes. This element is only used when the protocol is set to TCP'))
    .option('-e, --enable-floating-ip [enable-floating-ip]', $('configures a virtual machine\'s' +
      '\n     endpoint for the floating IP capability required to configure a SQL AlwaysOn' +
      '\n     Availability Group. This setting is required when using the SQL AlwaysOn' +
      '\n     Availability Groups in SQL server. This setting can\'t be changed after you' +
      '\n     create the endpoint'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = true;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var index = 0;
      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      if(utils.findFirstCaseIgnore(loadBalancer.loadBalancingRules, {name: name})) {
        throw new Error(util.format($('load balancing rules with name "%s" already exists in the "%s"'), name, lbName));
      }

      var parameters = {};
      if(!parameters.loadBalancingRules) {
        parameters.loadBalancingRules = [];
      }
      if(!parameters.loadBalancingRules[index]) {
        parameters.loadBalancingRules[index] = {};
      }
      if(!parameters.loadBalancingRules[index].frontendIPConfiguration) {
        parameters.loadBalancingRules[index].frontendIPConfiguration = {};
      }
      if(options.frontendIpId) {
        if(options.frontendIpName) {
          cli.output.warn($('--frontend-ip-name parameter will be ignored because --frontend-ip-id and --frontend-ip-name are mutually exclusive'));
        }
        parameters.loadBalancingRules[index].frontendIPConfiguration.id = options.frontendIpId;
      } else if(options.frontendIpName) {
        var referredfrontendIPConfiguration = utils.findFirstCaseIgnore(loadBalancer.frontendIPConfigurations, {name: options.frontendIpName});
        if(!referredfrontendIPConfiguration) {
          throw new Error(util.format($('No frontend ip configuration with name "%s" found'), options.frontendIpName));
        }
        var idContainerfrontendIPConfiguration = referredfrontendIPConfiguration;
        parameters.loadBalancingRules[index].frontendIPConfiguration.id = idContainerfrontendIPConfiguration.id;
      } else if(useDefaults) {
        if(loadBalancer.frontendIPConfigurations.length !== 0) {
          parameters.loadBalancingRules[index].frontendIPConfiguration.id = loadBalancer.frontendIPConfigurations[0].id;
        } else {
          throw new Error(util.format($('Resource has no frontend ip configuration defined')));
        }
      }

      if(!parameters.loadBalancingRules[index].backendAddressPool) {
        parameters.loadBalancingRules[index].backendAddressPool = {};
      }
      if(options.backendAddressPoolId) {
        if(options.backendAddressPoolName) {
          cli.output.warn($('--backend-address-pool-name parameter will be ignored because --backend-address-pool-id and --backend-address-pool-name are mutually exclusive'));
        }
        parameters.loadBalancingRules[index].backendAddressPool.id = options.backendAddressPoolId;
      } else if(options.backendAddressPoolName) {
        var referredbackendAddressPool = utils.findFirstCaseIgnore(loadBalancer.backendAddressPools, {name: options.backendAddressPoolName});
        if(!referredbackendAddressPool) {
          throw new Error(util.format($('No backend address pool with name "%s" found'), options.backendAddressPoolName));
        }
        var idContainerbackendAddressPool = referredbackendAddressPool;
        parameters.loadBalancingRules[index].backendAddressPool.id = idContainerbackendAddressPool.id;
      } else if(useDefaults) {
        if(loadBalancer.backendAddressPools.length !== 0) {
          parameters.loadBalancingRules[index].backendAddressPool.id = loadBalancer.backendAddressPools[0].id;
        } else {
          throw new Error(util.format($('Resource has no backend address pool defined')));
        }
      }

      if(!parameters.loadBalancingRules[index].probe) {
        parameters.loadBalancingRules[index].probe = {};
      }
      if(options.probeId) {
        if(options.probeName) {
          cli.output.warn($('--probe-name parameter will be ignored because --probe-id and --probe-name are mutually exclusive'));
        }
        parameters.loadBalancingRules[index].probe.id = options.probeId;
      } else if(options.probeName) {
        var referredprobe = utils.findFirstCaseIgnore(loadBalancer.probes, {name: options.probeName});
        if(!referredprobe) {
          throw new Error(util.format($('No probe with name "%s" found'), options.probeName));
        }
        var idContainerprobe = referredprobe;
        parameters.loadBalancingRules[index].probe.id = idContainerprobe.id;
      }

      if(options.protocol) {
        parameters.loadBalancingRules[index].protocol = validation.isIn(options.protocol, ['Udp', 'Tcp'], '--protocol');
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].protocol = defaultProtocol;
      }

      if(options.loadDistribution) {
        parameters.loadBalancingRules[index].loadDistribution = validation.isIn(options.loadDistribution, ['Default', 'SourceIP', 'SourceIPProtocol'], '--load-distribution');
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].loadDistribution = defaultLoadDistribution;
      }

      if(options.frontendPort) {
        parameters.loadBalancingRules[index].frontendPort = parseInt(options.frontendPort, 10);
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].frontendPort = parseInt(defaultFrontendPort, 10);
      }

      if(options.backendPort) {
        parameters.loadBalancingRules[index].backendPort = parseInt(options.backendPort, 10);
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].backendPort = parseInt(defaultBackendPort, 10);
      }

      if(options.idleTimeout) {
        parameters.loadBalancingRules[index].idleTimeoutInMinutes = parseInt(options.idleTimeout, 10);
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].idleTimeoutInMinutes = parseInt(defaultIdleTimeoutInMinutes, 10);
      }

      if(options.enableFloatingIp) {
        parameters.loadBalancingRules[index].enableFloatingIP = utils.parseBool(options.enableFloatingIp);
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].enableFloatingIP = utils.parseBool(defaultEnableFloatingIP);
      }

      parameters.loadBalancingRules[index].name = name;
      loadBalancer.loadBalancingRules.push(parameters.loadBalancingRules[index]);

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Creating load balancing rules in "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }

      cli.interaction.formatOutput(loadBalancer.loadBalancingRules[generatorUtils.findIndexByKeyValue(loadBalancer.loadBalancingRules, 'name', name)], generatorUtils.traverse);
    });

  loadBalancingRules.command('set [resource-group] [lb-name] [name]')
    .description($('Update a load balancing rules'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the load balancing rule'))
    .option('-t, --frontend-ip-name [frontend-ip-name]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-id'))
    .option('-r, --frontend-ip-id [frontend-ip-id]', $('sets frontend ip configuration. This' +
      '\n     option is mutually exclusive with --frontend-ip-name'))
    .option('-o, --backend-address-pool-name [backend-address-pool-name]', $('sets backend address pool. This option' +
      '\n     is mutually exclusive with --backend-address-pool-id'))
    .option('-c, --backend-address-pool-id [backend-address-pool-id]', $('sets backend address pool. This option' +
      '\n     is mutually exclusive with --backend-address-pool-name'))
    .option('-a, --probe-name [probe-name]', $('sets probe. This option is mutually' +
      '\n     exclusive with --probe-id'))
    .option('-k, --probe-id [probe-id]', $('sets probe. This option is mutually' +
      '\n     exclusive with --probe-name'))
    .option('-p, --protocol [protocol]', $('the transport protocol for the external' +
      '\n     endpoint. Possible values are \'Udp\' or \'Tcp\''))
    .option('-d, --load-distribution [load-distribution]', $('the load distribution policy for this' +
      '\n     rule. Possible values are \'Default\', \'SourceIP\', and \'SourceIPProtocol\''))
    .option('-f, --frontend-port [frontend-port]', $('the port for the external endpoint.' +
      '\n     Port numbers for each Rule must be unique within the Load Balancer. Acceptable' +
      '\n     values are between 1 and 65534'))
    .option('-b, --backend-port [backend-port]', $('the port used for internal connections' +
      '\n     on the endpoint. Acceptable values are between 1 and 65535'))
    .option('-i, --idle-timeout [idle-timeout]', $('the timeout for the TCP idle' +
      '\n     connection. The value can be set between 4 and 30 minutes. The default value is' +
      '\n     4 minutes. This element is only used when the protocol is set to TCP'))
    .option('-e, --enable-floating-ip [enable-floating-ip]', $('configures a virtual machine\'s' +
      '\n     endpoint for the floating IP capability required to configure a SQL AlwaysOn' +
      '\n     Availability Group. This setting is required when using the SQL AlwaysOn' +
      '\n     Availability Groups in SQL server. This setting can\'t be changed after you' +
      '\n     create the endpoint'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      var useDefaults = false;
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var loadBalancingRule = utils.findFirstCaseIgnore(loadBalancer.loadBalancingRules, {name: name});
      var index = utils.indexOfCaseIgnore(loadBalancer.loadBalancingRules, {name: name});
      if(!loadBalancingRule) {
        throw new Error(util.format($('load balancing rules with name "%s" not found in the "%s"'), name, lbName));
      }

      var parameters = loadBalancer;
      if(!parameters.loadBalancingRules) {
        parameters.loadBalancingRules = [];
      }
      if(!parameters.loadBalancingRules[index]) {
        parameters.loadBalancingRules[index] = {};
      }
      if(!parameters.loadBalancingRules[index].frontendIPConfiguration) {
        parameters.loadBalancingRules[index].frontendIPConfiguration = {};
      }
      if(options.frontendIpId) {
        if(options.frontendIpName) {
          cli.output.warn($('--frontend-ip-name parameter will be ignored because --frontend-ip-id and --frontend-ip-name are mutually exclusive'));
        }
        parameters.loadBalancingRules[index].frontendIPConfiguration.id = options.frontendIpId;
      } else if(options.frontendIpName) {
        var referredfrontendIPConfiguration = utils.findFirstCaseIgnore(loadBalancer.frontendIPConfigurations, {name: options.frontendIpName});
        if(!referredfrontendIPConfiguration) {
          throw new Error(util.format($('No frontend ip configuration with name "%s" found'), options.frontendIpName));
        }
        var idContainerfrontendIPConfiguration = referredfrontendIPConfiguration;
        parameters.loadBalancingRules[index].frontendIPConfiguration.id = idContainerfrontendIPConfiguration.id;
      }

      if(!parameters.loadBalancingRules[index].backendAddressPool) {
        parameters.loadBalancingRules[index].backendAddressPool = {};
      }
      if(options.backendAddressPoolId) {
        if(options.backendAddressPoolName) {
          cli.output.warn($('--backend-address-pool-name parameter will be ignored because --backend-address-pool-id and --backend-address-pool-name are mutually exclusive'));
        }
        parameters.loadBalancingRules[index].backendAddressPool.id = options.backendAddressPoolId;
      } else if(options.backendAddressPoolName) {
        var referredbackendAddressPool = utils.findFirstCaseIgnore(loadBalancer.backendAddressPools, {name: options.backendAddressPoolName});
        if(!referredbackendAddressPool) {
          throw new Error(util.format($('No backend address pool with name "%s" found'), options.backendAddressPoolName));
        }
        var idContainerbackendAddressPool = referredbackendAddressPool;
        parameters.loadBalancingRules[index].backendAddressPool.id = idContainerbackendAddressPool.id;
      }

      if(!parameters.loadBalancingRules[index].probe) {
        parameters.loadBalancingRules[index].probe = {};
      }
      if(options.probeId) {
        if(options.probeName) {
          cli.output.warn($('--probe-name parameter will be ignored because --probe-id and --probe-name are mutually exclusive'));
        }
        if(!utils.argHasValue(options.probeId)) {
          delete parameters.loadBalancingRules[index].probe;
        } else {
          parameters.loadBalancingRules[index].probe.id = options.probeId;
        }
      } else if(options.probeName) {
        if(!utils.argHasValue(options.probeName)) {
          delete parameters.loadBalancingRules[index].probe;
        } else {
        var referredprobe = utils.findFirstCaseIgnore(loadBalancer.probes, {name: options.probeName});
        if(!referredprobe) {
          throw new Error(util.format($('No probe with name "%s" found'), options.probeName));
        }
        var idContainerprobe = referredprobe;
          parameters.loadBalancingRules[index].probe.id = idContainerprobe.id;
        }
      }

      if(options.protocol) {
        parameters.loadBalancingRules[index].protocol = validation.isIn(options.protocol, ['Udp', 'Tcp'], '--protocol');
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].protocol = defaultProtocol;
      }

      if(options.loadDistribution) {
        parameters.loadBalancingRules[index].loadDistribution = validation.isIn(options.loadDistribution, ['Default', 'SourceIP', 'SourceIPProtocol'], '--load-distribution');
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].loadDistribution = defaultLoadDistribution;
      }

      if(options.frontendPort) {
        parameters.loadBalancingRules[index].frontendPort = parseInt(options.frontendPort, 10);
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].frontendPort = parseInt(defaultFrontendPort, 10);
      }

      if(options.backendPort) {
        parameters.loadBalancingRules[index].backendPort = parseInt(options.backendPort, 10);
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].backendPort = parseInt(defaultBackendPort, 10);
      }

      if(options.idleTimeout) {
        parameters.loadBalancingRules[index].idleTimeoutInMinutes = parseInt(options.idleTimeout, 10);
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].idleTimeoutInMinutes = parseInt(defaultIdleTimeoutInMinutes, 10);
      }

      if(options.enableFloatingIp) {
        parameters.loadBalancingRules[index].enableFloatingIP = utils.parseBool(options.enableFloatingIp);
      } else if(useDefaults) {
        parameters.loadBalancingRules[index].enableFloatingIP = utils.parseBool(defaultEnableFloatingIP);
      }

      generatorUtils.removeEmptyObjects(parameters);
      progress = cli.interaction.progress(util.format($('Updating load balancing rules in "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }
      cli.interaction.formatOutput(loadBalancer.loadBalancingRules[index], generatorUtils.traverse);
    });

  loadBalancingRules.command('delete [resource-group] [lb-name] [name]')
    .description($('Delete a load balancing rules'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the load balancing rule'))
    .option('-q, --quiet', $('quiet mode, do not ask for delete confirmation'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var index = utils.indexOfCaseIgnore(loadBalancer.loadBalancingRules, {name: name});
      if (index === -1) {
        throw new Error(util.format($('load balancing rules "%s" not found in the lbName "%s"'), name, loadBalancer.name));
      }

      if (!options.quiet && !cli.interaction.confirm(util.format($('Delete load balancing rules with name "%s" from "%s"? [y/n] '), name, lbName), _)) {
        return;
      }

      loadBalancer.loadBalancingRules.splice(index, 1);
      progress = cli.interaction.progress('Deleting load balancing rules');
      try {
        loadBalancer = networkManagementClient.loadBalancers.createOrUpdate(resourceGroup, lbName, loadBalancer, _);
      } finally {
        progress.end();
      }
    });

  loadBalancingRules.command('show [resource-group] [lb-name] [name]')
    .description($('Show a load balancing rules'))
    .usage('[options] <resource-group> <lb-name> <name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-n, --name <name>', $('the name of the load balancing rule'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, name, options, _) {
      resourceGroup = cli.interaction.promptIfNotGiven($('resource group : '), resourceGroup, _);
      lbName = cli.interaction.promptIfNotGiven($('lb name : '), lbName, _);
      name = cli.interaction.promptIfNotGiven($('name : '), name, _);

      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if (!loadBalancer) {
        throw new Error(util.format($('load balancer with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var loadBalancingRule = utils.findFirstCaseIgnore(loadBalancer.loadBalancingRules, {name: name});
      if(!loadBalancingRule) {
        cli.output.warn(util.format($('load balancing rules with name "%s" not found in the lbName "%s"'), name, loadBalancer.name));
      }

      cli.interaction.formatOutput(loadBalancingRule, generatorUtils.traverse);
    });

  loadBalancingRules.command('list [resource-group] [lb-name]')
    .description($('List load balancing rules'))
    .usage('[options] <resource-group> <lb-name>')
    .option('-g, --resource-group <resource-group>', $('the name of the resource group'))
    .option('-l, --lb-name <lb-name>', $('the lb name'))
    .option('-s, --subscription <subscription>', $('the subscription identifier'))
    .execute(function(resourceGroup, lbName, options, _) {
      var subscription = profile.current.getSubscription(options.subscription);
      var networkManagementClient = utils.createNetworkManagementClient(subscription);

      var loadBalancer = null;
      var progress = cli.interaction.progress(util.format($('Looking up the load balancer "%s"'), lbName));
      try {
        loadBalancer = networkManagementClient.loadBalancers.get(resourceGroup, lbName, null, _);
      } catch (e) {
        if (e.statusCode === 404) {
          loadBalancer = null;
        } else {
          throw e;
        }
      } finally {
        progress.end();
      }

      if(!loadBalancer) {
        throw new Error(util.format($('load balancers with name "%s" not found in the resource group "%s"'), lbName, resourceGroup));
      }

      var items = loadBalancer.loadBalancingRules;
      cli.interaction.formatOutput(items, function(items) {
        if (items.length === 0) {
          cli.output.warn($('No load balancing rules found'));
        } else {
          cli.output.table(items, function (row, item) {
            row.cell($('Name'), item.name);
            var resInfo = resourceUtils.getResourceInformation(item.id);
            row.cell($('Resource group'), resInfo.resourceGroup);
            row.cell($('Provisioning state'), item.provisioningState);
          });
        }
      });
    });
};