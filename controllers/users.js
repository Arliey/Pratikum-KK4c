const User = require('../models/User')

module.exports = {
    index: async (req, res) => {
        try {
            const users = await User.find()
            res.status(200).json({
                status: true,
                data: users,
                method: req.method,
                url: req.url
            })
        } catch (error) {
            res.status(404).json({
                success: false,
                message: 'nothing here lol you got zonk'
            })
        }
      },

      show: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil ditemukan"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Data tidak berhasil ditemukan"
            })
        }
      },

      store: async (req, res) => {
        try {
            const user = await User.create(req.body)
            res.status(200).json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
                message: "Data berhasil di tambahkan"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Data tidak berhasil ditambahkan"
            })
        }
        
      },

      update: async (req, res) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true            
            })
            res.json({
                status: true,
                data: user,
                method: req.method,
                url: req.url,
            message: "Data berhasil di update"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Data tidak berhasil diubah"
            })
        }
      },

      delete: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json({
                status: true,
                data: User,
                method: req.method,
                url: req.url,
                message: "Data berhasil di hapus"
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Data tidak berhasil dihapus"
            })
        }
      },

}