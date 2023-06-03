const basic = {
    
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Recipe Name',
            type: 'string',
        },{
            name: 'description',
            title: 'Description',
            type: 'text',
        }, 
        {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'reference',
            to: [{type: 'ingredient'}],
        },
    ]};

export default basic;