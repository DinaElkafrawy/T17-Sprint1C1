var mongoose = require('mongoose'),
    moment = require('moment'),
    Validations = require('../utils/Validations'),
    Dina = mongoose.model('Dina');

module.exports.getDina = function(req, res, next) {
    if (!Validations.isObjectId(req.params.productId)) {
        return res.status(422).json({
            err: null,
            msg: 'productId parameter must be a valid ObjectId.',
            data: null
        });
    }
    Dina.findById(req.params.productId).exec(function(err, dina) {
        if (err) {
            return next(err);
        }
        if (!dina) {
            return res
                .status(404)
                .json({ err: null, msg: 'Product not found.', data: null });
        }
        res.status(200).json({
            err: null,
            msg: 'Product retrieved successfully.',
            data: dina
        });
    });
};

module.exports.getDina = function(req, res, next) {
    Dina.find({}).exec(function(err, dina) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            err: null,
            msg: 'Products retrieved successfully.',
            data: dina
        });
    });
};

module.exports.getDinaBelowPrice = function(req, res, next) {
    if (!Validations.isNumber(req.params.price)) {
        return res.status(422).json({
            err: null,
            msg: 'price parameter must be a valid number.',
            data: null
        });
    }
    Dina.find({
        price: {
            $lt: req.params.price
        }
    }).exec(function(err, dina) {
        if (err) {
            return next(err);
        }
        res.status(200).json({
            err: null,
            msg:
            'Products priced below ' +
            req.params.price +
            ' retrieved successfully.',
            data: dina
        });
    });
};

module.exports.createDina = function(req, res, next) {
    var valid =
        req.body.name &&
        Validations.isString(req.body.name) &&
        req.body.price &&
        Validations.isNumber(req.body.price)
    req.body.component &&
    Validations.isString(req.body.component)
    req.body.seller &&
    Validations.isString(req.body.seller);
    if (!valid) {
        return res.status(422).json({
            err: null,
            msg: 'name(String) and price(Number) are required fields.',
            data: null
        });
    }
    // Security Check
    delete req.body.createdAt;
    delete req.body.updatedAt;

    Dina.create(req.body, function(err, dina) {
        if (err) {
            return next(err);
        }
        res.status(201).json({
            err: null,
            msg: 'Product was created successfully.',
            data: dina
        });
    });
};

module.exports.updateDina = function(req, res, next) {
    console.log(req.params);
    if (!Validations.isObjectId(req.params.productId)) {
        return res.status(422).json({
            err: null,
            msg: 'productId parameter must be a valid ObjectId.',
            data: null
        });
    }
    var valid =
        req.body.name &&
        Validations.isString(req.body.name) &&
        req.body.price &&
        Validations.isNumber(req.body.price)
    req.body.component &&
    Validations.isString(req.body.component)
    req.body.seller &&
    Validations.isString(req.body.seller);
    if (!valid) {
        return res.status(422).json({
            err: null,
            msg: 'name(String) and price(Number) are required fields.',
            data: null
        });
    }
    // Security Check
    delete req.body.createdAt;
    req.body.updatedAt = moment().toDate();

    Dina.findByIdAndUpdate(
        req.params.productId,
        {
            $set: req.body
        },
        { new: true }
    ).exec(function(err, updatedDina) {
        if (err) {
            return next(err);
        }
        if (!updatedDina) {
            return res
                .status(404)
                .json({ err: null, msg: 'Product not found.', data: null });
        }
        res.status(200).json({
            err: null,
            msg: 'Product was updated successfully.',
            data: updatedDina
        });
    });
};

module.exports.deleteDina = function(req, res, next) {
    if (!Validations.isObjectId(req.params.productId)) {
        return res.status(422).json({
            err: null,
            msg: 'productId parameter must be a valid ObjectId.',
            data: null
        });
    }
    Dina.findByIdAndRemove(req.params.productId).exec(function(
        err,
        deletedDina
    ) {
        if (err) {
            return next(err);
        }
        if (!deletedDina) {
            return res
                .status(404)
                .json({ err: null, msg: 'Product not found.', data: null });
        }
        res.status(200).json({
            err: null,
            msg: 'Product was deleted successfully.',
            data: deletedDina
        });
    });
};
