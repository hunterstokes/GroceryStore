import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({

    projectId: 'r6nc7qm6',
    dataset: 'production',
    title: 'Piedmont Grocery',
    apiVersion: '2023-05-09',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemas}
})

export default config;