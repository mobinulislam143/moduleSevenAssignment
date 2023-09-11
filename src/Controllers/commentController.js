exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Create Data in comment Controller"})
 };

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "Read Data in comment Controller"})
 };

exports.delete = async (req, res) => { 
     res.status(200).json({status:"success", data: "Delete Data in comment Controller"})
};

exports.update = async (req, res) => {
     res.status(200).json({status:"success", data: "Update Data in comment Controller"})
 };