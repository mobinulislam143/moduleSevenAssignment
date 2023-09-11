exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Create Data in Portfolio Controller"})
 };

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Read Data in Portfolio Controller"})
 };

exports.delete = async (req, res) => { 
     res.status(200).json({status:"success", data: "Delete Data in Portfolio Controller"})
};

exports.update = async (req, res) => {
     res.status(200).json({status:"success", data: "Update Data in Portfolio Controller"})
 };