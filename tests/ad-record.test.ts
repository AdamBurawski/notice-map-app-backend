import { AdRecord } from "../record/ad.record";

const defaultObj = {
  name: "Test Name",
  description: "xyz",
  url: "https://megak.pl",
  price: 0,
  lat: 9,
  lon: 9,
};

test("Can build AdRecord", () => {
  const ad = new AdRecord(defaultObj);

  expect(ad.name).toBe("Test Name");
  expect(ad.description).toBe("xyz");
});

test("Validates invalid price", () => {
  expect(
    () =>
      new AdRecord({
        ...defaultObj,
        price: -3,
      })
  ).toThrow("Cena nie może być mniejsza niż 0 lub wieksza niż 9 999 999");
});
