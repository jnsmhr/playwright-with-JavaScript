# 🎭 Playwright Automation Framework

A robust and scalable test automation framework built with Playwright, following industry best practices and Page Object Model design pattern.

## 🚀 Features

- **Cross-browser Testing**: Support for Chromium, Firefox, and WebKit
- **Parallel Execution**: Run tests across multiple browsers simultaneously
- **Visual Testing**: Screenshot comparisons for UI validation
- **Mobile Emulation**: Test responsive designs with mobile viewports
- **Auto-waiting**: Built-in smart waiting for elements and network requests
- **Trace Viewer**: Debug tests with detailed execution traces

## 📁 Project Structure

playwright-with-JavaScript/
├── tests/                 # Test specifications
│   └── login.spec.js
├── pageObjects/           # Page object classes
│   └── LoginPage.js
├── fixtures/              # Test data and constants
│   └── userData.js
├── utils/                 # Helper functions and utilities
│   └── helpers.js
├── reports/               # Test reports and screenshots
├── playwright.config.js   # Playwright configuration
└── package.json          # Project dependencies

## 🛠️ Installation

1. **Clone the repository**
   git clone https://github.com/your-username/playwright-with-JavaScript.git
   cd playwright-with-JavaScript

2. **Install dependencies**
   npm install

3. **Install Playwright browsers**
   npx playwright install

## 🎯 Running Tests

### Run all tests
npx playwright test

### Run tests in headed mode
npx playwright test --headed

### Run specific test file
npx playwright test tests/login.spec.js

### Run tests in specific browser
npx playwright test --project=chromium

### Run tests in parallel
npx playwright test --workers=4

### Run tests with trace
npx playwright test --trace on

## 📊 Generating Reports

### HTML Report
npx playwright show-report

### CI-Friendly Report
npx playwright test --reporter=html

## 🏗️ Writing Tests

### Basic Test Structure
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');

test('Successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('username', 'password');
  await expect(page).toHaveURL(/dashboard/);
});

### Page Object Example
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.submitButton = '#submit';
  }

  async goto() {
    await this.page.goto('https://example.com/login');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.submitButton);
  }
}

## ⚙️ Configuration

Key settings in playwright.config.js:

module.exports = {
  timeout: 30000,          // Global timeout
  retries: 2,              // Retry failed tests
  reporter: 'html',        // Report format
  use: {
    headless: true,        // Run in headless mode
    viewport: { width: 1280, height: 720 },
    screenshot: 'on',      // Take screenshots on failure
    trace: 'on',           // Record execution trace
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    }
  ]
};

## 🧪 Test Data Management

Store test data in fixtures/userData.js:

module.exports = {
  validUser: {
    username: 'testuser',
    password: 'securepassword123'
  },
  invalidUsers: {
    wrongPassword: {
      username: 'testuser',
      password: 'wrongpassword'
    },
    emptyCredentials: {
      username: '',
      password: ''
    }
  }
};

## 🔧 Debugging Tests

### Run in Debug Mode
npx playwright test --debug

### Generate Trace Files
npx playwright show-trace trace.zip

### Pause Execution
await page.pause(); // Add to your test code

## 📈 CI/CD Integration

### GitHub Actions Example (.github/workflows/playwright.yml)
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm install
    - run: npx playwright install
    - run: npx playwright test
    - uses: actions/upload-artifact@v2
      if: always()
      with:
        name: playwright-report
        path: playwright-report/

## 🤝 Best Practices

1. **Use Page Object Model** for maintainable code
2. **Implement soft assertions** for better test reporting
3. **Use data-test attributes** for stable selectors
4. **Write atomic tests** - each test should be independent
5. **Implement retry logic** for flaky tests
6. **Use accessibility selectors** when possible

## 🐛 Troubleshooting

### Common Issues:

1. **Element not found**: Use page.waitForSelector() or check selectors
2. **Timeout errors**: Increase timeout in config or use explicit waits
3. **Browser won't launch**: Run npx playwright install
4. **Tests are flaky**: Implement retries or improve selectors

### Get Help:
- Check Playwright Documentation: https://playwright.dev/docs/intro
- View generated reports: npx playwright show-report
- Examine traces: npx playwright show-trace trace.zip

## 📄 License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## 👥 Contributors

- Jenish Maharjan

---

Happy Testing! 🎭✨
