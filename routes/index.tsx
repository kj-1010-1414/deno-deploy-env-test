import { createClient } from "npm:@libsql/client"

export default async function Home() {
  const db = createClient({
    url: Deno.env.get("turso_db_url_dev") as string,
    authToken: Deno.env.get("turso_db_auth_dev")
  })

  const db_data = await db.execute(`select nama_pengguna from customer_login where email = 'ki.atok23@gmail.com'`)

  const nama_pengguna = db_data.rows.length != 0 ? db_data.rows[0].nama_pengguna : undefined

  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome {nama_pengguna}</h1>
      </div>
    </div>
  );
}
