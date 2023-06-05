const recipe = {
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Recipe Name',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'ingredients',
        title: 'Ingredients',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'ingredient',
                title: 'Ingredient',
                type: 'reference',
                to: [{ type: 'ingredient' }],
              },
              {
                name: 'amount',
                title: 'Amount',
                type: 'number',
              },
              {
                name: 'fraction',
                title: 'Fraction',
                type: 'string',
                options: {
                  list: ['1/2', '1/3', '1/4', '2/3', '3/4', ''],
                },
              },
              {
                name: 'unit',
                title: 'Unit',
                type: 'string',
                options: {
                  list: [
                    'cup',
                    'ounce',
                    'tsp',
                    'tbsp',
                    'quart',
                    'pint',
                    'gallon',
                    'lb',
                    'gram',
                    'kg',
                    'ml',
                    'l',
                  ],
                },
              },
            ],
          },
        ],
      },
      {
        name: 'instructions',
        title: 'Instructions',
        type: 'array',
        of: [{ type: 'block' }],
      },
    ],
  };
  
  export default recipe;