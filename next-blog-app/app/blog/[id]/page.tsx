import { Metadata } from "next"

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60, // amen 60 vayrkyan@ mek mi hat harcum ara tes nor post ka, te che
      },
    }
  )
  return response.json()
}

type Props = {
  params: {
    //es id-n en mer stexcac folderi anunn a.
    /*Or. http://localhost:3000/blog/postPage 
        es depqum blogi meji [id] folderi anun@ avtomat drvum a postPage
        ekranin erevum a  Post page postPage
        */
    id: string
  }
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id)
  return {
    title: post.title,
  }
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id)
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}
