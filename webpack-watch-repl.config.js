/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

const path = require("path");
const WebpackConfig = require("./webpack.config.js");

WebpackConfig.mode = "development";
WebpackConfig.entry = "./src/prepack-standalone.js";
WebpackConfig.watch = true;
WebpackConfig.output.path = path.join(__dirname, "/website/js");
const babelRule = WebpackConfig.module.rules.find((rule) => rule.use.loader === 'babel-loader');
// Note: this is a hack around https://github.com/babel/babel/issues/6604 - should be able to be removed on babel 7
babelRule.use.options.plugins = (babelRule.use.options.plugins || []).concat("transform-class-properties");

module.exports = WebpackConfig;
