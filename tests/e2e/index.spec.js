const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('https://www.baidu.com/');
        // 查找元素：input name属性wd
        await driver.findElement(By.name('wd')).sendKeys('e2e测试', Key.RETURN);
        await driver.wait(until.titleIs('e2e测试_百度搜索'), 2000);
    } finally {
        await driver.quit();
    }
})();