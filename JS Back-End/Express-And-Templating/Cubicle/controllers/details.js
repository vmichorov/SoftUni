module.exports = {
    details: async (req, res) => {
        const cube = await req.storage.getEntryById(req.params.id);
        if (cube == undefined) {
            res.redirect('/404');
        } else {
            const ctx = {
                title: 'Cubicle',
                cube
            }
            res.render('details', ctx);
        }
    }
};