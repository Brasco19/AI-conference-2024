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
           Le <span className='font-semibold'>Centre de Recherche et Culture Scientifique (CRCS)</span> a le plaisir de vous inviter à la 2ème <span className='font-semibold'>Conference sur les Applicattions de L'Intellicence Artificielle en Sciences(CAIAS)</span>, qui se tiendra à distance (zoom/googleMeet), le <span className='font-semibold'>21 Decembre 2024</span>.
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
              <Tab>Exposés</Tab>
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
                <div className="">
                  <div className="">
                    <h5 className='text-2xl font-semibold text-heroBg mb-4 items-center'>Analyse des Données Relatives à la Tuberculose au Gabon avec R </h5>
                    <p className="">
                      <span className='font-bold'>Résume: </span> Selon les estimations de l'Organisation mondial de la santé (OMS), au Gabon 
                      l'incidence de la tuberculose (TB) toutes formes et des rechutes était de 521 cas pour 100 000 habitant.e.s en 2019. 
                      Au cours de cette année, le Programme national de lutte contre la tuberculose a déclaré 5399 nouveaux 
                      cas et rechutes pour un total de cas déclarés de 5573.

                      Nous allons présenter un aperçu de l'évolution de la tuberculose au Gabon entre 2018 et 2022, en utilisant les données disponibles que nous avons.
                    </p>
                  </div>
                  <div className="">
                    <h5 className='text-3xl font-semibold text-heroBg mb-4 items-center'>Modèle d'Intelligence Artificielle Générative: Modèle de Diffusion </h5>
                    <p className="">
                      <span className='font-bold'>Résume: </span>
                      L’IA générative se distingue par sa capacité à créer et à innover, par opposition à la simple analyse ou à la classification. 
                      Les progrès dans ce domaine ont conduit à des percées dans des domaines créatifs et des applications pratiques, 
                      ce qui en fait un domaine de pointe de la recherche et du développement de l’IA.</br>

                      Depuis 2024, les modèles de diffusion sont principalement utilisés pour les tâches de vision par ordinateur, notamment le débruitage d'images,
                      l'inpainting, la super-résolution, la génération d'images et la génération de vidéos. 
                      Celles-ci impliquent généralement la formation d'un réseau neuronal pour débruiter séquentiellement les images floues avec le bruit gaussien.
                    </p>
                  </div>
                </div>
              </motion.div>
            </TabPanel>

            <TabPanel className='flex flex-col md:flex md:flex-row gap-8 mt-8'>
              <motion.div 
                variants={fadeIn('up', 0.2)} initial='hidden' whileInView={'show'} viewport={{once: false, amount: 0.7}}
                className='flex flex-col items-center justify-center bg-[#e5eaee] rounded-lg p-12 font-secondary mx-auto'>
                <h3 className='text-3xl font-semibold text-heroBg mb-4 items-center'>Comité d'organisation</h3>
                <ul className='list-inside space-y-3 list-disc'>
                  <li className='font-light'>
                    <span className='font-semibold'>Asseko Ella (Le Cheik Oumar)</span>
                  </li>
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
