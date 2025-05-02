const protobuf = require('./example.js');

const {
	Status,
	User
} = protobuf.example;
const msg = User.create({
	id: 123,
	name: "Allen",
	isActive: true,
	score: 3.14,
	precisionScore: 0.123456789,
	rawData: new Uint8Array([1, 2, 3, 4, 5]),
	address: {
		city: "Allentown",
		country: "NgLand",
		state: "NG",
		zip: "12345"
	},
	role: User.Role.ADMIN,
	status: Status.ACTIVE,
	tags: ["tag1", "tag2", "tag3"],
	preferences: {
		temp: 70
	},
	email: "bogus@example.com"
});

const err = User.verify(msg);
if(err){
	throw new Error(`Verification error: ${err}`);
}else{
	console.log('Verification success');
}

const buffer = User.encode(msg).finish();

const decodedMsg = User.decode(buffer);

console.log('Original message:');
console.dir(decodedMsg);
