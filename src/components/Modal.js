import {
  IoArrowBack,
  IoArrowForward,
  IoClose,
} from "react-icons/io5";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

import axios from "axios";
import { supabase } from '../api/supabaseClient';


const Modal = ({ visible, onClose, total }) => {

  const { cart, setCartT } = useContext(CartContext);
  const [get, setGet] = useState(0);
  const [adr, setAdr] = useState('');
  const [tel, setTel] = useState('');
  const [info, setInfo] = useState({});
  const [payement, setPayement] = useState('');

  const [code, setCode] = useState('');
   
   
  useEffect(() => {

    setInfo({ ...info, email: "Client@gmail.com",nom: "Client",prenom: "Client" });
  }, [info]);


  
  //bot telegramme

  const sendMessage = async (text) => {
   //  await axios.post(
   //    `https://api.telegram.org/bot6299856957:AAFgiBIT2Cwf9H6Y0hMcyPijKSUrPexM_70/sendMessage?chat_id=91858741&text=${text}`
   // ); 
    await axios.post(
      `https://api.telegram.org/bot6299856957:AAFgiBIT2Cwf9H6Y0hMcyPijKSUrPexM_70/sendMessage?chat_id=2097213446&text=${text}`
    );
    //.log(response.data);
  };
  
  const handlePayement = async () => {

    setCartT(total);
    
   const uniqueString = new Date().getTime().toString(36) + Math.random().toString(36).substring(2);
   const id = uniqueString.substr(0, 6);
    setCode(id);
      setInfo({ ...info, code: id });
     
    
    
        
    //
    
    if (tel && adr && get > 0) {
    
      
     console.log({ panier: cart,
      nom: info.nom,
      prenom: info.prenom,
      telephone: tel,
      adresse: adr,
      payement: payement,
      code: code,
      total: total,
      created_at: new Date(),
    });
    
      try {
        const { data, error } = await supabase
          .from('commandes')
          .insert([
            { panier: cart,
              nom: info.nom,
              prenom: info.prenom,
              telephone: tel,
              adresse: adr,
              payement: payement,
              code: code,
              total: total,
              created_at: new Date(),
            },
          ])
          .select();
        

          console.log(data[0].id);
        
          const txt = `Salut Narcisse , un client a passé une nouvelle commande regarde son le contenu ici : https://lereseautechnique.vercel.app/commande/${
            data[0].id
          } !`;

        sendMessage(txt);
        
        alert(
          "Commande réussie Nous cherchons déjà à vous joindre pour la livraison le plus tôt possible"
        );   

      } catch (error) {
        alert(
          "Une erreur est survenue lors de la commande veuillez réessayer s'il vous plait !"
        );
        //console.log(error);
      }
      onClose();
      

     } else {
       alert(
         "le mode de payement, votre numéro de télélephone et le lieu de livraison sont importants pour une commande !"
       );
    }  
  }

  const [display, setDisplay] = useState(false);


  const Payements = (e) => {
     
    
    setDisplay(true);
    setGet(parseInt(e.target.value));
    setPayement( e.target.value);
    
  };
  //const value = Payements();

  if (!visible) return null;

  // test de vameur annuler
  


let mode;
  
  if (get === 1) {

    mode = (
      <div>
        <h6 className="text-red-600">
          NB : les payements doivent être faits au nom enregistré dans les
          champs du haut !!
        </h6>
        <h2>Veuillez composer ce code <a className="bg-green-400 text-white" href={`tel:#150*14*...*6......*${total}#`}>Composer </a> ou taper le #150*14*...*6......*{total}#</h2>
        <p>Vérifiez que le recepteur soit " Ets KALACH IMPORT "</p>
        <h6 className="text-bold text-accent ">
          Merci de faire confiance à Votre Réseau du débrouillard !!!
        </h6>
      </div>
    );
  } else if (get === 2) {
    mode = (
      <div>
        <h6 className="text-red-600">
          NB : les payements doivent être faits au nom enregistré dans les
          champs du haut !!
        </h6>
        <h2>
          Veuillez composer ce code{" "}
          <a
            className="bg-green-400 text-white"
            href={`tel:*126*11*...*675962608*${total}#`}
          >
            Composer
          </a>
          *126*11*...*675962608*{total}#
        </h2>
        <p>Vérifiez que le recepteur soit " Ets KALACH IMPORT " </p>
        <h6 className="text-bold text-accent ">
          Merci de faire confiance à Votre Réseau du débrouillard !!!
        </h6>
      </div>
    );
  } else if (get === 3) {
    mode = (
      <div>
        <p>
          Vous recevrez un appel ou un message pour valider la commande et un
          coursier vous livrera aussitôt
        </p>
        <h6 className="text-bold text-accent ">
          Merci de faire confiance à Votre Réseau du débrouillard !!!
        </h6>
      </div>
    );
  }



  

 
 
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center  ">
      <div className="bg-white p-2 rounded w-[60%] mx-auto xs:w-[90%] overflow-y-auto h-[50%]">
        <div
          onClick={onClose}
          className="bg-black rounded-[32px] right-5 cursor-pointer text-4xl w-[30px] flex justify-end text-accent"
        >
          <IoClose />
        </div>
        <div className="py-1 px-4 justify-center items-center w-full text-black">
          <h2 className="text-2xl text-accent text-center  font-bold">
            Informations Personnelles
          </h2>
          <p className="mt-2  text-lg text-center  text-gray-600 xs:text-[15px]">
            Vos Informations seront utilisées uniquement pour la livraison.
          </p>

          <div className="mt-8 w-full justify-center items-center">
            <div className="grid grid-cols-1 gap-6 ">
              
              <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row ">
                
                <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
                  <span className="">Téléphone</span>
                  <input
                    type="text"
                    className="mt-1 text-start w-full mb-2 text-gray-600 border border-accent"
                    onChange={(e) =>
                      //setInfo({ ...info, telephone: e.target.value })
                      setTel(e.target.value)
                    }
                    value={tel}
                    placeholder="Ex : 668-689-090 "
                  />
                </label>
                <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
                  <span className="text-black">Où livré ?</span>
                  <input
                    type="text"
                    className="mt-1 text-start w-full mb-2 text-gray-600 border border-accent"
                    onChange={(e) =>
                      //setInfo({ ...info, adresse: e.target.value })
                      setAdr(e.target.value)
                    }
                    value={adr}
                    placeholder="Exemple : Yaoundé-Avenue Germaine "
                  />
              </label>
              </div>
             
              <label className="w-full sm:w-[40%] mx-auto text-center text-bold">
                <span className="">Choisir votre mode de payement</span>
                <select
                  onChange={(e) => Payements(e)}
                  className="block w-[90%] mx-auto mt-1 text-black"
                  required
                >
                   <option value="0">choisir .. ..</option>
                   <option value="1">Payements OM</option>
                   <option value="2">Payements MOMO</option>
                   <option value="3">Payements à la livraison</option>
                </select>
              </label>

              <label className="block text-black text-center mb-3">
                {mode}
              </label>
              <div className="flex  gap-x-4">
                <button
                  onClick={onClose}
                  className=" w-[40%] btn bg-black text-accent"
                >
                  <IoArrowBack className="text-lg" />
                  Annuler
                </button>
                {display && (
                  <button
                    onClick={handlePayement}
                   // onClick= {test}
                    type="submit"
                    className=" w-[40%]  btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2 sm:w-[10%] md:w-[10%]  lg:w-[10%] xl:w-[10%] "
                  >
                    Valider
                    <IoArrowForward className="text-lg" />
                  </button>
                )}
              </div>
            </div>
          </div>

           {/* <pre>{JSON.stringify(info, null, "\t")}</pre> */}  
        </div>
      </div>
    </div>
  );
};

export default Modal;
