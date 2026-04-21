import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-[#0A192F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4 font-sans text-white">
            Ready to <span className="text-gradient">Automate?</span>
          </h2>
          <p className="text-gray-400 mb-10 text-lg">
            Let's discuss how we can turn your manual complexity into automated simplicity.
          </p>
          
          <form className="glass-card p-8 rounded-2xl max-w-2xl mx-auto text-left border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                <input type="text" className="w-full bg-[#040B16]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                <input type="email" className="w-full bg-[#040B16]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-mono text-gray-400 mb-2">Project Details</label>
              <textarea rows="4" className="w-full bg-[#040B16]/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your workflow..."></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-primary text-[#040B16] font-bold rounded-lg hover:bg-[#00E5FF]/80 transition-colors shadow-[0_0_15px_rgba(0,229,255,0.3)]">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
