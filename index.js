/**
 * Stream graph - graph with nodes as streams.
 *
 * @module  stream-graph
 */

var EventedGraph = require('evented-graph');
var inherits = require('inherits');
var extend = require('xtend/mutable');
var isStream = require('is-stream');


/**
 * @constructor
 *
 * @param {Iterable} list Initial structure, whether nodes or connections
 */
function StreamGraph (list) {
	if (!(this instanceof StreamGraph)) return new StreamGraph(list);

	//pipe streams
	this.on('connect', function (a, b) {
		a.pipe(b);
	});
	//unpipe streams
	this.on('disconnect', function (a, b) {
		a.unpipe(a, b);
	});

	EventedGraph.call(this, list);
};


/**
 * Inherit event emitter with basic events for graphs
 */
inherits(StreamGraph, EventedGraph);



/**
 * Add a new node
 */
StreamGraph.prototype.add = function (a) {
	if (!isStream(a)) throw Error('Argument is not a stream instance');

	EventedGraph.prototype.add.call(this, a);

	return this;
};


module.exports = StreamGraph;