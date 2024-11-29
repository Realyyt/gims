const Katanasj700 = require("../models/katana-sj700")



 const fetchKatanasj700s = async (req, res) => {
    try {
        const katanasj700 = await Katanasj700.find();
        res.json({ katanasj700 });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
};

const fetchKatanasj700 = async (req, res) => {
    //Get id off the url
    const katanasj700Id = req.params.id

    //Find the note using the id
    const katanasj700 = await Katanasj700.findById(katanasj700Id);

    //Respond with the note
    res.json({katanasj700 : katanasj700})
};

const createKatanasj700 = async (req, res) => {
    // Get the sent in Data of request
    const {model, cuttingArea, Kerf, abrasiveRate, powerRequirement} = req.body


    // Create a note with it
    const katanasj700 = await Katanasj700.create({
        model,
        cuttingArea,
        Kerf,
        abrasiveRate,
        powerRequirement,
    })

    // Respond with the new note
    res.json({katanasj700 : katanasj700})
};

const updateKatanasj700 = async (req, res) => {
    //Get the id of the url
    const katanasj700Id = req.params.id

    //Get the data of the request body
    const {model, cuttingArea, Kerf, abrasiveRate, powerRequirement} = req.body


    //Find and update the record
    await Katanasj700.findByIdAndUpdate(katanasj700Id, {
      model,
      cuttingArea,
      Kerf,
      abrasiveRate,
      powerRequirement,
    })

    //Find the updatted note
    const katanasj700 = await Katanasj700.findById(katanasj700Id);

    //Respond with it
    res.json({katanasj700 : katanasj700})
};

const deleteKatanasj700 = async (req, res) => {
    //     //Get id of the url
    const katanasj700Id = req.params.id;
 
    // Delete the record by _id
    await Katanasj700.deleteOne({ _id: katanasj700Id });

     //Respond
    res.json({ success: "Record deleted" });

};


module.exports = {
    fetchKatanasj700s,
    fetchKatanasj700,
    createKatanasj700,
    updateKatanasj700,
    deleteKatanasj700,

}