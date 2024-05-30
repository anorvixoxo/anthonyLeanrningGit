import {test} from "playwright/test"

test('first test', async({page}) => {
    page.goto('test.com')
})