import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Target } from 'lucide-react';

const Bio: React.FC = () => {
  const stats = [
    { icon: Award, label: 'Years Experience', value: '8+' },
    { icon: Users, label: 'Happy Clients', value: '150+' },
    { icon: Zap, label: 'Projects Completed', value: '300+' },
    { icon: Target, label: 'Success Rate', value: '98%' }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Artist at work"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-gray-800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-gray-800 p-6 rounded-xl shadow-2xl border border-gray-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">8+</div>
                <div className="text-sm text-gray-400">Years Creating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Passionate About 
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Digital Art</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Hi, I'm a digital artist and animator with over 8 years of experience creating stunning visual content. 
                I specialize in 2D animations, NFT art, game assets, and storyboard creation.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My passion lies in bringing imagination to life through digital mediums, whether it's creating 
                mesmerizing animations for brands or crafting unique NFT collections that tell compelling stories.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Download Resume
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bio;