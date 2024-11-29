const Katanasj150 = require("../models/katana-sj150")


 const fetchKatanasj150s = async (req, res) => {
    try {
        const katanasj150 = await Katanasj150.find();
        res.json({ katanasj150 });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
};

const fetchKatanasj150 = async (req, res) => {
    //Get id off the url
    const katanasj150Id = req.params.id

    //Find the note using the id
    const katanasj150 = await Katanasj150.findById(katanasj150Id);

    //Respond with the note
    res.json({katanasj150 : katanasj150})
};

const createKatanasj150 = async (req, res) => {
    // Get the sent in Data of request
    const {model, cuttingArea, Kerf, abrasiveRate, powerRequirement} = req.body


    // Create a note with it
    const katanasj150 = await Katanasj150.create({
        model,
        cuttingArea,
        Kerf,
        abrasiveRate,
        powerRequirement,
    })

    // Respond with the new note
    res.json({katanasj150 : katanasj150})
};

const updateKatanasj150 = async (req, res) => {
    //Get the id of the url
    const katanasj150Id = req.params.id

    //Get the data of the request body
    const {model, cuttingArea, Kerf, abrasiveRate, powerRequirement} = req.body


    //Find and update the record
    await Katanasj150.findByIdAndUpdate(katanasj150Id, {
      model,
      cuttingArea,
      Kerf,
      abrasiveRate,
      powerRequirement,
    })

    //Find the updatted note
    const katanasj150 = await Katanasj150.findById(katanasj150Id);

    //Respond with it
    res.json({katanasj150 : katanasj150})
};

const deleteKatanasj150 = async (req, res) => {
    //     //Get id of the url
    const katanasj150Id = req.params.id;
 
    // Delete the record by _id
    await Katanasj150.deleteOne({ _id: katanasj150Id });

     //Respond
    res.json({ success: "Record deleted" });

};


module.exports = {
    fetchKatanasj150s,
    fetchKatanasj150,
    createKatanasj150,
    updateKatanasj150,
    deleteKatanasj150,

}