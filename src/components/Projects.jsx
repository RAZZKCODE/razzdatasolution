import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative bg-[#040B16] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4 font-sans"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col p-6 h-full"
            >
              <div className="flex justify-between items-center mb-6">
                <FolderGit2 className="text-primary w-10 h-10" />
                <ExternalLink className="text-gray-400 hover:text-white cursor-pointer w-6 h-6 transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-white">{project.name}</h3>
              <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
              
              {project.status && (
                <div className="mb-4 inline-block px-3 py-1 bg-yellow-500/10 text-yellow-500 text-xs font-mono rounded border border-yellow-500/20 w-max">
                  {project.status}
                </div>
              )}
              {project.highlight && (
                <div className="mb-4 text-xs font-mono text-primary/80">
                  ⚡ {project.highlight}
                </div>
              )}
              {project.logic_feature && (
                <div className="mb-4 text-xs font-mono text-accent">
                  ⚙️ {project.logic_feature}
                </div>
              )}

              <ul className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {project.tech.map((tech, i) => (
                  <li key={i} className="text-xs font-mono text-gray-400">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
