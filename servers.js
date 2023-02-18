/** @param {NS} ns */
export async function main(ns) {
	let servers = [];
	let notscanned = ['home'];
	while (notscanned.length != 0) {
		await ns.sleep(50)
		if (servers.includes(notscanned[0]) == false) {
			servers.push(notscanned[0]);
			let dynamic = ns.scan(notscanned[0])
			dynamic.shift()
			notscanned = notscanned.concat(dynamic)
			notscanned.shift()
		} else {
			notscanned.shift()
		}
	};
	let ports0 = [];
	let ports1 = [];
	let ports2 = [];
	let ports3 = [];
	let ports4 = [];
	let ports5 = [];
	for (var i = 0; i < servers.length; ++i) {
		var check = servers[i];
		var ports = ns.getServerNumPortsRequired(check);
		if (ports == 0) {
			ports0.push(check)
		}
		else if (ports == 1) {
			ports1.push(check)
		}
		else if (ports == 2) {
			ports2.push(check)
		}
		else if (ports == 3) {
			ports3.push(check)
		}
		else if (ports == 4) {
			ports4.push(check)
		}
		else if (ports == 5) {
			ports5.push(check)
		}
	};
	ns.tprint(ports0);
	ns.tprint(ports1);
	ns.tprint(ports2);
	ns.tprint(ports3);
	ns.tprint(ports4);
	ns.tprint(ports5)
}
