import Repo from "../Repo";

describe("Repo", () => {
  beforeEach(function() {
    this.bootstrap = new Repo({
      username: "twbs",
      reponame: "bootstrap"
    });
  });

  it("must instantiate with correct attributes", function() {
    expect(this.bootstrap.id).toEqual("twbs/bootstrap");
    expect(this.bootstrap.isFetching).toBe(true);
    expect(this.bootstrap.isHighlighted).toBe(false);
    expect(this.bootstrap.hasError).toBe(false);
    expect(this.bootstrap.data).toBeDefined();
  });

  it("has a #hightlight method() that highlights repo for 1 sec", function() {
    jest.useFakeTimers();
    this.bootstrap.highlight();
    expect(this.bootstrap.isHighlighted).toEqual(true);
    jest.runAllTimers();
    expect(this.bootstrap.isHighlighted).toEqual(false);
  });
});
