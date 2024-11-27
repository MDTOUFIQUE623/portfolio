import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { useState } from 'react';

interface ContactInfo {
  icon: any;
  label: string;
  value: string;
  link?: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'mdtoufiq6231@outlook.com',
    link: 'mailto:mdtoufiq6231@outlook.com'
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9407716623',
    link: 'tel:+919407716623'
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Bangalore, India'
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open default email client with pre-filled content
    window.location.href = `mailto:mdtoufiq6231@outlook.com?subject=${emailSubject}&body=${emailBody}`;

    // Reset form after a short delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get in
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
            {' '}Touch
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Feel free to reach out to me for any questions or opportunities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-4"
            >
              <div className="p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                <info.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{info.label}</p>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.label === 'Email' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="text-white hover:text-purple-400 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
            className="w-full px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message
                <FiSend className="w-4 h-4" />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}