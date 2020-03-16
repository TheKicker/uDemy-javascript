function MemberFactory () {
	this.createMember = function (name, type) {
		let member;

		if (type === 'simple') {
			member = new SimpleMembership(name);
		}
		else if (type === 'standard') {
			member = new StandardMembership(name);
		}
		else if (type === 'super') {
			member = new SuperMembership(name);
		}

		member.type = type;

		member.define = function () {
			console.log(`${this.name} (${this.type}): ${this.cost}`);
		};

		return member;
	};
}

const SimpleMembership = function (name) {
	this.name = name;
	this.cost = '$5';
};

const StandardMembership = function (name) {
	this.name = name;
	this.cost = '$15';
};

const SuperMembership = function (name) {
	this.name = name;
	this.cost = '$25';
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));
members.push(factory.createMember('Enid Rhee', 'super'));
members.push(factory.createMember('Jason Valroza', 'standard'));
members.push(factory.createMember('Carl Lavane', 'simple'));
members.push(factory.createMember('Thomas Haverford', 'simple'));
members.push(factory.createMember('William Rust', 'super'));

members.forEach(function (member) {
	member.define();
});
