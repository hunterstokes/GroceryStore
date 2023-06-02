import { title } from "process";
import recipe from "./recipe-schema";

const kitchentable = {
  name: "kitchenpost",
  title: "Kitchen Table Post",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "name" } },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    }, {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{type: 'block'}]
    }, {
      name: 'recipe',
      title: 'Recipe',
      type: 'array',
      of: [{
        type: 'object',
        fields: [{
            name: 'recipe',
            title: 'Recipe',
            type: 'reference',
            to: [{ type: 'recipe'}],
        }]
    }]
    }
  ],
};

export default kitchentable;
