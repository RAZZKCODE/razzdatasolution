import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '09:15', value: 34500, signal: null },
  { time: '09:30', value: 34650, signal: 'buy' },
  { time: '09:45', value: 34800, signal: null },
  { time: '10:00', value: 34720, signal: null },
  { time: '10:15', value: 34900, signal: null },
  { time: '10:30', value: 34850, signal: 'sell' },
  { time: '10:45', value: 34600, signal: null },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 !bg-[#0A192F]/90 border border-primary/20">
        <p className="text-gray-300 font-mono text-xs">{`Time: ${label}`}</p>
        <p className="text-primary font-bold">{`₹${payload[0].value}`}</p>
        {payload[0].payload.signal && (
          <p className={`text-xs mt-1 font-bold ${payload[0].payload.signal === 'buy' ? 'text-green-500' : 'text-red-500'}`}>
            SIGNAL: {payload[0].payload.signal.toUpperCase()}
          </p>
        )}
      </div>
    );
  }
  return null;
};

const TradingSnippet = () => {
  return (
    <section id="trading" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 font-sans">
              Algorithmic <span className="text-gradient">Trading Signals</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Developing highly accurate intraday trading logic and automated signal systems using Python. Data-driven strategy meets execution speed.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-[#0A192F] border border-white/10 rounded-md text-sm font-mono text-gray-300">
                 Pandas & NumPy
              </span>
              <span className="px-4 py-2 bg-[#0A192F] border border-white/10 rounded-md text-sm font-mono text-gray-300">
                 Broker APIs
              </span>
              <span className="px-4 py-2 bg-[#0A192F] border border-white/10 rounded-md text-sm font-mono text-gray-300">
                 WebSockets
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-4 md:p-6 rounded-xl border border-white/10 h-[350px] w-full"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-mono text-gray-400">LIVE SYSTEM STATUS</span>
              </div>
              <span className="text-xs font-mono text-primary">BANKNIFTY</span>
            </div>
            
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis dataKey="time" stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis domain={['auto', 'auto']} stroke="#ffffff50" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
                  <Tooltip content={<CustomTooltip />} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#00E5FF" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: "#0A192F", stroke: "#00E5FF", strokeWidth: 2 }} 
                    activeDot={{ r: 6, fill: "#00E5FF", stroke: "#fff" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradingSnippet;
