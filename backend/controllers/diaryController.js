const Diary = require('../models/diaryModel.js')

const writeNote = async(req, res) => {
    try{
        // get content from body
        // check all requried present or not
        // get user
        // create
        // save
        // return

        const author = req.user._id
        if(!author){
            return res.status(400).json({message: "please login"})
        }

        const {title, description} = req.body

        if(!title){
            return res.status(400).json({message: "Please write Title"})
        }
        if(!description){
            return res.status(400).json({message: "Please write description"})
        }
        
        const note = new Diary({
            author,
            title,
            description
        })
        await note.save()
        return res.status(200).json({
            message: "Note saved successfully",
            note
        })
        

    }catch(error){
        console.log('not able to create note', error)
        return res.status(400).json({message: "Blog was not created, try again later"})
    }
}

const updateNote = async(req, res) => {
    // take any input from body
    // take author id from middleware
    // take notes id form params
    // check if any of input is present or not using && 
    // find if diary exist or not with given blodId
    // save temp updates
    // save diary
    // return json
    try{
        const {title, description} = req.body
        const author = req.user._id
        const noteId = req.params.id
        if(!title && !description){
            return res.status(400).json({message: "Please edit something to update"})
        }
        const note = await Diary.findById(noteId)
        if(!note){
            return res.status(400).json({message: "this note does not exist"})
        }

        if (note.author.toString() !== author.toString()) {
            return res
                .status(403)
                .json({ message: "You cannot update this note" });
        }

        if(title) note.title = title
        if(description) note.description = description
        const noteUpdate = await note.save()
        return res.status(200).json({
            message: "note updated successfully",
            noteUpdate
            
        })


    }catch(error){
        console.log("notes not updated", error)
        return res.status(400).json({message: "Notes not updated, Please try again later"})
    }

}

const getNote = async(req, res) => {
    // get user id from middleware
    // check if user exist
    // find note by author
    // check if note exist
    // return json

    try{
        const author = req.user._id
        if(!author){
            return res.status(400).json({message: "user not found, Please login"})
        }

        const notes = await Diary.find({author})
        if(notes.length === 0){
            return res.status(400).json({message: "No notes available, Please start writing"})
        }

        return res.status(200).json({
            message: "found all notes",
            notes
        })
    }catch(error){
        console.log("cant find note", error)
        return res.status(400).json({message: "Can not find Note"})
    }
}

const deleteNote = async(req, res) => {
    // get author from middleware
    // check if author exist
    // get  note id from params
    // check if note Id exist
    // find note with the id
    // check if exist
    // compare loggedin  author with note.author (.toString())
    // delete note
    // return message

    try{
        const author = req.user._id
        const noteId = req.params.id
        if(!author){
            return res.status(400).json({message: "Please Login"})
        }
        if(!noteId){
            return res.status(400).json({message: "Please select note to delete it"})
        }

        const note = await Diary.findById(noteId)
        if(!note){
            return res.status(400).json({message: "This note does not exist"})
        }

        if(note.author.toString() != author.toString()){
            return res.status(400).json({message: "This note does not belong to you"})
        }

        await note.deleteOne()
        return res.status(200).json({
            message: "note deleted successfully"
        })

    }catch(error){
        console.log("not able to delete", error)
        return res.status(400).json({message: "Not able to delete note, Please try again later"})
    }
}


const getNoteById = async (req, res) => {
  try {
    const author = req.user._id;
    const noteId = req.params.id;

    if (!author) {
      return res.status(400).json({ message: "Please login" });
    }

    if (!noteId) {
      return res.status(400).json({ message: "Note ID is required" });
    }

    const note = await Diary.findById(noteId);
    if (!note) {
      return res.status(400).json({ message: "Note not found" });
    }

    if (note.author.toString() !== author.toString()) {
      return res
        .status(400)
        .json({ message: "You are not allowed to view this note" });
    }

    return res.status(200).json({
      message: "Fetched note successfully",
      note,
    });
  } catch (error) {
    console.error("Error fetching note by ID:", error);
    return res.status(500).json({
      message: "Unable to fetch note, please try again later",
    });
  }
};




module.exports = {writeNote, updateNote, getNote, deleteNote, getNoteById}