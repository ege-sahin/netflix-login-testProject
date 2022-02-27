const { Builder, By, Key, util } = require("selenium-webdriver");
require("chromedriver");

async function example() {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get(
    "file:///C:/Users/User/Desktop/GithubFiles/GitHub/netflix-login-clone/index.html"
  );
  await driver.findElement(By.name("email")).sendKeys("johndoe@mail.com");
  await driver.findElement(By.name("password")).sendKeys("123456789");
  await driver.findElement(By.id("signin-btn")).click();
}
example();