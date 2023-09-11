exports.create = async (req, res) => {
    res.status(200).json({status:"success", data: "Create Data in blog Controller"})
 };

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data: "read Data in blog Controller"})
 };

exports.delete = async (req, res) => { 
     res.status(200).json({status:"success", data: "delete Data in blog Controller"})
};

exports.update = async (req, res) => {
     res.status(200).json({status:"success", data: "Update Data in blog Controller"})
 };