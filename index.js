const clubList = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	11,
	12,
	13,
	14,
	15,
	// 16,
	// 17,
	// 18,
	// 19,
	// 20,
	// 21,
	// 22,
	// 23,
];

let schedule = new Array(clubList.length).fill([]);

for (let i = 0; i < clubList.length - 1; i++) {
	let round = new Array(clubList.length).fill(0);
	let temptList = [...clubList];

	for (let j = 0; j < clubList.length / 2; j++) {
		// if (temptList.length === 0) {
		// 	break;
		// }
		
		for(let k = 0; k < temptList.length; k++) {
			let check = temptList
				.slice(1)
				.filter(item => !schedule[temptList[0]].includes(item));
			
			round[temptList[0]] = check[0];
			round[check[0]] = temptList[0];
	
			temptList.splice(temptList.indexOf(check[0]), 1);
			temptList.splice(0, 1);
		}
	}

	console.log(round);
	schedule = schedule.map((item, index) => [...item, round[index]]);
}

console.log(schedule);
