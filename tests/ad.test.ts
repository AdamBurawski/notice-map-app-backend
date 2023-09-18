import { pool } from "../utlis/db";
import { AdRecord } from "../record/ad.record";
import { AdEntity } from "../types";

const defaultObj = {
  name: "Test Name",
  description: "xyz",
  url: "https://megak.pl",
  price: 0,
  lat: 9,
  lon: 9,
};

afterAll(async () => {
  await pool.end();
});

test("AdRecord.getOne returns data from database for one entry", async () => {
  const ad = await AdRecord.getOne("713de3b0-5243-11ee-8239-411ac072fd9c");

  console.log(ad);

  expect(ad).toBeDefined();
  expect(ad.id).toBe("713de3b0-5243-11ee-8239-411ac072fd9c");
  expect(ad.name).toBe("Testowa");
});

test("AdRecord.getOne returns null from databse for unexisting entry", async () => {
  const ad = await AdRecord.getOne("---");

  expect(ad).toBeNull();
});

test("AdRecord.findAll returns array of found entries.", async () => {
  const ads = await AdRecord.findAll("");

  expect(ads).not.toEqual([]);
  expect(ads[0].id).toBeDefined();
});

test("AdRecord.findAll returns array of found entries where 'a' exists.", async () => {
  const ads = await AdRecord.findAll("a");

  expect(ads).not.toEqual([]);
  expect(ads[0].id).toBeDefined();
});

test("AdRecord.findAll returns empty array when searching for something that does not exist ", async () => {
  const ads = await AdRecord.findAll("-------------------");

  expect(ads).toEqual([]);
});

test("AdRecord.findAll returns small amount of data.", async () => {
  const ads = await AdRecord.findAll("");

  expect((ads[0] as AdEntity).price).toBeUndefined();
  expect((ads[0] as AdEntity).description).toBeUndefined();
});

test("AdRecord.insert returns new UUID.", async () => {
  const ad = new AdRecord(defaultObj);

  await ad.insert();
  expect(ad.id).toBeDefined();
  expect(typeof ad.id).toBe("string");
});

test("AdRecord.insert inserts data to database.", async () => {
  const ad = new AdRecord(defaultObj);

  await ad.insert();

  const foundAd = await AdRecord.getOne(ad.id);
  expect(foundAd).toBeDefined();
  expect(foundAd).not.toBeNull();
  expect(foundAd.id).toBe(ad.id);
});
