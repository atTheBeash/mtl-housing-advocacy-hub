"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}




// // Step can be:
    // apartment_search
    // lease_signing
    // assessment_tool
    // moving_out
const getSteps = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const { step } = req.params;
    try {
        await client.connect();
        const db = client.db('mtl_housing_hub');
        const result = await db.collection("steps").findOne({ step });
        console.log(result);
        result 
            ? res.status(200).json({ status: 200, data: result, message: 'Data Found' })
            : res.status(404).json({ status: 404, data: step, message: "Not Found"});
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: req.params,
            message: err.message,
        })
    } finally {
        client.close();
    }
};

// TAGS can be: 
    //  "low_income"
    //  "concordia"
    //  "ndg" + other boroughs
// CATEGORIES can be: 
    //  "legal"
    //  "housing_advocacy"
const getAccessmentResources = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    let categories = req.query.categories;
    let tagInclusions = req.query.tag_inclusions;
    if (!categories || !tagInclusions) {
        return res.status(404).json({ status: 404, data: req.query, message: "Query names missing."})
    }
    categories
        ? categories = categories.split(',')
        :categories = [];
    tagInclusions
        ? tagInclusions = tagInclusions.split(',')
        :tagInclusions = [];
    try {
        
        await client.connect();
        const db = client.db('mtl_housing_hub');
        const result = await db.collection("resources").find({
            "category": { "$in": categories},
            "tag_inclusion": { "$in": tagInclusions }
        }).toArray();
        console.log(result);
        result 
            ? res.status(200).json({ status: 200, data: result, message: 'Data Found' })
            : res.status(404).json({ status: 404, data: step, message: "Not Found"});
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: req.params,
            message: err.message,
        })
    } finally {
        client.close();
    }
};

// ISSUE TYPES can be: 
    // 'maintenance_repairs'
    // 'feeling_unsafe'
    // 'formal_notices'
const getAccessmentActions = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const { issue } = req.params;
    try {
        await client.connect();
        const db = client.db('mtl_housing_hub');
        const result = await db.collection("action_steps").findOne({ issue });
        // const result = await db.collection("action-steps").find().toArray();
        console.log(result);
        result 
            ? res.status(200).json({ status: 200, data: result, message: 'Data Found' })
            : res.status(404).json({ status: 404, data: issue, message: "Not Found"});
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: req.params,
            message: err.message,
        })
    } finally {
        client.close();
    }
    // let issueType = req.query.issue_type;
    // if (!issueType) {
    //     return res.status(404).json({ status: 404, data: req.query, message: "Query names missing."})
    // }
    // issueType
    //     ? issueType = issueType.split(',')
    //     :issueType = [];
    // issueType = issueType[0];
    // try {
        
    //     await client.connect();
    //     const db = client.db('mtl_housing_hub');
    //     const result = await db.collection("resources").find({
    //         "issue": { "$in": issueType}
    //     }).toArray();
    //     console.log(result);
    //     result 
    //         ? res.status(200).json({ status: 200, data: result, message: 'Data Found' })
    //         : res.status(404).json({ status: 404, data: step, message: "Not Found"});
    // } catch (err) {
    //     res.status(500).json({
    //         status: 500,
    //         data: req.params,
    //         message: err.message,
    //     })
    // } finally {
    //     client.close();
    // }
};

module.exports = {
    getSteps,
    getAccessmentResources,
    getAccessmentActions
};