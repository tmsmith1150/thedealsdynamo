'use client';
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon
} from 'react-share';

const ShareButtons = ({product}) => {

  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/products.${product._id}`;


    return ( 
         <>
         <h3 className="text-xl font-bold text-center pt-2">Share This Product</h3>
         <div className="flex gap-3 justify-center pb-5">
          <FacebookShareButton url={shareUrl} quote={product.name} hashtag={`#${product.type.replace(/\s/g, '')}AvailableToSell`}>
          <FacebookIcon size={40} round={true} />

          </FacebookShareButton>
          <TwitterShareButton url={shareUrl} title={product.name} hashtags={[`${product.type.replace(/\s/g, '')}AvailableToSell`]}>
          <TwitterIcon size={40} round={true} />

          </TwitterShareButton>
          <EmailShareButton url={shareUrl} subject={product.name} body={`Check out this product that is available now: ${shareUrl}`}>
          <EmailIcon size={40} round={true} />

          </EmailShareButton>
         </div>
      </>
     );
}
 
export default ShareButtons;