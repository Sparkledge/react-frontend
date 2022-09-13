/* 

    The HeadTags component is an implementation of react-helmet for the Sparkledge app

*/

import Head from "react-helmet";

interface HeadTagsInterface {
  areAdsOn: boolean,
  description: string,
  title: string
}

const HeadTags:React.FC<HeadTagsInterface> = ({
  areAdsOn,
  description = "",
  title = "", 
} : HeadTagsInterface) => (
  <Head>
    {areAdsOn ? (
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8892742343041588"
        crossOrigin="anonymous"
      />
    ) : null}
    {
        description !== undefined && description.length > 0 ? <meta name="description" content={description} /> : null
    }
    {
        title !== undefined && title.length > 0 ? <title>{title}</title> : null
    }
  </Head>
);

export default HeadTags;
