const puppeteer = require('puppeteer');

async function autoScroll(page) {
	return page.evaluate(() => {
		return new Promise(resolve => {
			//滚动的总高度
			let totalHeight = 0;
			//每次向下滚动的高度 100 px
			const distance = 100;
			let timer = setInterval(() => {
				//页面的高度 包含滚动高度
				var scrollHeight = document.body.scrollHeight;
				//滚动条向下滚动 distance
				window.scrollBy(0, distance);
				totalHeight += distance;
				//当滚动的总高度 大于 页面高度 说明滚到底了。也就是说到滚动条滚到底时，以上还会继续累加，直到超过页面高度
				if (totalHeight >= scrollHeight) {
					clearInterval(timer);
					resolve(null);
				}
			}, 100);
		});
	});
}

module.exports = async function screenshot(pageUrl) {
	const browser = await puppeteer.launch({
		headless: true,
	});

	const page = await browser.newPage();

	await page.goto(pageUrl);

	await page.waitForNetworkIdle();

	await autoScroll(page);

	const buffer = await page.screenshot({
		fullPage: true,
	});

	await browser.close();

	console.log(buffer);

	return buffer;
};
