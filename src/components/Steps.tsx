import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    text: 'Schedule your complimentary Marketing Strategy Session'
  },
  {
    number: '02',
    text: 'Get your Free marketing Strategy plan'
  },
  {
    number: '03',
    text: 'Work with us to grow your business and get more customers'
  }
];

export default function Steps() {
  return (
    <section className="py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex items-start mb-8"
            >
              <span className="text-4xl font-bold text-purple-400 mr-4">
                {step.number}
              </span>
              <p className="text-gray-300 text-lg">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            3 Easy steps
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              to grow your business
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
}