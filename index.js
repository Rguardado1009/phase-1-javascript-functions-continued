function saturdayFun(string = "roller-skate") {
	return `This Saturday, I want to ${string}!`;
}

saturdayFun();

const mondayWork = function (activity = "go to the office") {
	return `This Monday, I will ` + `${activity}.`;
};
mondayWork();

function wrapAdjective(string = "*") {
	const part1 = "You are";
	return function (string2 = "a hard worker") {
		return `${part1} ${string}${string2}${string}!`;
	};
}

wrapAdjective("||")()("a dedicated programmer");
