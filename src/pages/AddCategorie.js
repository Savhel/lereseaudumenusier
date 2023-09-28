import React, { useState } from 'react';
import { supabase } from '../api/supabaseClient';

function AddCategorie() {
  const [nom, setNom] = useState('');

  
   
  

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Effectuer l'envoi des données vers la base de données Supabase
    // Utilisez les valeurs des états nom, prix, description et nouveauProduit
    // pour insérer les données dans la base de données

      const { data, error } = await supabase
          .from('categories')
          .insert([
            { 
              nom: nom,
            },
          ])
          .select();

          alert(`La catégorie  a bien été ajoutée `);

     // console.log(data)
     if (error) {
      alert("une erreur est survenue lors de l'insertion de la catégorie veuillez réessayer s'il vous plait !");
    }

    // Réinitialiser les champs du formulaire après l'envoi
    setNom('');
  };


  return (
    <div className="container text-center justify-center align-center sm:w-full h-ful px-4 text-white bottom-7 md:mt-0 mt-[10em] my-auto mx-auto">
      <h1 className='text-center text-2xl text-accent mb-3 font-bold'>Ajouter une catégorie</h1>
      <form 
         onSubmit={handleSubmit}
      >

          <div>
            <div className='flex flex-col gap-y-1 px-2 mx-auto mt-3 justify-center items-center'>
                <label  className="block text-white text-sm font-bold mb-2" htmlFor="nom">Nom :</label>
                <input 
                    type="text" 
                    id="nom" 
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)} 
                    className="shadow appearance-none border rounded md:w-[50em] lg:w-[50em] xl:w-[50em] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
          </div>
        
          <button className="shadow appearance-none border rounded md:w-[30em] lg:w-[30em] xl:w-[30em] py-2 px-3 leading-tight mt-8 mb-3 focus:outline-none focus:shadow-outline text-accent" type="submit">Ajouter</button>
        
      </form>
    </div>
  );
}

export default AddCategorie;