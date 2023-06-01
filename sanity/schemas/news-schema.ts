const news = { 
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [{
        title: 'Title',
        name: 'title',
        type: 'string',
    },{
        title: 'Date',
        name: 'date',
        type: 'date',
    },{
        title: 'Description',
        name: 'description',
        type: 'array',
        of: [{type: 'block'}]
    }]
}

export default news;
