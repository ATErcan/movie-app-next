import Details from "@/app/components/Movies/Details";
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { redirect } from "next/navigation";

// do not cache this page
export const revalidate = 0

async function ServerComponent() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  })
  
  const { data: { user } } = await supabase.auth.getUser();

  return user;
}

const MovieDetails = async ({ params }: { params: { id: string } }) => {
  const data = await ServerComponent();

  if(!data){
    redirect("/login");
  } else {
    {/* @ts-expect-error Server Component */}
    return <Details id={params.id} />
  }
}

export default MovieDetails;