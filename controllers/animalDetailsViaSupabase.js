import { getAllAnimalData, getAnimalData,getModelData,getEventsData } from "../adapters/supabaseAdapter.js";


export async function getAllAnimalDetails(req, res){
  try {
    const animal = await getAllAnimalData();
    
    for (let i = 0; i < animal.length; i++) {
      const model= await getModelData(animal[i].model_id);
      const events = await getEventsData(animal[i].event_id)
      animal[i].model_id = model[0];
      // animal[i].event_id =events[0];
    }
    res.status(200).json(animal);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}
export async function getAnimalDetails(req, res) {
  try {
    const animal = await getAnimalData(req.params.id);
    const model = await getModelData(animal[0].model_id)
    animal[0].model_id= model[0];
    res.status(200).json(animal);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}
