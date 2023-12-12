import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: 'variables.env' });
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);




export async function getAllAnimalData(id) {
  try {
    const response = await fetch(`http://msanimals:3013/animals`);
    const data = await response.json();

    if (!response.ok) {
      console.log('Fetch error:', data);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error('Error in getAnimalData:', error.message);
    throw error;
  }
}


export async function getAnimalData(id) {
  try {
    const response = await fetch(`http://msanimals:3013/animals/${id}`);
    const data = await response.json();

    if (!response.ok) {
      console.log('Fetch error:', data);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error('Error in getAnimalData:', error.message);
    throw error;
  }
}

export async function getModelData(id) {
  try {
    const response = await fetch(`http://msmodels:3014/models/${id}`);
    const data = await response.json();

    if (!response.ok) {
      console.log('Fetch error:', data);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    return data;
  } catch (error) {
    console.error('Error in getAnimalData:', error.message);
    throw error;
  }
}

// export async function getModelData(id) {
//   try {
//     const response = await fetch(`http://msmodels:3014/models/${id}`);
//     const data = await response.json();

//     if (!response.ok) {
//       console.log('Fetch error:', data);
//       throw new Error(`Failed to fetch data: ${response.statusText}`);
//     }

//     return data;
//   } catch (error) {
//     console.error('Error in getAnimalData:', error.message);
//     throw error;
//   }
// }
