import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const  data   = [{
    "id": 1,
    "href": "https://pixai.art/artwork/1660743049759171407",
  "imageSrc":"https://images-ng.pixai.art/images/thumb/68c4eb35-1a9b-4dc1-984b-d805c81bf283",
"name":"",
"username":""},
  {
    "id": 1,
    "href": "https://pixai.art/artwork/1660535495052273288",
  "imageSrc":"https://images-ng.pixai.art/images/thumb/1c0aea92-84e9-4ad0-a08c-aa7f557184fd",
"name":"",
"username":""},
  {
    "id": 1,
    "href": "https://pixai.art/artwork/1662487252975080731",
  "imageSrc":"https://images-ng.pixai.art/images/thumb/50e310df-afe9-4539-a847-9b802555ff04",
"name":"",
"username":""},
  {
    "id": 1,
    "href": "https://pixai.art/artwork/1660588242782861024",
  "imageSrc":"https://images-ng.pixai.art/images/thumb/aad9b97c-d6af-4333-ac77-e83430d53522",
"name":"",
"username":""},
  {
    "id": 1,
    "href": "https://images-ng.pixai.art/images/thumb/a6792590-ab43-4a11-5114-01f7bdabad00",
  "imageSrc":"https://images-ng.pixai.art/images/thumb/a6792590-ab43-4a11-5114-01f7bdabad00",
"name":"",
"username":""},
  {
    "id": 1,
    "href": "https://pixai.art/artwork/1662248734101640693",
  "imageSrc":"https://images-ng.pixai.art/images/thumb/20fead7e-cdd6-41aa-bed9-630e525947a3",
"name":"",
"username":""},
  {
    "id": 1,
    "href": "https://pixai.art/artwork/1661304959029186316",
  "imageSrc":"https://images-ng.pixai.art/images/thumb/9c95b3be-c667-4d8f-b7fd-08d6cbcf465b",
"name":"",
"username":""},
  {
    "id": 1,
    "href": "https://pixai.art/artwork/1661946280972893466",
  "imageSrc":"https://images-ng.pixai.art/images/thumb/633102a9-95ee-4206-a1f9-3833ef86151f",
"name":"",
"username":""}
]
  return {
    props: {
      images: data,
    },
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <BlurImage key={image.id} image={image} />
        ))}
      </div>
    </div>
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  )
}
