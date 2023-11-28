import Script from "next/script.js";

export default function NewsletterForm() {
  return (
    <div className="mx-auto max-w-7xl py-12 px-6 lg:pt-16 lg:px-8">
      <div className="rounded-3xl bg-secondary py-10 px-12 lg:py-20 lg:px-24 flex flex-col lg:flex-row items-stretch lg:items-center gap-8">
        <div className="flex-1 space-y-6">
          <h2 className="font-headings font-bold tracking-tight text-3xl lg:text-4xl text-primary text-center lg:text-left">
            Stay Connected
          </h2>
          <p className="text-md lg:text-lg text-center lg:text-left text-primary">
            We're actively contributing to a wiser, weller world. If you believe a better world is possible,
            our activities will interest you. Join our newsletter to be regularly updated with what's happening at Life Itself.
          </p>
          <p className="text-md text-primary flex flex-col lg:flex-row items-center gap-2">
            <span className="md:mr-4">And check out our socials:</span>
            <span className="flex space-x-4 mt-4 md:mt-0">
              {socialIcons.map((el) => (
                <a key={el.title} href={el.href} target="_blank" className="font-medium text-primary underline">
                  <svg role="img" viewBox="0 0 24 24" width={18} height={18} xmlns="http://www.w3.org/2000/svg">{el.svgPath}</svg>
                </a>
              ))}
            </span>
          </p>
        </div>
        <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
        <div className="flex-1 sib-form !p-0">
          <div id="sib-form-container" className="sib-form-container !font-sans max-w-md mx-auto">
            <div id="sib-container" className="sib-container--large sib-container--vertical !p-0 !bg-transparent">
              <form
                id="sib-form"
                method="POST"
                action="https://1ebb0834.sibforms.com/serve/MUIEAHv8u1djsSIFAN7v4df8mi9xwfEWx_Lb1IsVhMTHmyWKns1oCWFTrJDN_8hj5kudlUMKTIbltfsV_UlYPq9FlNqAc0jVlyZCzmfHwI7ZrgYp2zVD4WcsCS1C76szNm16870ol677kE0fuRYr4L-v6bdsC7JvdpPMVRjMyfxYy93APXfDhXwqrXCVg_CTiCG6zQZTgK2om-L6"
                data-type="subscription"
                className="flex flex-col"
              >
                <div>
                  <div className="sib-input sib-form-block !p-0">
                    <div className="form__entry entry_block">
                      <div className="form__label-row ">
                        <div className="entry__field !rounded-md">
                          <input
                            className="input w-full !rounded-md !border-white !px-5 !py-1 !placeholder-gray-500 !focus:outline-none !focus:ring-2 focus:!ring-white focus:!ring-offset-2 focus:!ring-offset-secondary"
                            type="text"
                            id="EMAIL"
                            name="EMAIL"
                            autoComplete="off"
                            placeholder="Enter your email"
                            data-required="true"
                            required=""
                          />
                        </div>
                      </div>
                      <label className="entry__error entry__error--primary font-sm text-left text-[#661d1d]"></label>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="sib-form-block !p-0">
                    <button
                      className="sib-form-block__button sib-form-block__button-with-loader !flex w-full items-center justify-center !rounded-md border border-transparent bg-primary disabled:bg-primary/80 !px-5 !py-3 !text-base !font-medium !text-white focus:!outline-none focus:!ring-2 focus:!ring-white focus:!ring-offset-2 focus:!ring-offset-primary !my-2 lg:!my-8"
                      form="sib-form"
                      type="submit"
                    >
                      <svg
                        className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                        viewBox="0 0 512 512"
                      >
                        <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                      </svg>
                      Subscribe
                    </button>
                  </div>
                </div>
                <input
                  type="text"
                  name="email_address_check"
                  defaultValue=""
                  className="input--hidden"
                />
                <input type="hidden" name="locale" defaultValue="en" />
              </form>
            </div>
            <div
              id="error-message"
              className="sib-form-message-panel text-sm text-[#661d1d] bg-[#ffeded] border border-[#ff4949]"
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg
                  viewBox="0 0 512 512"
                  className="sib-icon sib-notification__icon"
                >
                  <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Your subscription could not be saved. Please try again.
                </span>
              </div>
            </div>
            <div
              id="success-message"
              className="sib-form-message-panel text-sm text-[#085229] bg-[#e7faf0] border border-[#13ce66]"
            >
              <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                <svg
                  viewBox="0 0 512 512"
                  className="sib-icon sib-notification__icon"
                >
                  <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                </svg>
                <span className="sib-form-message-panel__inner-text">
                  Your subscription has been successful.
                </span>
              </div>
            </div>
          </div>
        </div>
        <Script dangerouslySetInnerHTML={{
          __html: `
            window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
            window.LOCALE = 'en';
            window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

            window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

            window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";

            window.translation = {
              common: {
                selectedList: '{quantity} list selected',
                selectedLists: '{quantity} lists selected'
              }
            };

            var AUTOHIDE = Boolean(0);
          `
        }} />
        <Script src="https://sibforms.com/forms/end-form/build/main.js" />
      </div>
    </div>
  )
}

export const socialIcons = [
  {
    title: "Twitter",
    href: "https://twitter.com/forlifeitself",
    svgPath: <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/forlifeitself/",
    svgPath: <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  },
  {
    title: "Whatsapp",
    href: "https://chat.whatsapp.com/JNJCTZugNQn1fq89xbHtfA",
    svgPath: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/@bylifeitself",
    svgPath: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  },
  {
    title: "Github",
    href: "https://github.com/life-itself",
    svgPath: <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  },
]
