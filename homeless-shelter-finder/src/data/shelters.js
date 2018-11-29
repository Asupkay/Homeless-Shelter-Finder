const mongoCollections = require("../config/mongoCollections"); //temporary file location
const shelters = mongoCollections.shelters;
const uuidv4 = require('uuid/v4');

module.exports ={

    

    createShelter: async function createShelter(name,address,tasks){

        if(!name) throw "You must provide a name";
        if(!address) throw "You must provide an address";
        if(!tasks) throw "You must provide some tasks";

        const shelterCollection = await shelters();

        const newShelter = {
            _id: uuidv4(),
            name:name,
            address:address,
            tasks:tasks
        };

        const newInsertInfo = await shelterCollection.insertOne(newShelter);
        const newId = newInsertInfo.insertedId;
        return await this.getShelterById(newId);

    },

    getShelterById: async function getShelterById(id){
        if(!id) throw "You must provide an ID!!!!!!!!!!";

        const shelterCollection = await shelters();
        const shelter = await shelterCollection.findOne({_id:id});

        if(!shelter) throw "Shelter not found!!!!!";
        return shelter;
    },

    updateShelter: async function updateShelter(id,updatedShelter){

        const shelterCollection = await shelters();

        const updatedShelterData = {};
        if(updatedShelter.name){
            updatedShelterData.name = updatedShelter.name;
        }

        if(updatedShelter.address){
            updatedShelterData.address = updatedShelter.address;
        }
        
        if(updatedShelter.tasks){
            updatedShelterData.tasks = updatedShelter.tasks;
        }

        let updateCommand = {
            $set: updatedShelterData
        };

        const query = {
            _id:id
        };

        await shelterCollection.updateOne(query, updateCommand);

        return await this.getShelterById(id);
    },


    deleteShelter: async function deleteShelter(id){
        const shelterCollection = await shelters();
        const deletionInfo = await shelterCollection.removeOne({_id:id});

        if(deletionInfo.deletedCount === 0 ){
            throw 'Could not delete shelter with id of ${id}';
        }
    },

    addTask: async function addTask(id,taskName,taskSkill,taskDesc){
        const shelter = await this.getShelterById(id);

        const newTask = {
            taskId: uuidv4(),
            taskName:taskName,
            taskSkill:taskSkill,
            taskDesc:taskDesc
        };

        shelter.tasks.push(newTask);

        this.updateShelter(id,shelter);

        return newTask;
    },

    getTasks: async function getTasks(shelterId){
        
        const shelter =  await this.getShelterById(shelterId);
        return shelter.tasks;
    },

    deleteTask: async function deleteTask(shelterId,taskId){
        
        const shelter  = await this.getShelterById(shelterId);


        const deleteTaskIndex = shelter.tasks.indexOf(shelter.tasks.find(x => x.id === taskId));
        
        if (deleteTakeIndex > -1) {
            shelter.tasks.splice(deleteTaskIndex, 1);
          }

        this.updateShelter(shelterId,shelter);



    },

    updateTask: async function updateTask(shelterId,taskId,newTask){

        const shelter = await this.getShelterById(shelterId);

        const updateTaskIndex = shelter.tasks.indexOf(shelter.tasks.find(x => x.id === taskId));

        shelter.tasks[updateTaskIndex] = newTask;

        this.updateShelter(shelterId,shelter);
    }

};

// /api/v1/tasks