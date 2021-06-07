module.exports = {
    createAcc(req, res) {
        res.render('createAccessory', {
            title: 'Create New Accessory'
        });
    },
    async postAcc(req, res) {
        const acc = {
            name: req.body.name,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        };
        await req.storage.createAcc(acc);
        res.redirect('/');
    }
}