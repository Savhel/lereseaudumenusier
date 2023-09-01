import axios from "axios";

const url =
  "https://strapi-data-app.onrender.com/api/commanders?sort[0]=id%3Aasc";


export const lireCommandes = () =>axios.get(url); 

export const creerCommandes = (data) => axios.post(url,
    JSON.stringify({ data }),
    {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    }
);

export const majCommande = (id, majCommande) => axios.put(`${url}/${id}`, majCommande);

export const supprimerCommande = (id) => axios.delete(`${url}/${id}`);