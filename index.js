const protobuf = require("protobufjs");

protobuf.load("awesome.proto", function(err, root) {
	if (err)
		throw err;

	// Obtain a message type
	const AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");

	// Exemplary payload
	const payload = { awesomeField: "AwesomeString" };
	console.log(`JSON length ${JSON.stringify(payload).length}`);

	// Verify the payload if necessary (i.e. when possibly incomplete or invalid)
	const errMsg = AwesomeMessage.verify(payload);
	if (errMsg)
		throw Error(errMsg);

	// Create a new message
	const message = AwesomeMessage.create(payload); // or use .fromObject if conversion is necessary

	// Encode a message to an Uint8Array (browser) or Buffer (node)
	const buffer = AwesomeMessage.encode(message).finish();
	// ... do something with buffer
	console.dir(buffer);

	// Decode an Uint8Array (browser) or Buffer (node) to a message
	const decodeMesg = AwesomeMessage.decode(buffer);
	// ... do something with message

	// If the application uses length-delimited buffers, there is also encodeDelimited and decodeDelimited.

	// Maybe convert the message back to a plain object
	const object = AwesomeMessage.toObject(decodeMesg, {
		longs: String,
		enums: String,
		bytes: String,
		// see ConversionOptions
	});
	console.dir(object);
});
