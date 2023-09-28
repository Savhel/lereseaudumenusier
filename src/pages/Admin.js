import React, { useEffect, useState } from 'react';
import { supabase } from '../api/supabaseClient';
import PropagateLoader from "react-spinners/PropagateLoader";

function Admin() {
  const [nom, setNom] = useState('');
  const [prix, setPrix] = useState('');
  const [description, setDescription] = useState('');
  const [nouveauProduit, setNouveauProduit] = useState(false);
  const [image, setImage] = useState(null);
  const [categorie, setCategorie] = useState(0);
  const [allCategorie, setAllCategorie] = useState(0);

async function fetchCategories () {
      try {
        const { data, error } = await supabase
            .from('categories')
            .select("*")
            
       // console.log(data);
 
          
  
          if (data != null) {
           // console.log("data",data);
            setAllCategorie(data);
          }

          if(error) throw error;
          // window.location.reload();
      } catch (error) {
        alert("Oups! Une erreur est survenue veuillez ressayer plus tard");
      }
    };

  useEffect( () => {
    fetchCategories();
  });
  
   
  

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Effectuer l'envoi des données vers la base de données Supabase
    // Utilisez les valeurs des états nom, prix, description et nouveauProduit
    // pour insérer les données dans la base de données

    const { data, error } = await supabase.storage.from('NkStoreBucket').upload(`public/${image.name}`, image);

    if (data) {

      const { dataR, error } = await supabase
          .from('produits')
          .insert([
            { 
              titre: nom,
              prix: prix,
              description: description,
              categorie_id: categorie,
              isNew: nouveauProduit,
              image : `https://iisqmbwofnmgwflqxsie.supabase.co/storage/v1/object/public/NkStoreBucket/${data.path}`
            },
          ])
          .select();

      alert(`Le produit a bien été ajouté`);


      // console.log(data.publicURL)
    }else if (error) {
      alert("une erreur est survenue lors de l'insertion du produit. Vous avez un problème de connexion, veuillez réessayer s'il vous plait !");

    }

    // Réinitialiser les champs du formulaire après l'envoi
    setNom('');
    setPrix('');
    setDescription('');
    setNouveauProduit(false);
    setImage(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  if (!allCategorie) {
    return <div className="justify-items-center justify-center text-center"> 
               <PropagateLoader color={"#f8a100"} />
           </div>;
  }


  return (
    <div className="container text-center justify-center align-center sm:w-full h-ful px-4 text-white bottom-7 md:mt-0 mt-[10em] my-auto mx-auto">
      <h1 className='text-center text-2xl text-accent mb-3 font-bold'>Ajouter un produit</h1>
      <form 
         onSubmit={handleSubmit}
      >
        {image && (
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">Image sélectionnée :</label>
            <img src={URL.createObjectURL(image)} alt="Image sélectionnée" className="w-full" />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="image" className="block text-white text-sm font-bold mb-2">Image :</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
          <span className="">Choisir la catégorie du produit </span>
          <select
            onChange={(e) => setCategorie( e.target.value)}
            className="block w-[90%] mx-auto mt-1 text-black"
            required
          >
            <option value="0" >choisir la catégorie ...</option> 
            {allCategorie.map((item) => {
              return <option value= {item.id} key={item.id} >{item.nom}</option> ;
            })}
          </select>
        </label>
        {categorie != 0 && (
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
        <div className='flex flex-col gap-y-1 px-2 mx-auto mt-3 justify-center items-center'>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="prix">Prix :</label>
          <input 
            type="number" 
            id="prix" value={prix} 
            onChange={(e) => setPrix(e.target.value)}
            className="shadow appearance-none border rounded md:w-[50em] lg:w-[50em] xl:w-[50em] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className='flex flex-col gap-y-1 px-2 mx-auto mt-3 justify-center items-center'>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="description">Description :</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            className="shadow appearance-none border rounded md:w-[50em] lg:w-[50em] xl:w-[50em] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className='flex flex-col gap-y-1 px-2 mx-auto mt-3 justify-center items-center'>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="nouveauProduit">Nouveau produit ? </label>
          <input type="checkbox" id="nouveauProduit" checked={nouveauProduit} onChange={(e) => setNouveauProduit(!nouveauProduit)} />
        </div>
          </div>
        )}
        
        {image && (
          <button className="shadow appearance-none border rounded md:w-[30em] lg:w-[30em] xl:w-[30em] py-2 px-3 leading-tight mt-8 mb-3 focus:outline-none focus:shadow-outline text-accent" type="submit">Ajouter</button>
        )}
      </form>
    </div>
  );
}

export default Admin;