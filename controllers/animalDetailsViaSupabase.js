import { getAllAnimalData, getAnimalData,getModelData,getEventsData, getUsersData } from "../adapters/supabaseAdapter.js";


export async function getAllAnimalDetails(req, res){
  try {
    const animal = await getAllAnimalData();
    
    for (let i = 0; i < animal.length; i++) {
      const model= await getModelData(animal[i].model_id);
      const event = await getEventsData(animal[i].event_id)
      const user =await getUsersData(animal[i].user_id)
      animal[i].model_id = model;
      animal[i].event_id = event;
      animal[i].user_id = user;
    }
    res.status(200).json(animal);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}
export async function getAnimalDetails(req, res) {
  try {
    const animal = await getAnimalData(req.params.id);
    const model = await getModelData(animal.model_id)
    const events = await getEventsData(animal.event_id)
    const user = await getUsersData(animal.user_id)
      animal.model_id = model;
      animal.event_id = events;
      animal.user_id =user;
    res.status(200).json(animal);
  } catch (err) {
    res.send(`error in viaSupabase: ${err}`);
  }
}
