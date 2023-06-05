const altSchema = {
    
    name: 'altSchema',
    title: 'Alternative Recipe Schema',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Post title',
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
            fields: [{
                name: 'amount',
                title: 'Amount',
                type: 'number',
            }, {    
                name: 'fraction',
                title: 'Fraction',
                type: 'string',
                options: {
                    list: ['1/2', '1/3', '1/4', '2/3', '3/4', '']
            }},{
                name: 'unit',
                title: 'Unit',
                type: 'string',
                options: {
                    list: ['cup', 'ounce', 'tsp', 'tbsp','quart', 'pint', 'gallon', 'lb', 'gram', 'kg', 'ml', 'l'],
                }}
            ]
        },
    ]};

export default altSchema;