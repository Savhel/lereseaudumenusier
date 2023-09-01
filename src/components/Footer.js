import React from 'react';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {

   const phoneNumber = "237675962608";
  const message = "Bonsoir Mr Narcisse, s'il vous plait je suis un client du réseau du menusier en ligne j'ailerais m'entrenir avec vous si possible !";

   const encodedPhoneNumber = encodeURIComponent(phoneNumber);
  const encodedMessage = encodeURIComponent(message);
  
  const whatsappURL = `https://api.whatsapp.com/send?phone=${encodedPhoneNumber}&text=${encodedMessage}`;
  
  return (
    <footer className="pt-16 bg-primary">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h-2 uppercase mb-6 font-semibold">
            Souscrire pour les nouveautés
          </h2>
          <p className="text-white/70">
            Soyez les premiers a connaitre ce qu'il ya de nouveau (matériels,
            promotions ...) pour vous dans nos locaux
          </p>
        </div>
        {/* formulaire */}
        <form className="w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14 ">
          <input type="email" placeholder="voutre email" className="input" />
          <button className="btn btn-accent min-w-[150px]">Joindre</button>
        </form>
        <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9">
          Situé à Ngousso .......... BP: 3614 Yaoundé-Messa
        </div>
        <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9">
          Pour tous vos probèmes liés à vos commandes et autres activités liés à
          nos services contactez le : +237 675-962-608
        </div>
        {/* liens */}
        <div className="text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9">
          <a href="#" className="hover:text-white transition-all">
            Police
          </a>
          <a href="#" className="hover:text-white transition-all flex">
            Service Client
          </a>
          <a href="#" className="hover:text-white transition-all">
            Transport et livraison
          </a>
        </div>
        {/* Social */}
        <div className="flex gap-x-6 max-w-max mx-auto text-lg mb-16">
          <a
            href="https://XyonTube.netlify.app"
            className="hover:text-white transition-all"
          >
            <FaYoutube />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white transition-all">
            <FaTwitter />
          </a>
          <a href={whatsappURL} className="hover:text-white transition-all">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      {/* CopyRight */}
      <div className="py-10 border-t border-t-white/10">
        <div className="container mx-auto">
          <div className="text-center text-sm text-white/60">
            Copyright &copy; XyonCodeurs 2023. ALL rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
