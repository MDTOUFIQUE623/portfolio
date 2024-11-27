import { motion } from 'framer-motion';
import { FiMonitor, FiTrendingUp, FiLayout } from 'react-icons/fi';

const services = [
  {
    title: 'Creative',
    icon: FiLayout,
    items: [
      'Branding/logo design',
      'Conversion optimization',
      'Marketing video creation'
    ]
  },
  {
    title: 'Marketing & Advertising',
    icon: FiTrendingUp,
    items: [
      'Google/Youtube Ads',
      'Facebook Ads',
      'LinkedIn Ads & automation'
    ]
  },
  {
    title: 'Development',
    icon: FiMonitor,
    items: [
      'Web design and development',
      'Mobile and tablet UX',
      'UX/UI Design',
      'Funnel Creation & Optimization'
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-white mb-12 text-center"
      >
        Services
        <motion.span 
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: '200% auto' }}
        >
          {' '}include
        </motion.span>
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white/5 backdrop-blur-xl p-6 rounded-xl border border-white/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
            </div>
            <ul className="space-y-2">
              {service.items.map((item) => (
                <li key={item} className="text-gray-300 flex items-center">
                  <span className="mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}