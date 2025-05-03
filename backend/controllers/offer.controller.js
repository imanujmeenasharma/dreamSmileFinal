const offerModel = require("../models/offers.model");

module.exports.getOffers = async (req, res, next) => {
    try {
        const data = await offerModel.find();
        res.status(200).send(data);
    } catch (error) {
        next(error);
    }
};

module.exports.createOffers = async (req, res, next) => {
    try {
        const { offer_name, description, start_date, end_date, pricing, discount } = req.body;
        const createdData = await offerModel.create({
            offer_name,
            description,
            start_date,
            end_date,
            pricing,
            discount
        });
        res.status(201).send(createdData);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteOffers = async (req, res, next) => {
    try {
        const { offerId } = req.body;
        const deletedData = await offerModel.findOneAndDelete({ _id: offerId });
        if (!deletedData) {
            return res.status(404).send({ message: "Offer not found" });
        }
        res.status(200).send({ message: "Offer deleted successfully", data: deletedData });
    } catch (error) {
        next(error);
    }
}

module.exports.updateOffers = async (req, res, next) => {
    try {
        const { offerId, offer_name, description, start_date, end_date, pricing, discount } = req.body;
        const updatedData = await offerModel.findOneAndUpdate(
            { _id: offerId },
            {
                offer_name,
                description,
                start_date,
                end_date,
                pricing,
                discount
            },
            { new: true }
        );
        if (!updatedData) {
            return res.status(404).send({ message: "Offer not found" });
        }
        res.status(200).send(updatedData);
    } catch (error) {
        next(error);
    }
}