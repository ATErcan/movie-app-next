import Details from "@/app/components/Movies/Details";
import DetailsSkeleton from "@/app/components/UI/DetailsSkeleton";
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { headers, cookies } from 'next/headers'
import { redirect } from "next/navigation";
import { Suspense } from "react";

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
    return (
      <Suspense fallback={<DetailsSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <Details id={params.id} />
      </Suspense>
    ) 
  }
}

export default MovieDetails;