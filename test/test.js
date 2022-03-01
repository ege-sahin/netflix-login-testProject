const { Builder, By, Key, until } = require("selenium-webdriver");
require("chromedriver");

var driver

async function succesfulLogin() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");

    await driver.findElement(By.name("email")).sendKeys("johndoe@mail.com");
    await driver.findElement(By.name("password")).sendKeys("123456789");
    await driver.findElement(By.id("signin-btn")).click();

    await driver.sleep(5000);
    await driver.quit();
}

async function unsuccesfulLogin() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");

    await driver.findElement(By.name("email")).sendKeys("johndoemail.com");
    await driver.findElement(By.name("password")).sendKeys("123456789");
    await driver.findElement(By.id("signin-btn")).click();

    await driver.sleep(5000);
    await driver.quit();
}

async function succesfulLoginFirefox() {
    driver = await new Builder().forBrowser("firefox").build();

    await driver.get(__dirname + "/../index.html");
    await driver.findElement(By.name("email")).sendKeys("johndoe@mail.com");
    await driver.findElement(By.name("password")).sendKeys("123456789");
    await driver.findElement(By.id("signin-btn")).click();

    await driver.sleep(5000);
    await driver.quit();
}

async function facebookLogin() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");
    await driver.findElement(By.id("facebook-btn")).click();   
    
    var parent = await driver.getWindowHandle();
    var windows = await driver.getAllWindowHandles();

    await driver.switchTo().window(windows[1]);

    await driver.findElement(By.id("email")).sendKeys("helena438@gmail.com");
    await driver.findElement(By.id("pass")).sendKeys("nekroz453");
    await driver.findElement(By.id("loginbutton")).click();

    await driver.sleep(8000);

    driver.close();
    driver.switchTo().window(parent);
    await driver.sleep(2000);
    await driver.quit();
}

async function unsuccesfulfacebookLogin() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");
    await driver.findElement(By.id("facebook-btn")).click();   
    
    var parent = await driver.getWindowHandle();
    var windows = await driver.getAllWindowHandles();

    await driver.switchTo().window(windows[1]);

    await driver.findElement(By.id("email")).sendKeys("johndoe@mail.com");
    await driver.findElement(By.id("pass")).sendKeys("123456789");
    await driver.findElement(By.id("loginbutton")).click();

    await driver.sleep(15000);

    driver.close();
    driver.switchTo().window(parent);
    await driver.sleep(2000);
    await driver.quit();
}

async function multipleFacebookButtonClick() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");
    await driver.findElement(By.id("facebook-btn")).click();
    await driver.findElement(By.id("facebook-btn")).click();
    await driver.findElement(By.id("facebook-btn")).click();
    await driver.findElement(By.id("facebook-btn")).click();
}

async function rememberMe() {
    driver = await new Builder().forBrowser("chrome").build();

    await driver.get(__dirname + "/../index.html");

    await driver.findElement(By.name("email")).sendKeys("johndoe@mail.com");
    await driver.findElement(By.name("password")).sendKeys("123456789");

    await driver.findElement(By.id("rememberMe")).click();

    await driver.sleep(1000);

    await driver.findElement(By.id("signin-btn")).click();

    await driver.sleep(1000);

    await driver.findElement(By.id("signout-btn")).click();
    
    await driver.sleep(2000);
    await driver.quit();
}



//succesfulLogin();
//rememberMe();
//facebookLogin();
//succesfulLoginFirefox();
//multipleFacebookButtonClick()
//unsuccesfulLogin();
//unsuccesfulfacebookLogin();