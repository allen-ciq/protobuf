/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.example = (function() {

    /**
     * Namespace example.
     * @exports example
     * @namespace
     */
    var example = {};

    example.ExampleMessage = (function() {

        /**
         * Properties of an ExampleMessage.
         * @memberof example
         * @interface IExampleMessage
         * @property {string|null} [exampleField] ExampleMessage exampleField
         */

        /**
         * Constructs a new ExampleMessage.
         * @memberof example
         * @classdesc Represents an ExampleMessage.
         * @implements IExampleMessage
         * @constructor
         * @param {example.IExampleMessage=} [properties] Properties to set
         */
        function ExampleMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExampleMessage exampleField.
         * @member {string} exampleField
         * @memberof example.ExampleMessage
         * @instance
         */
        ExampleMessage.prototype.exampleField = "";

        /**
         * Creates a new ExampleMessage instance using the specified properties.
         * @function create
         * @memberof example.ExampleMessage
         * @static
         * @param {example.IExampleMessage=} [properties] Properties to set
         * @returns {example.ExampleMessage} ExampleMessage instance
         */
        ExampleMessage.create = function create(properties) {
            return new ExampleMessage(properties);
        };

        /**
         * Encodes the specified ExampleMessage message. Does not implicitly {@link example.ExampleMessage.verify|verify} messages.
         * @function encode
         * @memberof example.ExampleMessage
         * @static
         * @param {example.IExampleMessage} message ExampleMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.exampleField != null && Object.hasOwnProperty.call(message, "exampleField"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.exampleField);
            return writer;
        };

        /**
         * Encodes the specified ExampleMessage message, length delimited. Does not implicitly {@link example.ExampleMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.ExampleMessage
         * @static
         * @param {example.IExampleMessage} message ExampleMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExampleMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExampleMessage message from the specified reader or buffer.
         * @function decode
         * @memberof example.ExampleMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.ExampleMessage} ExampleMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.ExampleMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.exampleField = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an ExampleMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.ExampleMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.ExampleMessage} ExampleMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExampleMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExampleMessage message.
         * @function verify
         * @memberof example.ExampleMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExampleMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.exampleField != null && message.hasOwnProperty("exampleField"))
                if (!$util.isString(message.exampleField))
                    return "exampleField: string expected";
            return null;
        };

        /**
         * Creates an ExampleMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.ExampleMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.ExampleMessage} ExampleMessage
         */
        ExampleMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.example.ExampleMessage)
                return object;
            var message = new $root.example.ExampleMessage();
            if (object.exampleField != null)
                message.exampleField = String(object.exampleField);
            return message;
        };

        /**
         * Creates a plain object from an ExampleMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.ExampleMessage
         * @static
         * @param {example.ExampleMessage} message ExampleMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExampleMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.exampleField = "";
            if (message.exampleField != null && message.hasOwnProperty("exampleField"))
                object.exampleField = message.exampleField;
            return object;
        };

        /**
         * Converts this ExampleMessage to JSON.
         * @function toJSON
         * @memberof example.ExampleMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExampleMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExampleMessage
         * @function getTypeUrl
         * @memberof example.ExampleMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExampleMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/example.ExampleMessage";
        };

        return ExampleMessage;
    })();

    /**
     * Status enum.
     * @name example.Status
     * @enum {number}
     * @property {number} UNKNOWN=0 UNKNOWN value
     * @property {number} ACTIVE=1 ACTIVE value
     * @property {number} INACTIVE=2 INACTIVE value
     */
    example.Status = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "ACTIVE"] = 1;
        values[valuesById[2] = "INACTIVE"] = 2;
        return values;
    })();

    example.User = (function() {

        /**
         * Properties of a User.
         * @memberof example
         * @interface IUser
         * @property {number|null} [id] User id
         * @property {string|null} [name] User name
         * @property {boolean|null} [isActive] User isActive
         * @property {number|null} [score] User score
         * @property {number|null} [precisionScore] User precisionScore
         * @property {Uint8Array|null} [rawData] User rawData
         * @property {example.User.IAddress|null} [address] User address
         * @property {example.User.Role|null} [role] User role
         * @property {example.Status|null} [status] User status
         * @property {Array.<string>|null} [tags] User tags
         * @property {Object.<string,number>|null} [preferences] User preferences
         * @property {string|null} [email] User email
         * @property {string|null} [phone] User phone
         */

        /**
         * Constructs a new User.
         * @memberof example
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {example.IUser=} [properties] Properties to set
         */
        function User(properties) {
            this.tags = [];
            this.preferences = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {number} id
         * @memberof example.User
         * @instance
         */
        User.prototype.id = 0;

        /**
         * User name.
         * @member {string} name
         * @memberof example.User
         * @instance
         */
        User.prototype.name = "";

        /**
         * User isActive.
         * @member {boolean} isActive
         * @memberof example.User
         * @instance
         */
        User.prototype.isActive = false;

        /**
         * User score.
         * @member {number} score
         * @memberof example.User
         * @instance
         */
        User.prototype.score = 0;

        /**
         * User precisionScore.
         * @member {number} precisionScore
         * @memberof example.User
         * @instance
         */
        User.prototype.precisionScore = 0;

        /**
         * User rawData.
         * @member {Uint8Array} rawData
         * @memberof example.User
         * @instance
         */
        User.prototype.rawData = $util.newBuffer([]);

        /**
         * User address.
         * @member {example.User.IAddress|null|undefined} address
         * @memberof example.User
         * @instance
         */
        User.prototype.address = null;

        /**
         * User role.
         * @member {example.User.Role} role
         * @memberof example.User
         * @instance
         */
        User.prototype.role = 0;

        /**
         * User status.
         * @member {example.Status} status
         * @memberof example.User
         * @instance
         */
        User.prototype.status = 0;

        /**
         * User tags.
         * @member {Array.<string>} tags
         * @memberof example.User
         * @instance
         */
        User.prototype.tags = $util.emptyArray;

        /**
         * User preferences.
         * @member {Object.<string,number>} preferences
         * @memberof example.User
         * @instance
         */
        User.prototype.preferences = $util.emptyObject;

        /**
         * User email.
         * @member {string|null|undefined} email
         * @memberof example.User
         * @instance
         */
        User.prototype.email = null;

        /**
         * User phone.
         * @member {string|null|undefined} phone
         * @memberof example.User
         * @instance
         */
        User.prototype.phone = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * User contact.
         * @member {"email"|"phone"|undefined} contact
         * @memberof example.User
         * @instance
         */
        Object.defineProperty(User.prototype, "contact", {
            get: $util.oneOfGetter($oneOfFields = ["email", "phone"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof example.User
         * @static
         * @param {example.IUser=} [properties] Properties to set
         * @returns {example.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link example.User.verify|verify} messages.
         * @function encode
         * @memberof example.User
         * @static
         * @param {example.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isActive);
            if (message.score != null && Object.hasOwnProperty.call(message, "score"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.score);
            if (message.precisionScore != null && Object.hasOwnProperty.call(message, "precisionScore"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.precisionScore);
            if (message.rawData != null && Object.hasOwnProperty.call(message, "rawData"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.rawData);
            if (message.address != null && Object.hasOwnProperty.call(message, "address"))
                $root.example.User.Address.encode(message.address, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.role != null && Object.hasOwnProperty.call(message, "role"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.role);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.status);
            if (message.tags != null && message.tags.length)
                for (var i = 0; i < message.tags.length; ++i)
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.tags[i]);
            if (message.preferences != null && Object.hasOwnProperty.call(message, "preferences"))
                for (var keys = Object.keys(message.preferences), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 11, wireType 2 =*/90).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.preferences[keys[i]]).ldelim();
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.email);
            if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.phone);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link example.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.User
         * @static
         * @param {example.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof example.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.User(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.isActive = reader.bool();
                        break;
                    }
                case 4: {
                        message.score = reader.float();
                        break;
                    }
                case 5: {
                        message.precisionScore = reader.double();
                        break;
                    }
                case 6: {
                        message.rawData = reader.bytes();
                        break;
                    }
                case 7: {
                        message.address = $root.example.User.Address.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.role = reader.int32();
                        break;
                    }
                case 9: {
                        message.status = reader.int32();
                        break;
                    }
                case 10: {
                        if (!(message.tags && message.tags.length))
                            message.tags = [];
                        message.tags.push(reader.string());
                        break;
                    }
                case 11: {
                        if (message.preferences === $util.emptyObject)
                            message.preferences = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.preferences[key] = value;
                        break;
                    }
                case 12: {
                        message.email = reader.string();
                        break;
                    }
                case 13: {
                        message.phone = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof example.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            if (message.score != null && message.hasOwnProperty("score"))
                if (typeof message.score !== "number")
                    return "score: number expected";
            if (message.precisionScore != null && message.hasOwnProperty("precisionScore"))
                if (typeof message.precisionScore !== "number")
                    return "precisionScore: number expected";
            if (message.rawData != null && message.hasOwnProperty("rawData"))
                if (!(message.rawData && typeof message.rawData.length === "number" || $util.isString(message.rawData)))
                    return "rawData: buffer expected";
            if (message.address != null && message.hasOwnProperty("address")) {
                var error = $root.example.User.Address.verify(message.address);
                if (error)
                    return "address." + error;
            }
            if (message.role != null && message.hasOwnProperty("role"))
                switch (message.role) {
                default:
                    return "role: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.tags != null && message.hasOwnProperty("tags")) {
                if (!Array.isArray(message.tags))
                    return "tags: array expected";
                for (var i = 0; i < message.tags.length; ++i)
                    if (!$util.isString(message.tags[i]))
                        return "tags: string[] expected";
            }
            if (message.preferences != null && message.hasOwnProperty("preferences")) {
                if (!$util.isObject(message.preferences))
                    return "preferences: object expected";
                var key = Object.keys(message.preferences);
                for (var i = 0; i < key.length; ++i)
                    if (!$util.isInteger(message.preferences[key[i]]))
                        return "preferences: integer{k:string} expected";
            }
            if (message.email != null && message.hasOwnProperty("email")) {
                properties.contact = 1;
                if (!$util.isString(message.email))
                    return "email: string expected";
            }
            if (message.phone != null && message.hasOwnProperty("phone")) {
                if (properties.contact === 1)
                    return "contact: multiple values";
                properties.contact = 1;
                if (!$util.isString(message.phone))
                    return "phone: string expected";
            }
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.example.User)
                return object;
            var message = new $root.example.User();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            if (object.score != null)
                message.score = Number(object.score);
            if (object.precisionScore != null)
                message.precisionScore = Number(object.precisionScore);
            if (object.rawData != null)
                if (typeof object.rawData === "string")
                    $util.base64.decode(object.rawData, message.rawData = $util.newBuffer($util.base64.length(object.rawData)), 0);
                else if (object.rawData.length >= 0)
                    message.rawData = object.rawData;
            if (object.address != null) {
                if (typeof object.address !== "object")
                    throw TypeError(".example.User.address: object expected");
                message.address = $root.example.User.Address.fromObject(object.address);
            }
            switch (object.role) {
            default:
                if (typeof object.role === "number") {
                    message.role = object.role;
                    break;
                }
                break;
            case "UNSPECIFIED":
            case 0:
                message.role = 0;
                break;
            case "ADMIN":
            case 1:
                message.role = 1;
                break;
            case "USER":
            case 2:
                message.role = 2;
                break;
            case "GUEST":
            case 3:
                message.role = 3;
                break;
            }
            switch (object.status) {
            default:
                if (typeof object.status === "number") {
                    message.status = object.status;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.status = 0;
                break;
            case "ACTIVE":
            case 1:
                message.status = 1;
                break;
            case "INACTIVE":
            case 2:
                message.status = 2;
                break;
            }
            if (object.tags) {
                if (!Array.isArray(object.tags))
                    throw TypeError(".example.User.tags: array expected");
                message.tags = [];
                for (var i = 0; i < object.tags.length; ++i)
                    message.tags[i] = String(object.tags[i]);
            }
            if (object.preferences) {
                if (typeof object.preferences !== "object")
                    throw TypeError(".example.User.preferences: object expected");
                message.preferences = {};
                for (var keys = Object.keys(object.preferences), i = 0; i < keys.length; ++i)
                    message.preferences[keys[i]] = object.preferences[keys[i]] | 0;
            }
            if (object.email != null)
                message.email = String(object.email);
            if (object.phone != null)
                message.phone = String(object.phone);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.User
         * @static
         * @param {example.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.tags = [];
            if (options.objects || options.defaults)
                object.preferences = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.isActive = false;
                object.score = 0;
                object.precisionScore = 0;
                if (options.bytes === String)
                    object.rawData = "";
                else {
                    object.rawData = [];
                    if (options.bytes !== Array)
                        object.rawData = $util.newBuffer(object.rawData);
                }
                object.address = null;
                object.role = options.enums === String ? "UNSPECIFIED" : 0;
                object.status = options.enums === String ? "UNKNOWN" : 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                object.isActive = message.isActive;
            if (message.score != null && message.hasOwnProperty("score"))
                object.score = options.json && !isFinite(message.score) ? String(message.score) : message.score;
            if (message.precisionScore != null && message.hasOwnProperty("precisionScore"))
                object.precisionScore = options.json && !isFinite(message.precisionScore) ? String(message.precisionScore) : message.precisionScore;
            if (message.rawData != null && message.hasOwnProperty("rawData"))
                object.rawData = options.bytes === String ? $util.base64.encode(message.rawData, 0, message.rawData.length) : options.bytes === Array ? Array.prototype.slice.call(message.rawData) : message.rawData;
            if (message.address != null && message.hasOwnProperty("address"))
                object.address = $root.example.User.Address.toObject(message.address, options);
            if (message.role != null && message.hasOwnProperty("role"))
                object.role = options.enums === String ? $root.example.User.Role[message.role] === undefined ? message.role : $root.example.User.Role[message.role] : message.role;
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.example.Status[message.status] === undefined ? message.status : $root.example.Status[message.status] : message.status;
            if (message.tags && message.tags.length) {
                object.tags = [];
                for (var j = 0; j < message.tags.length; ++j)
                    object.tags[j] = message.tags[j];
            }
            var keys2;
            if (message.preferences && (keys2 = Object.keys(message.preferences)).length) {
                object.preferences = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.preferences[keys2[j]] = message.preferences[keys2[j]];
            }
            if (message.email != null && message.hasOwnProperty("email")) {
                object.email = message.email;
                if (options.oneofs)
                    object.contact = "email";
            }
            if (message.phone != null && message.hasOwnProperty("phone")) {
                object.phone = message.phone;
                if (options.oneofs)
                    object.contact = "phone";
            }
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof example.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for User
         * @function getTypeUrl
         * @memberof example.User
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        User.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/example.User";
        };

        User.Address = (function() {

            /**
             * Properties of an Address.
             * @memberof example.User
             * @interface IAddress
             * @property {string|null} [street] Address street
             * @property {string|null} [city] Address city
             * @property {string|null} [state] Address state
             * @property {string|null} [zip] Address zip
             */

            /**
             * Constructs a new Address.
             * @memberof example.User
             * @classdesc Represents an Address.
             * @implements IAddress
             * @constructor
             * @param {example.User.IAddress=} [properties] Properties to set
             */
            function Address(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Address street.
             * @member {string} street
             * @memberof example.User.Address
             * @instance
             */
            Address.prototype.street = "";

            /**
             * Address city.
             * @member {string} city
             * @memberof example.User.Address
             * @instance
             */
            Address.prototype.city = "";

            /**
             * Address state.
             * @member {string} state
             * @memberof example.User.Address
             * @instance
             */
            Address.prototype.state = "";

            /**
             * Address zip.
             * @member {string} zip
             * @memberof example.User.Address
             * @instance
             */
            Address.prototype.zip = "";

            /**
             * Creates a new Address instance using the specified properties.
             * @function create
             * @memberof example.User.Address
             * @static
             * @param {example.User.IAddress=} [properties] Properties to set
             * @returns {example.User.Address} Address instance
             */
            Address.create = function create(properties) {
                return new Address(properties);
            };

            /**
             * Encodes the specified Address message. Does not implicitly {@link example.User.Address.verify|verify} messages.
             * @function encode
             * @memberof example.User.Address
             * @static
             * @param {example.User.IAddress} message Address message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Address.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.street != null && Object.hasOwnProperty.call(message, "street"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.street);
                if (message.city != null && Object.hasOwnProperty.call(message, "city"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.city);
                if (message.state != null && Object.hasOwnProperty.call(message, "state"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.state);
                if (message.zip != null && Object.hasOwnProperty.call(message, "zip"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.zip);
                return writer;
            };

            /**
             * Encodes the specified Address message, length delimited. Does not implicitly {@link example.User.Address.verify|verify} messages.
             * @function encodeDelimited
             * @memberof example.User.Address
             * @static
             * @param {example.User.IAddress} message Address message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Address.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Address message from the specified reader or buffer.
             * @function decode
             * @memberof example.User.Address
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {example.User.Address} Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Address.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.User.Address();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.street = reader.string();
                            break;
                        }
                    case 2: {
                            message.city = reader.string();
                            break;
                        }
                    case 3: {
                            message.state = reader.string();
                            break;
                        }
                    case 4: {
                            message.zip = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Address message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof example.User.Address
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {example.User.Address} Address
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Address.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Address message.
             * @function verify
             * @memberof example.User.Address
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Address.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.street != null && message.hasOwnProperty("street"))
                    if (!$util.isString(message.street))
                        return "street: string expected";
                if (message.city != null && message.hasOwnProperty("city"))
                    if (!$util.isString(message.city))
                        return "city: string expected";
                if (message.state != null && message.hasOwnProperty("state"))
                    if (!$util.isString(message.state))
                        return "state: string expected";
                if (message.zip != null && message.hasOwnProperty("zip"))
                    if (!$util.isString(message.zip))
                        return "zip: string expected";
                return null;
            };

            /**
             * Creates an Address message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof example.User.Address
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {example.User.Address} Address
             */
            Address.fromObject = function fromObject(object) {
                if (object instanceof $root.example.User.Address)
                    return object;
                var message = new $root.example.User.Address();
                if (object.street != null)
                    message.street = String(object.street);
                if (object.city != null)
                    message.city = String(object.city);
                if (object.state != null)
                    message.state = String(object.state);
                if (object.zip != null)
                    message.zip = String(object.zip);
                return message;
            };

            /**
             * Creates a plain object from an Address message. Also converts values to other types if specified.
             * @function toObject
             * @memberof example.User.Address
             * @static
             * @param {example.User.Address} message Address
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Address.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.street = "";
                    object.city = "";
                    object.state = "";
                    object.zip = "";
                }
                if (message.street != null && message.hasOwnProperty("street"))
                    object.street = message.street;
                if (message.city != null && message.hasOwnProperty("city"))
                    object.city = message.city;
                if (message.state != null && message.hasOwnProperty("state"))
                    object.state = message.state;
                if (message.zip != null && message.hasOwnProperty("zip"))
                    object.zip = message.zip;
                return object;
            };

            /**
             * Converts this Address to JSON.
             * @function toJSON
             * @memberof example.User.Address
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Address.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Address
             * @function getTypeUrl
             * @memberof example.User.Address
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Address.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/example.User.Address";
            };

            return Address;
        })();

        /**
         * Role enum.
         * @name example.User.Role
         * @enum {number}
         * @property {number} UNSPECIFIED=0 UNSPECIFIED value
         * @property {number} ADMIN=1 ADMIN value
         * @property {number} USER=2 USER value
         * @property {number} GUEST=3 GUEST value
         */
        User.Role = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNSPECIFIED"] = 0;
            values[valuesById[1] = "ADMIN"] = 1;
            values[valuesById[2] = "USER"] = 2;
            values[valuesById[3] = "GUEST"] = 3;
            return values;
        })();

        return User;
    })();

    example.Empty = (function() {

        /**
         * Properties of an Empty.
         * @memberof example
         * @interface IEmpty
         */

        /**
         * Constructs a new Empty.
         * @memberof example
         * @classdesc Represents an Empty.
         * @implements IEmpty
         * @constructor
         * @param {example.IEmpty=} [properties] Properties to set
         */
        function Empty(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Empty instance using the specified properties.
         * @function create
         * @memberof example.Empty
         * @static
         * @param {example.IEmpty=} [properties] Properties to set
         * @returns {example.Empty} Empty instance
         */
        Empty.create = function create(properties) {
            return new Empty(properties);
        };

        /**
         * Encodes the specified Empty message. Does not implicitly {@link example.Empty.verify|verify} messages.
         * @function encode
         * @memberof example.Empty
         * @static
         * @param {example.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Empty message, length delimited. Does not implicitly {@link example.Empty.verify|verify} messages.
         * @function encodeDelimited
         * @memberof example.Empty
         * @static
         * @param {example.IEmpty} message Empty message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Empty.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Empty message from the specified reader or buffer.
         * @function decode
         * @memberof example.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {example.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.example.Empty();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Empty message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof example.Empty
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {example.Empty} Empty
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Empty.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Empty message.
         * @function verify
         * @memberof example.Empty
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Empty.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates an Empty message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof example.Empty
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {example.Empty} Empty
         */
        Empty.fromObject = function fromObject(object) {
            if (object instanceof $root.example.Empty)
                return object;
            return new $root.example.Empty();
        };

        /**
         * Creates a plain object from an Empty message. Also converts values to other types if specified.
         * @function toObject
         * @memberof example.Empty
         * @static
         * @param {example.Empty} message Empty
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Empty.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Empty to JSON.
         * @function toJSON
         * @memberof example.Empty
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Empty.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Empty
         * @function getTypeUrl
         * @memberof example.Empty
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Empty.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/example.Empty";
        };

        return Empty;
    })();

    return example;
})();

module.exports = $root;
