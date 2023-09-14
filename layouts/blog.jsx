import { useState, useEffect } from "react";
import Link from "next/link";

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

  const { title, description, created, image, authorsDetails, categories, tags, readingTime } = frontMatter;

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

        {/* DESCRIPTION */}
        <p className="text-primary/75 text-xl md:text-2xl font-light">{description}</p>

        {/* META */}
        <div className="flex items-stretch gap-x-3 text-sm text-primary/75">
          {/* AUTHORS, DATE, READING TIME */}
          <div className="flex flex-wrap items-center shrink gap-3">
            <div className="flex items-center gap-x-3">
              {authorsDetails.map(({ name, avatar, isDraft, url_path }) => (
                <Avatar
                  key={url_path}
                  name={name}
                  img={avatar}
                  href={url_path && !isDraft ? `/${url_path}` : undefined}
                />
              ))}
            </div>
            <div className="flex items-center gap-x-3">
              <time dateTime={created}>{formatDate(created)}</time>
              <span className="text-md">·</span>
              <span>{readingTime}</span>
            </div>
          </div>
          {/* SHARE */}
          <div className="flex justify-end items-center grow shrink-0">
            <SocialShareMenu onCopyClick={handleCopyClick} shareOptions={shareOptions} />
          </div>
        </div>

        {/* CATEGORIES */}
        <div className="flex justify-start gap-3 py-2 border-b border-t border-primary/10">
          {categories.map((category, index) => (
            <Link
              key={`${category}-${index}`}
              href={`/categories/${category}#all-blog-posts`}
              className="text-xs text-primary hover:text-gray-500"
            >
              #{category}
            </Link>
          ))}
        </div>

        {/* IMAGE */}
        {image && <img src={image} alt={title} className="w-full h-auto !m-0" />}
      </header>

      <section className="docs prose lg:prose-xl prose-headings:font-headings dark:prose-invert prose-a:break-words max-w-none">{children}</section>

      {/* TODO is this even needed? */}
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
