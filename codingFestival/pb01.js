function test() {
    const rl = ["12:00 ~ 23:59", "11:00 ~ 18:00", "14:00 ~ 20:00"];
    let result = -1;
	let maxStartTime = '00:00';
    let minEndTime = '23:59';
    rl.forEach(line => {
        let temp = line.split("~");
        let startTime = temp[0].trim().replace('~', '');
		let endTime = temp[1].trim().replace('~', '');
		if(maxStartTime < startTime) maxStartTime = startTime;
		if(minEndTime > endTime) minEndTime = endTime;
    })
	
    if(maxStartTime <= minEndTime)
        result = maxStartTime + " ~ " + minEndTime;
	console.log(result);
}
test();