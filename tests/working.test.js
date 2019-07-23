import os from "os"

describe("tests", () => {
  it("works!", () => {
    expect(os.tmpdir()).toBeDefined()
  })
})
