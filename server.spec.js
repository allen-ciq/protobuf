const { assert } = require('chai');
const Logger = require('log-ng');
const path = require('path');
const protobuf = require("protobufjs");

const logger = new Logger(path.basename(__filename));

describe('Protobuf', function(){
	it('should load, verify, create, encode, decode and convert protobuf message', function(done){
		const payload = { awesomeField: "AwesomeString" };

		protobuf.load("awesome.proto", function(err, root){
			if(err){
				logger.error('Error loading protobuf file:', err);
				done(err);
			}else{
				assert.isNotNull(root, 'Protobuf root should not be null');
				logger.info('Protobuf file loaded successfully');

				const AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");
				const errMsg = AwesomeMessage.verify(payload);
				assert.isNull(errMsg, 'Payload should be valid');
				logger.info(`Payload verified successfully: ${JSON.stringify(payload)}`);

				const message = AwesomeMessage.create(payload);
				assert.isNotNull(message, 'Message should not be null');
				logger.info(`Message created successfully: ${JSON.stringify(message)}`);
				assert.isNotNull(message.awesomeField, 'Message should have awesomeField');

				const buffer = AwesomeMessage.encode(message).finish();
				assert.isNotNull(buffer, 'Buffer should not be null');
				logger.info(`message length: ${JSON.stringify(message).length}`);
				assert.equal(buffer.length, 15, 'Buffer length should be 15');
				logger.info(`Buffer encoded successfully: ${JSON.stringify(buffer)}`);

				const decodeMesg = AwesomeMessage.decode(buffer);
				assert.isNotNull(decodeMesg, 'Decoded message should not be null');
				logger.info(`Decoded message: ${JSON.stringify(decodeMesg)}`);

				const object = AwesomeMessage.toObject(decodeMesg, {
					longs: String,
					enums: String,
					bytes: String,
				});
				assert.isNotNull(object, 'Object should not be null');
				logger.info(`Converted object: ${JSON.stringify(object)}`);

				done();
			}
		});
	});
});
