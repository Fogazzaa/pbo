module.exports = class controleNumber {
  // cadastro de professor
  static async postNumber(req, res) {
    const { numero } = req.body;
    if (numero) {
      res.status(400).json({ message: "vamo" });
    } else {
      res.status(200).json({ message: "merda"});
    }
  }
};
