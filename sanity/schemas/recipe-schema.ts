
const recipe = { 
    name: 'recipe',
    title: 'Recipe',
    type: 'document',
    fields: [ {
        name: 'title',
        title: 'Title',
        type: 'string',
}, {
    name: 'slug',
    title: 'Slug',
    type: 'slug', 
    options: {source: 'name'}
}, {
    name: 'author',
    title: 'Author',
    type: 'string',
},{

}],
};

export default recipe;