const clubList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

let schedule = new Array(clubList.length).fill([]);

for (let i = 0; i < clubList.length - 1; i++) {
	let round = new Array(clubList.length).fill(0);
	let temptList = [...clubList];

	const dequy = temptList => {
		if (temptList.length <= 0) {
			return round;
		}

		let check = temptList
			.slice(1)
			.filter(item => !schedule[temptList[0]].includes(item));


		let a = [...temptList.slice(1, temptList.indexOf(check[0])), ...temptList.slice(temptList.indexOf(check[0]) + 1)]

		let check1 = a
			.slice(1)
			.filter(item => !schedule[a[0]].includes(item));
		if(a.length !== 0 && check1.length === 0) {
			round[temptList[0]] = check[1];
			round[check[1]] = temptList[0];
			temptList.splice(temptList.indexOf(check[1]), 1)
			temptList.splice(0, 1)
			return dequy(temptList)
		}

		round[temptList[0]] = check[0];
		round[check[0]] = temptList[0];

		temptList.splice(temptList.indexOf(check[0]), 1)
		temptList.splice(0, 1)
		return dequy(temptList);
	};

	dequy(temptList);
	console.log(round)
	schedule = schedule.map((item, index) => [...item, round[index]]);
}

console.log(schedule);
