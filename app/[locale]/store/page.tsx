import Image from 'next/image'
import React from 'react'

const products = [
  {
    name: 'BlendMaster Elite Fusionator',
    originalPrice: '$299.00',
    salePrice: '$199.00',
    imageUrl: '/placeholder.svg',

    link: '/us/products/blend-master-elite-fusionator',
  },
  {
    name: 'BlendMaster Elite Fusionator',
    originalPrice: '$299.00',
    salePrice: '$199.00',
    imageUrl: '/placeholder.svg',

    link: '/us/products/blend-master-elite-fusionator',
  },
  {
    name: 'Corporate Commando Throne',
    originalPrice: '$600.00',
    salePrice: '$550.00',
    imageUrl: '/placeholder.svg',
    link: '/us/products/corporate-commando-throne',
  },
  {
    name: 'Decibel Dominator Deluxe',
    originalPrice: '$249.00',
    salePrice: '$199.00',
    imageUrl: '/placeholder.svg',
    link: '/us/products/decibel-dominator-deluxe',
  },
]

function ProductCard({ product }) {
  return (
    <li>
      <a className="group" href={product.link}>
        <div>
          <div className="bg-ui-bg-subtle shadow-elevation-card-rest rounded-large group-hover:shadow-elevation-card-hover relative aspect-[11/14] w-full overflow-hidden rounded-lg p-4 transition-shadow duration-150 ease-in-out">
            <img
              alt="Thumbnail"
              draggable="false"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 object-cover object-center aspect-[16-9]  w-full"
              src={product.imageUrl}
            />
          </div>
          <div className="txt-compact-medium mt-4 flex justify-between">
            <p className="txt-medium text-ui-fg-subtle font-sans font-normal">{product.name}</p>
            <div className="flex items-center gap-x-2">
              <p className="txt-medium text-ui-fg-muted font-sans font-normal line-through">
                {product.originalPrice}
              </p>
              <p className="txt-medium text-ui-fg-interactive font-sans font-normal">
                {product.salePrice}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

function Page() {
  return (
    <div className="container mx-auto py-12 max-sm:py-24">
      <div className="mb-8 flex justify-between">
        <p className="txt-medium txt-xlarge font-sans font-normal">Sale</p>
        <a className="group flex items-center gap-x-1" href="/us/collections/sale">
          <p className="txt-medium text-ui-fg-interactive font-sans font-normal">View all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            className="duration-150 ease-in-out group-hover:rotate-45"
          >
            <path
              stroke="var(--fg-interactive)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m5.75 14.25 8.5-8.5m0 0h-7.5m7.5 0v7.5"
            />
          </svg>
        </a>
      </div>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-24 lg:grid-cols-4 lg:gap-y-36">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ul>
    </div>
  )
}

export default Page
