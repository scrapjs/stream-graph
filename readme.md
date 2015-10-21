_StreamGraph_ is [_EventedGraph_](https://npmjs.org/package/evented-graph), where nodes are streams and edges are pipes. Main purpose of _stream-graph_ is to manage connection scheme of streams: parse, save, load, generate etc.


## Usage

[![npm install stream-graph](https://nodei.co/npm/stream-graph.png?mini=true)](https://npmjs.org/package/stream-graph/)

```js
var Graph = require('stream-graph');
var Browserify = require('browserify');

var browserify = new Browserify();
browserify.add('./main.js');

//create graph structure
var graph = new Graph();
graph.add(browserify);
graph.add(process.stdout);
graph.connect(browserify, process.stdout);

//go
browserify.bundle();
```

## Related

> [evented-graph](https://npmjs.org/package/evented-graph) — graph emitting mutator events, ancestor of stream-graph.<br/>
> [audio-graph](https://npmjs.org/package/audio-graph) — graph of connected pcm-streams. Descendant of this graph.<br/>