import Script from "next/script"

export function Hero() {
  return (
    <section className="lg:relative">
      <div className="font-archivo mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:pt-48 lg:text-left">
        <div className="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-2xl font-headings font-bold tracking-tight text-primary xl:text-4xl flex flex-col">
            Ever asked yourself ... How can I live a happier life? Create a better society?
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-base md:mt-5 md:max-w-3xl">
            We’re an open community dedicated to the art of wiser living and social transformation. We favor approaches that prioritize inner development and cultural change in a rigorous, practical way.
            <br /><br />
            Sign up to our monthly newsletter for latest updates, projects and community news.
          </p>
          <div className="mt-10 sm:mt-12">

            <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css" />
            <div className="!p-0 sib-form">
              <div
                id="sib-form-container"
                className="sm:mx-auto sm:max-w-xl lg:mx-0"
              >
                <div id="sib-container" className="!p-0 !mb-3">
                  <form
                    id="sib-form"
                    method="POST"
                    action="https://1ebb0834.sibforms.com/serve/MUIEAHv8u1djsSIFAN7v4df8mi9xwfEWx_Lb1IsVhMTHmyWKns1oCWFTrJDN_8hj5kudlUMKTIbltfsV_UlYPq9FlNqAc0jVlyZCzmfHwI7ZrgYp2zVD4WcsCS1C76szNm16870ol677kE0fuRYr4L-v6bdsC7JvdpPMVRjMyfxYy93APXfDhXwqrXCVg_CTiCG6zQZTgK2om-L6"
                    data-type="subscription"
                  >
                    <div className="sm:flex items-center">
                      <div className="min-w-0 flex-1">
                        <div className="sib-input sib-form-block !p-0">
                          <div className="form__entry entry_block">
                            <div className="form__label-row ">
                              <div className="entry__field !rounded-md">
                                <input
                                  className="input w-full !rounded-md !border-white !px-5 !py-1 !placeholder-gray-500 !focus:outline-none !focus:ring-2 focus:!ring-white focus:!ring-offset-2 focus:!ring-offset-secondary"
                                  type="text"
                                  id="EMAIL"
                                  name="EMAIL"
                                  placeholder="Enter your email"
                                  data-required="true"
                                  required=""
                                />
                              </div>
                            </div>
                            <label className="!hidden entry__error entry__error--primary font-sm text-left text-[#661d1d]"></label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mt-3 sm:ml-3 sm:mt-0">
                          <button
                            className="block flex justify-center w-full rounded-md bg-secondary px-4 py-3 font-medium text-primary shadow focus:outline-none focus:ring-2 focus:ring-primary"
                            form="sib-form"
                            type="submit"
                          >
                            <svg
                              className="hidden icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                              viewBox="0 0 512 512"
                            >
                              <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                            </svg>
                            Sign up
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
                    </div>
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
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img className="absolute inset-0 mx-auto h-full object-fit" src="/assets/lifeitself-landingpage.webp" alt="" />
      </div>
    </section >
  )
}
