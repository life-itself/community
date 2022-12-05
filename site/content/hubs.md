---
title: "Hubs"
created: 2020-06-23
authors: 
  - rufuspollock
image: assets/images/hubs.jpg
---

<div className="relative mt-16">
  <div className="relative -mb-6 w-full overflow-x-auto pb-6">
    <ul
      role="list"
      className="my-0 p-0 mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-x-0"
    >
      {[
        {
          name: "Thénac Farmhouse",
          tagLine: "Surrounded by nature",
          href: "/hubs/farmhouse",
          image: "assets/images/bergerac-photo_square.jpg"
        },
        {
          name: "Berlin Praxis Hub",
          tagLine: "Intentional coliving, in Kreuzberg",
          href: "/hubs/berlin",
          image: "assets/images/img-20200417-wa0003_square.jpg"
        },
        {
          name: "Bergerac Praxis Hub",
          tagLine: "Conscious coliving residency",
          href: "/hubs/bergerac",
          image: "assets/images/dsc01698_square.jpg"
        },
      ].map((hub,index) => (
        <li key={index} className="m-0 p-0 inline-flex w-64 flex-col text-center lg:w-auto">
          <div className="group relative">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200">
              <img
                src={hub.image}
                alt={hub.name}
                className="m-0 h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className="mt-6">
              <h3 className="!static mt-1 font-semibold text-gray-900">
                <a href={hub.href} className="!opacity-100 !bg-transparent !static">
                  <span className="absolute inset-0" />
                  {hub.name}
                </a>
              </h3>
              <p className="mt-1 text-gray-900 leading-snug">{hub.tagLine}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
</div>

## More than just living

The Life Itself Hubs are where we put our beliefs and theories into practice. They're intentional communities dedicated to becoming wiser, living better, and taking pragmatic steps to solve the most pressing problems of the 21st Century. 

## Community is real

Our society may have forgotten the importance of community, but we haven’t. Sharing practices, food, learning and laughter means that the very act of living is itself transformed into a shared enterprise. Our Hubs embody what community truly means, and show the world just how valuable it can be. 

## Want to give it a try?

If this way of living sounds like something you'd be interested in, then click the buttons above to read more about each of our Hubs. **We are about to launch our first Praxis Lab in the Bergerac Hub, so head on over to the page to find out more!**

For further enquiries please [contact us](/contact/) and we will get back to you as soon as possible. You can also read more about the [terms and conditions of residency](https://tao.lifeitself.org/hubs/agreement/) in our hubs.
