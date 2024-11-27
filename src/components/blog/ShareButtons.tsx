import { motion } from 'framer-motion';
import {
  TwitterShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  TwitterIcon,
  LinkedinIcon,
  FacebookIcon
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-4"
    >
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      
      <LinkedinShareButton url={url} title={title}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </motion.div>
  );
} 