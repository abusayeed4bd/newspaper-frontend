import React from 'react';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, WhatsappIcon, WhatsappShareButton } from "react-share";

const ShareButtons = ({ url }) => {
    return (
        <div className='flex gap-2'>

            <FacebookShareButton url={url}>
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url}>
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url}>
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url}>
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
        </div>
    );
};

export default ShareButtons;