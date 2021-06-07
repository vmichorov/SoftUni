module.exports = {
    home: async (req, res) => {
        const cubes = await req.storage.getAllEntries(req.query);
        const ctx = {
            title: 'Cubicle',
            cubes,
            search: req.query.search || '',
            from: req.query.from || '',
            to: req.query.to || ''
        }
        res.render('index', ctx);
    }
};