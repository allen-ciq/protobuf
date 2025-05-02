const { assert } = require('chai');
const Logger = require('log-ng');
const path = require('path');
const protobuf = require("protobufjs");

const logger = new Logger(path.basename(__filename));

describe('Protobuf', function(){
	it('should load, verify, create, encode, decode and convert protobuf message', function(done){
		const payload = { exampleField: "ExampleString" };

		protobuf.load("example.proto", function(err, root){
			if(err){
				logger.error('Error loading protobuf file:', err);
				done(err);
			}else{
				assert.exists(root, 'Protobuf root should not be null');
				logger.info('Protobuf file loaded successfully');

				const ExampleMessage = root.lookupType("example.ExampleMessage");
				const errMsg = ExampleMessage.verify(payload);
				assert.isNull(errMsg, 'Payload should be valid');
				logger.info(`Payload verified successfully: ${JSON.stringify(payload)}`);

				const message = ExampleMessage.create(payload);
				assert.exists(message, 'Message should not be null');
				logger.info(`Message created successfully: ${JSON.stringify(message)}`);
				assert.exists(message.exampleField, 'Message should have exampleField');

				const buffer = ExampleMessage.encode(message).finish();
				assert.exists(buffer, 'Buffer should not be null');
				logger.info(`message length: ${JSON.stringify(message).length}`);
				assert.equal(buffer.length, 15, 'Buffer length should be 15');
				logger.info(`Buffer encoded successfully: ${JSON.stringify(buffer)}`);

				const decodeMesg = ExampleMessage.decode(buffer);
				assert.exists(decodeMesg, 'Decoded message should not be null');
				logger.info(`Decoded message: ${JSON.stringify(decodeMesg)}`);

				const object = ExampleMessage.toObject(decodeMesg, {
					longs: String,
					enums: String,
					bytes: String,
				});
				assert.exists(object, 'Object should not be null');
				logger.info(`Converted object: ${JSON.stringify(object)}`);

				done();
			}
		});
	});
});
