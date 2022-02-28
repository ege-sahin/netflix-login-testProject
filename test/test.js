const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

var driver

async function succesfulLogin() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");

    await driver.findElement(By.name("email")).sendKeys("johndoe@mail.com");
    await driver.findElement(By.name("password")).sendKeys("123456789");
    await driver.findElement(By.id("signin-btn")).click();

    setTimeout(closeScreen, 1000);
}

async function succesfulLoginFirefox() {
    driver = await new Builder().forBrowser("firefox").build();

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
    
    var parent = await driver.getWindowHandle();
    var windows = await driver.getAllWindowHandles();

    await driver.sleep(2000);

    await driver.switchTo().window(windows[1]);

    await driver.findElement(By.id("email")).sendKeys("abc");

    //driver.close();
    //driver.switchTo().window(parent);
    //setTimeout(closeScreen, 10000);
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


//succesfulLogin();
//needHelpButton();
facebookLogin();
//succesfulLoginFirefox();
