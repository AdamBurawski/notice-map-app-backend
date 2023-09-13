import { AdRecord } from "./ad.record";

test("AdRecord returns data from database for one entry", async () => {
  const ad = await AdRecord.getOne("713de3b0-5243-11ee-8239-411ac072fd9c");

  console.log(ad);

  expect(ad).toBeDefined();
  expect(ad.id).toBe("713de3b0-5243-11ee-8239-411ac072fd9c");
  expect(ad.name).toBe("Testowa");
});

test("AdRecord returns null from databse for unexisting entry", async () => {
  const ad = await AdRecord.getOne("---");

  expect(ad).toBeNull();
});
