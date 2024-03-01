import { Slug } from "./slug";

test("it should be able to create a new from text", () => {
  const slug = Slug.createFromText("A new slug");

  expect(slug.value).toEqual("a-new-slug");
});
