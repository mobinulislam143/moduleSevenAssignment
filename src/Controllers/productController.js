exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Create Data in Product Controller"})
 };

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Read Data in Product Controller"})
 };

exports.delete = async (req, res) => { 
     res.status(200).json({status:"success", data: "Delete Data in Product Controller"})
};

exports.update = async (req, res) => {
     res.status(200).json({status:"success", data: "Update Data in Product Controller"})
 };