import React from 'react'
import {Tab, TabList, TabPanel, Tabs} from 'react-tabs'
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/animationVariants.js'


const Infos = () => {
  return (
    <div id='infos' className='bg-[#f7f8fc]'>
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div className='text-center space-y-5' variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>Information</h2>
          <p className='md:w-1/2 mx-auto text-left text-[14px] text-[#333] font-extralight'>
           Le <span className='font-semibold'>Centre de Recherche et Culture Scientifique (CRCS)</span> a le plaisir de vous inviter à une 
            <span className='font-semibold'>Conférence sur les Applicattions de L'Intellicence Artificielle en Sciences(CAIAS)</span>, qui se tiendra à distance 
            (zoom/googleMeet), le <span className='font-semibold'>22 février 2025, à partir 10h (heure de Libreville, Gabon)</span>.
          </p>
        </motion.div>

        {/* inofs category */}
        <div className='py-8 md:w-4/5 mx-auto'>
           <Tabs>
            <motion.TabList 
              className='flex flex-wrap justify-between items-center md:gap-4 gap-2'
              variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
              >
              <Tab>Public Concerné</Tab>
              <Tab>Exposé 1</Tab>
              <Tab>Exposé 2</Tab>
              <Tab>Comité d'organisation</Tab>
            </motion.TabList>

            <TabPanel className='flex flex-col md:flex md:flex-row gap-8 mt-8'>
              <motion.div 
                variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
                className='flex flex-col items-center justify-center bg-[#e5eaee] rounded-lg p-12 font-secondary mx-auto'>
                <h3 className='text-3xl font-semibold text-heroBg mb-4 items-center'>Public Concerné</h3>
                <p className='mb-8 text-[#333] font-extralight'>
                Cette conférence s'adresse à toute personne souhaitant en savoir plus sur l'Intelligence Artificielle, 
                utiliseé dans divers domaines tels que les sciences naturelles, sociales et technologiques, où l'objectif est de recueillir des informations (data)
                pertinentes et de les utiliser pour prédire les évenements à pqrtir de certaines caractéristiques. La connaissance de la perception d'une information par 
                l'utilisateur permet une meilleure analyse objective et même le développement de technologies et 
                de processus de production plus efficaces. Certaines méthodes scientifiques sont appliquées avec succès en médecine, 
                dans les domaines industriels et aéronautiques, entre autres ; d'où l'importance d'en apprendre davantage à leur sujet.
                </p>
              </motion.div>
            </TabPanel>

            <TabPanel className='flex flex-col md:flex md:flex-row gap-8 mt-8'>
              <motion.div 
              variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
                className='flex flex-col items-center justify-center bg-[#e5eaee] rounded-lg p-12 font-secondary mx-auto'>
                <h5 className='text-3xl font-semibold text-heroBg mb-4 items-center'>
                  Modélisation de Réseau de Transmission des Maladies Infectieuses: Cas de la Tuberculose au Gabon 
                </h5>
                <p className="">
                  <span className='font-bold'>Résume: </span>  
                  La surveillance et la détection précoce des maladies infectieuses sont essentielles à la prévention. Certaines maladies transmissibles constituent une menace importante pour la santé humaine.
                  une mortalité et une morbidité élevées, comme en témoigne l'épidemié de tuberculose au Gabon.
                  
                  Les progrès des applications d’intelligence artificielle (IA) facilitent la détection précoce
                  et la surveillance des maladies infectieuses imanentes qui contribuent à atténuer le risque.
                  De plus, la résistance aux antimicrobiens (RAM) et l'épidémie silencieuse actuelle 
                  constituent une menace critique pour la santé publique. Les progrès de l’IA fournissent des solutions et des algorithmes qui facilitent la surveillance de la propagation et la découverte de nouveaux antibiotiques
                  thérapeutiques. 
                  
                  Dans cet exposé on essaye de comprendre un aperçu complet des avancées actuelles dans l'applications de l'IA pour la surveillance, les méthodes de détection rapide, de transmission, de propagation, les antibiotiques et
                  découverte de candidats infectés, gestion de la RAM, partage de données et collaboration ainsi que des analyses prédictives qui contribuent toutes à la prévention et au contrôle des maladies infectieuses.
                  maladies.
                </p>
              </motion.div>
            </TabPanel>

             <TabPanel className='flex flex-col md:flex md:flex-row gap-8 mt-8'>
              <motion.div 
              variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
                className='flex flex-col items-center justify-center bg-[#e5eaee] rounded-lg p-12 font-secondary mx-auto'>   
                <h5 className='text-2xl font-semibold text-heroBg mb-4 items-center'>Pas disponible pour le moment!</h5>
                <p className="">
                  <span className='font-bold'>Résume: </span>
                  Pas disponible pour le moment!
                  </p>
              </motion.div>
            </TabPanel>

            <TabPanel className='flex flex-col md:flex md:flex-row gap-8 mt-8'>
              <motion.div 
                variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
                className='flex flex-col items-center justify-center bg-[#e5eaee] rounded-lg p-12 font-secondary mx-auto'>
                <h3 className='text-3xl font-semibold text-heroBg mb-4 items-center'>Comité d'organisation</h3>
                <ul className='list-inside space-y-3 list-disc'>
                  <li className='font-light'>
                    <span className='font-semibold'>Engouang Mve</span>
                  </li>
                </ul>
              </motion.div>
            </TabPanel>
           </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Infos
