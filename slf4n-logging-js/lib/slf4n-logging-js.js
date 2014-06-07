/*
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Fabian M.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var logging = require("logging-js");
var slf4n = require("slf4n");

/*
 * Construct a new {@link Logger} instance.
 *
 * @param module The module to get the {@link slf4n.Logger} implementation for.
 */
function Logger(module) {
	this.logger = logging.get(module);
	return this;
};

/*
 * Log a message at the DEBUG level.
 * 
 * @param message The message to log at the DEBUG level.
 */
Logger.prototype.debug = function(message) {
	if (!this.isDebugEnabled())
		return;
	this.logger.debug(slf4n.format(message, arguments));
};

/*
 * Determine whether the DEBUG level is enabled or not.
 * 
 * @return <code>true</code> if the DEBUG level is enabled, <code>false</code>
 *	otherwise.
 */
Logger.prototype.isDebugEnabled = function() { 
	return this.logger.level.value >= this.logger.levels.DEBUG.value;
};

/*
 * Log a message at the ERROR level.
 * 
 * @param message The message to log at the ERROR level.
 */
Logger.prototype.error = function(message) {
	if (!this.isErrorEnabled())
		return;
	this.logger.severe(slf4n.format(message, arguments));
};

/*
 * Determine whether the ERROR level is enabled or not.
 * 
 * @return <code>true</code> if the ERROR level is enabled, <code>false</code>
 *	otherwise.
 */
Logger.prototype.isErrorEnabled = function() { 
	return this.logger.level.value >= this.logger.levels.SEVERE.value;
};

/*
 * Log a message at the INFO level.
 * 
 * @param message The message to log at the INFO level.
 */
Logger.prototype.info = function(message) {
	if (!this.isInfoEnabled())
		return;
	this.logger.info(slf4n.format(message, arguments));
};

/*
 * Determine whether the INFO level is enabled or not.
 * 
 * @return <code>true</code> if the INFO level is enabled, <code>false</code>
 *	otherwise.
 */
Logger.prototype.isInfoEnabled = function() { 
	return this.logger.level.value >= this.logger.levels.INFO.value;
};

/*
 * Log a message at the TRACE level.
 * 
 * @param message The message to log at the TRACE level.
 */
Logger.prototype.trace = function(message) {
	if (!this.isTraceEnabled())
		return;
	this.logger.fine(slf4n.format(message, arguments));
};

/*
 * Determine whether the TRACE level is enabled or not.
 * 
 * @return <code>true</code> if the TRACE level is enabled, <code>false</code>
 *	otherwise.
 */
Logger.prototype.isTraceEnabled = function() { 
	return this.logger.level.value >= this.logger.levels.FINE.value;
};

/*
 * Log a message at the WARN level.
 * 
 * @param message The message to log at the WARN level.
 */
Logger.prototype.warn = function(message) {
	if (!this.isWarnEnabled())
		return;
	this.logger.warning(slf4n.format(message, arguments));
};

/*
 * Determine whether the WARN level is enabled or not.
 * 
 * @return <code>true</code> if the WARN level is enabled, <code>false</code>
 *	otherwise.
 */
Logger.prototype.isWarnEnabled = function() { 
	return this.logger.level.value >= this.logger.levels.WARNING.value;
};

/*
 * Return a {@link slf4n.Logger} implementation for the given module.
 *
 * @param module The module to get the {@link slf4n.Logger} implementation for.
 */
module.exports = function(module) {
	return new Logger(module);
};