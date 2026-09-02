import { useEffect, useState } from 'react'
import { supabase } from './supabaseClient'

export function useAuth(){
 const [user,setUser]=useState(null)

 useEffect(()=>{
  supabase.auth.getSession().then(({data})=>setUser(data.session?.user ?? null))
  const {data}=supabase.auth.onAuthStateChange((_event,session)=>{
   setUser(session?.user ?? null)
  })
  return ()=>data.subscription.unsubscribe()
 },[])

 return {user}
}
