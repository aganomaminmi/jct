import puppeteer from 'puppeteer'
import dotenv from 'dotenv'
dotenv.config()

const loginUrl = process.env.LOGIN_URL
const loginUserEmail = process.env.LOGIN_USER_EMAIL
const loginUserPassword = process.env.LOGIN_USER_PASSWORD

if (!loginUrl || !loginUserEmail || !loginUserPassword) {
  throw new Error('Please set environment variables.')
}

let headless = true

if (process.env.NODE_ENV === 'development') {
  headless = false
}

export const runTouch = async () => {
  const browser = await puppeteer.launch({
    headless
  })
  const page = await browser.newPage()

  await page.goto(loginUrl)

  // Set screen size
  await page.setViewport({ width: 1080, height: 1024 })

  // Type into search box
  await page.type('#user_email', loginUserEmail)
  await page.type('#user_password', loginUserPassword)
  await page.click('#login_button')

  // Wait and click on first result
  const pushButtonSelector = '#adit-button-push'
  await page.waitForSelector(pushButtonSelector)
  await page.click(pushButtonSelector)

  await browser.close()
}

