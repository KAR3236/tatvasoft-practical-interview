const bcrypt = require('bcrypt')
const db = require('../helper/db');
const { generateToken } = require('../helper/auth');
const blogModel = db.blogModel;

module.exports = {
    addBlog: async(req, res) => {
        try {
            const createBlogData = await blogModel.create(req.body);
            if (createBlogData) {
                return res.status(201).json({
                    status: "success",
                    code: 201,
                    message: "Blog added successfully.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                code: 500,
                message: "Please try again.",
            });
        }
    },
    editBlog: async(req, res) => {
        try {
            const [updateBlogData] = await blogModel.update(req.body, {
                where: {
                    id: req.params.id
                }
            });
            if (updateBlogData === 1) {
                return res.status(202).json({
                    status: "success",
                    code: 202,
                    message: "Blog update successfully.",
                });
            } else {
                return res.status(400).json({
                    status: "error",
                    code: 400,
                    message: "Data not found.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                code: 500,
                message: "Please try again.",
            });
        }
    },
    viewBlog: async(req, res) => {
        try {
            const viewBlogData = await blogModel.findOne({
                where: {
                    id: req.params.id
                }
            });
            if (viewBlogData) {
                return res.status(202).json({
                    status: "success",
                    code: 200,
                    message: "Get blog successfully.",
                    data: viewBlogData,
                });
            } else {
                return res.status(400).json({
                    status: "error",
                    code: 400,
                    message: "Data not found.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                code: 500,
                message: "Please try again.",
            });
        }
    },
    listOfBlog: async(req, res) => {
        try {
            const listOfBlogData = await blogModel.findAll();
            if (listOfBlogData) {
                return res.status(202).json({
                    status: "success",
                    code: 200,
                    message: "Get blog list successfully.",
                    data: listOfBlogData,
                });
            } else {
                return res.status(400).json({
                    status: "error",
                    code: 400,
                    message: "Data not found.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                code: 500,
                message: "Please try again.",
            });
        }
    },
    deleteBlog: async(req, res) => {
        try {
            const updateBlogData = await blogModel.destroy({
                where: {
                    id: req.params.id
                }
            });
            if (updateBlogData) {
                return res.status(200).json({
                    status: "success",
                    code: 200,
                    message: "Blog deleted successfully.",
                });
            } else {
                return res.status(400).json({
                    status: "error",
                    code: 400,
                    message: "Data not found.",
                });
            }
        } catch (error) {
            return res.status(500).json({
                status: "error",
                code: 500,
                message: "Please try again.",
            });
        }
    },
}