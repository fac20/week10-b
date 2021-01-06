import { fetchHelper } from "./fetch-helper";

const mockResponse = { data: [{ SpeciesRefNo: 168 }] };
global.fetch = jest // any time fetch runs, we're going to replace it with the anonymous func @ line 6
  .fn()
  .mockImplementation(() => {
    return Promise.resolve({
      // promise will resolve into lines 8 + 9
      ok: true,
      json: () => Promise.resolve(mockResponse),
    });
  });

test("Get input and receive a response", () => {
  return fetchHelper("species/132").then((res) => {
    expect(res.data[0].SpeciesRefNo).toEqual(168);
  });
});
