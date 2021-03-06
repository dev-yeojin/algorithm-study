const { test, expect } = require("@jest/globals");
import pb12903 from "./day210306";

test("가운데 글자 가져오기", () => {
    expect(pb12903("abcde")).toBe("c");
})