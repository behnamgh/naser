import {ExpressApplication} from "@tsed/common";
import {TestContext} from "@tsed/testing";
import {expect} from "chai";
import * as SuperTest from "supertest";
import {Server} from "../../../../src/Server";

describe("Pages", () => {
  let request: SuperTest.SuperTest<SuperTest.Test>;
  // bootstrap your expressApplication in first
  before(TestContext.bootstrap(Server));
  before(TestContext.inject([ExpressApplication], (expressApplication: ExpressApplication) => {
    request = SuperTest(expressApplication);
  }));
  after(TestContext.reset);

  // then run your test
  describe("GET /rest/page", () => {
    it("should return all pages", async () => {
      const response = await request.get("/rest/page").expect(200);
      expect(response.body).to.be.an("array");
    });
  });
});
