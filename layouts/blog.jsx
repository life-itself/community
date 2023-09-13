import { useState, useEffect } from "react";

import { formatDate } from "@/lib/formatDate";
import { transformObjectToParams } from "@/lib/transformObjectToParams";
import { Avatar } from "@/components/Avatar";
import { SocialShareMenu } from "@/components/custom/SocialShareMenu";
import { FloatingBanner } from "@/components/custom/FloatingBanner";

import { TwitterIcon, FacebookIcon, LinkedInIcon } from "@/components/custom/icons";


export default function BlogLayout({ children, frontMatter }) {
  const [bannerMessage, setBannerMessage] = useState('');
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (showBanner) {
      timeoutId = setTimeout(() => {
        setShowBanner(false);
      }, 2000);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [showBanner]);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setBannerMessage('Copied to clipboard!');
    } catch (err) {
      setBannerMessage('Failed to copy!');
    } finally {
      setShowBanner(true);
    }
  };

  const onShareClick = (link, text) => (e) => {
    e.preventDefault();
    window.open(link, text, 'width=650,height=650');
  }

  const { title, created, image, authorsDetails, categories, tags, readingTime } = frontMatter;

  const twitterShareLink = 'https://twitter.com/intent/tweet' +
    transformObjectToParams({
      url: window.location.href,
      text: title,
      via: 'forlifeitself',
      // hashtags: categories.join(',') // TODO
    })

  const facebookShareLink = 'https://www.facebook.com/sharer/sharer.php' +
    transformObjectToParams({
      u: window.location.href,
      quote: title,
    })

  const linkedInShareLink = 'https://www.linkedin.com/sharing/share-offsite' +
    transformObjectToParams({
      url: window.location.href,
      title: title,
      source: 'forlifeitself',
    })

  const shareOptions = [
    {
      name: "Share on Twitter",
      icon: TwitterIcon,
      href: twitterShareLink,
      onClick: onShareClick(twitterShareLink, 'Share on Twitter')
    },
    {
      name: "Share on Facebook",
      icon: FacebookIcon,
      href: facebookShareLink,
      onClick: onShareClick(facebookShareLink, 'Share on Facebook')
    },
    {
      name: "Share on LinkedIn",
      icon: LinkedInIcon,
      href: linkedInShareLink,
      onClick: onShareClick(linkedInShareLink, 'Share on LinkedIn')
    },
  ]

  return (
    <article className="mx-auto max-w-3xl px-6 pt-12">
      <header className="flex flex-col gap-y-5 mb-8">
        {/* TITLE */}
        <h1 className="mb-0 text-3xl md:text-4xl font-headings font-bold leading-tight">
          {title}
        </h1>
        {/* CATEGORIES */}
        <div className="flex justify-start gap-2 py-2 border-b border-t border-primary/10">
          {categories.map((category, index) => (
            <a
              key={`${category}-${index}`}
              href={`/categories/${category}`}
              className="text-xs text-primary hover:text-gray-500 underline underline-offset-2 decoration-secondary decoration-2"
            >
              {category}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-3 text-sm text-primary/75">
          {/* AUTHOR */}
          {authorsDetails.map(({ name, avatar, isDraft, url_path }) => (
            <Avatar
              key={url_path}
              name={name}
              img={avatar}
              href={url_path && !isDraft ? `/${url_path}` : undefined}
            />
          ))}
          <span className="text-md">·</span>
          {/* DATE */}
          <div className="flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <time dateTime={created}>{formatDate(created)}</time>
          </div>
          <span className="text-md">·</span>
          {/* READING TIME */}
          <span>{readingTime}</span>
          {/* SHARE */}
          <div className="flex justify-end flex-grow">
            <SocialShareMenu onCopyClick={handleCopyClick} shareOptions={shareOptions} />
          </div>
        </div>
        {/* IMAGE */}
        {image && <img src={image} alt={title} className="w-full h-auto !m-0" />}
      </header>

      <section className="docs prose lg:prose-xl prose-headings:font-headings dark:prose-invert prose-a:break-words max-w-none">{children}</section>

      <div className="flex flex w-full flex-wrap items-center space-x-4 py-6 border-b border-theme-yellow text-sm capitalize">{tags &&
        <>
          tags:&nbsp;&nbsp;
          {tags.map((tag, i) => (
            <a key={i} className="no-underline hover:underline italic">#{tag}</a>
          ))}
        </>}
      </div>

      <FloatingBanner show={showBanner}>
        {bannerMessage}
      </FloatingBanner>
    </article>
  );
}
