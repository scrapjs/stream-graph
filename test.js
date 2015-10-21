require('babel/register');
var Graph = require('./');
var assert = require('assert');
var intoStream = require('into-stream');
var through = require('through2');
var concat = require('concat-stream');


var fixture = [1,2,3];


describe('Stream-graph', function () {
	it('Stream array', function (done) {
		var from = intoStream.obj(fixture);
		var transform = through.obj(function (chunk, enc, cb) {
			cb(null, chunk*2); });
		var to = concat({encoding: 'object'}, function (data) {
			assert.deepEqual(data, [2,4,6]);
			done();
		});

		// from.pipe(transform).pipe(to);
		var graph = Graph([[from, transform], [transform, to]]);
	});
});

