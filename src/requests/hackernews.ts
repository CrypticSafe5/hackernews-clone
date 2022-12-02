const url = 'https://hacker-news.firebaseio.com';

export async function getItem(id: number, retryCount = 0): Promise<HackerNews.Item> {
	try {
		const request = await fetch(url + `/v0/item/${id}`);
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getItem(id, retryCount + 1);
	}
}

export async function getUser(id: string, retryCount = 0): Promise<HackerNews.User> {
	try {
		const request = await fetch(url + `/v0/user/${id}`);
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getUser(id, retryCount + 1);
	}
}

export async function getMaxItem(retryCount = 0): Promise<number[]> {
	try {
		const request = await fetch(url + '/v0/maxitem');
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getMaxItem(retryCount + 1);
	}
}

export async function getTopList(retryCount = 0): Promise<number[]> {
	try {
		const request = await fetch(url + '/v0/topstories');
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getTopList(retryCount + 1);
	}
}

export async function getNewList(retryCount = 0): Promise<number[]> {
	try {
		const request = await fetch(url + '/v0/newstories');
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getNewList(retryCount + 1);
	}
}

export async function getBestList(retryCount = 0): Promise<number[]> {
	try {
		const request = await fetch(url + '/v0/beststories');
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getBestList(retryCount + 1);
	}
}

export async function getAskList(retryCount = 0): Promise<number[]> {
	try {
		const request = await fetch(url + '/v0/askstories');
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getAskList(retryCount + 1);
	}
}

export async function getShowList(retryCount = 0): Promise<number[]> {
	try {
		const request = await fetch(url + '/v0/showstories');
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getShowList(retryCount + 1);
	}
}

export async function getJobList(retryCount = 0): Promise<number[]> {
	try {
		const request = await fetch(url + '/v0/jobstories');
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getJobList(retryCount + 1);
	}
}

export async function getUpdates(retryCount = 0): Promise<{ items: number[]; profiles: string[] }> {
	try {
		const request = await fetch(url + '/v0/updates');
		return request.json();
	} catch (err) {
		console.error(err);
		if (retryCount > 3) throw Error('REQUEST_FAILURE');
		return getUpdates(retryCount + 1);
	}
}
