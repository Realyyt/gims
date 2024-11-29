const Katanasj450 = require("../models/katana-sj450")



 const fetchKatanasj450s = async (req, res) => {
    try {
        const katanasj450 = await Katanasj450.find();
        res.json({ katanasj450 });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
};

const fetchKatanasj450 = async (req, res) => {
    //Get id off the url
    const katanasj450Id = req.params.id

    //Find the note using the id
    const katanasj450 = await Katanasj150.findById(katanasj450Id);

    //Respond with the note
    res.json({katanasj450})
};

const createKatanasj450 = async (req, res) => {
    // Get the sent in Data of request
    const {model, cuttingArea, Kerf, abrasiveRate, powerRequirement} = req.body


    // Create a note with it
    const katanasj450 = await Katanasj450.create({
        model,
        cuttingArea,
        Kerf,
        abrasiveRate,
        powerRequirement,
    })

    // Respond with the new note
    res.json({katanasj450})
};

const updateKatanasj450 = async (req, res) => {
    //Get the id of the url
    const katanasj450Id = req.params.id

    //Get the data of the request body
    const {model, cuttingArea, Kerf, abrasiveRate, powerRequirement} = req.body


    //Find and update the record
    await katanasj450.findByIdAndUpdate(katanasj450Id, {
      model,
      cuttingArea,
      Kerf,
      abrasiveRate,
      powerRequirement,
    })

    //Find the updatted note
    const katanasj450 = await Katanasj450.findById(katanasj450Id);

    //Respond with it
    res.json({katanasj450})
};

const deleteKatanasj450 = async (req, res) => {
    //     //Get id of the url
    const katanasj450Id = req.params.id;
 
    // Delete the record by _id
    await Katanasj450.deleteOne({ _id: katanasj450Id });

     //Respond
    res.json({ success: "Record deleted" });

};


module.exports = {
    fetchKatanasj450s,
    fetchKatanasj450,
    createKatanasj450,
    updateKatanasj450,
    deleteKatanasj450,

}