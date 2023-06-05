const altSchema = {
    
    name: 'altSchema',
    title: 'Alt Schema',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }, {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        }, {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }, {
            name: 'content',
            title: 'Content',
            type: 'string',
        }, {
            name: 'recipe',
            title: 'Recipe',
            type: 'string',
        }
        , {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [   
                {
                    type: 'string'
                }
            ]
        }, {
            name: 'instructions',
            title: 'Instructions',
            type: 'string',
        }
    ]
}

export default altSchema;