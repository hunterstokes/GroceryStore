const recipe = {
    
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
        }, {
            name: 'ingredients',
            title: 'Ingredients',
            type: 'array',
            of: [{
                type: 'object',
                fields: [{
                    name: 'ingredient',
                    title: 'Ingredient',
                    type: 'reference',
                    to: [{type: 'ingredient'}],
        },{
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
                // function() {
                //     if (this.amount > 1) {
                //         return this.list + 's';
                //     }
                // }

        },}
    ],
    preview: {
        select: {
            title: 'ingredient.name',
            name: 'ingredient.name',
            amount: 'amount',
            fraction: 'fraction',
            unit: 'unit',

        }, prepare({
            title,
            name,
            amount,
            fraction = 'No Fraction Set',
            unit = 'No Unit Set',
            
        } : {title?: string, name?: string, amount?: number, fraction?: string, unit?: string}) {
            return {
                title: title,
                name: name,
                subtitle: `${amount} ${fraction} ${unit}`,
            }
        }
    }
        }
    ]},{
        name: 'instructions',
        title: 'Instructions',
        type: 'array',
        of: [{ type: 'block' }]
    }
]
} 
export default recipe;