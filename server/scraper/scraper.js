import puppeteer from "puppeteer";
import fs from "fs";
import savedData from "./data.json" assert { type: "json" };

const saveData = (obj) => {
    fs.writeFile('./scraper/data.json', JSON.stringify(obj, null, 4), 'utf-8', (err) => {
        console.log(`${err}`);
    })
}

const getData = async (data, allTariffs) => {
    let id = 0;
    for (const element of allTariffs) {
        const wrapperDesc = await element.$('.card-description');
        const wrapperFirstMonth = await element.$('.badge-text');
        const wrapperBenefits = await element.$('.features');

        const name = await element.$('.card-title__link').then(async (item) => {
            return await item.evaluate(el => el.textContent);
        })
        const description = await wrapperDesc?.getProperty('innerText').then(async (item) => {
            if (item) return await item.jsonValue();
            else return null
        })
        const price = parseInt(await element.$('.price-text').then(async (item) => {
            return await item.evaluate(el => el.textContent).then(item => item.replace(' ', ''))
        })) || null
        const salePrice = parseInt(await element.$('.price-sale').then(async (item) => {
            return await item?.evaluate(el => el.textContent).then(item => item.replace(' ', ''))
        })) || null
        const isFirstMonth = wrapperFirstMonth ? true : false
        const allBenefits = (await wrapperBenefits?.getProperty('innerText').then(async (item) => {
            if (item) return await item.jsonValue();
            else return null
        })).split('\n')

        const benefits = {}
        for (const benefit of allBenefits) {
            if (benefit.includes('ГБ')) benefits['internet'] = benefit;
            else if (benefit.includes('ТВ')) benefits['tv'] = benefit;
            else if (benefit.includes('минут')) benefits['mobile'] = benefit;
            else benefits['wifi'] = benefit
        }

        const otherBenefits = await element.$('.benefits-description').then(async item =>
            await item?.evaluate(el => el.textContent)) || null
        const priceAnnotation = await element.$('.price-annotation').then(async item =>
            await item?.evaluate(el => el.textContent)) || null;

        data.tariffs.push({
            id,
            name,
            description,
            price,
            salePrice,
            priceAnnotation,
            isFirstMonth,
            benefits,
            otherBenefits
        })
        id++;
    }
    return data
}

const main = async () => {
    const obj = {
        tariffs: []
    };
    const browser = await puppeteer.launch();

    try {
        const page = await browser.newPage();
        await page.goto("https://moskva.mts.ru/personal/mobilnaya-svyaz/tarifi/vse-tarifi/mobile-tv-inet", {
            waitUntil: 'networkidle2'
        });

        // Find block with button "Show more" and wait for it
        await page.waitForSelector('.tariffs-more-btn')
        while (await page.$('.tariffs-more-btn')) { //While block with button "Show more" exists
            await page.$('.tariffs-more-btn').then(async (element) => {
                let btn = await element.$('.btn');
                await btn.click();
            })
        }

        const allTariffs = await page.$$('mts-tariff-card');
        await getData(obj, allTariffs).then((res) => {
            saveData(res);
        })
    } catch (error) {
        console.error(`Error: ${error}`);
        browser?.close();
    } finally {
        browser?.close();
    }
}

export const scraperController = {
    getData: () => savedData,
    updateData: async () => await main()
}