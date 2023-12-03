// import {createClient} from "@/lib/supabase/server";
import { TextInput } from "@mantine/core"
import {cookies} from "next/headers"
// import {z} from "zod";

// const Credentials = z.object({
//     email: z.string().email(),
//     password: z.string().min(6).max(20),
//     passwordConfirmation: z.string()
// })
//     .refine((data) => data.password === data.passwordConfirmation, {
//         message: "Password not match",
//         path: ["passwordConfirmation"]
//     })


export default function Page() {

    const signup = async (formData: FormData) => {
        'use server'
        const cookiesStore = cookies()
        // const supabase = createClient(cookiesStore)
        // const credentials = Credentials.safeParse(formData);

        // const register = await supabase.auth.signUp(credentials)
    }
    // const cookiesStore = cookies()
    // const supabaseClient = createClient(cookiesStore)

    return <section>
        <form action={signup} className="max-w-sm mx-auto">
            <div className="mb-5">
                <TextInput name="email" type="email" label="Email" required={true}/>
            </div>
            <div className="mb-5">
                {/*<PasswordInput name="password" type="password" label="Password"  required={true}/>*/}
            </div>
            <div className="mb-5">
                {/*<PasswordInput name="passwordConfirmation" type="password" */}
                {/*        required={true}/>*/}
            </div>
            {/*<div><Button type="submit">Zapisz</Button></div>*/}
        </form>
    </section>
}