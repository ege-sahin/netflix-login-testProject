const { Builder, By, Key, util } = require("selenium-webdriver");
require("chromedriver");

var driver

async function succesfullLogin() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");

    await driver.findElement(By.name("email")).sendKeys("johndoe@mail.com");
    await driver.findElement(By.name("password")).sendKeys("123456789");
    await driver.findElement(By.id("signin-btn")).click();

    setTimeout(closeScreen, 1000);
}


async function facebookLogin() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");
    await driver.findElement(By.id("facebook-btn")).click();

    //setTimeout(closeScreen, 1000);
}

async function needHelpButton() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");
    await driver.findElement(By.id("needHelpLink")).click();
    setTimeout(closeScreen, 1000);
}

async function closeScreen(){
    await driver.quit();
}

//succesfullLogin();
//needHelpButton();
//facebookLogin();

