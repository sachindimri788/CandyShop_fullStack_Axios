const Shop = require("../models/shopModel");

exports.getAllCandy = async (req, res) => {
    try {
        const shop = await Shop.findAll();
        res.json(shop);
    }
    catch (e) {

        return res.status(500).json({ message: "failed" })
    }
};

exports.addCandy = async (req, res) => {
    try {
        const { name, description, price, quantity } = req.body;
        await Shop.create({
            name, description, price, quantity
        })
        return res.json({ message: "success" })
    }
    catch (e) {
        return res.status(500).json({ message: "failed" })
    }
}
exports.candyQuantity = async (req, res) => {
    try {
        const id = req.params.id;

        const data = await Shop.findOne({ where: { id } });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: "error" })
    }
}

exports.deleteCandy = async (req, res) => {
    try {
        const id = req.params.id;
        const candy = await Shop.findOne({ where: { id } });
        await candy.destroy();
        return res.status(200).json({ message: "success" })

    } catch (error) {
        return res.status(500).json({ message: "error" })
    }
}
exports.updateCandyQuantity = async (req, res) => {
    try {
        const id = req.params.id;
        const { n } = req.body;
        const candy = await Shop.findOne({ where: { id } });
        candy.quantity = Number(candy.quantity) - Number(n);
        await candy.save();
        return res.status(200).json({ message: "success" })

    } catch (error) {
        return res.status(500).json({ message: "error" })
    }
}