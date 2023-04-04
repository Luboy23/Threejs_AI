import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
    headContentAnimation,
    headContainerAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion'
 
const Home = () => {
    const snap = useSnapshot(state);
    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                  <motion.header {...slideAnimation("down")}>
                      <img src="./threejs.png"
                          alt="logo"
                          className='w-8 h-8 object-contain'
                      />
                  </motion.header>

                  <motion.div className='home-content' {...headContainerAnimation}>
                      <motion.div {...headTextAnimation}>
                          <h1 className='head-text'>
                              LET'S <br className='xl:block hidden'/>DO IT.
                          </h1>
                        </motion.div >
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600 text-base'>使用全新的Three.js——3D定制工具创造一件属于你的衬衫。<br/><strong>释放你的想象力</strong>{" "}<br/>定义你自己的专属风格。<br /> Created by: @lllu_23</p>

                            <CustomButton
                                type="filled"
                                title='开始定制'
                                handleClick={() => state.intro = false}
                                customStyles= 'w-fit px-4 py-2.5 font-bold text-sm'
                            />

                        </motion.div>
                  </motion.div>
              </motion.section>
          )}
      </AnimatePresence>
  )
}

export default Home