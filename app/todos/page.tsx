// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export default async function ServerComponent() {
  // Create a Supabase client configured to use cookies
  const supabase = createServerComponentClient({ cookies });

  const { data: todos } = await supabase.from('todos').select();

  return <div className="text-red-50">{JSON.stringify(todos, null, 2)}</div>;
}
