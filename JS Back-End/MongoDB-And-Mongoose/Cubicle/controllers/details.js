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
    },
    async attach(req, res) {
        const cube = await req.storage.getEntryById(req.params.id);
        const accessories = await req.storage.getAllAccessories(cube.accessories.map(a => a._id));
        res.render('attach', {
            title: 'Attach Accessories',
            cube,
            accessories
        });
    },
    async postAttach(req, res) {
        const cubeId = req.params.cubeId;
        const accId = req.body.accessory;

        await req.storage.attachAccessory(cubeId, accId);
        res.redirect(`/details/${req.params.cubeId}`);
    }
};